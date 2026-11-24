import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";
import ts from "typescript";

const projectUrl = new URL("../", import.meta.url);

function sourceUrl(relativePath) {
  return new URL(relativePath, projectUrl);
}

function loadTypeScript(relativePath, { globals = {}, imports = {}, env = {} } = {}) {
  const sourcePath = sourceUrl(relativePath);
  const source = readFileSync(sourcePath, "utf8");
  const code = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      jsx: ts.JsxEmit.ReactJSX,
    },
    fileName: sourcePath.pathname,
  }).outputText;
  const exports = {};
  const context = {
    console,
    exports,
    process: { env: { NODE_ENV: "production", ...env } },
    require: (name) => {
      if (Object.hasOwn(imports, name)) return imports[name];
      throw new Error(`Unexpected test import: ${name}`);
    },
    URL,
    ...globals,
  };

  vm.runInNewContext(code, context, { filename: sourcePath.pathname });
  return exports;
}

function createBrowser({ consent = null, hostname = "wyedesign.co.uk", pathname = "/pricing", hash = "" } = {}) {
  let storedConsent = consent;
  const listeners = new Map();

  class Element {
    constructor() {
      this.closestResult = null;
    }

    closest(selector) {
      return selector === "a" ? this.closestResult : null;
    }
  }

  class HTMLAnchorElement extends Element {
    constructor(href) {
      super();
      this.href = href;
      this.closestResult = this;
    }
  }

  class IconElement extends Element {}

  const origin = `https://${hostname}`;
  const window = {
    location: {
      hostname,
      origin,
      pathname,
      hash,
      href: `${origin}${pathname}${hash}`,
    },
    localStorage: {
      getItem() {
        return storedConsent;
      },
      setItem(_key, value) {
        storedConsent = value;
      },
    },
  };
  const document = {
    addEventListener(type, listener) {
      listeners.set(type, listener);
    },
    removeEventListener(type, listener) {
      if (listeners.get(type) === listener) listeners.delete(type);
    },
  };

  return {
    window,
    document,
    Element,
    HTMLAnchorElement,
    IconElement,
    setConsent(value) {
      storedConsent = value;
    },
    dispatch(type, event) {
      listeners.get(type)?.(event);
    },
  };
}

function dataLayerEntries(window) {
  return Array.from(window.dataLayer || [], (entry) =>
    JSON.parse(JSON.stringify(Array.from(entry))),
  );
}

function findNodes(value, predicate, nodes = []) {
  if (!value || typeof value !== "object") return nodes;
  if (predicate(value)) nodes.push(value);
  for (const child of Object.values(value)) {
    if (Array.isArray(child)) {
      for (const item of child) findNodes(item, predicate, nodes);
    } else {
      findNodes(child, predicate, nodes);
    }
  }
  return nodes;
}

function renderAnalytics({ consent = null, hostname = "wyedesign.co.uk", pathname = "/pricing" } = {}) {
  const browser = createBrowser({ consent, hostname, pathname });
  const Script = function Script() {};
  const Fragment = Symbol("Fragment");
  const react = {
    useState() {
      return [consent, () => {}];
    },
    useEffect(effect) {
      effect();
    },
  };
  const jsxRuntime = {
    Fragment,
    jsx(type, props) {
      return { type, props };
    },
    jsxs(type, props) {
      return { type, props };
    },
  };
  const analytics = loadTypeScript("src/lib/analytics.ts", {
    globals: {
      window: browser.window,
      document: browser.document,
    },
  });
  const analyticsComponent = loadTypeScript("src/components/Analytics.tsx", {
    globals: {
      window: browser.window,
      document: browser.document,
      Element: browser.Element,
      HTMLAnchorElement: browser.HTMLAnchorElement,
    },
    imports: {
      react,
      "react/jsx-runtime": jsxRuntime,
      "next/script": { default: Script },
      "../lib/analytics": analytics,
    },
  });

  const rendered = analyticsComponent.default();
  return {
    ...browser,
    analytics,
    rendered,
    scriptNodes: findNodes(rendered, (node) => node.type === Script),
  };
}

test("Analytics renders the GA script only for accepted consent on the canonical host", () => {
  const canonical = renderAnalytics({ consent: "accepted" });
  assert.equal(canonical.scriptNodes.length, 1);
  assert.equal(
    canonical.scriptNodes[0].props.src,
    "https://www.googletagmanager.com/gtag/js?id=G-K2DXS9S4GV",
  );
  assert.deepEqual(dataLayerEntries(canonical.window).map((entry) => entry[0]), ["js", "config"]);

  const undecided = renderAnalytics({ consent: null });
  assert.equal(undecided.scriptNodes.length, 0);
  assert.equal(undecided.window.dataLayer, undefined);

  const preview = renderAnalytics({ consent: "accepted", hostname: "wyevalley.workers.dev" });
  assert.equal(preview.scriptNodes.length, 0);
  assert.equal(preview.window.dataLayer, undefined);
});

