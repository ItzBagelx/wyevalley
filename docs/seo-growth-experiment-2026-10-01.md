# Wye Design organic growth experiment — 1 October 2026

## Status

**Deployed and verified live on 2 October 2026.** The user requested use of the task's own browser. Its authenticated Cloudflare session successfully refreshed the existing Wrangler authorization with narrow account/user/Workers/routes/zone permissions. The correct Wye Design account was verified. Publication dates were moved truthfully to 2 October before the final rebuild. No new account, wider security access, paid service, artificial traffic or outreach has been created.

The organic-growth goal is not complete. Publication and the new guide's Google indexing are verified; a measurable growth outcome is a separate evidence gate. Do not describe the experiment as successful until qualified clicks and impressions improve over comparable complete periods.

- Worker: `wyevalley`; account `b9f9a083ebaf2f893d196636eb8d95f0`.
- Published version: `c5852a2e-b8cd-4109-9503-d2731a4be92a`.
- Previous production version, retained for rollback: `153f2e58-7e33-4087-9988-79740bee7b91`.
- Source: prepared commit `546b4b0` plus the 2 October publication-date corrections recorded in Git.
- `npm run lint`, final OpenNext build, `git diff --check`, local Cloudflare preview checks and `SEO_CHECK_URL=https://wyedesign.co.uk npm run check:seo`: passed on 2 October.
- Production verifies all four changed pages at 375px and 1440px: HTTP 200, correct self-canonicals/descriptions/JSON-LD, internal links, no whole-page horizontal overflow or browser runtime errors; sitemap has 12 pages and truthful per-page dates; missing URL returns 404 with noindex and no canonical.
- HTTP apex, HTTP www and HTTPS www each return a single 301 to HTTPS non-www, retaining the path and query.
- Empty-JSON validation at `/api/submit` returns 400 with the required-fields message; this did not send email and is not a new inbox-delivery test.
- Search Console accepted the refreshed sitemap with “Sitemap submitted successfully”. Its table now records submission on 2 October but still shows the previous 30 September read / 11 discovered pages. That delayed count does not yet confirm Google processed the live 12-page sitemap.
- Priority Hereford and guide recrawl requests: both accepted on 2 October. Search Console displayed “Indexing requested” and confirmed each URL was added to the priority crawl queue. Hereford was already indexed; the new guide was “URL is unknown to Google” before the request. Do not interpret acceptance as the updated content being indexed or ranking higher.
- Own-browser Analytics access is verified for the correct Wye Design property. In this browser Wye Design is Google account index `authuser=0` (the previous Safari index `authuser=1` selected a different account and was corrected without granting new access). On 2 October the property home still showed “No data received from your website yet”, with 0 active users/events/key events for 25 September–1 October. Full engagement/enquiry comparisons remain unavailable, not proven zero traffic or zero enquiries. Navigate to the property with the verified Wye account, not a browser-specific index copied blindly from another browser.

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

## Verified pre-experiment baseline

Search Console was inspected on 1 October 2026. Its latest complete performance date was 28 September. GA's visible home view covered 24–30 September. Do not mix these windows.

| Metric | 1–28 September | 4–31 August |
| --- | ---: | ---: |
| Search clicks | 1 | 2 |
| Search impressions | approximately 1.12K | approximately 1.32K |
| CTR | 0.1% | 0.2% |
| Average position | 55.9 | 66.1 |
| Hereford landing-page impressions | 971 | 942 |
| Hereford landing-page clicks | 0 | 1 |
| Hereford landing-page average position | 63.4 | 77.4 |
| Tracked Hereford query impressions | 116 | 177 |
| Tracked Hereford query clicks | 0 | 0 |
| Tracked Hereford query position | 57.1 | 70.0 |
| Tracked Ross-on-Wye query impressions | 41 | 128 |
| Tracked Ross-on-Wye query clicks | 0 | 0 |
| Tracked Ross-on-Wye query position | 61.7 | 63.3 |

The site-wide impression totals and displayed CTR are UI-rounded, not exact exported values. Tiny click counts do not support confident conversion or CTR conclusions.

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
