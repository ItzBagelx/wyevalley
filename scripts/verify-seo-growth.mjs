import assert from "node:assert/strict";
import puppeteer from "puppeteer";

const base = process.env.SEO_CHECK_URL || "http://localhost:3084";
const local = new URL(base).hostname === "localhost";
const requestHeaders = local ? { "x-forwarded-proto": "https" } : {};
const paths = ["/", "/web-design-hereford", "/website-cost-guide", "/pricing"];
const browser = await puppeteer.launch({ headless: true });
const results = [];

try {
  const page = await browser.newPage();
  await page.setCacheEnabled(false);
  await page.setExtraHTTPHeaders(requestHeaders);
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));

  for (const width of [375, 1440]) {
    await page.setViewport({ width, height: 900 });
    for (const path of paths) {
      const response = await page.goto(`${base}${path}`, { waitUntil: "networkidle2" });
      assert.equal(response.status(), 200, `${path}: HTTP status`);
      assert.ok(response.headers()["cache-control"]?.includes("no-cache"), `${path}: HTML cache policy`);
      const document = await page.evaluate(() => ({
        title: window.document.title,
        h1: [...window.document.querySelectorAll("h1")].map((h) => h.textContent),
        canonical: [...window.document.querySelectorAll('link[rel="canonical"]')].map((l) => l.href),
        description: window.document.querySelector('meta[name="description"]')?.content,
        schemas: [...window.document.querySelectorAll('script[type="application/ld+json"]')].map((s) => JSON.parse(s.textContent)),
        guideLinks: [...window.document.querySelectorAll('a[href="/website-cost-guide"]')].length,
        overflow: window.document.documentElement.scrollWidth > window.innerWidth,
        text: window.document.body.innerText,
      }));
      assert.equal(document.h1.length, 1, `${path}: one H1`);
      assert.deepEqual(document.canonical, [`https://wyedesign.co.uk${path === "/" ? "/" : path}`], `${path}: canonical`);
      assert.ok(document.description, `${path}: description`);
      assert.ok(document.schemas.length >= 1, `${path}: valid structured data`);
      assert.equal(document.overflow, false, `${path}: no whole-page horizontal overflow at ${width}px`);
      if (path !== "/website-cost-guide") assert.ok(document.guideLinks > 0, `${path}: guide is linked`);
      if (path === "/website-cost-guide") {
        assert.ok(document.text.includes("£720"));
        assert.ok(document.text.includes("£855"));
        assert.ok(document.schemas.flatMap((s) => s["@graph"] || [s]).some((s) => s["@type"] === "Article"));
        if (width === 375) await page.screenshot({ path: "/tmp/wye-cost-guide-mobile.png", fullPage: true });
      }
      if (path === "/web-design-hereford" && width === 375) await page.screenshot({ path: "/tmp/wye-hereford-mobile.png", fullPage: true });
      results.push({ path, width, status: response.status(), title: document.title, cache: response.headers()["cache-control"], schemas: document.schemas.length });
    }
  }

  const sitemap = await fetch(`${base}/sitemap.xml`, { headers: requestHeaders }).then((r) => r.text());
  const entries = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((match) => ({
    url: match[1].match(/<loc>(.*?)<\/loc>/)?.[1],
    modified: match[1].match(/<lastmod>(.*?)<\/lastmod>/)?.[1],
  }));
  assert.equal(entries.length, 12, "sitemap has 12 pages");
  for (const path of paths) {
    assert.equal(entries.find((e) => e.url === `https://wyedesign.co.uk${path === "/" ? "/" : path}`)?.modified, "2026-10-01T00:00:00.000Z", `${path}: truthful update date`);
  }
  assert.equal(entries.find((e) => e.url.endsWith("/about"))?.modified, "2026-08-11T00:00:00.000Z", "unchanged page keeps its date");

  const notFound = await page.goto(`${base}/seo-qa-missing-page`, { waitUntil: "networkidle2" });
  assert.equal(notFound.status(), 404);
  const notFoundMetadata = await page.evaluate(() => ({
    canonical: window.document.querySelector('link[rel="canonical"]')?.href,
    robots: [...window.document.querySelectorAll('meta[name="robots"]')].map((m) => m.content),
  }));
  assert.equal(notFoundMetadata.canonical, undefined, "404 has no canonical");
  assert.ok(notFoundMetadata.robots.some((r) => r.includes("noindex")), "404 is noindex");
  assert.equal(errors.length, 0, "no browser runtime errors");
  console.log(JSON.stringify({ checks: results, sitemapPages: entries.length, notFound: notFound.status(), browserErrors: errors, screenshots: ["/tmp/wye-hereford-mobile.png", "/tmp/wye-cost-guide-mobile.png"] }, null, 2));
} finally {
  await browser.close();
}
