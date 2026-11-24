# Wye Design organic growth experiment — 1 October 2026

## Status

**Content experiment deployed and verified live on 2 October 2026.** Separate, tested repairs were deployed on **8 October: conversion-path/measurement at 10:15:49 UTC / 11:15:49 BST, and three reduced-opacity text styles at 21:40:37 UTC / 22:40:37 BST**. Neither repair changes the experiment's copy, titles, prices or publication dates; see the repair records below. The user requested use of the task's own browser. Its authenticated Cloudflare session successfully refreshed the existing Wrangler authorization with narrow account/user/Workers/routes/zone permissions. The correct Wye Design account was verified. Publication dates were moved truthfully to 2 October before the final rebuild. No new account, wider security access, paid service, artificial traffic or outreach has been created.

The organic-growth goal is not complete. Publication and the new guide's Google indexing are verified; a measurable growth outcome is a separate evidence gate. Do not describe the experiment as successful until qualified clicks and impressions improve over comparable complete periods.

**Latest evidence gate, rechecked 22 October:** authorised Search Console and Analytics sessions both worked. Search's verified complete cutoff is **19 October**; equal weekly windows are **13–19 October versus 6–12 October**, monthly windows **22 September–19 October versus 25 August–21 September**. UK main-site impressions rebound **231 → 456 (+97.40%)**, but clicks fall **1 → 0** and average position is nearly unchanged **59.8 → 59.2**. Monthly UK main-site impressions remain down **1,902 → 1,057 (−44.43%)**, with clicks **0 → 1**. The latest domain's two weekly clicks both land on showcase hosts, not the main business site. QA-excluded Analytics has zero weekly users/sessions/interactions in both comparison weeks, and one versus two monthly users/sessions with no reported enquiry events. These are recorded counts, not proof of no actual visitors or enquiries. All 12 public sitemap pages and technical checks remain healthy; Google's sitemap is Success, last read **22 October**, 12 discovered URLs. Index aggregate updated 16 October remains 14 indexed/three excluded. No code, copy, deployment, live form test, recrawl or collection-setting change. Keep the 2 October experiment unchanged through **3–30 October**; the rebound is not sustained qualified click/enquiry growth. See the dated monitoring record below; 17 October evidence is historical.

- Worker: `wyevalley`; account `b9f9a083ebaf2f893d196636eb8d95f0`.
- Last deployed and production-verified version: `a5a1f995-7c3a-4c12-ad6a-5244d736d7e6` (8 October readability repair; no new deployment is implied by later read-only monitoring).
- Readability repair rollback target: `a85278a5-a3c0-4d4d-9ddb-ebf85427b3ae` (8 October conversion-path/measurement repair).
- Original 2 October content version, retained as the conversion repair's historical rollback target: `c5852a2e-b8cd-4109-9503-d2731a4be92a`.
- Pre-experiment production version, retained for historical rollback: `153f2e58-7e33-4087-9988-79740bee7b91`.
- Content-experiment source: prepared commit `546b4b0` plus the 2 October publication-date corrections recorded in Git. Later technical repairs use the `be016b9` base plus the recorded working-tree changes; they are not claimed to be committed or pushed.
- `npm run lint`, final OpenNext build, `git diff --check`, local Cloudflare preview checks and `SEO_CHECK_URL=https://wyedesign.co.uk npm run check:seo`: passed on 2 October.
- Production verifies all four changed pages at 375px and 1440px: HTTP 200, correct self-canonicals/descriptions/JSON-LD, internal links, no whole-page horizontal overflow or browser runtime errors; sitemap has 12 pages and truthful per-page dates; missing URL returns 404 with noindex and no canonical.
- HTTP apex, HTTP www and HTTPS www each return a single 301 to HTTPS non-www, retaining the path and query.
- Empty-JSON validation at `/api/submit` returns 400 with the required-fields message; this did not send email and is not a new inbox-delivery test.
- Sitemap submission was accepted on 2 October. The later **8 October verification** supersedes the original delayed 11-page table: **Success, submitted/read 2 October, 12 discovered pages**. Do not repeat the accepted submission merely to refresh a historical count. The 4 October indexing aggregate, inspected on 8 October, lists 14 indexed URLs: **11 main-site pages and three showcase hosts**. The three exclusions are two redirects and the non-priority legal `/terms` page.
- Priority Hereford and guide requests were accepted on 2 October, and subsequent same-day inspection crossed the processing gate: the guide was **on Google / indexed**, and Google's **saved Hereford HTML contained the changed title, buying details and guide link** after a successful smartphone crawl. Those separate results, not request acceptance, prove the recorded indexing/crawl outcomes. They do not prove a displayed search snippet, ranking gain or customer growth; the 9 October lookup has not supplied a fresher inspection result.
- Own-browser access and the correct Wye Design Analytics property were verified. The **9 October standard-report comparisons through 6 October** supersede the 8 October comparisons through 5 October and the original 2 October Home “no data” message; processed collection and QA-attributed custom CTA/form-start events are verified separately. Preserve the labelled/unlabelled QA, missing-consent, tiny-sample and genuine-customer uncertainties recorded below. Navigate with the verified Wye account, not a browser-specific account index copied blindly from another browser; no login or permission expansion is required by these dated records.

### Search, Analytics and production monitoring — 22 October

Read `docs/seo-growth-experiment-2026-10-01.md` before checks. Content experiment remains deployed 2 October, technical/conversion/readability repairs remain 8 October. No new production deployment or website edit in this run. The first wholly post-content 28-day window remains 3–30 October; do not overlap it with a new copy experiment from this single rebound week.

#### Reporting windows and exact Search counts

Search Console's daily date selector was verified as **13–19 October versus 6–12 October** (seven days each), and **22 September–19 October versus 25 August–21 September** (28 days each). Latest performance cutoff is 19 October; the 2.5–3.5-hour last-update labels describe processing, not newer performance dates. An initial Weekly-granularity selector displayed six-day input ranges; those were rejected as the final weekly comparison. Switching to Daily and reselecting the seven-day comparison supplied the verified seven-day dates. A separate explicit 12–18 versus 5–11 October diagnostic is not the latest series below.

| Metric / series | Previous 7 days → latest 7 days | Previous 28 days → latest 28 days |
| --- | --- | --- |
| Domain clicks | 3 → 2 | 1 → 5 |
| Domain impressions | 222 → 375 (+68.92%) | 1,501 → 947 (−36.91%) |
| Domain CTR, UI-rounded | 1.4% → 0.5% | 0.1% → 0.5% |
| Domain average position, UI-rounded | 45.1 → 50.3 | 57.7 → 49.7 |
| UK main-site clicks | 1 → 0 | 0 → 1 |
| UK main-site impressions | 231 → 456 (+97.40%) | 1,902 → 1,057 (−44.43%) |
| UK main-site CTR, UI-rounded | 0.4% → 0% | 0% → 0.1% |
| UK main-site average position, UI-rounded | 59.8 → 59.2 | 68.5 → 61.0 |
| Hereford page UK impressions | 135 → 280 (+107.41%) | 1,240 → 666 (−46.29%) |
| Hereford page UK clicks | 0 → 0 | 0 → 0 |
| Hereford page UK average position, UI-rounded | 51.2 → 52.1 | 64.9 → 55.8 |
| Ross-on-Wye visible-query bucket impressions | 53 → 78 (+47.17%) | 426 → 217 (−49.06%) |
| Ross-on-Wye visible-query bucket clicks | 0 → 0 | 0 → 0 |

UK main-site means Country United Kingdom + URLs containing `https://wyedesign.co.uk/`, excluding showcase hosts. This URL-aggregated, potentially partial filtered view is not interchangeable with property-aggregated domain totals. Full main-site page tables (nine weekly rows and ten monthly rows), and full disclosed query tables (33 weekly and 60 monthly rows), reconcile independently to 456/231 and 1,057/1,902 impressions and the reported click counts. All three domain device rows independently sum to 375/222 and 947/1,501 impressions. Use exact sums, not chart abbreviations `1.06K`, `1.9K` or `1.5K`.

The weekly domain page table was read across both pages (1–10 and 11–13 of 13). The two latest clicks are one each to showcase3 and showcase1, not Wye Design main-site acquisition. Previous clicks are two to showcase3 and one to About. Do not count either latest demo click as a qualified visitor. The page totals are URL-aggregated; do not force their impression sum to match the domain property.

Hereford's weekly impression rebound did not bring a ranking gain: its average position slightly worsened 51.2→52.1. Exact `web design hereford` has 49 versus 31 impressions, zero clicks and position 46.8 versus 44.3. All disclosed `ross[ -]on[ -]wye` variants were included in the Ross bucket, not a cherry-picked spelling. This is increased relevant search exposure, not proof of user engagement, leads, a causal experiment win or sustained growth. Longer comparable exposure remains weaker, and the 28-day current window includes pre-deployment days.

#### Analytics, labelled QA excluded

Correct account 404259164 / property 549449391 (Wye Design Website). Used the same conservative cutoff and calendar dates as Search, without claiming the report timezones are identical. Acquisition and Events each use a temporary report-view Session campaign / does not match regex exclusion for the existing seven diagnostic campaigns; no collection filter or property setting was changed. The Events filter was explicitly verified in the UI after a URL-based filter attempt failed to apply; the unfiltered event report was rejected as growth evidence.

| Recorded metric, QA excluded | 13–19 Oct | 6–12 Oct | 22 Sept–19 Oct | 25 Aug–21 Sept |
| --- | ---: | ---: | ---: | ---: |
| Total users | 0 | 0 | 1 | 2 |
| Sessions | 0 | 0 | 1 | 2 |
| Engaged sessions | 0 | 0 | 0 | 2 |
| Engagement rate, UI | 0%* | 0%* | 0% | 100% |
| Organic Search sessions | 0 | 0 | 0 | 0 |
| proposal_form_start | 0† | 0† | 0† | 0† |
| generate_lead | 0† | 0† | 0† | 0† |
| contact_email_click | 0† | 0† | 0† | 0† |
| contact_cta_click | 0† | 0† | 0† | 0† |

*No session denominator; not a measured engagement rate. †No reported rows/counts in the complete filtered Events view. Monthly event table is 1–5 of 5; current events are one page_view and one session_start. Current monthly session is Direct, with unverified customer identity. Prior monthly sessions also Direct. Weekly Events and acquisition both show no data after labelled-QA exclusions. Unfiltered current 28-day CTA six/form-start two counts disappear under the verified QA exclusion; they are not genuine enquiry growth. No recorded events is not proof of no actual visits or inbox enquiries: consent, blocking and unlabelled QA remain limitations. Reports stated 100% of available data after loading; this does not guarantee complete measurement of all visitors. No live tracking visit or form test was generated.

#### Indexing and production health

Google indexing aggregate updated **16 October**: 14 indexed / three not indexed; two redirects and one discovered-currently-not-indexed exclusion. No count change from the prior verified aggregate, and no fresh individual URL Inspection outcome claimed. Sitemap table: Success, submitted 2 October, last read **22 October**, 12 discovered pages, zero discovered videos. No resubmission or repeat recrawl request.

Read-only public HTTP checks on 22 October: all 12 sitemap URLs return 200, intended self-canonicals, index/follow, parseable JSON-LD and `public, max-age=0, no-cache, must-revalidate` HTML headers. Sitemap 200 with 12 URLs. HTTP apex, HTTP www and HTTPS www each return one 301 to HTTPS non-www preserving path/query. Missing page 404/noindex/no-canonical. Form endpoint GET 405 as expected, availability only; no POST, email or independent inbox delivery test. No Analytics JavaScript executed by these HTTP checks. No production regression found.

