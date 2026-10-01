import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/PageHero";
import SiteFrame from "../../components/SiteFrame";
import StructuredData from "../../components/StructuredData";
import { absoluteUrl, pageMetadata, siteConfig } from "../../lib/site";

const title = "Small-Business Website Costs: Monthly vs Upfront";
const description = "Compare Wye Design's £30/month and £495 upfront website options, including 24-month totals, ownership, hosting and a checklist for comparing quotes.";

export const metadata: Metadata = pageMetadata(title, description, "/website-cost-guide");

const questions = [
  ["Which pages are included?", "Ask for a named page list, not just a page count. A home page, services, about and contact route may be enough for one business; another may need separate service pages."],
  ["What is included after launch?", "Confirm hosting, domain renewal, SSL, maintenance and content-update arrangements. Ask which work is included and which would need a separate quote."],
  ["When do I own the site?", "Get the ownership date and handover arrangements in writing. Ask what happens to the domain and site if you stop the ongoing service or move provider."],
  ["What would increase the quote?", "Discuss extra pages, bookings, online payments, e-commerce, specialist integrations and copy or photography needs before agreeing the scope. Do not assume these are part of a standard brochure website."],
  ["What will be checked before launch?", "Ask how mobile layouts, contact details, form delivery, page titles and search-engine access will be checked. A working contact form matters more than an unsupported promise of first-page rankings."],
] as const;

