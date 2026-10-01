import type { Metadata } from "next";
import Link from "next/link";
import ServicePage from "../../components/ServicePage";
import { pageMetadata } from "../../lib/site";

export const metadata: Metadata = pageMetadata(
  "Web Design Hereford — £495 or £30/month",
  "Custom 3–5 page websites for Hereford businesses. £495 upfront + £15/month, or £30/month for 24 months. Hosting included. Compare costs and request a proposal.",
  "/web-design-hereford",
);

export default function WebDesignHerefordPage() {
  return (
    <ServicePage
      serviceName="Web design in Hereford"
      path="/web-design-hereford"
      eyebrow="Web design in Hereford"
      title="Web design in Hereford for trades and small businesses"
      intro="A custom 3–5 page website for your Hereford or Herefordshire business, with hosting and ongoing care in one place. Choose £495 upfront plus £15/month, or £30/month for 24 months with nothing upfront. The scope is agreed before work starts."
      focusTitle="What your small-business website needs to do"
      focusIntro="For a trade or owner-managed business, the useful pages are the ones that help a customer understand the job you do, see your real work and make an enquiry. We start there, rather than adding pages for the sake of it."
      points={[
        {
          title: "Explain the right services",
          text: "A focused 3–5 page structure can cover your main offer, services, business details and contact route. We agree which pages your customers actually need in the proposal.",
        },
        {
          title: "Show your work clearly",
          text: "Your project photos, business information and genuine customer feedback help visitors understand what you do. We shape the page around the material you have and can publish with permission.",
        },
        {
          title: "Make the next step easy",
          text: "Customers should be able to find the areas you serve and contact you from their phone. The site gives them a clear route to an enquiry, with hosting and an agreed update process after launch.",
        },
      ]}
      process={[
        {
          title: "Start with the essentials",
          text: "Tell us your services, actual working area, current website and preferred contact route. Share any logo, photos and existing copy you want to use.",
        },
        {
          title: "Shape the important pages",
          text: "Your proposal sets out the pages, payment option and agreed scope. We then shape the content and design around those pages, so you know what is being built.",
        },
        {
          title: "Launch with a clear next step",
          text: "Before launch, the pages and enquiry route are checked on desktop and mobile. Hosting, ownership and ongoing updates follow the option agreed in your proposal.",
        },
      ]}
      questions={[
        {
          question: "How much does a website cost?",
          answer: "The current options are £30/month for 24 months with £0 upfront, then £15/month, or £495 upfront plus £15/month with ownership from launch. Both cover a custom 3–5 page website. The monthly plan totals £720 over its first 24 months; the upfront option totals £855 including 24 monthly service payments. Your proposal confirms the scope and any extras.",
        },
        {
          question: "Who owns the finished website?",
          answer: "With the upfront option you own the website from launch. With the £30/month option, full ownership transfers after month 24. The ongoing £15/month service and the practical handover details should be clear in your proposal.",
        },
        {
          question: "Do you only work with businesses in Hereford?",
          answer: "We focus on Hereford and Herefordshire, including businesses serving Ross-on-Wye and the surrounding area. Tell us the places you work in so your service pages and enquiry route reflect the customers you can help.",
        },
        {
          question: "Can you help if I already have a website?",
          answer: "Yes. Include your current website in the proposal form and explain what is no longer working. That gives us a useful starting point for the conversation.",
        },
        {
          question: "Will the new website guarantee a place on page one of Google?",
          answer: "No. A clear, usable website and on-page SEO foundations help customers and search engines understand your business, but no page-one ranking or number of enquiries is guaranteed. Search performance needs to be measured after launch.",
        },
      ]}
      related={[
        {
          href: "/websites-for-trades",
          label: "Websites for trades",
          text: "See the elements that matter most for service-area businesses and quote enquiries.",
        },
        {
          href: "/website-cost-guide",
          label: "Website cost guide",
          text: "Compare 24-month totals, ownership and the questions to ask before choosing a website quote.",
        },
        {
          href: "/pricing",
          label: "Pricing options",
          text: "Compare the current monthly and fixed-price website routes.",
        },
      ]}
    >
      <section className="bg-theme-bg px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-theme-accent">Scope and cost</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Know what you are paying for</h2>
            <p className="mt-5 text-lg leading-relaxed text-theme-text-light">
              Both payment options cover a custom 3–5 page website, hosting, domain and SSL.
              The monthly plan includes maintenance and transfers full ownership after month 24;
              the upfront option gives you ownership from launch and includes on-page SEO essentials.
              Agree the pages, update arrangements and any additional requirements before work starts.
            </p>
            <Link href="/website-cost-guide" className="mt-7 inline-block font-bold text-theme-accent underline underline-offset-4">
              Compare the full website costs and ownership terms →
            </Link>
          </div>
          <div className="rounded-3xl border border-theme-bg-gray bg-white p-8">
            <h3 className="text-3xl">See the design approach before enquiring</h3>
            <p className="mt-5 leading-relaxed text-theme-text-light">
              Our work page shows restaurant, solar-energy and window-cleaning website concepts.
              They are demonstrations of layout and design, not commissioned client results or evidence
              of increased sales. Use them to discuss what would suit your own business.
            </p>
            <Link href="/work" className="mt-6 inline-block font-bold text-theme-accent underline underline-offset-4">
              View the website design concepts →
            </Link>
            <p className="mt-7 leading-relaxed text-theme-text-light">
              Ready for a specific answer? Include your business type, services, working area and
              existing website in the proposal form. We can then discuss the pages and scope you need.
            </p>
            <Link href="/contact#proposal" className="mt-6 inline-block rounded-full bg-theme-accent px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90">
              Get a scoped website proposal
            </Link>
          </div>
        </div>
      </section>
    </ServicePage>
  );
}