#### Decision

Keep the 2 October content experiment unchanged through the 3–30 October evidence gate. Weekly relevant impressions have rebounded, but latest main-site clicks are zero, GA provides no verified customer/enquiry improvement, and monthly visibility remains lower. No new title, description, copy, link, price, core-offer, schema, account-security or production change is justified from this single mixed week. Existing lack of genuine owner-supplied case-study/profile facts remains unresolved; do not invent claims or repeat outreach/account requests. This monitor remains useful. The scoped local documentation update was approved and applied; no new production permission or deployment was needed.

Evidence screenshots: `/private/tmp/wye-uk-main-week-2026-10-22.png` and `/private/tmp/wye-ga-week-qa-excluded-2026-10-22.png`. Only this experiment record is updated, not production.

### Current search performance — 17 October

**Access and dates:** read-only reports loaded in the user-opened Google session for the correct domain property. No new app, third-party reporting connection, login bypass or permission expansion was required. Actual date controls were checked: **8–14 October / 1–7 October** for the weekly comparison, and **17 September–14 October / 20 August–16 September** for the 28-day comparison. The UI's latest date is 14 October, not 6 October; the approximately 5.5-hour last-update label is a processing timestamp, not an additional performance date. No current Search Console access blocker was observed. Do not repeat the earlier unavailable-browser report without checking current access.

| Series / metric | Previous seven days → latest seven days | Previous 28 days → latest 28 days |
| --- | --- | --- |
| Domain clicks | 1 → 2 | 0 → 4 |
| Domain impressions | 305 → 219 (−28.20%) | 1,808 → 756 (−58.19%) |
| Domain CTR, UI-rounded | 0.3% → 0.9% | 0% → 0.5% |
| Domain average position, UI-rounded | 48.5 → 47.5 | 60.5 → 49.8 |
| UK main-site filtered clicks | 0 → 1 | 0 → 1 |
| UK main-site filtered impressions | 322 → 245 (−23.91%) | 2,545 → 796 (−68.72%) |
| UK main-site filtered CTR, UI-rounded | 0% → 0.4% | 0% → 0.1% |
| UK main-site filtered average position, UI-rounded | 59.7 → 59.4 | 71.7 → 62.3 |
| Hereford page, UK impressions | 205 → 146 (−28.78%) | 1,521 → 517 (−66.01%) |
| Hereford page, UK clicks | 0 → 0 | 0 → 0 |
| Hereford page, UK average position, UI-rounded | 55.9 → 50.3 | 68.3 → 58.1 |

**Aggregation and exactness:** UK main-site means **Country: United Kingdom** and **URLs containing `https://wyedesign.co.uk/`**, excluding showcase hosts. Google warns that chart/table results can be partial with filters. It is a URL-aggregated view and must not be subtracted from, added to or substituted for the property-aggregated domain series. Full UK main-site page pagination was read: **1–9 of 9** weekly and **1–10 of 10** over 28 days. Their page rows reconcile exactly to **245 / 322** and **796 / 2,545** impressions, with **one / zero** clicks in each comparison. All three unfiltered domain device rows reconcile to **756 / 1,808** impressions and **four / zero** clicks over 28 days; the previous chart's `1.81K` is rounded. CTR and positions remain UI-rounded averages, not fixed ranks. A zero-impression position displayed as zero is unavailable, not rank zero.

**What the recent clicks actually show:** the unfiltered weekly page table was expanded to **1–13 of 13**. `/about` records **one latest / zero previous** clicks, while `showcase3.wyedesign.co.uk/` records **one / one**. Both latest domain clicks are reported in the UK country row, but country alone does not establish customer intent. In the actual UK main-site filtered report, `/about` is the only positive-click page. Its query table separately reports **one / zero** clicks for `website design request for proposal`. This is one recorded search interaction relevant to website services; customer identity, engagement, enquiry delivery and commercial value remain unverified. Do not turn a one-click difference into a percentage-growth success claim. The older 17 September click-attribution discrepancy has not been resolved or re-investigated by this check.

**Content experiment:** the Hereford page's weekly average position improves **55.9 → 50.3**, but its impressions fall **205 → 146** and clicks remain zero. The cost guide has **four UK main-site impressions versus zero** weekly and no clicks; that is discovery evidence on a tiny sample, not a content-success result. Main-site rankings remain weak. Both 28-day windows contain pre-deployment dates, and the previous weekly window includes 1–2 October, so neither comparison is a clean causal estimate of the 2 October changes. The first wholly post-deployment 28-day window remains 3–30 October. Maintain the existing experiment; do not introduce overlapping copy changes from this single mixed week.

**Scope:** this was a Search Console status review only. No site code/copy, prices, core offer, deployment, tracking settings, sitemap submission, indexing request, live site-browser visit, form interaction/submission or inbox test changed. No Analytics comparison or fresh individual URL Inspection was performed, so no current engagement, lead or crawl claim follows. The 15 October public technical checks remain separately dated evidence. Only this local experiment record was updated. Browser evidence includes the current UK main-site report left open for the user and screenshot `/private/tmp/wye-uk-main-week-2026-10-17.png`. Direct `cua_repl` control worked in this run; absence of a browser entry in `functions.exec`'s nested `ALL_TOOLS` inventory alone is not proof that direct browser controls are unavailable.

### Analytics follow-through — 2 October

- Verified web stream `15418030811` belongs to `https://wyedesign.co.uk` and uses `G-K2DXS9S4GV`; the live consented page loads that ID. Enhanced measurement is enabled. Google tag diagnostics show “Excellent”, “Tag is sending data. No issues detected.”
- The only property data filter is Internal Traffic / Exclude / **Testing**. It is not an active exclusion filter. No filter, consent or security protection was disabled.
- One diagnostic visit used `utm_source=automated_test&utm_medium=qa&utm_campaign=analytics_diagnostic_20261002`. It opened the cost guide, followed the proposal CTA and focused the empty name field. No personal information was entered and no form was submitted.
- **Processed collection is now verified in GA Realtime:** 1 active user, `page_view` 2, `contact_cta_click` 1, `proposal_form_start` 1, `scroll` 1 and `session_start` 1. The two page titles were the cost guide and contact page. These are automated QA, not real customer activity, organic growth or a lead. The first-user-source card showed `(direct)` because this browser already had a prior Analytics identity; do not identify this test solely using first-user source. Use the diagnostic campaign/page URL and session attribution when excluding it.
- The previous standard-report / stream “no data” messages are not evidence of a broken tag once processed Realtime events are verified. Standard reporting remains subject to processing delay; confirm its next complete data update before attempting historical engagement comparisons.
- Found and corrected a conversion configuration gap: `generate_lead` was absent from the property's key-events list. It is now saved and checked as a key event, using the **existing coded event** (not a codeless page-view rule), counted once per event, with **no default monetary value**. Existing key events were left unchanged. No Google Ads conversion or ad account was created.
- The site's coded `generate_lead` fires only after a successful production `/api/submit` response. Key-event configuration is verified; new live `generate_lead` collection and inbox delivery were not retested. CTA clicks and form starts remain non-key events and must not be counted as completed enquiries.
- Evidence screenshots: `/tmp/wye-analytics-realtime-verified-2026-10-02.jpg` and `/tmp/wye-generate-lead-key-event-2026-10-02.jpg`.

Next monitoring run: confirm standard-report ingestion, exclude labelled QA where possible, compare genuine traffic only, and verify the newly queued Google pages/sitemap without repeat submissions. Organic growth remains unproven and the goal remains active.

### Google indexing follow-through — 2 October

- The new `/website-cost-guide` moved from “URL is unknown to Google” before its accepted request to **“URL is on Google” / “Page is indexed”** in the subsequent verified URL Inspection.
- Google reported its last crawl as **2 Oct 2026, 15:37:00**, by Googlebot smartphone; crawl allowed Yes, page fetch Successful and indexing allowed Yes.
- User-declared canonical is `https://wyedesign.co.uk/website-cost-guide`; Google-selected canonical is “Inspected URL”. HTTPS and one valid Breadcrumbs item were reported.
- The sitemap table still showed Success, submitted 2 October, last read 30 September and 11 discovered pages. The guide's inspection showed no referring sitemap/page yet. Those discovery-report delays do not contradict its verified indexed status.
- No repeat sitemap or indexing request was sent. Evidence screenshot: `/tmp/wye-cost-guide-indexed-2026-10-02.jpg`.
- This verifies an additional page's eligibility for Search, not new impressions, clicks, rankings or enquiries. Do not count the earlier diagnostic Analytics session as growth. Keep the existing live content experiment unchanged and evaluate comparable complete post-deployment periods.

### Remaining service-page indexing checks — 2 October

- The broad Page indexing report still has a 21 September update date, so its 7-indexed / 9-not-indexed totals do not include the verified new guide. Its six discovered-not-indexed examples are `/about`, `/contact`, `/pricing`, `/terms`, `/website-hosting-maintenance` and `/work`. Do not use this old aggregate to contradict current URL Inspection results.
- Fresh URL Inspection for `/pricing` shows **not indexed / URL is unknown to Google**. The first indexing request ended with Google's “We had a problem submitting your indexing request. Please try again later.” It was not accepted. The pricing page is part of the 2 October deployed update and already passed production tests.
- Fresh inspection for `/website-hosting-maintenance` shows **Discovered – currently not indexed**, with the sitemap and `/websites-for-trades` identified as discovery sources and no recorded crawl. This is a commercially relevant pre-existing indexing gap, not a new performance inference. The targeted request was **accepted**; Google displayed “Indexing requested” and confirmed the priority crawl queue. Evidence: `/tmp/wye-maintenance-indexing-requested-2026-10-02.jpg`. Indexing itself remains unverified.
- Before one retry of the failed pricing request, a fresh inspection changed its discovery state to **Discovered – currently not indexed**, with the sitemap now identified. It was still not indexed. That single retry then **succeeded**: Google displayed “Indexing requested” and confirmed the priority crawl queue. Evidence: `/tmp/wye-pricing-indexing-requested-2026-10-02.jpg`. Do not retry either accepted request merely because indexing is pending.
- Both live routes return 200, `index, follow`, one correct self-canonical, low-cache HTML headers and parseable JSON-LD (pricing one block, maintenance two). The source robots rules allow both routes. No page content, prices, DNS or security setting was changed during this check.

The next monitor should check the accepted pricing and maintenance requests alongside Hereford and the already-indexed guide, using current URL Inspection and the sitemap's actual next-read state. Requests are not indexed-page or traffic outcomes. Pending Google crawl/reporting is expected; do not churn copy or repeat submissions while collecting complete comparative data.

### Pricing/maintenance crawl outcomes and buyer-page follow-through — 2 October, later check

