import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import test from "node:test";
import vm from "node:vm";
import ts from "typescript";

const require = createRequire(import.meta.url);

// Test the actual TypeScript with isolated browser/provider mocks. No network,
// production Analytics collection, form delivery or inbox traffic is permitted.
function loadModule(path, globals = {}, imports = {}) {
  const source = readFileSync(new URL(path, import.meta.url), "utf8");
  const code = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
  }).outputText;
  const exports = {};
  vm.runInNewContext(code, {
    exports,
    process: { env: { NODE_ENV: "production" } },
    require: (name) => {
      if (Object.hasOwn(imports, name)) return imports[name];
      if (name === "react/jsx-runtime") return require(name);
      throw new Error(`Unexpected test import: ${name}`);
    },
    ...globals,
  });
  return exports;
}

function analyticsFixture({ consent = "accepted", hostname = "wyedesign.co.uk", environment = "production", storageThrows = false } = {}) {
  const window = {
    location: { hostname },
    localStorage: { getItem: () => {
      if (storageThrows) throw new Error("Storage unavailable");
      return consent;
    } },
  };
  const analytics = loadModule("../src/lib/analytics.ts", {
    window,
    process: { env: { NODE_ENV: environment } },
  });
  return { window, analytics, setConsent: (value) => { consent = value; } };
}

const layerCommands = (window) => Array.from(window.dataLayer || [], (entry) => Array.from(entry));

test("accepted event queues config before the external script is ready", () => {
  const { window, analytics } = analyticsFixture();
  assert.equal(analytics.trackEvent("contact_cta_click", { destination: "/contact#proposal" }), true);
  assert.deepEqual(layerCommands(window).map((entry) => entry[0]), ["js", "config", "event"]);
  assert.equal(layerCommands(window)[1][1], "G-K2DXS9S4GV");
});

test("analytics config initializes once across subsequent events", () => {
  const { window, analytics } = analyticsFixture();
  analytics.initializeAnalytics();
  analytics.trackEvent("proposal_form_start");
  analytics.trackEvent("contact_email_click");
  assert.deepEqual(layerCommands(window).map((entry) => entry[0]), ["js", "config", "event", "event"]);
});

for (const consent of [null, "rejected"]) {
  test(`no collection or queue when consent is ${consent}`, () => {
    const { window, analytics } = analyticsFixture({ consent });
    assert.equal(analytics.trackEvent("generate_lead"), false);
    assert.equal(window.dataLayer, undefined);
    assert.equal(window.gtag, undefined);
  });
}

test("accepting later does not replay pre-consent interactions", () => {
  const { window, analytics, setConsent } = analyticsFixture({ consent: null });
  assert.equal(analytics.trackEvent("contact_cta_click"), false);
  setConsent("accepted");
  assert.equal(analytics.trackEvent("proposal_form_start"), true);
  assert.deepEqual(layerCommands(window).filter((entry) => entry[0] === "event").map((entry) => entry[1]), ["proposal_form_start"]);
});

test("blocked storage fails closed", () => {
  const { window, analytics } = analyticsFixture({ storageThrows: true });
  assert.equal(analytics.trackEvent("generate_lead"), false);
  assert.equal(window.dataLayer, undefined);
});

for (const hostname of ["localhost", "127.0.0.1", "wyevalley.workers.dev"]) {
  test(`production build on ${hostname} cannot send production analytics`, () => {
    const { window, analytics } = analyticsFixture({ hostname });
    assert.equal(analytics.trackEvent("generate_lead"), false);
    assert.equal(window.dataLayer, undefined);
  });
}

test("development cannot use the production fallback, even with a live hostname", () => {
  const { window, analytics } = analyticsFixture({ environment: "development" });
  assert.equal(analytics.trackEvent("proposal_form_start"), false);
  assert.equal(window.dataLayer, undefined);
});

test("server rendering is safe without window", () => {
  const analytics = loadModule("../src/lib/analytics.ts");
  assert.equal(analytics.initializeAnalytics(), false);
  assert.equal(analytics.trackEvent("proposal_form_start"), false);
});

const proposal = loadModule("../src/lib/proposal-tracking.ts");
test("only provider-accepted response can qualify for a lead event", () => {
  assert.equal(proposal.isAcceptedProposal({ success: true, id: "mock-provider-id" }), true);
  for (const result of [null, {}, { success: true }, { success: false, id: "id" }, { success: true, id: " " }, { success: true, id: 123 }]) {
    assert.equal(proposal.isAcceptedProposal(result), false);
  }
});

