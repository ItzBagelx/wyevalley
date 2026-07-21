import type { Metadata } from "next";
import ServicePage from "../../components/ServicePage";
import { pageMetadata } from "../../lib/site";

export const metadata: Metadata = pageMetadata(
  "Website Hosting & Maintenance",
  "Website hosting and maintenance for small businesses that want a clear, managed route for keeping their website online and up to date.",
  "/website-hosting-maintenance",
);

export default function HostingMaintenancePage() {
  return (
    <ServicePage
      serviceName="Website hosting and maintenance"
      path="/website-hosting-maintenance"
      eyebrow="Hosting & maintenance"
      title="Keep the website part of the business under control after launch"
      intro="A website is most useful when the essentials stay looked after. Wye Design offers a managed route for hosting, maintenance and agreed updates after your website goes live."
      focusTitle="Know what stays looked after after launch"
      focusIntro="The right ongoing arrangement should be easy to understand. Your proposal should make the hosting, domain, security and update process clear before the project starts."
      points={[
        {
          title: "Hosting and domain setup",
          text: "The monthly option includes hosting and domain setup, while the fixed-price route has a separate monthly service for keeping the site online.",
        },
        {
          title: "A clear update route",
          text: "Updates and maintenance should be discussed in the proposal, so you know how to request changes and what falls within the agreed service.",
        },
        {
          title: "No unnecessary hand-offs",
          text: "Keeping the website service in one place avoids the common problem of not knowing who to contact when something needs attention.",
        },
      ]}
      process={[
        {
          title: "Define what is included",
          text: "Before launch, agree the website scope and the ongoing arrangement that applies to it.",
        },
        {
          title: "Set up the essentials",
          text: "Hosting, domain and SSL arrangements are set up as part of the selected website route.",
        },
        {
          title: "Keep information current",
          text: "Use the agreed process for content changes, maintenance requests and any future improvements.",
        },
      ]}
      questions={[
        {
          question: "What does the monthly website option include?",
          answer: "The current £30/month starting option includes a custom 3–5 page website, hosting, domain, SSL setup and ongoing maintenance with agreed updates. The proposal confirms the detailed scope.",
        },
        {
          question: "What happens with the fixed-price option?",
          answer: "The website build starts at £400, followed by a £15/month service for keeping the site online, domain renewal and security updates. Full details are confirmed in the proposal.",
        },
        {
          question: "Can I ask for changes after launch?",
          answer: "Yes. The route for requesting changes and the scope of ongoing support should be agreed before work begins, so there are no surprises later.",
        },
      ]}
      related={[
        {
          href: "/pricing",
          label: "Pricing options",
          text: "See the two current website routes and their starting costs.",
        },
        {
          href: "/small-business-web-design",
          label: "For small businesses",
          text: "See the full website approach for owner-managed businesses.",
        },
        {
          href: "/contact",
          label: "Ask about your website",
          text: "Request a proposal and tell us what you need from the ongoing service.",
        },
      ]}
    />
  );
}