- Fresh URL Inspection now confirms **`/pricing` is on Google / Page is indexed**. Google's displayed last crawl is **2 October 2026, 22:08:32**, by Googlebot smartphone; crawl allowed Yes, page fetch Successful, indexing allowed Yes, and Google-selected canonical is the inspected URL. The sitemap discovery field shows a temporary processing error, not an indexing failure. Evidence: `/tmp/wye-pricing-indexed-2026-10-02.jpg`. This supersedes the earlier pending-pricing state above; no repeat request was sent.
- **`/website-hosting-maintenance` is also on Google / Page is indexed**, with Google's displayed last crawl **2 October 2026, 22:06:31**, successful smartphone fetch, crawl/indexing allowed Yes and the inspected URL selected as canonical. The sitemap and `/websites-for-trades` are now reported discovery sources. One valid Breadcrumbs item and HTTPS are reported. Evidence: `/tmp/wye-maintenance-indexed-2026-10-02.jpg`. This supersedes the earlier pending-maintenance state; no repeat request was sent.
- Fresh inspection confirms **`/contact` is already indexed**, despite its appearance in the old 21 September not-indexed aggregate. Last crawl **27 September 2026, 17:48:41**, successful smartphone fetch, crawl/indexing allowed Yes and self-canonical selected. No indexing request or form submission was sent. Evidence: `/tmp/wye-contact-indexed-2026-10-02.jpg`.
- **`/about` is not indexed / URL is unknown to Google** in fresh inspection. Its first targeted indexing request completed successfully: Google displayed **Indexing requested** and added the URL to its priority crawl queue. Evidence: `/tmp/wye-about-indexing-requested-2026-10-02.jpg`. Indexing itself remains unverified; do not repeat this accepted request merely because pending.
- **`/work` is Discovered – currently not indexed**, with the sitemap and privacy-policy page reported as discovery sources and no crawl recorded. Its first targeted request also completed successfully with **Indexing requested** and a priority-queue confirmation. Evidence: `/tmp/wye-work-indexing-requested-2026-10-02.jpg`. The page accurately identifies the portfolio examples as design concepts, not commissioned client case studies. This request concerns the main-site concepts page, not promoting searches for the demo businesses. Indexing remains unverified; do not repeat the accepted request.
- Live `/about`, `/contact` and `/work` each return 200, `index, follow`, exactly one correct self-canonical, low-cache HTML headers and one parseable JSON-LD block. Robots allows these paths. No copy, design, prices, security settings or site code changed in this follow-through.
- The sitemap table still reports **Success**, submitted 2 October, last read 30 September, 11 discovered pages. Do not resubmit just to refresh this delayed table; current individual URL inspections establish the new pricing/maintenance index state.
- Analytics Home still shows no processed historical data for **25 September–1 October**. Realtime shows 1 active user, 2 page views, 1 contact CTA click, 1 form start, 1 scroll and 1 session start, with the cost-guide/contact page titles and first-user source `(direct)`. This matches the previously recorded diagnostic pattern and is not proof of a new qualified customer, organic acquisition or lead. No additional site-browser visit or inbox test was made, and no `generate_lead` was observed. Standard engagement comparisons remain unavailable pending actual reporting data.

Next monitoring: pricing and maintenance have crossed the indexing gate and need performance measurement, not another request. Follow the newly accepted About and Work queues separately, retain current URL Inspection over stale aggregate examples, and keep the deployed content experiment unchanged. Eligibility has improved; qualified clicks/impressions and enquiry growth are still unverified.

### About/Work index outcomes and exact Analytics comparisons — 2 October, final evening check

- Fresh URL Inspection confirms **`/about` is on Google / Page is indexed**. Google's displayed last crawl is **2 October 2026, 22:24:36**, by Googlebot smartphone; crawl allowed Yes, successful page fetch, indexing allowed Yes and the inspected URL selected as canonical. The sitemap and `/websites-for-trades` are reported discovery sources. Evidence: `/tmp/wye-about-indexed-2026-10-02.jpg`. This supersedes the earlier pending About request; no new request was sent.
- Fresh inspection also confirms **`/work` is on Google / Page is indexed**, with a successful smartphone crawl displayed as **2 October 2026, 22:26:37**, crawl/indexing allowed Yes and the inspected URL selected as canonical. `/privacy-policy` is reported as a referring page. Its sitemap discovery field still has a temporary processing error, which does not negate Google's explicit indexed status. Evidence: `/tmp/wye-work-indexed-2026-10-02.jpg`. No repeat request or portfolio-claim change was made.
- Navigating back to Sitemaps refreshed its current result: **Success**, submitted 2 October, last read 30 September and 11 discovered pages. Do not repeat the accepted submission to refresh this lagging aggregate.
- Direct comparison reports in the authenticated Wye Analytics property now provide a more precise historical picture than the Home card. The prior statement that full history is unavailable must not be interpreted as an empty property across all older dates. These are **recorded Analytics counts**, not independently verified customer counts; missing consent, sample size and QA attribution remain relevant.

| Analytics metric | 4 September–1 October | 7 August–3 September |
| --- | ---: | ---: |
| Total users (Events report) | 0 | 5 |
| Sessions | 0 | 5 |
| Engaged sessions | 0 | 4 |
| Engagement rate | UI displays 0%; no sessions, so no meaningful measured rate | 80% |
| Total recorded events | 0 | 40 |
| `contact_cta_click` events | 0 | 7 |
| `generate_lead` events | 0 | 1, customer status unverified |
| Organic Search sessions | 0 | 1 |

The previous period also has four Direct sessions and one enhanced-measurement `form_start`; that generic event is **not** the requested custom `proposal_form_start`. The complete eight-row Events table has no separate `proposal_form_start` or `contact_email_click` row for either period. Record those as not observed in these reports, not verified healthy delivery or verified absence of customer behaviour. The historical `generate_lead` has not been checked against a genuine enquiry or excluded as an older inbox test; do not call it a customer conversion. Both periods show zero key events in the acquisition report, separately from the historical event count; the saved 2 October lead-key-event configuration does not establish a new completed enquiry.

The **25 September–1 October versus 18–24 September** seven-day Events and Traffic acquisition reports both finish loading with **No data available**, displaying zero users/events/sessions/engaged sessions on both sides. There is no usable engagement-rate denominator and no recorded row for any of the four requested enquiry-interaction events. These are empty recent reporting results, not proof the website had no visitors or inbox enquiries. The explicitly labelled 2 October QA visit is outside both selected comparisons; current Home Realtime has zero active users, whereas the earlier processed QA events remain evidence that current collection worked. Do not create more artificial visits just to make reports nonempty.

Evidence: `/tmp/wye-analytics-events-28day-comparison-2026-10-02.jpg`, `/tmp/wye-analytics-traffic-28day-comparison-2026-10-02.jpg`, `/tmp/wye-analytics-events-7day-comparison-2026-10-02.jpg` and `/tmp/wye-analytics-traffic-7day-comparison-2026-10-02.jpg`. Report values were read only after loading completed, not from transient old values relabelled with a newly selected period. No form submission, site edit, Analytics setting change or new tracking visit was made during these read-only checks.

Next evidence gate: About and Work now need performance measurement, not repeated indexing requests. Recheck actual standard-report ingestion after Google's processing interval, preserve the exact older baseline and investigate any sustained collection gap without assuming zero customers. The indexing improvements are verified; qualified organic clicks, impressions and enquiries have not yet demonstrated growth.

### Google crawl-content verification and homepage follow-through — 2 October

- Fresh Hereford inspection shows **Page is indexed**, a successful Googlebot smartphone crawl displayed as **2 October 2026, 15:33:00**, crawl/indexing allowed Yes, the inspected URL selected as canonical, HTTPS and one valid Breadcrumbs item. Evidence: `/tmp/wye-hereford-recrawled-2026-10-02.jpg`.
- The **Crawled page / HTML** viewer contains the actual updated content, not just an indexed-status badge. Reading its displayed HTML verifies the exact title **`Web Design Hereford — £495 or £30/month | Wye Design`**, the revised 3–5-page/cost/24-month description, and canonical `https://wyedesign.co.uk/web-design-hereford`. The crawl also includes the new `/website-cost-guide` link, £720/£855 totals, ownership-after-month-24 explanation, the concepts-not-client-results qualification and the scoped-proposal CTA. Both displayed JSON-LD blocks parse; their graphs contain Service/FAQPage/BreadcrumbList and Organization/WebSite respectively. This proves Google fetched the deployed Hereford experiment; it does not prove which title it will display, rich-result eligibility, improved rankings or more clicks. Visible title evidence: `/tmp/wye-hereford-google-crawled-new-title-2026-10-02.jpg`.
- The homepage is already indexed, but its current inspection still reports **21 September 2026, 11:06:55** as the last successful smartphone crawl. Its displayed crawled HTML **does not contain** the new guide link. A read-only live check returns **200**, confirms that link is present now, and reports `Cache-Control: public, max-age=0, no-cache, must-revalidate`. The live root canonical `https://wyedesign.co.uk` normalizes to `https://wyedesign.co.uk/`; these are equivalent root URLs, not a canonical defect requiring a change.
- Because the homepage was changed in this experiment but Google's saved version predates it, one targeted **updated-homepage indexing request was accepted**. Google displayed **Indexing requested** and confirmed addition to its priority crawl queue. Evidence: `/tmp/wye-homepage-indexing-requested-2026-10-02.jpg`. This is the homepage's follow-through for the new update. No repeat requests were sent for Hereford, the guide, pricing, maintenance, About or Work. Do not repeat this accepted homepage request merely because its crawl has not refreshed.

Next monitoring: confirm the homepage's next crawl contains `/website-cost-guide`; monitor performance rather than requesting Hereford again, since Google's fetched Hereford content is now verified. The first fully post-deployment seven-day period is **3–9 October**, and the first 28-day period is **3–30 October**, both subject to actual Google reporting completion. A selected date window is not proof its data is complete. No new site copy, prices, design, deployment, tracking session or inbox test was introduced in this follow-through. Search-traffic growth remains unverified.

### Exact baseline and visibility diagnosis — 2 October

- Downloaded untouched Search Console Excel exports for the fixed **1–28 September versus 4–31 August** Web-search comparison. Domain export: `/Users/nyehogan/Downloads/wyedesign.co.uk-Performance-on-Search-2026-10-02.xlsx`, SHA-256 `a372f922dcef566d637c94ec5bca4bf4d4cf7692d27bf77a086ea9a69142f2e2`. Main-site page-filter export: `/Users/nyehogan/Downloads/wyedesign.co.uk-Performance-on-Search-2026-10-02 (1).xlsx`, SHA-256 `c8a7247a548f5cbe79a586d9d7462e4c2b61164177526d5d11b04aa1d9ca2576`. Raw exports remain local, not committed or uploaded to another service.
- Domain-level exact counts reconcile independently across the complete Devices and Countries tables: **1 versus 2 clicks; 1,119 versus 1,324 impressions**. Impressions decreased **205 / 15.48%** before this experiment. These replace the rounded 1.12K / 1.32K values; they are not post-deployment results. The domain export includes the `showcase1`, `showcase2` and `showcase3` subdomains.
- The design-demo pages have **86 versus 127 page-level impressions and no clicks in either period**. Search terms for the concepts' example businesses must not be presented as qualified demand for Wye Design's web-design service. No demo page or indexing setting was changed.
- A second report uses **Page / URLs containing `https://wyedesign.co.uk/`**. Its Pages table has **1 versus 2 clicks and 1,426 versus 1,972 page-level impressions** across the main-site URLs. This is a distinct, URL-aggregated baseline, not the domain-property total. Its higher impression count is a counting-method difference, not growth. The filter warning says results might be partial; its exported Devices/Countries tables contain only 0 versus 1 click and 1,401 versus 1,891 impressions. Do not use those filtered subtotals as a complete traffic total or conclude that the main site had no UK clicks. Retain the exact Pages-table values and this discrepancy.
- Exact tracked domain queries are `web design hereford` (116 versus 177 impressions; position 57.14 versus 69.97), `web design ross-on-wye` (41 versus 128; 61.66 versus 63.27), and the separate unhyphenated `web design ross on wye` (47 versus 43; 47.47 versus 56.02). All have zero reported clicks in both periods. Do not silently combine query spellings or compare URL-filtered query counts against this property-aggregated series. An export's zero position with zero impressions is unavailable, not rank zero.
- The small-business page's Pages row shows **0 versus 456 impressions**, but fresh URL Inspection confirms **URL is on Google / Page is indexed**. Google reports a successful smartphone crawl on **24 September 2026, 21:48:26**, crawl/indexing allowed Yes and the inspected URL selected as canonical. Its sitemap discovery field has a temporary processing error, which does not negate the indexed result. Live HTML returns 200, `index, follow`, one self-canonical, low-cache headers and parseable JSON-LD. This rules out a current indexing block; it does not prove why visibility fell. No repeat indexing request or speculative copy change was made. Evidence: `/tmp/wye-small-business-indexed-2026-10-02.jpg`.

