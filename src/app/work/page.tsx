import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Portfolio from "../../components/Portfolio";
import SiteFrame from "../../components/SiteFrame";
import { pageMetadata } from "../../lib/site";

export const metadata: Metadata = pageMetadata(
  "Website Design Work & Concepts",
  "Explore Wye Design's live client website alongside local redesign concepts for trades, landscaping, hospitality and professional services.",
  "/work",
);

export default function WorkPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Selected work"
        title="Live client work &amp; local design concepts"
        intro="See how Wye Design approaches structure, visual hierarchy and mobile enquiry journeys — starting with a live client site followed by clearly labelled concept projects."
      />
      <Portfolio showAll />
    </SiteFrame>
  );
}
