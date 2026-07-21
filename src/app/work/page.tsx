import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Portfolio from "../../components/Portfolio";
import SiteFrame from "../../components/SiteFrame";
import { pageMetadata } from "../../lib/site";

export const metadata: Metadata = pageMetadata(
  "Website Design Concepts",
  "Explore Wye Design concept projects that demonstrate website design directions for small businesses and trades.",
  "/work",
);

export default function WorkPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Design concepts"
        title="Design directions for local businesses"
        intro="These concept projects demonstrate how Wye Design approaches structure, visual hierarchy and customer journeys for different kinds of small business. They are not commissioned client case studies."
      />
      <Portfolio />
    </SiteFrame>
  );
}