Future measurement must keep the unchanged domain series for continuity, and separately track the same HTTPS main-site Page filter, individual priority landing pages and relevant web-design query spellings. Exclude concept-business searches and labelled Analytics QA from qualified-growth claims. Keep the same aggregation and filters on both sides of every comparison; do not subtract page-level demo totals from property-level impressions. Google's [data-grouping guidance](https://support.google.com/webmasters/answer/17011259?hl=en) and [filtering/limits explanation](https://developers.google.com/search/blog/2022/10/performance-data-deep-dive) explain why page/property totals and visible query rows can differ. The small-business page is a ranking/visibility follow-up, not an unindexed-page rescue. Preserve the live experiment while collecting complete post-deployment data.

### Repeatable read-only measurement check — 2 October

`scripts/analyse-search-console.mjs` now checks untouched Search Console comparison Excel exports and prints JSON without changing the workbook, Google settings or the website. The weekly monitor should use it after obtaining a current export from the correct authenticated property. It does not sign in, export data from Google or verify Google's reporting freshness by itself.

1. Verify `sc-domain:wyedesign.co.uk`, Web search and the latest complete reporting date in the signed-in Search Console UI. Export matching complete 7-day and 28-day periods against their immediately preceding equivalent periods. Preserve the separate unfiltered domain and exact `Page: +https://wyedesign.co.uk/` series. Do not add query, country or device filters to these baselines.
2. Call `load_workspace_dependencies` for the current bundled Node executable and modules directory. Run the checker with `WYE_ANALYSIS_MODULES` set to that returned modules path; no package installation or production dependency change is required. Example invocation from this repository, substituting the actual returned runtime paths, current export and UI-verified cutoff:

   ```sh
   WYE_ANALYSIS_MODULES="/returned/node/node_modules" "/returned/node/bin/node" scripts/analyse-search-console.mjs "/path/to/untouched-export.xlsx" --latest-complete-date YYYY-MM-DD
   ```

3. Read the output's source hash, periods, filters, reconciliation flags and deployment-period classification before comparing results. Use a period ending on the latest complete date for ongoing monitoring; an older fixed period is permitted only for explicitly labelled baseline reproduction. The CLI accepts only the recorded UK-format/English comparison-export structure; an unsupported layout or inconsistent date/filter must be investigated, not coerced into zero data.
4. Keep property totals, HTTPS main-site Page-table subtotals, demo subtotals and relevant query spellings separate. Missing rows and zero-impression ranks remain unavailable; page-filter discrepancies remain visible. Exports alone always leave qualified growth unverified. Check live Google state, query intent, Analytics attribution and genuine enquiries separately, excluding labelled QA.

Verification: `npm run check:search-data` passes **26 unit tests** using explicitly synthetic inputs. A separate end-to-end check imported both original 2 October exports above, verified their unchanged SHA-256 hashes, reproduced the exact domain and main-site baselines, detected the filtered-report discrepancy, retained the small-business zero-impression position as unavailable and classified these September results as pre-deployment. Unit fixtures are not traffic evidence. No new visitor session, form submission, deployment, price or copy change was made for this measurement tooling.

## Weekly monitoring — 8 October 2026

**Morning monitoring: no production edit or deployment during that check.** The later user-requested technical repair is recorded separately below. The 2 October experiment is six days old. The default Search Console complete-period selector ends on **5 October** (last update approximately 25 hours ago). Neither current comparison below is wholly post-deployment; do not infer experiment success or failure from it. The first fully post-deployment seven-day window remains 3–9 October, and the first 28-day window remains 3–30 October, subject to reporting completion.

| Unfiltered domain Web-search metric | 29 September–5 October | 22–28 September | 8 September–5 October | 11 August–7 September |
| --- | ---: | ---: | ---: | ---: |
| Clicks | 0 | 0 | 1 | 1 |
| Exact impressions | 214 | 136 | 839 | 1,689 |
| UI-rounded CTR | 0% | 0% | 0.1% | 0.1% |
| UI-rounded average position | 49.1 | 56.7 | 53.0 | 64.2 |

Devices and Countries reconcile the exact unfiltered totals. Seven-day impressions rose 78 / **57.35%**; the 28-day comparison fell 850 / **50.33%**, mostly before the new experiment. The weekly rise is not yet persistent growth, and one click per 28-day period cannot establish a meaningful CTR trend. Exact count-derived CTR is 0.1192% versus 0.0592% for the 28-day comparison; the displayed percentages are rounded.

The unchanged `Page: +https://wyedesign.co.uk/` series has **245 versus 151** seven-day page-level impressions (0 clicks each; displayed position 56.2 versus 70.6) and **991 versus 2,541** 28-day page-level impressions (1 click each; displayed position 62.9 versus 74.8). These are URL-aggregated main-site subtotals, not domain-property impressions. The filter still warns of partial results, and the 28-day Devices/Countries subtotals are **960 versus 2,493 impressions / 0 versus 1 click**, distinct from the Pages table. Preserve this discrepancy rather than silently treating filtered totals as complete. Design-demo rows remain excluded from main-site demand: their unfiltered 28-day page subtotal is 86 versus 142 impressions and zero clicks.

| Priority page, exact exported values | Latest 7 days / previous 7 | Latest 28 days / previous 28 |
| --- | --- | --- |
| Hereford impressions | 154 / 102 | 684 / 1,383 |
| Hereford clicks | 0 / 0 | 0 / 1 |
| Hereford average position | 56.12 / 69.63 | 60.83 / 73.35 |
| Cost guide impressions / clicks | 4 / 0 impressions; 0 / 0 clicks | 4 / 0 impressions; 0 / 0 clicks |
| Pricing impressions | 2 / 0 | 2 / 0 |
| Hosting/maintenance impressions | 2 / 0 | 2 / 0 |

Unfiltered domain query series, kept separate from URL-filtered queries:

- `web design hereford`: seven-day impressions **24 versus 12**, position **51.46 versus 57.75**; 28-day impressions **91 versus 221**, position **54.04 versus 68.08**; zero clicks in both comparisons.
- `web design ross-on-wye`: seven-day impressions **0 versus 13**, current position unavailable versus **62.62**; 28-day impressions **32 versus 121**, position **62.19 versus 62.55**; zero clicks. This spelling is not merged with the following query.
- `web design ross on wye`: seven-day impressions **7 versus 4**, position **64.14 versus 75.00**; 28-day impressions **32 versus 57**, position **55.50 versus 50.77**; zero clicks.
- The small-business page still has 0 versus 456 impressions in the 28-day export, with current rank unavailable. The current indexed-page list confirms it remains indexed, last crawled 24 September; its live HTML is healthy. The seven-day export has no row for that page, not a newly verified zero or indexing block.

**Google processing outcomes:** the 4 October Page indexing aggregate now reports **14 indexed / 3 not indexed**, compared with the previously available 21 September aggregate of 7 / 9. The full 14-row indexed list contains **11 main-site URLs and three showcase subdomains**; do not claim 14 indexed main-site pages. All commercially relevant main-site pages, including Hereford, the guide, pricing, maintenance, About, Work, contact and small-business, are listed as indexed. The three exclusions are two redirects and **`/terms` discovered–currently-not-indexed**. Duplicate, alternative-canonical and crawled–currently-not-indexed counts are zero. The legal terms page is not a priority organic-growth landing page; no new indexing request was sent.

The sitemap table now shows **Success, submitted 2 October, last read 2 October, 12 discovered pages**. This supersedes the earlier delayed 11-page count. The homepage's current inspection confirms a successful smartphone crawl **2 October, 23:00:47**, crawl/indexing allowed Yes and self-canonical selected. Its displayed **Crawled page / HTML** contains the real anchor `Read our small-business website cost guide` linking to `/website-cost-guide`. This supersedes the earlier pending-homepage state. Its individual sitemap discovery field currently has a temporary processing error; that does not negate the successful sitemap table or explicit indexed status. No repeat sitemap/recrawl submissions were made.

**Analytics standard-report ingestion is verified.** The correct Wye Design property has processed the labelled 2 October diagnostic. A conservative **5 October cutoff**, matching Search Console and allowing more than 48 hours of processing, is used for the comparison below; the Home UI can display 6–7 October, but those newer days were not declared final merely because selectable. These are recorded Analytics counts, not verified genuine customer counts.

| Analytics, labelled QA campaigns excluded | 29 September–5 October | 22–28 September | 8 September–5 October | 11 August–7 September |
| --- | ---: | ---: | ---: | ---: |
| Total users, filtered Events report | 1 | 0 | 1 | 5 |
| Sessions outside labelled QA campaigns | 1 | 0 | 1 | 5 |
| Engaged sessions outside labelled QA campaigns | 0 | 0 | 0 | 4 |
| Engagement rate | 0%, one recorded session | No denominator | 0%, one recorded session | 80% |
| Recorded events, QA excluded | 2 | 0 | 2 | 40 |
| `contact_cta_click` | Not observed | Not observed | 0 | 7 |
| `proposal_form_start` | Not observed | Not observed | Not observed | Not observed |
| `generate_lead` | Not observed | Not observed | 0 | 1, genuine-customer status unverified |
| `contact_email_click` | Not observed | Not observed | Not observed | Not observed |

The Events report uses only a temporary report filter: **Session campaign does not match regex `^(analytics_diagnostic_20261002|tracking_validation)$`**. No collection filter, consent setting or property configuration changed. Acquisition campaign rows independently identify `analytics_diagnostic_20261002` as **one session, one engaged session and six events**. Including that QA, both current windows have 2 sessions, 1 engaged session, 50% engagement rate, 8 events and 1 recorded user; the form start and CTA click are entirely removed by the QA exclusion. The remaining `(direct)` session has one page view and one session start, no engagement or enquiry interaction. Its genuine-customer status is unverified; do not call it organic growth. No current Organic Search session is recorded, compared with one in the previous 28 days and none in the previous seven. The older lead event remains unverified, not a confirmed customer enquiry. Missing consent and very small samples prevent conclusions about actual visitor or inbox volume.

**Production health:** read-only HTTP checks on 8 October verify nine key routes at 200, self-canonicals, `index, follow`, parseable schema and `Cache-Control: public, max-age=0, no-cache, must-revalidate`; the deployed Hereford title and guide links remain present. All three HTTP/www variants retain path/query through one 301 to the HTTPS apex and end at 200. The live sitemap returns 200 with 12 entries and unchanged truthful per-page dates. A nonexistent route returns 404/noindex with no canonical. A GET to `/api/submit` returns the expected 405 for a POST-only endpoint, establishing route availability only—not delivery. No POST, form submission, inbox test or new Analytics site visit was executed during this run; repeating empty-JSON validation was intentionally omitted because delivery is not in doubt. Existing 2 October POST validation and prior delivery evidence must not be presented as fresh tests.

Untouched exports remain local in Downloads and were analysed read-only with `scripts/analyse-search-console.mjs` using the current bundled runtime:

