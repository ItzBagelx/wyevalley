import assert from "node:assert/strict";
import test from "node:test";
import { analyseTables } from "./analyse-search-console.mjs";

const current = "01/09/2026 - 28/09/2026";
const previous = "04/08/2026 - 31/08/2026";
const header = (name, now = current, before = previous) => [name, `${now} Clicks`, `${before} Clicks`, `${now} Impressions`, `${before} Impressions`, `${now} CTR`, `${before} CTR`, `${now} Position`, `${before} Position`];
const row = (label, a = 1, b = 2, c = 100, d = 200) => [label, a, b, c, d, c ? a / c : 0, d ? b / d : 0, c ? 50 : 0, d ? 60 : 0];
const options = { latestCompleteDate: "2026-09-28" };
function fixture() {
  return {
    Devices: [header("Device"), row("Desktop")],
    Countries: [header("Country"), row("United Kingdom")],
    Pages: [header("Top pages"), row("https://wyedesign.co.uk/"), row("https://showcase1.wyedesign.co.uk/", 0, 0, 10, 20)],
    Queries: [header("Top queries"), row("web design hereford", 0, 0, 0, 10)],
    Filters: [["Filter", "Value"], ["Search type", "Web"], ["Date", "1 Sept 2026-28 Sept 2026"]],
  };
}

test("keeps property and page aggregation separate without mutating inputs", () => {
  const data = fixture();
  const original = structuredClone(data);
  const out = analyseTables(data, options);
  assert.equal(out.propertyTotals.impressions.current, 100);
  assert.equal(out.mainSitePageTableSubtotal.impressions.current, 100);
  assert.equal(out.demoPageTableSubtotal.impressions.current, 10);
  assert.equal(out.qualifiedGrowth.startsWith("unverified"), true);
  assert.equal(out.experiment.currentPeriodFullyAfterDeployment, false);
  assert.deepEqual(data, original);
});

test("preserves zero-impression position and missing queries as unavailable", () => {
  const out = analyseTables(fixture(), options);
  assert.equal(out.trackedQueries[0].position.current, null);
  assert.equal(out.trackedQueries[1].available, false);
  assert.equal(out.priorityPages[0].available, false);
});

test("non-finite position remains unavailable rather than becoming a ranking claim", () => {
  const data = fixture();
  data.Queries[1] = row("web design hereford");
  data.Queries[1][7] = Infinity;
  data.Queries[1][8] = NaN;
  const out = analyseTables(data, options);
  assert.equal(out.trackedQueries[0].position.current, null);
  assert.equal(out.trackedQueries[0].position.previous, null);
});

test("flags filtered incomplete subtotals and never calls them property totals", () => {
  const data = fixture();
  data.Pages.pop();
  data.Pages[1][3] = 120;
  data.Filters.push(["Page", "+https://wyedesign.co.uk/"]);
  const out = analyseTables(data, options);
  assert.equal(out.propertyTotals, null);
  assert.equal(out.mainSitePageTableSubtotal.impressions.current, 120);
  assert.ok(out.flags.some((flag) => flag.startsWith("Filtered Pages")));
});

test("does not publish exact property totals when countries and devices disagree", () => {
  const data = fixture();
  data.Countries[1][3] = 99;
  const out = analyseTables(data, options);
  assert.equal(out.propertyTotals, null);
  assert.equal(out.dimensionalSubtotals.reconciled, false);
});

for (const missing of [null, undefined, "", " ", "-", "~", -1, 1.5, NaN, Infinity]) {
  test(`rejects missing or invalid counts rather than turning ${String(missing)} into zero`, () => {
    const data = fixture();
    data.Devices[1][1] = missing;
    assert.throws(() => analyseTables(data, options), /Missing or invalid count/);
  });
}

