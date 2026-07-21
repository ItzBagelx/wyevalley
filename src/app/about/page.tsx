import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/PageHero";
import SiteFrame from "../../components/SiteFrame";
import { pageMetadata } from "../../lib/site";

export const metadata: Metadata = pageMetadata(
  "About Wye Design",
  "Learn how Wye Design approaches custom, fully managed websites for trades and small businesses in Hereford and Herefordshire.",
  "/about",
);

export default function AboutPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="About Wye Design"
        title="A practical web partner for local businesses"
        intro="Wye Design creates custom websites for trades and small businesses in Hereford and Herefordshire that want a clearer, more credible online presence without a drawn-out agency process."
      >
        <Link href="/contact#proposal" className="rounded-full bg-theme-accent px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90">
          Request a website proposal
        </Link>
      </PageHero>

      <section className="bg-theme-bg-light px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-theme-accent">The approach</p>
            <h2 className="mt-4 text-4xl md:text-5xl">A website should feel easier to use than it was to make</h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-theme-text-light">
            <p>
              The best small-business sites do not need to be full of marketing noise. They need to help a customer understand the business, feel confident in it and know exactly how to make contact.
            </p>
            <p>
              Wye Design brings design, custom development and ongoing website care together so that the important decisions are made once and managed in one place after launch.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-theme-bg-gray bg-theme-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["Clear before clever", "The first version should explain your services, proof and next step before adding anything decorative."],
              ["Built around the business", "The page structure is shaped around your customers and the enquiries you want, rather than a generic template."],
              ["Looked after after launch", "The managed route keeps the practical website work together once the new site is live."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl bg-white p-8 shadow-lg shadow-theme-bg-alt/40">
                <h2 className="text-3xl">{title}</h2>
                <p className="mt-4 leading-relaxed text-theme-text-light">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-theme-text-dark px-6 py-20 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl text-white">Tell us where your current website is falling short</h2>
          <p className="mt-5 leading-relaxed text-white/75">The first proposal is a chance to explain the business, what customers need from the site and what you want to improve.</p>
          <Link href="/contact#proposal" className="mt-8 inline-block rounded-full bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-theme-accent transition-colors hover:bg-theme-bg">
            Start a proposal
          </Link>
        </div>
      </section>
    </SiteFrame>
  );
}