- Domain 28-day: `wyedesign.co.uk-Performance-on-Search-2026-10-08.xlsx`, SHA-256 `d9284e3cc6227d2af9dedc63c28e8a6d8b59997a970bf1566097665a8982a8d3`.
- Main-site 28-day: `wyedesign.co.uk-Performance-on-Search-2026-10-08 (1).xlsx`, SHA-256 `fa33d064f2e45f6f2a97c3c7237b39e4186a2462471624cee2d96274e0e2dcc0`.
- Main-site seven-day: `wyedesign.co.uk-Performance-on-Search-2026-10-08 (2).xlsx`, SHA-256 `d46727e8d6485071cdee111ee881c2fbf437dd008705756cebc48b0be28bbe22`.
- Domain seven-day: `wyedesign.co.uk-Performance-on-Search-2026-10-08 (3).xlsx`, SHA-256 `0b28a4c22f87f6b43b094ef7b7d0b30e40ab2e33bbe4fadcda0908e848c823b9`.

Evidence screenshots: `/private/tmp/wye-homepage-indexed-2026-10-08.jpg`, `/private/tmp/wye-indexing-overview-2026-10-08.jpg`, `/private/tmp/wye-sitemap-processed-2026-10-08.jpg`, `/private/tmp/wye-analytics-events-7day-qa-excluded-2026-10-08.jpg` and `/private/tmp/wye-analytics-campaigns-28day-2026-10-08.jpg`. There is no current login blocker or material production failure. Continue the existing experiment through its complete-period gate; investigate persistent relevant-query/ranking weakness afterward rather than introducing an overlapping edit from this mixed, tiny-click week. Qualified click/enquiry growth is still unproven.

## Conversion-path repair — 8 October 2026, deployed

The user asked to continue after the monitoring run. A narrow Luna Max source audit identified actual enquiry-path and measurement faults; these are technical corrections, not a second SEO content experiment. The existing Hereford/cost-guide copy, pricing, core offer, design, schema and sitemap dates remain unchanged.

**Changes and evidence:**

- Desktop and expanded mobile-menu “Request a proposal” links previously used `/contact`, stopping at the hero instead of the form. All three header proposal links now use `/contact#proposal`. Both mobile CTAs explicitly close the menu, including when the visitor is already on the contact page and only the hash changes. The existing CSS `scroll-margin-top: 7rem` was retained.
- `generate_lead` previously fired for every successful API response, including the honeypot's intentional `200 { success: true }` response that does not send email. It now requires `success: true` and a non-empty provider acceptance ID. The route and spam-handling response remain unchanged. Provider acceptance is still **not proof of inbox delivery or a qualified customer**.
- Analytics now initializes its consent-eligible configuration/event queue before events, preventing a script-loading race after acceptance. Form start is marked tracked only when the event is accepted for dispatch, allowing a later interaction after consent to be counted once. Interactions before consent are neither retained nor replayed; declined/unavailable consent remains disabled. Storage failures fail closed.
- Production Analytics is restricted to production builds on the exact canonical `wyedesign.co.uk` hostname. Development, localhost and Worker preview hosts cannot load or send to the production stream. The production `G-K2DXS9S4GV` fallback is preserved for the actual live site; `.env.example` documents this boundary.
- The middleware formerly redirected **every HTTP host**, including localhost, to the live site. It now restricts HTTPS canonicalization to the site's apex/www variants, preserving their production 301 behavior while keeping local previews local. This does not bypass TLS warnings or weaken live-site HTTPS.

**Verification and deployment:**

- Before edits, a GET-only sitemap/link audit checked all 12 pages, **201 internal link occurrences and 40 proposal-anchor links**: all routes returned 200 and no fragment targets were missing. The header CTA flaw was a wrong destination, not a broken link.
- `npm run check:conversions`: **31 tests pass** (25 utility/component/middleware tests plus six delegated-click/script-gating/route-contract tests). All provider, DOM and form responses are isolated synthetic mocks: no network, live form, production Analytics or inbox traffic. `npm run check:search-data`: **26 tests pass**. Type checks, final OpenNext production build and `git diff --check` pass. Luna Max independently reviewed the repair before deployment and added bounded integration coverage.
- Own-browser local preview at 1440×900 and 375×812 verified header navigation, same-page mobile menu closure, restored body scrolling and no horizontal page overflow. The form starts approximately 112px below the viewport top; header bottoms are 77px desktop and 69px mobile. Accepted local consent loads **zero** Google Analytics scripts.
- Existing Cloudflare authorization/account was confirmed without refreshing or broadening permissions. Deployment used the normal OpenNext cache-population workflow and `--keep-vars`; secrets were not displayed or changed. The existing `RESEND_API_KEY` secret name remains configured, verified read-only after deployment.
- Deployment history confirms **100% version `a85278a5-a3c0-4d4d-9ddb-ebf85427b3ae` at 8 October 2026, 10:15:49.446 UTC**. Source is the `be016b9` base plus the current recorded working-tree technical repair; it is not claimed to be committed/pushed. Rollback target: **`c5852a2e-b8cd-4109-9503-d2731a4be92a`**.
- At **10:16:20 UTC**, `node scripts/verify-conversion-deployment.mjs` verified live homepage/contact header anchors and SHA-256 byte-for-byte equality of **all ten rendered application JavaScript assets** with the tested local build, including the new contact chunk. This script uses public GETs only and does not execute Analytics.
- At **10:16:33 UTC**, nine key live pages retained 200/self-canonicals/indexable metadata/valid schema/low-cache HTML. The three HTTP/www variants remained one 301 to the HTTPS apex with path/query intact. Sitemap remained 200/12 entries with unchanged truthful dates; missing URL remained 404/noindex/no-canonical; form-route GET remained 405. No live POST or inbox-delivery test was made.
- Own-browser production checks verified the desktop header and mobile menu CTA land with the form unobstructed, menu closed, body scrolling restored and no horizontal overflow. The accepted live page loads the correct GA script; browser error logs are empty. Screenshot: `/private/tmp/wye-live-proposal-mobile-2026-10-08.jpg`. New processed Analytics events and live lead delivery were not claimed from these checks.

**QA attribution and monitoring boundaries:** two initial localhost-root navigation attempts reached the old live homepage via the original 301 and its browser-cached redirect, before the fresh QA-labelled URL verified the correction. Those visits are automated QA, never customer/organic evidence; their exact processed counts and attribution are not yet verified and cannot reliably be removed by campaign alone. Subsequent live navigation was explicitly labelled `utm_source=automated_test&utm_medium=qa&utm_campaign=conversion_validation_20261008`. Add this campaign to the temporary report exclusion regex: `^(analytics_diagnostic_20261002|tracking_validation|conversion_validation_20261008)$`. Check attribution when reports process; do not call an unlabelled Direct visit a customer or subtract an assumed number. No fields were filled and no live form was submitted. The complete-period metrics above end on 5 October and are unaffected by today's checks.

Continue measuring the unchanged 2 October Search-content experiment, with its first fully post-deployment 28-day window **3–30 October**, subject to reporting completion. Treat Analytics before/after the 8 October measurement repair as a known instrumentation boundary, not proof of increased demand. The latest weekly impressions improved but click/enquiry samples remain too small to establish qualified growth. The growth goal remains unachieved; there is no current deployment/login blocker.

### Live Analytics collection follow-through — 8 October, evening

The next goal turn classified the preceding technical deployment as progress, then checked actual collection rather than repeating the deployment or starting another SEO experiment. The existing own-browser Wye account still accesses Analytics property 549449391 and Search Console's wyedesign.co.uk domain property; no login/permission changes were needed.

- The unfiltered Analytics Events report for **Today / 8 October** initially showed **10 recorded events, one recorded user**: seven page views, one scroll, one session start and one user-engagement event. The custom CTA/form-start rows were not yet visible in that intraday table. This partial-day snapshot includes QA and is not a completed day, a customer count, or proof that custom tracking failed.
- To distinguish collection from processing delay, one controlled visit used **utm_source=automated_test, utm_medium=qa, utm_campaign=conversion_validation_20261008_followthrough**. It followed the desktop header proposal link once and focused the empty name field once. **No values were entered, no form was submitted and no email was sent.**
- **GA Realtime subsequently received the deployed custom events:** one active user; page_view **2**, contact_cta_click **1**, proposal_form_start **1** and session_start **1**. The two page titles are the homepage and contact page. These five snapshot events are automated QA, not qualified organic engagement or enquiries. No lead/key event was observed in this check.
- Drilling into the collected **contact_cta_click / destination** parameter verifies its actual received value is **/contact#proposal**, event count **1**. The earlier concern about missing custom events in the intraday table is therefore not evidence of a collection failure. New CTA and form-start collection is now verified separately from source tests and tag-script presence; generate_lead collection and inbox delivery remain untested in this follow-through.
- Realtime still shows **First user source (direct)** for the existing browser identity. That is not a genuine-customer or organic-source claim. Inspect the new session's campaign attribution once standard reporting processes; do not rely only on first-user source, assume exact QA subtraction, or combine the Realtime snapshot with the earlier intraday totals.
- Use the latest temporary report exclusion regex **^(analytics_diagnostic_20261002|tracking_validation|conversion_validation_20261008|conversion_validation_20261008_followthrough)$** on both sides of future comparisons. This is an instruction for future report views, not a new collection-filter or property-setting change. Preserve the earlier warning about the two unlabelled, redirected QA navigations.
- Search Console still reports its latest chart endpoint as **5 October**, last update **31 hours ago**. There is no newer complete Search period to compare tonight; the recorded morning comparisons remain the relevant complete-period evidence. No sitemap/recrawl request, source-code edit, copy change or deployment was made in this follow-through.

