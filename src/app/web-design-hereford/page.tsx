import type { Metadata } from "next";
import ServicePage from "../../components/ServicePage";
import { pageMetadata } from "../../lib/site";

export const metadata: Metadata = pageMetadata(
  "Web Design Hereford for Small Businesses",
  "Custom, fully managed web design for trades and small businesses in Hereford and across Herefordshire.",
  "/web-design-hereford",
);

export default function WebDesignHerefordPage() {
  return (
    <ServicePage
      serviceName="Web design in Hereford"
      path="/web-design-hereford"
      eyebrow="Web design in Hereford"
      title="A clearer website for the business you are building"
      intro="Wye Design creates custom websites for businesses in Hereford and Herefordshire that need to explain their services well, earn confidence and turn visits into useful enquiries."
      focusTitle="Designed around how local customers make a decision"
      focusIntro="A good local-business website should answer the practical questions early: what you do, who you help, where you work and how to get in touch."
      points={[
        {
          title: "Services people can understand",
          text: "We organise your offer into clear pages and calls to action, so customers can quickly see whether you are the right fit.",
        },
        {
          title: "A credible first impression",
          text: "The design gives your business a calm, considered place to show its work, experience and contact details.",
        },
        {
          title: "A plan after launch",
          text: "Hosting and maintenance can remain in one place, with an agreed route for keeping information up to date.",
        },
      ]}
      process={[
        {
          title: "Start with the essentials",
          text: "We begin with your customers, services, current website and the action you want visitors to take.",
        },
        {
          title: "Shape the important pages",
          text: "We create a focused structure and design direction before building the pages that matter most to your business.",
        },
        {
          title: "Launch with a clear next step",
          text: "The finished website is set up to direct visitors towards a practical enquiry or conversation.",
        },
      ]}
      questions={[
        {
          question: "Do you only work with businesses in Hereford?",
          answer: "The service is focused on Hereford and Herefordshire, with the same practical approach available to suitable local businesses in the surrounding area.",
        },
        {
          question: "Can you help if I already have a website?",
          answer: "Yes. Include your current website in the proposal form and explain what is no longer working. That gives us a useful starting point for the conversation.",
        },
        {
          question: "Will I have to manage the technical side myself?",
          answer: "No. The managed option is intended to keep hosting, maintenance and the agreed update process in one place after launch.",
        },
      ]}
      related={[
        {
          href: "/websites-for-trades",
          label: "Websites for trades",
          text: "See the elements that matter most for service-area businesses and quote enquiries.",
        },
        {
          href: "/small-business-web-design",
          label: "For small businesses",
          text: "Explore a straightforward website approach for owner-managed businesses.",
        },
        {
          href: "/pricing",
          label: "Pricing options",
          text: "Compare the current monthly and fixed-price website routes.",
        },
      ]}
    />
  );
}
