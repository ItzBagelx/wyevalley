import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import SiteFrame from "../../components/SiteFrame";
import { pageMetadata } from "../../lib/site";

export const metadata: Metadata = pageMetadata(
  "Website Terms",
  "Terms for using the Wye Design website and requesting a website proposal.",
  "/terms",
);

export default function TermsPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Website terms"
        title="Terms for using this website"
        intro="These terms explain the use of the Wye Design website. Project-specific terms are agreed separately before any client work begins."
      />
      <article className="bg-theme-bg-light px-6 py-20 md:py-24">
        <div className="prose mx-auto max-w-3xl text-theme-text-light">
          <p className="text-sm text-theme-text-light">Last updated: 21 July 2026</p>
          <h2>Website information</h2>
          <p>
            We aim to keep the information on this website accurate and useful. It is general information about Wye Design&apos;s services and does not form a binding offer or contract.
          </p>
          <h2>Proposals and project terms</h2>
          <p>
            A request through this website does not create an obligation for either party. The scope, price, timing, ownership, support arrangement and any other project terms are confirmed in a written proposal or agreement before work starts.
          </p>
          <h2>Concept work</h2>
          <p>
            The work page includes concept projects that demonstrate design capabilities. These are clearly labelled and should not be read as commissioned client case studies or endorsements.
          </p>
          <h2>Links to other websites</h2>
          <p>
            This site may link to third-party or concept websites for reference. We are not responsible for the availability, content or privacy practices of those websites.
          </p>
          <h2>Changes to this website</h2>
          <p>
            We may update, change or remove website content at any time. We may also update these terms when the website or our services change.
          </p>
          <h2>Contact</h2>
          <p>
            If you have a question about these website terms, contact Wye Design at <a href="mailto:hello@wyedesign.co.uk">hello@wyedesign.co.uk</a>.
          </p>
        </div>
      </article>
    </SiteFrame>
  );
}
