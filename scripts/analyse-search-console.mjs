import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const host = "wyedesign.co.uk";
const mainPageFilter = `+https://${host}/`;
const trackedQueries = ["web design hereford", "web design ross-on-wye", "web design ross on wye"];
const metrics = ["Clicks", "Clicks", "Impressions", "Impressions", "CTR", "CTR", "Position", "Position"];
const dayMs = 86_400_000;
const deploymentDate = "2026-10-02";

function isoDate(value) {
  assert.match(value, /^\d{4}-\d{2}-\d{2}$/, "Expected an ISO calendar date");
  const date = new Date(`${value}T00:00:00Z`);
  assert.ok(Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value, `Invalid date: ${value}`);
  return value;
}

function ukDate(value) {
  const [day, month, year] = value.split("/");
  return isoDate(`${year}-${month}-${day}`);
}

function headerPeriod(value, metric) {
  const match = String(value).trim().match(/^(\d{2}\/\d{2}\/\d{4}) - (\d{2}\/\d{2}\/\d{4}) (Clicks|Impressions|CTR|Position)$/);
  assert.ok(match && match[3] === metric, `Unsupported comparison header: ${value}`);
  const start = ukDate(match[1]);
  const end = ukDate(match[2]);
  assert.ok(start <= end, "Period end precedes start");
  return { start, end, days: (Date.parse(end) - Date.parse(start)) / dayMs + 1 };
}

function filterPeriod(value) {
  const match = value.replace(/\u00a0/g, " ").match(/^(\d{1,2}) ([A-Za-z]+) (\d{4})\s*[-–]\s*(\d{1,2}) ([A-Za-z]+) (\d{4})$/);
  assert.ok(match, "Unsupported export date filter");
  const months = { jan: 1, january: 1, feb: 2, february: 2, mar: 3, march: 3, apr: 4, april: 4, may: 5, jun: 6, june: 6, jul: 7, july: 7, aug: 8, august: 8, sep: 9, sept: 9, september: 9, oct: 10, october: 10, nov: 11, november: 11, dec: 12, december: 12 };
  const date = (day, month, year) => {
    assert.ok(months[month.toLowerCase()], "Unsupported export month");
    return isoDate(`${year}-${String(months[month.toLowerCase()]).padStart(2, "0")}-${day.padStart(2, "0")}`);
  };
  return { start: date(match[1], match[2], match[3]), end: date(match[4], match[5], match[6]) };
}

function count(value, label) {
  const number = typeof value === "string" && /^\d+$/.test(value.trim()) ? Number(value) : value;
  assert.ok(typeof number === "number" && Number.isSafeInteger(number) && number >= 0, `Missing or invalid count: ${label}`);
  return number;
}

function sum(rows) {
  return rows.reduce((total, row) => total.map((value, index) => count(value + row[index + 1], "subtotal")), [0, 0, 0, 0]);
}

function delta(current, previous) {
  return { current, previous, difference: current - previous, percentChange: previous === 0 ? null : 100 * (current - previous) / previous };
}

function comparison(values) {
  return {
    clicks: delta(values[0], values[1]),
    impressions: delta(values[2], values[3]),
    ctr: {
      current: values[2] === 0 ? null : values[0] / values[2],
      previous: values[3] === 0 ? null : values[1] / values[3],
      basis: "clicks divided by matching impressions; not an average of row percentages",
    },
  };
}

function subtotal(rows) {
  return rows.length ? { ...comparison(sum(rows)), available: true, rows: rows.length } : { available: false, rows: 0, reason: "No matching exported rows; not a measured zero" };
}

function rowMetrics(row) {
  return {
    label: row[0],
    ...comparison(row.slice(1, 5)),
    position: {
      current: row[3] > 0 && Number.isFinite(row[7]) && row[7] > 0 ? row[7] : null,
      previous: row[4] > 0 && Number.isFinite(row[8]) && row[8] > 0 ? row[8] : null,
      basis: "exported average position; zero with no impressions is unavailable",
    },
  };
}