export default function WebsiteCostGuidePage() {
  return (
    <SiteFrame>
      <StructuredData data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Article",
            "@id": absoluteUrl("/website-cost-guide#article"),
            headline: title,
            description,
            mainEntityOfPage: absoluteUrl("/website-cost-guide"),
            datePublished: "2026-10-01",
            dateModified: "2026-10-01",
            author: { "@type": "Organization", name: siteConfig.name, url: absoluteUrl("/about") },
            publisher: { "@id": absoluteUrl("/#organization") },
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
              { "@type": "ListItem", position: 2, name: "Website cost guide", item: absoluteUrl("/website-cost-guide") },
            ],
          },
        ],
      }} />
      <PageHero
        eyebrow="A practical website cost guide"
        title="What does a small-business website actually cost?"
        intro="Compare the build price, ongoing payments and ownership terms together. This guide uses Wye Design's current prices for a custom 3–5 page website; it is not a survey of every web designer's prices."
      >
        <Link href="/pricing" className="rounded-full bg-theme-accent px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90">
          View the current packages
        </Link>
      </PageHero>
      <article className="bg-theme-bg-light px-6 py-20 md:py-24">
        <div className="mx-auto max-w-4xl space-y-16">
          <p className="text-sm text-theme-text-light">By <Link href="/about" className="underline underline-offset-4">Wye Design</Link> · Published <time dateTime="2026-10-01">1 October 2026</time></p>
          <section aria-labelledby="cost-comparison">
            <h2 id="cost-comparison" className="text-3xl md:text-4xl">Monthly or upfront: compare the first 24 months</h2>
            <p className="mt-5 text-lg leading-relaxed text-theme-text-light">
              The two options spread payment differently and give you ownership at different times.
              Here are the totals using the published package payments, including 24 months of service.
              Your proposal confirms the final scope and any additional work.
            </p>
            <p className="mt-7 text-sm text-theme-text-light sm:hidden">Scroll the comparison sideways to see both payment options.</p>
            <div className="mt-3 overflow-x-auto rounded-2xl border border-theme-bg-gray bg-white sm:mt-8" role="region" aria-label="Website cost comparison" tabIndex={0}>
              <table className="w-full min-w-[520px] text-left">
                <caption className="sr-only">Wye Design website payment and ownership comparison</caption>
                <thead className="bg-theme-bg-alt text-theme-text-dark">
                  <tr><th scope="col" className="p-5">Cost or term</th><th scope="col" className="p-5">Pay monthly</th><th scope="col" className="p-5">Pay upfront</th></tr>
                </thead>
                <tbody className="divide-y divide-theme-bg-gray text-theme-text-light">
                  <tr><th scope="row" className="p-5 font-medium text-theme-text-dark">Upfront payment</th><td className="p-5">£0</td><td className="p-5">£495</td></tr>
                  <tr><th scope="row" className="p-5 font-medium text-theme-text-dark">Monthly payment, months 1–24</th><td className="p-5">£30</td><td className="p-5">£15</td></tr>
                  <tr><th scope="row" className="p-5 font-medium text-theme-text-dark">Total over those 24 months</th><td className="p-5">£720 (24 × £30)</td><td className="p-5">£855 (£495 + 24 × £15)</td></tr>
                  <tr><th scope="row" className="p-5 font-medium text-theme-text-dark">Ongoing service after month 24</th><td className="p-5">£15/month</td><td className="p-5">£15/month</td></tr>
                  <tr><th scope="row" className="p-5 font-medium text-theme-text-dark">Full website ownership</th><td className="p-5">After month 24</td><td className="p-5">From launch</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-5 leading-relaxed text-theme-text-light">
              On these terms, the monthly route has the lower first-24-month payment total.
              The upfront route gives you ownership sooner. That is why comparing only the initial
              build price, or only the advertised monthly price, does not tell the whole story.
            </p>
          </section>
          <section aria-labelledby="included">
            <h2 id="included" className="text-3xl md:text-4xl">What the standard website includes</h2>
            <p className="mt-5 text-lg leading-relaxed text-theme-text-light">
              Both options cover a custom 3–5 page website, hosting, a domain and SSL.
              The monthly package lists maintenance; the upfront package lists on-page SEO essentials.
              The pages and ongoing update arrangements are agreed before work starts. See the{" "}
              <Link href="/pricing" className="font-bold text-theme-accent underline underline-offset-4">full pricing options</Link>{" "}
              for the current package details.
            </p>
            <p className="mt-5 leading-relaxed text-theme-text-light">
              For a Hereford trade or small business, a focused brochure website can explain services,
              show genuine work and give customers a contact route. An online shop, booking system or
              complex integration is a different requirement: mention it in the brief so it can be scoped
              rather than assuming it is included in the advertised price.
            </p>
          </section>
          <section aria-labelledby="choose">
            <h2 id="choose" className="text-3xl md:text-4xl">Which payment option fits your business?</h2>
            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl border border-theme-bg-gray bg-white p-7">
                <h3 className="text-2xl">Consider monthly if…</h3>
                <p className="mt-4 leading-relaxed text-theme-text-light">Keeping the initial outlay at £0 matters, you can commit to 24 monthly payments and ownership after month 24 suits your plans. Budget for the full £720 commitment, not just the first £30 payment.</p>
              </div>
              <div className="rounded-3xl border border-theme-bg-gray bg-white p-7">
                <h3 className="text-2xl">Consider upfront if…</h3>
                <p className="mt-4 leading-relaxed text-theme-text-light">You want ownership from launch and can pay £495 initially. Include the ongoing £15/month in your budget; the build payment does not remove the service cost.</p>
              </div>
            </div>
          </section>
          <section aria-labelledby="quote-checklist">
            <h2 id="quote-checklist" className="text-3xl md:text-4xl">Five questions to ask before accepting a website quote</h2>
            <ol className="mt-7 space-y-7">
              {questions.map(([question, answer], index) => (
                <li key={question} className="rounded-2xl border border-theme-bg-gray bg-white p-7">
                  <h3 className="text-2xl">{index + 1}. {question}</h3>
                  <p className="mt-4 leading-relaxed text-theme-text-light">{answer}</p>
                </li>
              ))}
            </ol>
          </section>
          <section aria-labelledby="brief">
            <h2 id="brief" className="text-3xl md:text-4xl">Get a quote for the website you actually need</h2>
            <p className="mt-5 text-lg leading-relaxed text-theme-text-light">
              Send your business type, main services, actual service area, existing website and any
              special features you need. Add the photos or copy you already have and your preferred
              payment option. That makes it easier to agree a useful scope instead of comparing vague promises.
            </p>
            <p className="mt-5 leading-relaxed text-theme-text-light">
              Explore our <Link href="/web-design-hereford" className="font-bold text-theme-accent underline underline-offset-4">web design service for Hereford and Herefordshire</Link>{" "}
              or <Link href="/websites-for-trades" className="font-bold text-theme-accent underline underline-offset-4">websites for trades</Link>{" "}
              to see how that scope can be shaped around customer enquiries.
            </p>
            <Link href="/contact#proposal" className="mt-7 inline-block rounded-full bg-theme-accent px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90">Request a scoped website proposal</Link>
          </section>
        </div>
      </article>
    </SiteFrame>
  );
}
