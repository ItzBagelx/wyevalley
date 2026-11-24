import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const clientProjects = [
  {
    badge: "Live client website",
    title: "Brecon Bunkhouse",
    description:
      "A custom hospitality website for a 28-bed group bunkhouse in the Brecon Beacons. Built for fast loading on Cloudflare's edge network, clear group pricing, mobile booking journeys, and dedicated landing pages for walking groups and family gatherings.",
    image: "/assets/images/portfolio-brecon.webp",
    imageSmall: "/assets/images/portfolio-brecon-400.webp",
    link: "https://www.brecon-bunkhouse.co.uk/",
    linkLabel: "Visit live website",
  },
];

const conceptItems = [
  {
    title: "RJ Thomas Brickwork & Construction",
    description:
      "A local trade redesign concept for a Herefordshire brickwork and construction specialist. Structured around core groundworks and building services, project photography, and a straightforward mobile quote route.",
    image: "/assets/images/portfolio-rj-thomas.webp",
    imageSmall: "/assets/images/portfolio-rj-thomas-400.webp",
    link: "https://rj-thomas.wyedesign.co.uk",
  },
  {
    title: "Green Fingers Landscape",
    description:
      "A bespoke landscaping redesign concept focused on stonework, garden transformations, and local Powys/Herefordshire authority — pairing calm editorial spacing with clear enquiry paths.",
    image: "/assets/images/portfolio-greenfingers.webp",
    imageSmall: "/assets/images/portfolio-greenfingers-400.webp",
    link: "https://greenfingerslandscape.wyedesign.co.uk",
  },
  {
    title: "Wye HR",
    description:
      "A professional-services redesign concept for an independent HR consultancy specialising in workplace investigations and complex employee relations, designed to project calm credibility and make sensitive first contact effortless.",
    image: "/assets/images/portfolio-wyehr.webp",
    imageSmall: "/assets/images/portfolio-wyehr-400.webp",
    link: "https://wyehr.wyedesign.co.uk",
  },
  {
    title: "The Modern Restaurant Experience",
    description:
      "A visual-first design crafted for cafes and restaurants. Features a mobile-perfect, readable menu and seamless integration with your table booking system.",
    image: "/assets/images/portfolio-1.webp",
    imageSmall: "/assets/images/portfolio-1-400.webp",
    link: "https://showcase1.wyedesign.co.uk",
  },
  {
    title: "Lumina Energy",
    description:
      "A bold, conversion-focused site built for an energy company offering solar panels, micro hydro systems, and battery storage. Guides visitors from interest to instant quote in seconds. A great example of a modern, effective trade site.",
    image: "/assets/images/portfolio-2.webp",
    imageSmall: "/assets/images/portfolio-2-400.webp",
    link: "https://showcase2.wyedesign.co.uk",
  },
  {
    title: "ClearView Window Cleaning",
    description:
      "A clean, trustworthy design for a local window cleaning business. Features easy quote requests, service areas, and customer testimonials to build local authority.",
    image: "/assets/images/portfolio-3.webp",
    imageSmall: "/assets/images/portfolio-3-400.webp",
    link: "https://showcase3.wyedesign.co.uk",
  },
];

export default function Portfolio({ showAll = false }: { showAll?: boolean }) {
  const visibleConcepts = showAll ? conceptItems : conceptItems.slice(0, 3);

  return (
    <section id="portfolio" className="py-24 px-6 bg-theme-bg scroll-mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-serif italic mb-6 text-theme-text-dark">Our Work</h2>
          <p className="text-lg text-theme-text-light font-normal max-w-2xl mx-auto">
            A live client build alongside local design concepts showing how clear structure and strong visual hierarchy work for small businesses and trades.
          </p>
        </div>

        {/* Live Client Work */}
        <div className="space-y-24 mb-28">
          {clientProjects.map((project) => (
            <div key={project.title} className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
              <div className="w-full lg:w-1/2 relative group">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-theme-bg-alt relative shadow-2xl border border-white/50 p-4 pb-0">
                  <div className="w-full h-full rounded-t-lg overflow-hidden relative border-x border-t border-theme-bg-gray">
                    <img
                      src={project.image}
                      srcSet={`${project.imageSmall} 400w, ${project.image} 800w`}
                      sizes="(min-width: 1280px) 592px, (min-width: 1024px) calc(50vw - 72px), calc(100vw - 48px)"
                      alt={project.title}
                      width={800}
                      height={533}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 bg-theme-accent text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-6 w-max">
                  {project.badge}
                </div>
                <h3 className="text-3xl md:text-4xl font-serif italic mb-6 text-theme-text-dark">{project.title}</h3>
                <p className="text-lg text-theme-text-light font-normal leading-relaxed mb-10">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-theme-accent text-xs font-bold uppercase tracking-widest hover:opacity-80 transition-opacity w-max pb-1 border-b border-theme-accent"
                >
                  {project.linkLabel}
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Concept Projects */}
        <div className="mb-16 text-center border-t border-theme-bg-gray pt-20">
          <h3 className="text-3xl md:text-4xl font-serif italic mb-4 text-theme-text-dark">Design &amp; Redesign Concepts</h3>
          <p className="text-sm text-theme-text-light italic max-w-2xl mx-auto">These are concept projects that demonstrate design capabilities, not commissioned client sites.</p>
        </div>

        <div className="space-y-32">
          {visibleConcepts.map((item, index) => (
            <div key={item.title} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>
              {/* Image side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-theme-bg-alt relative shadow-2xl border border-white/50 p-4 pb-0">
                  <div className="w-full h-full rounded-t-lg overflow-hidden relative border-x border-t border-theme-bg-gray">
                    <img
                      src={item.image}
                      srcSet={`${item.imageSmall} 400w, ${item.image} 800w`}
                      sizes="(min-width: 1280px) 592px, (min-width: 1024px) calc(50vw - 72px), calc(100vw - 48px)"
                      alt={item.title}
                      width={800}
                      height={533}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Text side */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 bg-theme-text-dark text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-6 w-max">
                  Concept example {index + 1}
                </div>
                <h4 className="text-3xl md:text-4xl font-serif italic mb-6 text-theme-text-dark">{item.title}</h4>
                <p className="text-lg text-theme-text-light font-normal leading-relaxed mb-10">
                  {item.description}
                </p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="group flex items-center gap-2 text-theme-accent text-xs font-bold uppercase tracking-widest hover:opacity-80 transition-opacity w-max pb-1 border-b border-theme-accent"
                >
                  Open concept example
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="mt-20 text-center">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full border border-theme-accent/30 bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-theme-accent transition-colors hover:bg-theme-accent hover:text-white"
            >
              View all 6 concept examples
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