export function analyseTables(tables, { latestCompleteDate } = {}) {
  const cutoff = isoDate(latestCompleteDate ?? "");
  const current = headerPeriod(tables.Devices?.[0]?.[1], "Clicks");
  const previous = headerPeriod(tables.Devices?.[0]?.[2], "Clicks");
  assert.ok([7, 28].includes(current.days) && previous.days === current.days, "Require matching complete 7-day or 28-day periods");
  assert.ok(previous.end < current.start, "Comparison periods must not overlap and must be chronological");
  assert.equal(Date.parse(previous.end) + dayMs, Date.parse(current.start), "Require the immediately preceding equivalent period");
  assert.ok(current.end <= cutoff, "Comparison includes a date not verified complete in Search Console");

  const data = {};
  for (const name of ["Devices", "Countries", "Pages", "Queries"]) {
    const table = tables[name];
    assert.ok(Array.isArray(table) && table[0]?.length === 9, `Missing or unsupported ${name} comparison table`);
    for (let column = 1; column <= 8; column += 1) {
      assert.deepEqual(headerPeriod(table[0][column], metrics[column - 1]), column % 2 ? current : previous, `${name}: inconsistent dates`);
    }
    const keys = new Set();
    data[name] = table.slice(1).map((row) => {
      assert.ok(typeof row[0] === "string" && row[0].trim(), `${name}: missing row label`);
      assert.ok(!keys.has(row[0]), `${name}: duplicate row ${row[0]}`);
      keys.add(row[0]);
      const result = [...row];
      for (let column = 1; column <= 4; column += 1) result[column] = count(row[column], `${name}/${row[0]}/${column}`);
      return result;
    });
  }

  const filtersTable = tables.Filters;
  assert.deepEqual(filtersTable?.[0], ["Filter", "Value"], "Missing export filters");
  const filters = {};
  for (const row of filtersTable.slice(1)) {
    assert.ok(typeof row[0] === "string" && typeof row[1] === "string", "Missing filter value");
    assert.ok(!Object.hasOwn(filters, row[0]), "Duplicate export filter");
    filters[row[0]] = row[1];
  }
  assert.equal(filters["Search type"], "Web", "This monitor compares Web search only");
  assert.ok(typeof filters.Date === "string" && filters.Date.trim(), "Missing export date context");
  assert.deepEqual(filterPeriod(filters.Date), { start: current.start, end: current.end }, "Export date filter disagrees with metric headers");
  const supported = new Set(["Search type", "Date", "Page"]);
  assert.ok(Object.keys(filters).every((key) => supported.has(key)), "Unexpected filter: do not mix differently filtered baselines");
  assert.ok(!filters.Page || filters.Page === mainPageFilter, "Unsupported page filter: require the exact recorded HTTPS main-site filter");

  const pageRows = data.Pages.map((row) => {
    const url = new URL(row[0]);
    assert.ok(["http:", "https:"].includes(url.protocol) && (url.hostname === host || url.hostname.endsWith(`.${host}`)), `Unexpected property URL: ${row[0]}`);
    if (filters.Page) assert.ok(url.origin === `https://${host}`, "Filtered export contains a URL outside the main site");
    return { row, url };
  });
  const mainRows = pageRows.filter(({ url }) => url.origin === `https://${host}`).map(({ row }) => row);
  const demos = pageRows.filter(({ url }) => /^showcase\d+\.wyedesign\.co\.uk$/.test(url.hostname)).map(({ row }) => row);
  const otherRows = pageRows.filter(({ row }) => !mainRows.includes(row) && !demos.includes(row)).map(({ row }) => row);
  const devices = sum(data.Devices);
  const countries = sum(data.Countries);
  const pages = sum(data.Pages);
  const flags = [];
  const dimensionalRowsPresent = data.Devices.length > 0 && data.Countries.length > 0;
  const reconcile = dimensionalRowsPresent && devices.every((value, index) => value === countries[index]);
  if (!dimensionalRowsPresent) flags.push("Missing device or country rows: absence of rows is not verified zero traffic.");
  if (!reconcile) flags.push("Device and country totals disagree: complete totals are unavailable; investigate before reporting growth.");
  if (filters.Page) flags.push("Page filter changes aggregation and can omit data: do not compare these totals with unfiltered property totals.");
  if (filters.Page && pages.some((value, index) => value !== devices[index])) {
    flags.push("Filtered Pages and Devices/Countries totals disagree: preserve the discrepancy, and do not call dimensional subtotals complete traffic totals.");
  }
  if (demos.length) flags.push("Domain data includes design-demo subdomains; demo-business searches do not establish qualified demand for Wye Design.");
  if (current.start <= deploymentDate) flags.push("This is not a fully post-deployment period; do not attribute these counts to the 2 October experiment.");
  flags.push("Verify the expected property and latest complete reporting date in the signed-in Google UI; this checker does not access Google.");
  flags.push("Visible query rows can omit anonymized or truncated data; do not sum them into site-wide totals.");
  flags.push("Clicks, impressions and indexing are not enquiries. Check relevant main-site queries and exclude labelled Analytics QA before claiming qualified growth.");
  if (devices[0] < 10 || devices[1] < 10) flags.push("Click samples are small; changes in CTR do not establish a stable conversion or engagement improvement.");

  return {
    schemaVersion: 1,
    periods: { current, previous, verifiedCompleteThrough: cutoff },
    experiment: { deploymentDate, currentPeriodFullyAfterDeployment: current.start > deploymentDate, previousPeriodEntirelyBeforeDeployment: previous.end < deploymentDate },
    scope: { expectedProperty: `sc-domain:${host}`, searchType: "Web", filters, aggregation: filters.Page ? "page-filtered" : "property" },
    propertyTotals: !filters.Page && reconcile ? comparison(devices) : null,
    dimensionalSubtotals: { devices: subtotal(data.Devices), countries: subtotal(data.Countries), reconciled: reconcile },
    mainSitePageTableSubtotal: { ...subtotal(mainRows), basis: "exported HTTPS main-site page rows; not unique property impressions" },
    demoPageTableSubtotal: subtotal(demos),
    otherPageTableSubtotal: subtotal(otherRows),
    trackedQueries: trackedQueries.map((query) => {
      const row = data.Queries.find((item) => item[0] === query);
      return row ? rowMetrics(row) : { label: query, available: false };
    }),
    priorityPages: ["/web-design-hereford", "/website-cost-guide", "/pricing", "/website-hosting-maintenance", "/small-business-web-design"].map((path) => {
      const row = mainRows.find((item) => item[0] === `https://${host}${path}`);
      return row ? rowMetrics(row) : { label: `https://${host}${path}`, available: false };
    }),
    flags,
    qualifiedGrowth: "unverified: this export alone cannot prove visitor intent, enquiries, or the effect of the experiment",
  };
}

