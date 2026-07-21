import Link from "next/link";
import Hero from "../components/Hero";
import ValueProposition from "../components/ValueProposition";
import Portfolio from "../components/Portfolio";
import ManagedModel from "../components/ManagedModel";
import Pricing from "../components/Pricing";
import SiteFrame from "../components/SiteFrame";

export default function Home() {
  return (
    <SiteFrame>
        <Hero />
        <ValueProposition />
        <section className="bg-theme-bg px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-2xl">
              <h2 className="text-4xl md:text-5xl">Focused pages for the way your customers search</h2>
              <p className="mt-5 text-lg leading-relaxed text-theme-text-light">
                Explore the service that best matches your business, then request a proposal when you are ready.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  href: "/web-design-hereford",
                  title: "Web design in Hereford",
                  text: "A clear, custom website for businesses serving Hereford and Herefordshire.",
                },
                {
                  href: "/websites-for-trades",
                  title: "Websites for trades",
                  text: "Designed around services, local areas, project evidence and enquiry journeys.",
                },
                {
                  href: "/website-hosting-maintenance",
                  title: "Hosting & maintenance",
                  text: "A practical ongoing service after your site has launched.",
                },
              ].map((service) => (
                <Link key={service.href} href={service.href} className="group rounded-3xl border border-theme-bg-gray bg-white p-7 transition-transform hover:-translate-y-1 hover:shadow-xl">
                  <h3 className="text-2xl transition-colors group-hover:text-theme-accent">{service.title}</h3>
                  <p className="mt-4 leading-relaxed text-theme-text-light">{service.text}</p>
                  <span className="mt-6 inline-block text-xs font-bold uppercase tracking-widest text-theme-accent">Explore service →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <Portfolio />
        <ManagedModel />
        <Pricing />
    </SiteFrame>
  );
}