test("zero previous counts have unavailable percent change, not infinity", () => {
  const data = fixture();
  data.Devices[1] = row("Desktop", 1, 0, 100, 0);
  data.Countries[1] = row("United Kingdom", 1, 0, 100, 0);
  const out = analyseTables(data, options);
  assert.equal(out.propertyTotals.impressions.percentChange, null);
  assert.equal(out.propertyTotals.ctr.previous, null);
});

test("rejects a date range not verified complete", () => {
  assert.throws(() => analyseTables(fixture(), { latestCompleteDate: "2026-09-27" }), /not verified complete/);
});

test("rejects invalid calendar dates, overlapping dates and mismatched period lengths", () => {
  for (const [now, before] of [["31/09/2026 - 28/10/2026", previous], [current, "05/08/2026 - 01/09/2026"], [current, "05/08/2026 - 31/08/2026"]]) {
    const data = fixture();
    data.Devices[0] = header("Device", now, before);
    assert.throws(() => analyseTables(data, { latestCompleteDate: "2026-10-31" }));
  }
});

test("accepts a matching complete seven-day comparison", () => {
  const data = fixture();
  for (const name of ["Devices", "Countries", "Pages", "Queries"]) data[name][0] = header(name, "22/09/2026 - 28/09/2026", "15/09/2026 - 21/09/2026");
  data.Filters[2][1] = "22 Sept 2026-28 Sept 2026";
  const out = analyseTables(data, options);
  assert.equal(out.periods.current.days, 7);
});

test("rejects inconsistent metric dates within and across tables", () => {
  const data = fixture();
  data.Pages[0][3] = "02/09/2026 - 29/09/2026 Impressions";
  assert.throws(() => analyseTables(data, options), /inconsistent dates/);
});

test("rejects unexpected filters, property hosts and duplicate rows", () => {
  for (const mutate of [
    (data) => data.Filters.push(["Query", "+hereford"]),
    (data) => data.Filters.push(["Page", "+showcase"]),
    (data) => { data.Pages[1][0] = "https://other.example/"; },
    (data) => data.Devices.push([...data.Devices[1]]),
    (data) => { data.Filters[1][1] = "Image"; },
  ]) {
    const data = fixture();
    mutate(data);
    assert.throws(() => analyseTables(data, options));
  }
});

test("rejects a demo URL leaking into a main-site filtered report", () => {
  const data = fixture();
  data.Filters.push(["Page", "+https://wyedesign.co.uk/"]);
  assert.throws(() => analyseTables(data, options), /outside the main site/);
});

test("missing rows remain unavailable rather than being summarized as zero traffic", () => {
  const data = fixture();
  for (const name of ["Devices", "Countries", "Pages", "Queries"]) data[name] = [data[name][0]];
  const out = analyseTables(data, options);
  assert.equal(out.propertyTotals, null);
  assert.equal(out.dimensionalSubtotals.devices.available, false);
  assert.equal(out.mainSitePageTableSubtotal.available, false);
  assert.equal(out.demoPageTableSubtotal.available, false);
  assert.equal(out.mainSitePageTableSubtotal.clicks, undefined);
});

test("a measured zero row remains distinct from an absent row", () => {
  const data = fixture();
  data.Pages = [data.Pages[0], row("https://wyedesign.co.uk/", 0, 0, 0, 0)];
  const out = analyseTables(data, options);
  assert.equal(out.mainSitePageTableSubtotal.available, true);
  assert.equal(out.mainSitePageTableSubtotal.impressions.current, 0);
  assert.equal(out.demoPageTableSubtotal.available, false);
});

test("rejects a filters-sheet date that does not match the metric headers", () => {
  const data = fixture();
  data.Filters[2][1] = "2 Sept 2026-29 Sept 2026";
  assert.throws(() => analyseTables(data, options), /disagrees with metric headers/);
});

test("rejects an equal-length comparison that is not the preceding period", () => {
  const data = fixture();
  data.Devices[0] = header("Device", current, "01/08/2026 - 28/08/2026");
  assert.throws(() => analyseTables(data, options), /immediately preceding/);
});