export async function analyseWorkbook(filename, options) {
  const modules = process.env.WYE_ANALYSIS_MODULES;
  assert.ok(modules, "Set WYE_ANALYSIS_MODULES to the bundled node_modules path returned by load_workspace_dependencies; do not install new packages");
  const loader = createRequire(join(dirname(resolve(modules)), "wye-analysis-loader.cjs"));
  const { SpreadsheetFile } = await import(pathToFileURL(loader.resolve("@oai/artifact-tool")).href);
  const bytes = await readFile(filename);
  const workbook = await SpreadsheetFile.importXlsx(bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength));
  const tables = Object.fromEntries(["Devices", "Countries", "Pages", "Queries", "Filters"].map((name) => [name, workbook.worksheets.getItem(name).getUsedRange().values]));
  return {
    source: { file: resolve(filename), sha256: createHash("sha256").update(bytes).digest("hex"), readOnly: true },
    ...analyseTables(tables, options),
  };
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  try {
    const [filename, option, latestCompleteDate, ...extra] = process.argv.slice(2);
    assert.ok(filename && option === "--latest-complete-date" && latestCompleteDate && extra.length === 0, "Usage: node scripts/analyse-search-console.mjs export.xlsx --latest-complete-date YYYY-MM-DD");
    console.log(JSON.stringify(await analyseWorkbook(filename, { latestCompleteDate }), null, 2));
  } catch (error) {
    console.error(`Search Console analysis unavailable: ${error.message}`);
    process.exitCode = 1;
  }
}
