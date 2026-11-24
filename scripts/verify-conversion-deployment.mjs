import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";

// Read-only public GETs. Does not execute Analytics, submit forms or send email.
const origin = "https://wyedesign.co.uk";
const assets = new Set();
const pages = [];
for (const path of ["/", "/contact"]) {
  const response = await fetch(origin + path, { signal: AbortSignal.timeout(20000) });
  assert.equal(response.status, 200, path);
  const html = await response.text();
  const nav = html.match(/<nav\b[^>]*>[\s\S]*?<\/nav>/)?.[0];
  assert.ok(nav, `${path}: navbar present`);
  assert.equal((nav.match(/href="\/contact#proposal"/g) || []).length, 2, `${path}: desktop/compact header CTA anchors`);
  assert.ok(!nav.includes('href="/contact"'), `${path}: no header hero-only CTA`);
  if (path === "/contact") assert.ok(html.includes('id="proposal"'), "form anchor present");
  for (const match of html.matchAll(/<script\b[^>]*\bsrc="([^\"]+)"/g)) {
    const url = new URL(match[1], origin);
    if (url.origin === origin && url.pathname.startsWith("/_next/static/") && url.pathname.endsWith(".js")) {
      assets.add(url.pathname);
    }
  }
  pages.push({ path, status: response.status, headerAnchorCount: 2, cache: response.headers.get("cache-control") });
}

assert.ok(assets.size > 0, "rendered application assets found");
const hashes = [];
for (const path of assets) {
  const response = await fetch(origin + path, { signal: AbortSignal.timeout(20000) });
  assert.equal(response.status, 200, path);
  const live = Buffer.from(await response.arrayBuffer());
  const local = await readFile(new URL(`../.open-next/assets${path}`, import.meta.url));
  const hash = (bytes) => createHash("sha256").update(bytes).digest("hex");
  assert.equal(hash(live), hash(local), `${path}: exact deployed build match`);
  hashes.push({ path, sha256: hash(live), bytes: live.length });
}
console.log(JSON.stringify({ checkedAt: new Date().toISOString(), pages, exactBuildAssets: hashes, check: "Public GET only; no Analytics events, forms or delivery tests" }, null, 2));
