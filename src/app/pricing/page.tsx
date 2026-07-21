import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/PageHero";
import SiteFrame from "../../components/SiteFrame";
import { pageMetadata } from "../../lib/site";

export const metadata: Metadata = pageMetadata(
  "Website Design Pricing",
  "Transparent website design pricing for trades and small businesses: a £30/month managed option or £400 fixed-price build with a £15/month service.",
  "/pricing",
);

const comparisons = [
  ["Starting price", "£30 per month", "£400 upfront"],
  ["Setup fee", "£0", "Included in the upfront build"],
  ["Website size", "Custom 3–5 page website", "Custom 3–5 page website"],
  ["Hosting and domain", "Included", "Covered by the monthly service"],
  ["SSL", "Included", "Included"],
  ["Maintenance", "Included", "£15 per month service"],
  ["Updates", "Agreed updates and maintenance", "Agreed ongoing support service"],
  ["Ownership", "Confirmed in your proposal", "Full site ownership"],
  ["Project scope", "Confirmed before work begins", "Confirmed before work begins"],
];

export default function PricingPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Website pricing"
        title="Two simple ways to get a custom website"
        intro="Choose the payment route that best suits your business, then use the proposal stage to agree the exact pages, content and ongoing arrangement."
      >
        <Link
          href="/contact#proposal"
          className="rounded-full bg-theme-accent px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
        >
          Request a website proposal
        </Link>
      </PageHero>

      <section className="bg-theme-bg-light px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-theme-bg-gray bg-white shadow-xl shadow-theme-bg-alt/40">
          <div className="grid border-b border-theme-bg-gray bg-theme-bg md:grid-cols-[1.15fr_1fr_1fr]">
            <div className="p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-theme-accent">Compare options</p>
              <h2 className="mt-4 text-3xl">What is included</h2>
            </div>
            <div className="border-t border-theme-bg-gray p-6 md:border-l md:border-t-0 md:p-8">
              <h2 className="text-2xl">Pay monthly</h2>
              <p className="mt-2 text-sm leading-relaxed text-theme-text-light">A fully managed, predictable monthly route.</p>
            </div>
            <div className="border-t border-theme-bg-gray p-6 md:border-l md:border-t-0 md:p-8">
              <h2 className="text-2xl">Fixed price</h2>
              <p className="mt-2 text-sm leading-relaxed text-theme-text-light">A larger upfront build with an ongoing monthly service.</p>
            </div>
          </div>

          <div className="divide-y divide-theme-bg-gray">
            {comparisons.map(([feature, monthly, fixed]) => (
              <div key={feature} className="grid md:grid-cols-[1.15fr_1fr_1fr]">
                <div className="bg-theme-bg/40 p-5 font-medium text-theme-text-dark md:p-6">{feature}</div>
                <div className="border-t border-theme-bg-gray p-5 text-theme-text-light md:border-l md:border-t-0 md:p-6">{monthly}</div>
                <div className="border-t border-theme-bg-gray p-5 text-theme-text-light md:border-l md:border-t-0 md:p-6">{fixed}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-theme-bg-gray bg-theme-bg px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-lg shadow-theme-bg-alt/40">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-theme-accent">Pay monthly</p>
            <h2 className="mt-4 text-4xl">£30 <span className="text-lg text-theme-text-light">per month</span></h2>
            <p className="mt-5 leading-relaxed text-theme-text-light">
              This option starts with no upfront setup fee and includes a custom website, hosting, domain, SSL, maintenance and the agreed update process.
            </p>
          </div>
          <div className="rounded-3xl bg-theme-text-dark p-8 text-white shadow-lg">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-theme-bg">Fixed price</p>
            <h2 className="mt-4 text-4xl text-white">£400 <span className="text-lg text-white/70">upfront</span></h2>
            <p className="mt-5 leading-relaxed text-white/75">
              This route starts with a fixed-price website build, followed by a £15/month service to keep the site online, renew the domain and provide security updates.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-3xl text-center">
          <h2 className="text-3xl">Get the details agreed before the build starts</h2>
          <p className="mt-4 leading-relaxed text-theme-text-light">
            The proposal is where we confirm the website pages, content, ownership and ongoing support arrangement that apply to your project. If you need ecommerce, additional pages or something more involved, tell us at the start.
          </p>
          <Link href="/contact#proposal" className="mt-7 inline-block rounded-full bg-theme-accent px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90">
            Request a website proposal
          </Link>
        </div>
      </section>
    </SiteFrame>
  );
}
