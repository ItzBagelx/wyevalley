import type { Metadata } from "next";
import ContactForm from "../../components/ContactForm";
import EmailLink from "../../components/EmailLink";
import PageHero from "../../components/PageHero";
import SiteFrame from "../../components/SiteFrame";
import { pageMetadata } from "../../lib/site";

export const metadata: Metadata = pageMetadata(
  "Contact Wye Design",
  "Request a website proposal from Wye Design for a custom, managed website for your small business or trade in Hereford and Herefordshire.",
  "/contact",
);

export default function ContactPage() {
  return (
    <SiteFrame showFooterProposalCta={false}>
      <PageHero
        eyebrow="Request a proposal"
        title="Tell us what your website needs to do"
        intro="Share a few details about your business and the outcome you want. We will use them to understand whether Wye Design is a good fit for the project."
      />

      <section className="bg-theme-bg-light px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-theme-accent">Get in touch</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Start with the essentials</h2>
            <p className="mt-5 leading-relaxed text-theme-text-light">
              You do not need a fully written brief. Let us know what your business does, what has changed and what a better website would help you achieve.
            </p>
            <div className="mt-8 rounded-3xl border border-theme-bg-gray bg-theme-bg p-6">
              <p className="text-sm font-bold uppercase tracking-widest text-theme-text-dark">Prefer email?</p>
              <EmailLink className="mt-3 inline-block text-lg text-theme-accent underline underline-offset-4">hello@wyedesign.co.uk</EmailLink>
              <p className="mt-3 text-sm leading-relaxed text-theme-text-light">Wye Design serves businesses in Hereford and Herefordshire.</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </SiteFrame>
  );
}
