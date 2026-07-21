import type { Metadata } from "next";
import ServicePage from "../../components/ServicePage";
import { pageMetadata } from "../../lib/site";

export const metadata: Metadata = pageMetadata(
  "Small Business Web Design",
  "A straightforward, fully managed web design service for small businesses that need a clear website without a large-agency process.",
  "/small-business-web-design",
);

export default function SmallBusinessWebDesignPage() {
  return (
    <ServicePage
      serviceName="Small business web design"
      path="/small-business-web-design"
      eyebrow="Small-business web design"
      title="A website that supports your business without creating another job"
      intro="For owner-managed businesses, a website needs to be clear, credible and manageable. Wye Design offers a custom route that keeps the process straightforward from first brief to ongoing care."
      focusTitle="Keep the important decisions practical"
      focusIntro="You do not need a sprawling digital project. You need the right information, a thoughtful structure and a clear way for customers to contact you."
      points={[
        {
          title: "A focused first version",
          text: "Start with the core pages that explain your business well, then add only what earns its place as your needs grow.",
        },
        {
          title: "Costs discussed clearly",
          text: "The site offers two transparent starting routes. Your proposal confirms what is included before any work begins.",
        },
        {
          title: "One place for support",
          text: "The ongoing option is designed to keep the practical website work in one place after launch.",
        },
      ]}
      process={[
        {
          title: "Share the brief",
          text: "Tell us what you do, who you help, what is changing and how you want a new website to support the business.",
        },
        {
          title: "Agree the scope",
          text: "We turn that into a defined first version, including the pages, content needed and the best pricing route for the work.",
        },
        {
          title: "Launch and maintain",
          text: "Once the site is live, the agreed ongoing service gives you a clear route for keeping it useful.",
        },
      ]}
      questions={[
        {
          question: "Do I need to write all the website content myself?",
          answer: "You bring the knowledge of your business. The proposal stage is where we can agree what content you have, what needs shaping and what is realistic for the first version.",
        },
        {
          question: "Can I start small and add to the site later?",
          answer: "Yes. A focused initial website is often more useful than launching many pages with thin or unfinished content.",
        },
        {
          question: "Which pricing option is right for me?",
          answer: "That depends on your preferred payment route and what you need from the ongoing service. The pricing page sets out the current starting points.",
        },
      ]}
      related={[
        {
          href: "/pricing",
          label: "Pricing options",
          text: "Compare the monthly and fixed-price routes in one place.",
        },
        {
          href: "/web-design-hereford",
          label: "Web design in Hereford",
          text: "Explore the service for local businesses in Hereford and Herefordshire.",
        },
        {
          href: "/contact",
          label: "Talk through your brief",
          text: "Use the proposal form to explain what you need from the first version of your site.",
        },
      ]}
    />
  );
}
