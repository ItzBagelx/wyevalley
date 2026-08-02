import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Pricing from "../../components/Pricing";
import SiteFrame from "../../components/SiteFrame";
import { pageMetadata } from "../../lib/site";

export const metadata: Metadata = pageMetadata(
  "Website Design Pricing",
  "Transparent website design pricing for trades and small businesses: £30/month with nothing upfront or £495 upfront, followed by a £15/month service.",
  "/pricing",
);

export default function PricingPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Website pricing"
        title="Two simple ways to get a custom website"
        intro="Choose between paying monthly or paying upfront. Both options include a custom 3–5 page website, hosting and maintenance."
      />
      <Pricing />
    </SiteFrame>
  );
}
