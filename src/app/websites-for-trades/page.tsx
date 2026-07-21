import type { Metadata } from "next";
import ServicePage from "../../components/ServicePage";
import { pageMetadata } from "../../lib/site";

export const metadata: Metadata = pageMetadata(
  "Websites for Tradespeople",
  "Custom websites for tradespeople that make services, service areas, project evidence and quote enquiries easy to find.",
  "/websites-for-trades",
);

export default function WebsitesForTradesPage() {
  return (
    <ServicePage
      serviceName="Websites for tradespeople"
      path="/websites-for-trades"
      eyebrow="Websites for tradespeople"
      title="Make it simple for customers to understand your trade and request a quote"
      intro="A trade website needs to do more than look polished. It needs to make your services, service areas, recent work and enquiry options clear when someone is deciding who to contact."
      focusTitle="A trade website should do the practical work first"
      focusIntro="Customers often arrive with a specific job in mind and limited time. The page structure should make your relevance and next step obvious on a phone as well as a desktop."
      points={[
        {
          title: "Clear service pages",
          text: "Give each core service enough room to explain what is included, who it is for and when someone should get in touch.",
        },
        {
          title: "Evidence that feels real",
          text: "Project photography, genuine reviews, accreditations and useful local details help customers feel more confident before they enquire.",
        },
        {
          title: "A simple quote route",
          text: "Calls to action, contact details and a short proposal form give visitors a direct route to ask about their job.",
        },
      ]}
      process={[
        {
          title: "Understand the jobs you want",
          text: "We identify the services, locations and types of customer you most want the website to speak to.",
        },
        {
          title: "Put proof in the right places",
          text: "We map out where project images, reviews and trust information will help customers decide with confidence.",
        },
        {
          title: "Build for enquiries",
          text: "The finished pages guide people to a clear contact action without making them search for the essentials.",
        },
      ]}
      questions={[
        {
          question: "Do I need a separate page for every trade service?",
          answer: "Not automatically. Start with the services that are most important to your business, then add genuinely useful pages as you have the evidence and content to support them.",
        },
        {
          question: "Can I show the areas I cover?",
          answer: "Yes. Your website can clearly explain your genuine service area. It is better to be specific and helpful than to create near-identical pages for every nearby town.",
        },
        {
          question: "What should I prepare before we start?",
          answer: "A list of your services, examples of good projects, any accreditations or reviews you are happy to use, and a sense of the enquiries you want more of are all useful.",
        },
      ]}
      related={[
        {
          href: "/web-design-hereford",
          label: "Web design in Hereford",
          text: "See the local-business web design service and how the process works.",
        },
        {
          href: "/website-hosting-maintenance",
          label: "Hosting & maintenance",
          text: "Understand the ongoing website service after launch.",
        },
        {
          href: "/contact",
          label: "Request a proposal",
          text: "Tell us about your trade, your current site and what you need it to do.",
        },
      ]}
    />
  );
}
