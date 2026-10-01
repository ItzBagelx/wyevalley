# Wye Design organic growth experiment — 1 October 2026

## Status

Prepared locally; **not yet deployed**. Cloudflare's existing deployment login has expired and cannot refresh automatically. Safari and the task's in-app browser both require Cloudflare sign-in. The user has been asked to sign in to the existing account in Safari. No new account, wider security access, paid service, artificial traffic or outreach has been created.

The organic-growth goal is not complete. Do not describe these edits as live, indexed or successful until those separate outcomes are verified. The original site remains live during this login blocker.

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

1. When the user has signed in, refresh Wrangler's existing deployment login using the minimal account/user/Workers/routes/zone scopes required by this already-deployed site. Do not expose tokens or broaden permissions. If a genuinely new access grant or legal agreement is requested, use the normal approval boundary.
2. Rebuild the final OpenNext package and run the repeatable checks against its local preview. The tests default to a local server on port 3084 and accept `SEO_CHECK_URL` for another local or live base URL.
3. Deploy the existing `wyevalley` Worker using the project's documented workflow. Do not change the account, prices, DNS, security protections or hosting provider.
4. Run `SEO_CHECK_URL=https://wyedesign.co.uk npm run check:seo`. Verify the actual updated Hereford title, new guide, HTTPS/canonical/cache behavior and sitemap in production. Record the actual deployed version/date here. If publication is on a later date, update the guide's publication date and changed-route lastmod values truthfully before deploying, including the matching test expectations.
5. Request indexing in the authorised Search Console session for the updated Hereford page and new guide. Verify the sitemap submission/read state. “Indexing requested” is a queue entry, not proof of indexing or a ranking gain.
6. Keep the 1 October pre-experiment baseline above. Compare complete 7-day and 28-day windows, plus matching page/query results, after the actual deployment date. Give the experiment at least 28 complete days where possible and avoid overlapping major changes.

The weekly heartbeat `wye-design-seo-growth-monitor` remains active and now pursues evidence-backed improvements, not only passive reporting. It reads this file, completes pending deployment when authorised access is available, measures the experiment and notifies only for meaningful changes or a new required action. Do not repeatedly notify the unchanged login blocker.

## Next evidence gate

Success must be verified in Search Console: more qualified organic clicks and impressions over comparable complete periods, with landing-page/query detail and sample-size caveats. Check whether the Hereford page's ranking distribution and relevant long-tail visibility improve; do not attribute all site-wide changes to this edit. An increased impression total alone is not an enquiry outcome.

If impressions grow but relevant positions remain too low, use the measured queries and factual business evidence to choose the next useful content or internal-link change. Genuine business proof and relevant mentions may be needed; do not buy links, fabricate proof, spend money or message third parties without specific authority.

## Guidance used

Google's [people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) informed the concrete scope/cost content. Its [sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) informed truthful per-page modification dates. Local source and live measurements remain the evidence for this site's prices and performance.