Evidence: /private/tmp/wye-analytics-realtime-followthrough-2026-10-08.jpg and /private/tmp/wye-cta-destination-received-2026-10-08.jpg. Google documents that [standard reporting can change while data processes for 24–48 hours](https://support.google.com/analytics/answer/11198161?hl=en-CA); a selectable intraday window is not final reporting. Continue the unchanged Search-content experiment through its complete-period gate, excluding QA. Collection verification advances measurement confidence, not the still-unproven qualified-growth outcome.

### Small-business visibility diagnosis — 8 October, evening

The preceding goal turn made progress by verifying actual CTA/form-start collection. This continuation inspected a specific unresolved visibility loss rather than generating another Analytics QA visit or overlapping the live Hereford/guide experiment. The existing source integration test covers consent-gated email-click dispatch; that is synthetic coverage, not newly verified live email-click collection or inbox delivery. No extra email click, form interaction, submission or test enquiry was made.

**New authoritative Search evidence:** the signed-in Wye domain property's Web Performance report was filtered to the **exact URL https://wyedesign.co.uk/small-business-web-design**, using the displayed three-month window **6 July–5 October**. All **92 daily rows** and all **24 visible query rows** were read from rendered table cells after loading completed; hidden/inactive metric columns were not used in calculations. This diagnostic history must not replace or be mixed with the recorded equivalent 7-day/28-day comparisons.

- The page has **456 impressions, zero clicks, UI-rounded average position 89.2** over that entire window. Summing all daily impression cells reproduces 456. Every nonzero day is between **11 and 27 August**; the last is 27 August with two impressions. The table then explicitly records **39 consecutive zero-impression days, 28 August–5 October**. The loss therefore predates the 2 October content experiment and 8 October conversion repair. It is not evidence that either October change caused the loss, nor evidence of previously achieved customer traffic.
- The 24 visible query rows sum to **453 impressions**, not the page total of 456. Keep the remaining **three unrepresented impressions unclassified**. Queries containing Hereford/Herefordshire or a Ross-on-Wye spelling account for **425 visible impressions**; queries containing `small business` or `sme` account for **24**. The four remaining visible impressions are other terms. These transparent intent buckets describe this page's history, not domain-wide or unique-user totals. The top exact terms are `web design hereford` (113), `web design ross-on-wye` (96), and `hereford web design` (34), all with zero clicks.
- Fresh **Manual actions** and **Security issues** reports both finish loading with **No issues detected**. This rules out a currently reported manual action/security issue, not all algorithmic or relevance effects. The same-day indexed-page evidence recorded above remains the indexing evidence; no new URL Inspection or indexing request was sent in this diagnosis.
- Scoped Git history contains no recorded change to the inspected route/shared service metadata between the 11 August commit and early September. Git history alone cannot prove the exact deployment state on 28 August or rule out an unrecorded external change.
- Google's official [ranking dashboard](https://status.search.google.com/incidents/XhUDXP7A67iHCD2kmbVu) records the September spam-update rollout from **24 September through 8 October** (US/Pacific dates). It overlaps the October content experiment and is an attribution confound, **not a diagnosed penalty or an explanation for the earlier August decline**. Google's [traffic-drop guidance](https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops) supports checking the page/query/date pattern and technical/manual-action evidence before changing content.

**Decision and next candidate, not implemented:** keep the live Hereford/guide experiment unchanged through its complete-period gate. The current small-business route uses broad, often non-specific answers such as scope being discussed in the proposal and costs being on another page; its historical exposure was overwhelmingly local rather than its named small-business intent. A reasonable later hypothesis is that a concise, factual buyer-focused clarification of the existing scope/content responsibilities, with an existing cost-guide link, will make this route more useful for small-business intent while Hereford remains the local-intent landing page. That is an inference from source content and query mix, not proof of keyword cannibalization or a ranking fix. Revalidate the exact-page/query pattern after the current experiment before testing it; do not redirect, noindex, clone city pages, change prices/offer, invent proof, or restore old metadata merely to chase this August impression burst. Measure qualified clicks as well as impressions and preserve the three missing-query impressions and tiny-click limitations.

No site code/copy, Analytics property settings, prices, deployment, sitemap submission or recrawl request changed during this diagnosis. There is no new login/security action needed, and qualified organic growth is still unverified. The additional evidence narrows the next decision without claiming that documentation or a future hypothesis is a deployed improvement.

Evidence: `/private/tmp/wye-small-business-search-evidence-2026-10-08.json`, `/private/tmp/wye-small-business-visibility-history-2026-10-08.jpg`, `/private/tmp/wye-manual-actions-clean-2026-10-08.jpg`, and `/private/tmp/wye-security-issues-clean-2026-10-08.jpg`.

### Readability repair — 8 October, deployed and verified

**Evidence and scope:** Google's public PageSpeed Insights report identified insufficient small-text contrast in the concept-project disclosure, footer enquiry explanation and copyright/legal row. The Chrome profiling connection required by the web-perf skill is unavailable; no DevTools trace was run, installed or implied. Public PageSpeed laboratory results and computed live styles are the evidence. This independent accessibility repair is not a new SEO content experiment.

Exactly three class-line changes remove faded text: `text-theme-text-light/70` becomes `text-theme-text-light` on the disclosure in `Portfolio.tsx`; `text-white/70` becomes `text-white` on the footer enquiry paragraph; `opacity-60` is removed from the footer legal-row wrapper. All wording, prices, palette, font sizes, spacing, links, proposal destinations, metadata, schema, sitemap dates, conversion code and backend settings remain unchanged. The legal wrapper's divider and hover links also become fully opaque; this is an expected bounded visual effect, not a claim of pixel-identical output.

Luna Max independently reviewed the source and the WCAG alpha-composited contrast calculations. The three small-text ratios improve from **3.713 to 7.937**, **4.447 to 7.078**, and **4.402 to 15.586** respectively. The [WCAG small-text minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) is 4.5:1, without rounding a failing value upward. These calculations are separately supported by the post-deployment contrast audit; they do not establish complete WCAG compliance.

**Test/publication proof:**

- Added six source-only readability regression tests. All **63 tests pass**: six readability, 31 conversion/integration and 26 Search-data checks. `git diff --check`, `npm run lint` and the final OpenNext production build pass.
- The cache-prepared OpenNext preview and production browser checks verify **375×812** and **1440×900**, no whole-page horizontal overflow, full-opacity repaired text and intact enquiry navigation. The proposal form lands at approximately **112px** below the viewport top, with header bottoms **69px mobile / 77px desktop**. No form values were entered or submitted.
- Existing Cloudflare account/login and the immediate rollback version were verified before publishing. The [documented OpenNext workflow](https://developers.cloudflare.com/workers/framework-guides/web-apps/opennext/) was used with `deploy --keep-vars`; no framework migration, dependency update, compatibility-date change or permission expansion was made. Deployment history confirms **100% version `a5a1f995-7c3a-4c12-ad6a-5244d736d7e6` at 8 October 2026, 21:40:37.142 UTC**. Rollback is `a85278a5-a3c0-4d4d-9ddb-ebf85427b3ae`, preserving the morning conversion repair.
- Production GET checks at **21:41–21:42 UTC** confirm all **ten main commercial/informational routes** at 200, one correct self-canonical, descriptions, `index, follow`, parseable JSON-LD and `public, max-age=0, no-cache, must-revalidate`. The rendered homepage/contact **ten application JavaScript assets match the local build byte-for-byte**. The rendered stylesheet `/_next/static/css/ac918ca0ca60716f.css` also matches: SHA-256 **0d6f0528a7208ba46bf579111b23e1d08a06dcff2c6a6b4b7ec715bfb92fb2b9**, **50,572 bytes**. Fresh HTML and browser-computed styles show all three repairs, so stale edge HTML is not observed and no further broad cache purge was performed.
- HTTP apex, HTTP www and HTTPS www retain path/query through one 301 to HTTPS apex, then 200. Sitemap returns 200 with 12 entries and unchanged truthful dates; a missing URL returns 404/noindex without a canonical. Form endpoint GET returns the expected 405: availability only, not fresh inbox delivery. No POST or email test was sent. The existing email secret's configured name was checked without reading or printing its value.

**Exact before/after laboratory results:** baseline [report z92s03quzl](https://pagespeed.web.dev/analysis/https-wyedesign-co-uk/z92s03quzl?form_factor=mobile), displayed 8 October 21:08:59 BST; post-deployment [report 4ha726kb6t](https://pagespeed.web.dev/analysis/https-wyedesign-co-uk/4ha726kb6t?form_factor=mobile), displayed 22:41:18 BST. Both are Lighthouse 13.5.0, HeadlessChromium 153.0.8010.36; mobile emulates Moto G Power/Slow 4G and desktop uses custom throttling.

| Displayed laboratory metric | Mobile before → after | Desktop before → after |
| --- | --- | --- |
| Performance | 100 → 99 | 100 → 100 |
| Accessibility | 96 → 100 | 96 → 100 |
| Best Practices / SEO | 100 / 100 → 100 / 100 | 100 / 100 → 100 / 100 |
| First Contentful Paint | 0.9s → 1.2s | 0.2s → 0.2s |
| Largest Contentful Paint | 1.5s → 1.6s | 0.4s → 0.4s |
| Total Blocking Time | 0ms → 0ms | 0ms → 0ms |
| Cumulative Layout Shift | 0 → 0 | 0 → 0 |
| Speed Index | 1.9s → 2.7s | 0.5s → 0.4s |

The foreground/background contrast check is explicitly listed under **Passed audits** in both post-deployment tabs. Desktop's displayed 0ms blocking time is rounded (calculator link reports 2ms); do not describe it as an exact measured zero. Mobile's one-point performance difference and timing changes are recorded, not hidden or rerun until a preferred score appears. A single before/after laboratory pair cannot establish a causal real-user speed regression or improvement. Both reports show **No Data** for real-user/CrUX measurements. [Google distinguishes laboratory and field data](https://developers.google.com/speed/docs/insights/v5/about); neither high scores nor clearing contrast failures proves qualified organic growth.

**QA exclusion:** browser checks use `readability_validation_20261008`; PageSpeed probes use `pagespeed_20261008` and `pagespeed_20261008_after`, all labelled `utm_source=automated_test&utm_medium=qa`. Future temporary report views should exclude **^(analytics_diagnostic_20261002|tracking_validation|conversion_validation_20261008|conversion_validation_20261008_followthrough|readability_validation_20261008|pagespeed_20261008|pagespeed_20261008_after)$** on both comparison periods where attribution is available. No GA collection filter or consent/property setting was changed, and this turn did not verify exact processed QA counts. Do not assume PageSpeed collected Analytics, subtract guessed test totals, or classify an existing Direct browser identity as a customer. Preserve the earlier unlabelled-redirect caveat. The complete Search/GA periods through 5 October are unaffected.

Evidence screenshots: `/private/tmp/wye-readability-live-mobile-2026-10-08.jpg`, `/private/tmp/wye-readability-live-footer-mobile-2026-10-08.jpg`, `/private/tmp/wye-readability-live-footer-desktop-2026-10-08.jpg`, `/private/tmp/wye-pagespeed-mobile-after-2026-10-08.jpg`, and `/private/tmp/wye-pagespeed-contrast-passed-2026-10-08.jpg`. Continue the **unchanged 2 October content experiment** through **3–30 October**, subject to complete reporting. This repair removes verified reading friction; more qualified clicks, impressions and enquiries remain unverified. No repeat indexing/sitemap request or new user login/security action is required.

### Qualified-search measurement refresh — 8–9 October, reporting through 6 October

This continuation made a read-only measurement improvement, not a new deployment or overlapping content experiment. The review crossed midnight and was recorded at **9 October 00:46 UTC / 01:46 BST**; the dated evidence filename retains the 8 October session-start date. The authorised Wye Design Search Console account's Web Performance report now includes **6 October**, with the UI showing its last update approximately **25–25.5 hours ago**. The actual comparison dates were checked in the date-range controls: **30 September–6 October versus 23–29 September** (seven days each), and **9 September–6 October versus 12 August–8 September** (28 days each). Search Console's daily dates use US/Pacific, not the Analytics property's local timezone. These rolling windows include pre-experiment days; neither is a fully post-2-October experiment assessment.

Two separate series were read: the unfiltered domain property, and a **United Kingdom + URLs containing `https://wyedesign.co.uk/`** view excluding the showcase hosts. The latter is URL-aggregated and may be partial; it must not replace or be directly subtracted from property-aggregated domain totals. Exact impressions below come from all three device rows, with country/page/query rows used as independent reconciliations where complete. Counts such as the UI's `1.76K`, `1.73K` and `2.58K` are not treated as exact. CTR and positions remain UI-rounded.

| Metric / series | Previous seven days → latest seven days | Previous 28 days → latest 28 days |
| --- | --- | --- |
| Domain impressions | 107 → 255 (+138.32%) | 1,756 → 798 (−54.56%) |
| Domain clicks | 0 → 0 | 1 → 1 |
| Domain CTR / position, UI-rounded | 0% / 57.2 → 0% / 49.1 | 0.1% / 63.7 → 0.1% / 52.4 |
| UK main-site filtered impressions | 114 → 267 (+134.21%) | 2,575 → 883 (−65.71%) |
| UK main-site filtered clicks | 0 → 0 | 0 → 0 |
| UK main-site CTR / position, UI-rounded | 0% / 72.1 → 0% / 58.5 | 0% / 74.8 → 0% / 63.7 |
| Hereford page, UK impressions | 82 → 176 (+114.63%) | 1,432 → 620 (−56.70%) |
| Hereford page, UK clicks / position | 0 / 70.9 → 0 / 56.2 | 0 / 72.7 → 0 / 60.9 |

**Relevant visibility is mixed, not established growth.** The domain country table contains 243 versus 103 UK weekly impressions: UK searches explain **140 of the domain's 148 additional weekly impressions (94.59%)**. In the UK main-site page view, Hereford's +94 and About's +43 explain 137 of the +153 URL-aggregated weekly impressions. This is a promising visibility signal, not proof of customer qualification or of the October changes causing it. The longer comparisons are substantially weaker, and the rankings still sit mostly beyond page one.

The complete visible UK main-site query tables contain **34 seven-day rows** and **52 28-day rows**. Their impression sums reconcile to **267/114** and **883/2,575** respectively; no additional missing-query impressions are inferred in these particular views. All visible query clicks are zero. `web design hereford` has 29 versus 14 weekly impressions (position 50.6 versus 58.5), but 91 versus 332 over 28 days (53.6 versus 74.4). Do not select a single growing spelling to claim Ross-on-Wye growth: all visible queries matching `ross[ -]on[ -]wye` sum to **31 versus 43** weekly impressions (−27.91%), and **196 versus 619** over 28 days (−68.34%). The exact `web design ross-on-wye` spelling is 0 versus 26 weekly and 78 versus 335 over 28 days; `web design ross on wye` is 18 versus 9 weekly and 62 versus 138 over 28 days. These are transparent visible-query buckets, not unique people or a proven comprehensive local market.

**Preserved click discrepancy:** the unfiltered 28-day report has one click in each period. Its country table assigns the latest click to the UK and the previous click to India. Its unfiltered Pages top-ten table shows one latest homepage click and one previous Hereford click. However, the UK-only Pages top-ten view shows zero clicks on every displayed row, and adding the main-site URL filter produces a zero-click chart. The UK-only property chart still shows one latest click. The Days view displays “Table omitted as it contains no additional information”, so this diagnostic did not establish the click's date. Do **not** join the separate country/page rows to label it a confirmed UK homepage click, treat filtered zero as definitive absence of UK traffic, or attribute the click to the October experiment. The two top-ten page captures are explicitly incomplete and their impression sums are URL-aggregated, not property totals.

Google documents [filter/aggregation, privacy and processing discrepancies](https://support.google.com/webmasters/answer/17010575?hl=en) and [dimension/canonical/date behaviour](https://support.google.com/webmasters/answer/17011259?hl=en). Country indicates search origin, not a qualified customer. Zero-impression position cells displayed as zero are unavailable, not rank zero. The guide's unfiltered page row now has six impressions and zero clicks; there is no guide row in the UK main-site comparison, so this is not claimed as six UK buyer impressions.

**Decision:** keep the deployed Hereford/cost-guide content unchanged. The first fully post-experiment weekly window remains **3–9 October** and the first 28-day window **3–30 October**, both subject to complete reporting. Preserve the pre-existing small-business diagnostic and later buyer-clarity hypothesis; don't rewrite Ross/Hereford copy from this partial post-change week or attribute the September/August losses to October. No new Analytics visit/report, form interaction/submission, inbox test, source code change, deployment, indexing request, sitemap submission or account/security setting was made in this measurement continuation. The earlier same-day production verification remains the technical evidence; no fresh technical/GA result is implied. Genuine qualified clicks, engagement and enquiries remain unverified, with no new user action needed.

Evidence: `/private/tmp/wye-qualified-search-evidence-2026-10-08.json` (normalised visible counts checked against the captured rows), and `/private/tmp/wye-uk-main-search-28day-2026-10-08.jpg`. Hidden/stale DOM reports were excluded; the query capture was labelled only after `Top queries` and the complete pagination were visibly confirmed.

Luna Max independently checked the date-window lengths, row sums, percentage changes and query buckets. The comparable device/country totals and UK main-site page/query totals reconcile. Its review also flagged the non-comparable top-ten page sums: **1,013/2,325** in the unfiltered page table versus property totals **798/1,756**, and **912/2,141** in the UK-only page table versus UK property totals **772/1,731**. Preserve these captures as incomplete, differently aggregated views, not a reconciled page distribution or a denominator for page shares. The exact cause of the one-click discrepancy remains unresolved; Google's documented aggregation/filter behaviour is a limitation, not proof of a specific missing row or customer action. The overnight date metadata was corrected to an 8–9 October observation range.

### Search-intent and link-evidence refinement — 9 October

The preceding turn made progress by adding the separate UK main-site comparison. This continuation **reanalysed that same verified dataset through 6 October**, not new traffic or a newer completed period. A bounded read-only Luna Max review classified the 52 visible query strings against the actual Hereford/Pricing offer. Independent local recalculation verifies the source SHA-256, exactly 52 unique assignments, all row counts, both impression totals and zero visible query clicks.

| Visible-query relevance proxy | Latest / previous seven-day impressions | Latest / previous 28-day impressions |
| --- | ---: | ---: |
| Explicit website-service wording | 210 / 105 (+100%) | 758 / 2,320 (−67.33%) |
| Exact `wye design` brand | 4 / 1 | 6 / 0 |
| Ambiguous design or other-brand wording | 49 / 7 | 100 / 202 |
| Other service or unestablished location fit | 4 / 1 | 19 / 53 |
| Total, matching the recorded UK main-site query views | 267 / 114 | 883 / 2,575 |

These are **intent proxies, not qualified buyers or verified service eligibility**. Generic design terms, Wye Media and unverified company tokens stay separate; graphic design, standalone SEO, web-application agency and Widnes terms have their offer/location fit unestablished by this copy. Hereford/Herefordshire is a focus, not an exclusive service boundary: no refusal or new location claim is inferred. WordPress, optimisation and generic UK terms retained in the explicit wording bucket have their actual scope/geography unverified. Exact assignments, rules and edge cases are saved in the evidence JSON; this manual classification applies to these 52 observed strings, not arbitrary future queries. Explicit website-service wording accounts for **105 of the 153 additional weekly impressions (68.63%)**; ambiguous wording accounts for 42 (27.45%). The raw weekly increase therefore should not be relabelled wholesale as qualified growth. Tiny/zero clicks and the longer decline remain decisive limitations.

**New link-report evidence:** the authorised Google property shows **External links: Total 0**, with No data for linked pages/sites/text. Its internal drill-down has **14 reported links across four displayed targets**, pagination 1–4 of 4: Contact 4, Hereford 4, homepage 3 and Trades 3. Google's official [Links-report guidance](https://support.google.com/webmasters/answer/9049606?hl=en) says this is a sample, not a comprehensive or necessarily current link inventory. It neither proves the site has no real backlinks nor diagnoses the ranking decline. The missing guide row is not proof of an orphan: read-only public GETs on 9 October verify 200, intended self-canonicals/titles, unchanged low-cache headers and two parseable schema blocks on both Hereford and the guide; Hereford has two guide anchors and the guide has two Hereford anchors. No Analytics JavaScript was executed by these GETs.

**Inspection limitation and next action:** a fresh Hereford Google Index lookup in agent-created tab **15** remained visually loading and did not return a new inspection result, even though Links loaded normally. Its existing handle was retained for follow-through, not restarted or turned into another crawl/indexing request. No new login or website-indexing failure is claimed. The independently recorded **2 October Google crawl and saved changed HTML** remains historical evidence, not a fresh result. The user was optionally asked for a genuine completed client project or existing public business-profile URL and the details permitted for publication. That could support a later factual trust improvement; no real project, review, identity, office or result was invented, and no outreach/account creation/link purchase took place.

No site copy/code, price/offer, deployment, tracking setting, sitemap submission, recrawl request or live form submission changed. Keep the current experiment intact through its complete-period gate. This review narrows the relevance and trust-evidence questions; it does not establish organic growth or prove that a specific new edit will increase rankings. Evidence: `/private/tmp/wye-query-intent-and-links-2026-10-09.json` and `/private/tmp/wye-google-links-sample-2026-10-09.jpg`.

**Public trust-source check, later on 9 October:** the current source has no social/review/map profile anchors. A read-only live homepage GET confirms no LinkedIn, Facebook, Instagram, Trustpilot, Google Maps or `g.page` anchors, while the existing business-email and About links are present. One focused exact-domain search excluding the site's own domain returned no results. These narrow checks do **not** prove that no business profile or completed project exists. No verified external trust source was recovered, so do not add `sameAs`, reviews, project results or founder/office claims from assumptions. The live footer's existing phrase “will actually give results” is a broad marketing promise, not measured customer evidence; it must not be cited as proof that the growth goal has been achieved. A later factual trust/copy improvement still needs verified evidence and must not overlap the active content experiment. No public profile, account, outreach, new tracking traffic or site change was created. Avoid repeating this same public lookup without a new profile/project URL or other evidence.

### Analytics comparison follow-through — 9 October

Read-only standard Events and Traffic acquisition reports were inspected in the authorised own-browser account for property **549449391 / G-K2DXS9S4GV**. Start/end and comparison input values were verified before applying each date range. The cutoff is conservatively **6 October**, more than 48 hours old and matching Search's displayed calendar cutoff; this does not assert that the two properties use the same reporting timezone or guarantee all real visitors were measured. Values below were read only after the loading indicator disappeared and the UI reported **100% of available data**. The newer, unfiltered 8 October view contains labelled QA and was marked mostly complete; it is not used for growth claims.

The temporary **Session campaign / does not match regex** exclusion recorded in the 8 October readability section was applied independently to Events and acquisition, on both sides of each comparison. It is a report-view filter, not a new collection filter or property-setting change. Full pagination was checked: two event rows for the weekly view, eight event rows for the 28-day view, and two channel rows for the 28-day acquisition view.

| Recorded Analytics metric, labelled QA excluded | 30 September–6 October | 23–29 September | 9 September–6 October | 12 August–8 September |
| --- | ---: | ---: | ---: | ---: |
| Total users | 1 | 0 | 1 | 3 |
| Sessions | 1 | 0 | 1 | 3 |
| Engaged sessions | 0 | 0 | 0 | 3 |
| Engagement rate, UI display | 0% | 0%* | 0% | 100% |
| Organic Search sessions | 0 | 0 | 0 | 1 |
| `proposal_form_start`, recorded count | 0† | 0† | 0† | 0† |
| `generate_lead`, recorded count | 0† | 0† | 0 | 1 |
| `contact_email_click`, recorded count | 0† | 0† | 0† | 0† |
| `contact_cta_click`, recorded count | 0† | 0† | 0 | 6 |

\* The previous week has no recorded sessions, so its displayed 0% has no visitor denominator and must not be interpreted as a measured engagement rate. † These requested interaction events have no rows in the complete filtered event table; zero means **no reported counts in this view**, not proof of no actual visitors or inbox enquiries. The current two events are one `page_view` and one `session_start`. The one current session is Direct, with unverified customer identity. Previous-period lead/CTA records are not independently verified customer or delivery outcomes. Unlabelled QA remains an attribution limitation; no guessed subtraction was made.

**Decision:** no genuine organic-acquisition or enquiry growth is established. The latest weekly 1-versus-0 and 28-day 1-versus-3 user counts are too small to justify a new copy experiment, and neither window is wholly post-deployment. Keep the 2 October content unchanged until the complete 3–9 October and then 3–30 October evidence gates. No site visit, tracking event, form interaction/submission, inbox test, deployment, recrawl, sitemap submission, Analytics collection setting or security permission change was made in this comparison check. Evidence: `/private/tmp/wye-ga-comparisons-2026-10-09.json` and `/private/tmp/wye-ga-28day-qa-excluded-2026-10-09.jpg`.

### Reported UK click-date resolution — 9 October

The earlier comparison-mode Days table was omitted, so it did not establish the latest reported UK click's date. A later **single-period** Web report, with **Country: United Kingdom only**, exposes an actual daily table. The Filter tab's start/end inputs verify **9 September–6 October**; no Page or Query filter was added, and the reporting cutoff has not advanced. Its chart shows one click and 772 impressions, with the UI last-update label approximately 29 hours ago.

All **28 visible daily rows**, pagination **1–28 of 28**, were captured from the sole visible table using separate rendered Day/Clicks/Impressions cells. The rows sum exactly to **one click / 772 impressions**. The only positive-click row is **17 September 2026: one click, 13 impressions**. Thus this reported UK-origin click **predates the 2 October content deployment and cannot be attributed to it**. This supersedes the earlier unresolved-date limitation, not the preserved page/query discrepancy.

The domain property includes showcase hosts; UK origin is not proof of service fit or a genuine customer. Landing page, query and customer identity remain unresolved. Do not join the independent unfiltered Pages and Countries rows to call this a verified UK homepage click. Hidden CTR/position cells and inactive reports were excluded; a failed concatenated-text parse was rejected rather than treated as zero data. No website visit, enquiry interaction/submission, test traffic, source edit, deployment, recrawl, sitemap submission or permission change occurred. Keep the current experiment unchanged and await the complete 3–9 October and 3–30 October comparisons.

Evidence: `/private/tmp/wye-uk-click-date-2026-10-09.json`, SHA-256 `fd0974ede6713392511c0402dd89b3a9d805961f73b8110bc390d219005e2742`, independently reconciled locally; screenshot `/private/tmp/wye-uk-click-date-2026-10-09.jpg`. This is newly clarified historical attribution, not new traffic or a growth outcome.

### UK click attribution limitation — 9 October

A bounded follow-through narrowed the already verified UK click date to **17 September only**, with both actual date inputs checked, **Web / Country: United Kingdom**, and no Page or Query filter. The loaded chart shows **one click / 13 impressions**, UI CTR **7.7%** and position **38.4**. All **seven disclosed query rows** (pagination **1–7 of 7**) have zero clicks and sum to eight impressions. All **three disclosed page rows** (pagination **1–3 of 3**) also have zero clicks: Hereford eight impressions, Trades two and homepage one, summing to 11 page impressions. These are exact visible counts, not rounded substitutes for the property total.

This narrows the earlier limitation: the discrepancy remains even with complete pagination in this single-day filtered view, so an undisplayed next page is not sufficient to explain this particular capture. Complete pagination does not prove Google discloses all underlying activity. The report still does **not** establish the click's landing page or query, main-site-only status, customer identity or qualified growth; the cause of the page-level discrepancy remains unverified. Do not join an independent unfiltered page row to the UK chart or treat filtered zeros as proof that no UK person clicked. Keep property totals and disclosed page/query metrics as distinct series. Do not repeat this historical attribution diagnostic unless changed reporting or a new authoritative export supplies additional evidence. The click predates the 2 October experiment; no SEO change, form interaction, deployment or new customer claim followed.

Evidence: `/private/tmp/wye-uk-click-attribution-2026-10-09.json` and `/private/tmp/wye-uk-click-attribution-2026-10-09.jpg`. The screenshot shows all three page rows and their pagination; the JSON preserves the independently verified date inputs, chart and all disclosed query/page cells.

### Structured-data factual check — 9 October

A bounded Luna Max source review, followed by the primary agent's public GET checks of `/pricing`, `/contact`, `/web-design-hereford` and the actual `/website-cost-guide`, found no confirmed price, email, publication-date, unsupported review/address or schema-type mismatch in the checked data. The live Hereford FAQ's first-24-month totals reconcile with the visible pricing offer: £30 × 24 = £720 and £495 + (£15 × 24) = £855. The guide retains its truthful 2 October Article dates. JSON parsing and factual alignment are not claims of Google rich-result eligibility, ranking gains or qualified customer growth; the GETs did not execute Analytics JavaScript or submit forms.

The reviewer flagged `Organization.contactPoint.areaServed: "GB"` in `src/app/layout.tsx`, while the Organization's separate area list and visible copy emphasise Hereford/Herefordshire. The primary agent checked [Schema.org's ContactPoint definition](https://schema.org/ContactPoint): the field describes service coverage and accepts text, so this is not a confirmed type error. Local **focus** is not evidence that clients elsewhere in Britain are refused. The user has been asked whether nationwide coverage is intentional; no answer has arrived as of this check. **Do not narrow the service boundary or call the current GB value false without that business fact.** No source-code edit, new claim, pricing/core-offer change or deployment was made. Revisit this specific ambiguity only when the owner answers or another authoritative business fact supplies the missing scope; do not repeat the completed audit merely to create activity.

## Verified pre-experiment baseline

Search Console was inspected on 1 October 2026. Its latest complete performance date was 28 September. GA's visible home view covered 24–30 September. Do not mix these windows.

| Metric | 1–28 September | 4–31 August |
| --- | ---: | ---: |
| Search clicks | 1 | 2 |
| Search impressions | 1,119 | 1,324 |
| CTR | 0.1% | 0.2% |
| Average position | 55.9 | 66.1 |
| Hereford landing-page impressions | 971 | 942 |
| Hereford landing-page clicks | 0 | 1 |
| Hereford landing-page average position | 63.35 | 77.38 |
| Tracked Hereford query impressions | 116 | 177 |
| Tracked Hereford query clicks | 0 | 0 |
| Tracked Hereford query position | 57.14 | 69.97 |
| Tracked Ross-on-Wye query impressions | 41 | 128 |
| Tracked Ross-on-Wye query clicks | 0 | 0 |
| Tracked Ross-on-Wye query position | 61.66 | 63.27 |

The domain impression counts and page/query positions are now exact exported values, reconciled on 2 October for these unchanged baseline dates. The site-wide position and displayed CTR remain UI-rounded. Tiny click counts do not support confident conversion or CTR conclusions. The main-site-only URL-aggregated baseline above is separate and must not be mixed with this domain-property series.

The latest complete 7-day comparison (22–28 September against 15–21 September) was 0 versus 1 click, 136 versus 126 impressions, 0% versus 0.8% CTR, and position 56.7 versus 52.8.

The indexing report, updated 21 September, showed 7 indexed and 9 not indexed: 2 redirects, 6 discovered-currently-not-indexed and 1 crawled-currently-not-indexed. Duplicate/alternative-canonical counts were zero. The existing sitemap was successful with 11 pages and was last read 30 September.

GA4 property: account 404259164, property 549449391, measurement ID G-K2DXS9S4GV. The visible 24–30 September view showed “No data received from your website yet”, zero active users/events/key events. Full engagement/enquiry comparisons remain unavailable; this is not proof of zero visitors or zero enquiries.

## Hypothesis and changes

The Hereford landing page has recurring impressions but ranks well outside the first page and supplies few concrete buying details. Make its content and search snippet more useful while retaining the existing visual design, prices and offer. Add one genuinely useful supporting guide rather than city-swapped or bulk generated landing pages.

- Hereford title: `Web Design Hereford — £495 or £30/month | Wye Design`.
- Description and opening copy explain the 3–5 page scope and both payment routes, including the monthly commitment and ongoing service cost.
- Add practical scope, ownership, process and FAQ details; link to the existing, clearly labelled design concepts.
- New `/website-cost-guide`: actual first-24-month totals (£720 monthly versus £855 upfront including service), ownership differences and a five-question quote checklist. It describes Wye Design's own prices, not a claimed local-market price survey.
- Link the guide from Hereford, pricing and the homepage's pricing section; link back to the service pages and proposal form.
- Keep valid Service/FAQ/Breadcrumb data on Hereford; add factual Article/Breadcrumb data to the guide.
- Add the guide to the low-cache HTML middleware and sitemap. Only the changed homepage, Hereford, pricing and guide carry the October update date; untouched pages keep their previous date.

No ranking, lead volume, commissioned client result, testimonial, office or location claim has been invented. Prices and ownership terms were checked against the existing pricing component before writing the comparison.

## Checks and evidence

- `npm run lint`: passed.
- `npm run build`: passed.
- Final Cloudflare/OpenNext package build after copy refinements: passed.
- `npm run check:seo`: passed against both the normal Next.js build and the final cache-prepared OpenNext/Cloudflare preview. Eight checks (four pages at 375px and 1440px) covered correct canonical metadata, low-cache HTML headers, valid JSON-LD, internal guide links, the 12-page sitemap, unchanged-page date preservation, 404/noindex/no-canonical behavior, and no browser runtime errors or whole-page horizontal overflow.
- The direct Wrangler preview initially logged read-only cache misses because it skipped OpenNext's cache-population step. Re-running through `opennextjs-cloudflare preview` populated the prerendered asset cache and cleared those warnings. Use the documented OpenNext preview/deploy workflow; no app configuration change was needed.
- The guide's price table scrolls within its own region on small screens and has an explicit scrolling hint.
- A fresh live browser test used `utm_source=automated_test&utm_medium=qa&utm_campaign=tracking_validation`. Before consent there was no `gtag`; after acceptance the tag loaded successfully and sent a `page_view` to G-K2DXS9S4GV, receiving HTTP 204 from Google Analytics. This verifies basic collection transport, not a genuine visitor, lead, complete GA report, or all conversion-event delivery.
- No live enquiry form was submitted during this work. Earlier same-day endpoint validation with incomplete JSON returned 400 without sending email.
- Earlier same-day live checks verified HTTPS 200, single-hop HTTP/www 301 preserving path/query, low-cache HTML headers, correct canonicals/schema, healthy sitemap, and a real noindex 404 without canonical.

## Deployment and Google follow-through

1. Deployment and production verification completed on 2 October; use the version and evidence above. Future publishing should retain the narrow existing authorization and documented OpenNext workflow. Do not expose tokens or broaden permissions.
2. Search Console sitemap resubmission accepted on 2 October; monitor its next read for the 12-page count and errors. “Submitted successfully” is not proof every URL is indexed.
3. Priority indexing requests for Hereford and the guide were accepted on 2 October. Monitor processing; do not repeat submissions unless justified by a genuine indexing issue. “Indexing requested” is a queue entry, not proof of indexing or a ranking gain.
4. Keep the 1 October pre-experiment baseline above. Compare complete 7-day and 28-day windows, plus matching page/query results, after the 2 October deployment. Give the experiment at least 28 complete days where possible and avoid overlapping major changes. The first fully post-deployment 28-day window is 3–30 October, subject to Search Console's reporting delay.

The weekly heartbeat `wye-design-seo-growth-monitor` remains active and pursues evidence-backed improvements, not only passive reporting. It reads this file, follows any unfinished Google requests, measures this now-live experiment and notifies only for meaningful changes or a new required action. The Cloudflare login blocker is resolved; do not report it as current or republish this experiment unnecessarily.

## Next evidence gate

Success must be verified in Search Console: more qualified organic clicks and impressions over comparable complete periods, with landing-page/query detail and sample-size caveats. Check whether the Hereford page's ranking distribution and relevant long-tail visibility improve; do not attribute all site-wide changes to this edit. An increased impression total alone is not an enquiry outcome.

If impressions grow but relevant positions remain too low, use the measured queries and factual business evidence to choose the next useful content or internal-link change. Genuine business proof and relevant mentions may be needed; do not buy links, fabricate proof, spend money or message third parties without specific authority.

## Guidance used

Google's [people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) informed the concrete scope/cost content. Its [sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) informed truthful per-page modification dates. Local source and live measurements remain the evidence for this site's prices and performance.