function formFixture(result, { ok = true, trackAccepted = true } = {}) {
  const events = [];
  const states = [];
  const refs = [];
  const { default: ContactForm } = loadModule("../src/components/ContactForm.tsx", {
    fetch: async () => ({ ok, json: async () => result }),
  }, {
    react: {
      useState: (initial) => [initial, (value) => states.push(value)],
      useRef: (initial) => { const ref = { current: initial }; refs.push(ref); return ref; },
    },
    "lucide-react": { ArrowRight: () => null, CheckCircle2: () => null },
    "./Analytics": { trackEvent: (name) => { if (trackAccepted) events.push(name); return trackAccepted; } },
    "../lib/proposal-tracking": proposal,
  });
  return { form: ContactForm(), events, states, refs, setTrackingAccepted: (value) => { trackAccepted = value; } };
}

test("form start can retry after consent and then is counted only once", () => {
  const fixture = formFixture({}, { trackAccepted: false });
  fixture.form.props.onFocus();
  assert.equal(fixture.refs[0].current, false);
  fixture.setTrackingAccepted(true);
  fixture.form.props.onFocus();
  fixture.form.props.onFocus();
  assert.deepEqual(fixture.events, ["proposal_form_start"]);
});

test("honeypot success retains generic UX but emits no lead", async () => {
  const fixture = formFixture({ success: true });
  await fixture.form.props.onSubmit({ preventDefault() {} });
  assert.deepEqual(fixture.events, []);
  assert.equal(fixture.states.at(-1), "success");
});

test("mock provider acceptance emits one lead", async () => {
  const fixture = formFixture({ success: true, id: "mock-provider-id" });
  await fixture.form.props.onSubmit({ preventDefault() {} });
  assert.deepEqual(fixture.events, ["generate_lead"]);
  assert.equal(fixture.states.at(-1), "success");
});

test("failed provider response cannot emit a lead", async () => {
  const fixture = formFixture({ error: "Synthetic failure" }, { ok: false });
  await fixture.form.props.onSubmit({ preventDefault() {} });
  assert.deepEqual(fixture.events, []);
  assert.ok(fixture.states.includes("error"));
});

test("all three header proposal links use the anchor and both mobile CTAs close the menu", () => {
  const navbar = readFileSync(new URL("../src/components/Navbar.tsx", import.meta.url), "utf8");
  assert.equal((navbar.match(/href="\/contact#proposal"/g) || []).length, 3);
  assert.equal((navbar.match(/href="\/contact#proposal"\s+onClick=\{\(\) => setIsMobileMenuOpen\(false\)\}/g) || []).length, 2);
  assert.ok(!navbar.includes('href="/contact"'));
});

const { middleware } = loadModule("../src/middleware.ts", {}, {
  "next/server": { NextResponse: {
    redirect: (location, status) => ({ location, status }),
    next: () => ({ status: 200, headers: new Map() }),
  } },
});

function middlewareRequest(url, forwarded = {}) {
  const parsed = new URL(url);
  return {
    method: "GET",
    nextUrl: parsed,
    headers: new Map([["host", parsed.host], ...Object.entries(forwarded)]),
  };
}

for (const origin of ["http://wyedesign.co.uk", "http://www.wyedesign.co.uk", "https://www.wyedesign.co.uk"]) {
  test(`${origin} retains path and query in canonical 301`, () => {
    const result = middleware(middlewareRequest(`${origin}/contact?qa=synthetic`));
    assert.equal(result.status, 301);
    assert.equal(result.location, "https://wyedesign.co.uk/contact?qa=synthetic");
  });
}

test("canonical HTTPS is not redirected and retains low-cache HTML headers", () => {
  const result = middleware(middlewareRequest("https://wyedesign.co.uk/contact"));
  assert.equal(result.status, 200);
  assert.equal(result.headers.get("Cache-Control"), "public, max-age=0, no-cache, must-revalidate");
});

for (const origin of ["http://localhost:8787", "http://127.0.0.1:8787", "http://wyevalley.workers.dev"]) {
  test(`${origin} is not redirected to production`, () => {
    const result = middleware(middlewareRequest(`${origin}/contact`));
    assert.equal(result.status, 200);
    assert.equal(result.location, undefined);
  });
}

test("forwarded canonical host/protocol retains production redirect behavior", () => {
  const result = middleware(middlewareRequest("http://localhost:8787/contact?qa=synthetic", {
    "x-forwarded-host": "wyedesign.co.uk",
    "x-forwarded-proto": "http",
  }));
  assert.equal(result.status, 301);
  assert.equal(result.location, "https://wyedesign.co.uk/contact?qa=synthetic");
});
