import Link from "next/link";
import PageHero from "./PageHero";
import SiteFrame from "./SiteFrame";
import StructuredData from "./StructuredData";
import { absoluteUrl, siteConfig } from "../lib/site";

type ServicePoint = {
  title: string;
  text: string;
};

type ProcessStep = {
  title: string;
  text: string;
};

type Question = {
  question: string;
  answer: string;
};

type RelatedLink = {
  href: string;
  label: string;
  text: string;
};

type ServicePageProps = {
  serviceName: string;
  path: string;
  eyebrow: string;
  title: string;
  intro: string;
  focusTitle: string;
  focusIntro: string;
  points: ServicePoint[];
  process: ProcessStep[];
  questions: Question[];
  related: RelatedLink[];
};

export default function ServicePage({
  serviceName,
  path,
  eyebrow,
  title,
  intro,
  focusTitle,
  focusIntro,
  points,
  process,
  questions,
  related,
}: ServicePageProps) {
  return (
    <SiteFrame>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: serviceName,
          serviceType: serviceName,
          provider: {
            "@id": absoluteUrl("/#organization"),
          },
          areaServed: ["Hereford", "Herefordshire"],
          url: absoluteUrl(path),
          description: intro,
        }}
      />
      <PageHero eyebrow={eyebrow} title={title} intro={intro}>
        <Link
          href="/contact#proposal"
          className="rounded-full bg-theme-accent px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
        >
          Request a website proposal
        </Link>
        <Link
          href="/pricing"
          className="rounded-full border border-theme-text-dark px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-theme-text-dark transition-colors hover:bg-theme-bg-alt"
        >
          View pricing
        </Link>
      </PageHero>

      <section className="bg-theme-bg-light px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl">{focusTitle}</h2>
            <p className="mt-5 text-lg leading-relaxed text-theme-text-light">{focusIntro}</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {points.map((point) => (
              <div key={point.title} className="rounded-3xl border border-theme-bg-gray bg-white p-7">
                <h3 className="text-2xl">{point.title}</h3>
                <p className="mt-4 leading-relaxed text-theme-text-light">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-theme-bg-gray bg-theme-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-theme-accent">The process</p>
            <h2 className="mt-4 text-4xl md:text-5xl">A focused way to get from brief to a useful website</h2>
          </div>
          <ol className="mt-12 grid gap-7 md:grid-cols-3">
            {process.map((step, index) => (
              <li key={step.title} className="relative rounded-3xl bg-white p-8 shadow-lg shadow-theme-bg-alt/40">
                <span className="text-xs font-bold tracking-[0.2em] text-theme-accent">0{index + 1}</span>
                <h3 className="mt-5 text-2xl">{step.title}</h3>
                <p className="mt-4 leading-relaxed text-theme-text-light">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-theme-bg-light px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-theme-accent">Questions</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Useful details before you decide</h2>
            <p className="mt-5 leading-relaxed text-theme-text-light">
              If you want to talk through your business first, the proposal form is a good place to start.
            </p>
            <Link
              href="/contact#proposal"
              className="mt-7 inline-block rounded-full bg-theme-accent px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
            >
              Request a proposal
            </Link>
          </div>
          <div className="divide-y divide-theme-bg-gray rounded-3xl border border-theme-bg-gray bg-white px-6">
            {questions.map((item) => (
              <details key={item.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-serif text-theme-text-dark">
                  {item.question}
                  <span className="text-2xl leading-none text-theme-accent transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-2xl pt-4 leading-relaxed text-theme-text-light">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-theme-text-dark px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-theme-bg">Related information</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {related.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-2xl border border-white/15 p-6 transition-colors hover:bg-white/10">
                <h2 className="text-2xl text-white">{link.label}</h2>
                <p className="mt-3 leading-relaxed text-white/70">{link.text}</p>
                <span className="mt-5 inline-block text-xs font-bold uppercase tracking-widest text-theme-bg">Read more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