test("Analytics delegates nested icon clicks to CTA and email events only after consent", () => {
  const fixture = renderAnalytics({ consent: "accepted", pathname: "/pricing" });
  const cta = new fixture.HTMLAnchorElement("https://wyedesign.co.uk/contact#proposal");
  const ctaIcon = new fixture.IconElement();
  ctaIcon.closestResult = cta;

  fixture.dispatch("click", { target: ctaIcon });

  let entries = dataLayerEntries(fixture.window);
  assert.deepEqual(entries.at(-1), [
    "event",
    "contact_cta_click",
    { location: "/pricing", destination: "/contact#proposal" },
  ]);

  const email = new fixture.HTMLAnchorElement("mailto:hello@wyedesign.co.uk");
  fixture.dispatch("click", { target: email });

  entries = dataLayerEntries(fixture.window);
  assert.deepEqual(entries.at(-1), ["event", "contact_email_click", { location: "/pricing" }]);
});

test("Analytics does not capture or replay a click made before consent", () => {
  const fixture = renderAnalytics({ consent: null, pathname: "/pricing" });
  const cta = new fixture.HTMLAnchorElement("https://wyedesign.co.uk/contact#proposal");

  fixture.dispatch("click", { target: cta });
  assert.equal(fixture.window.dataLayer, undefined);

  fixture.setConsent("accepted");
  fixture.dispatch("click", { target: cta });

  const eventEntries = dataLayerEntries(fixture.window).filter((entry) => entry[0] === "event");
  assert.deepEqual(eventEntries, [[
    "event",
    "contact_cta_click",
    { location: "/pricing", destination: "/contact#proposal" },
  ]]);
});

const syntheticSubmission = {
  name: "Synthetic Person",
  business: "Synthetic Business",
  email: "synthetic@example.test",
  phone: "",
  industry: "Other small business",
  goal: "Generate more enquiries",
  currentWebsite: "",
  notes: "Synthetic test payload only",
  website: "",
};

function loadSubmitRoute(fetchImpl) {
  const cloudflare = {
    getCloudflareContext: async () => {
      throw new Error("Cloudflare context must not be used when RESEND_API_KEY is configured");
    },
  };
  const nextServer = {
    NextResponse: {
      json(body, init = {}) {
        return {
          status: init.status ?? 200,
          async json() {
            return body;
          },
        };
      },
    },
  };

  return loadTypeScript("src/app/api/submit/route.ts", {
    globals: {
      fetch: fetchImpl,
      console: { error() {} },
    },
    env: { RESEND_API_KEY: "synthetic-resend-key" },
    imports: {
      "@opennextjs/cloudflare": cloudflare,
      "next/server": nextServer,
    },
  }).POST;
}

function requestFor(payload) {
  return { json: async () => payload };
}

test("submit route returns honeypot success without calling the provider", async () => {
  let providerCalls = 0;
  const POST = loadSubmitRoute(async () => {
    providerCalls += 1;
    throw new Error("provider must not be contacted for honeypot input");
  });

  const response = await POST(requestFor({ ...syntheticSubmission, website: "filled-by-bot" }));
  assert.equal(response.status, 200);
  assert.deepEqual(JSON.parse(JSON.stringify(await response.json())), { success: true });
  assert.equal(providerCalls, 0);
});

test("submit route returns provider acceptance ID on a successful provider response", async () => {
  const calls = [];
  const POST = loadSubmitRoute(async (...args) => {
    calls.push(args);
    return { ok: true, json: async () => ({ id: "synthetic-provider-id" }) };
  });

  const response = await POST(requestFor(syntheticSubmission));
  assert.equal(response.status, 200);
  assert.deepEqual(JSON.parse(JSON.stringify(await response.json())), {
    success: true,
    id: "synthetic-provider-id",
  });
  assert.equal(calls.length, 1);
  assert.equal(calls[0][0], "https://api.resend.com/emails");
  assert.equal(calls[0][1].headers.Authorization, "Bearer synthetic-resend-key");
  const providerBody = JSON.parse(calls[0][1].body);
  assert.equal(providerBody.from, "Wye Design <hello@wyedesign.co.uk>");
  assert.equal(providerBody.to, "hello@wyedesign.co.uk");
  assert.equal(providerBody.subject, "New website lead: Synthetic Person (Synthetic Business)");
  assert.match(providerBody.html, /Synthetic Person/);
  assert.match(providerBody.html, /Synthetic Business/);
  assert.equal(providerBody.reply_to, "synthetic@example.test");
});

test("submit route converts a provider failure into a safe 500 response", async () => {
  let providerCalls = 0;
  const POST = loadSubmitRoute(async () => {
    providerCalls += 1;
    return { ok: false, json: async () => ({ error: "synthetic provider failure" }) };
  });

  const response = await POST(requestFor(syntheticSubmission));
  assert.equal(response.status, 500);
  assert.deepEqual(JSON.parse(JSON.stringify(await response.json())), {
    error: "We could not send your request just now. Please email us instead.",
  });
  assert.equal(providerCalls, 1);
});
