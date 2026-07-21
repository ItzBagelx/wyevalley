import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import SiteFrame from "../../components/SiteFrame";
import { pageMetadata, siteConfig } from "../../lib/site";

export const metadata: Metadata = pageMetadata(
  "Privacy Policy",
  "How Wye Design collects and uses information submitted through this website.",
  "/privacy-policy",
);

export default function PrivacyPolicyPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Privacy policy"
        title="How we handle information you send us"
        intro="This page explains the information Wye Design collects through this website and how it is used when you contact us."
      />
      <article className="bg-theme-bg-light px-6 py-20 md:py-24">
        <div className="prose mx-auto max-w-3xl text-theme-text-light">
          <p className="text-sm text-theme-text-light">Last updated: 21 July 2026</p>
          <h2>Who we are</h2>
          <p>
            Wye Design is responsible for this website. If you have a question about this policy or the information you have provided, email <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>
          <h2>Information we collect</h2>
          <p>
            When you request a website proposal, we collect the details you choose to provide: your name, business name, email address, optional telephone number, industry, website goals, existing website address and any project notes.
          </p>
          <h2>Why we use it</h2>
          <p>
            We use this information to respond to your enquiry, assess whether the project is a good fit, prepare a proposal where appropriate and communicate with you about that enquiry. We do not use the proposal form to ask for sensitive personal information.
          </p>
          <h2>How your enquiry is sent</h2>
          <p>
            Proposal form submissions are sent to Wye Design by email using Resend, an email delivery service. Please avoid including confidential or sensitive information in the form.
          </p>
          <h2>How long we keep it</h2>
          <p>
            We keep enquiry information only for as long as it is needed to deal with the enquiry, maintain relevant business records or meet applicable obligations. We review information that is no longer needed and delete it securely.
          </p>
          <h2>Your choices</h2>
          <p>
            You can ask us about the personal information we hold about you, or ask us to correct or delete it, by emailing {siteConfig.email}. You can also raise a concern with the UK Information Commissioner&apos;s Office.
          </p>
          <h2>Analytics cookies</h2>
          <p>
            If optional website analytics are enabled, we ask for your choice before loading analytics cookies. You can accept or decline them using the banner shown on the website. Essential technical features may still be used where they are necessary to provide the website.
          </p>
          <h2>Changes to this policy</h2>
          <p>
            We may update this page when the website or the way we handle enquiry information changes. The date at the top of this policy shows when it was last updated.
          </p>
        </div>
      </article>
    </SiteFrame>
  );
}
