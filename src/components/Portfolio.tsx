import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const portfolioItems = [
  {
    title: "The Modern Restaurant Experience",
    description: "A visual-first design crafted for cafes and restaurants. Features a mobile-perfect, readable menu and seamless integration with your table booking system.",
    image: "/assets/images/portfolio-1.webp",
    reverse: false,
    link: "https://showcase1.wyedesign.co.uk"
  },
  {
    title: "Lumina Energy",
    description: "A bold, conversion-focused site built for an energy company offering solar panels, micro hydro systems, and battery storage. Guides visitors from interest to instant quote in seconds. A great example of a modern, effective trade site.",
    image: "/assets/images/portfolio-2.webp",
    reverse: true,
    link: "https://showcase2.wyedesign.co.uk"
  },
  {
    title: "ClearView Window Cleaning",
    description: "A clean, trustworthy design for a local window cleaning business. Features easy quote requests, service areas, and customer testimonials to build local authority.",
    image: "/assets/images/portfolio-3.webp",
    reverse: false,
    link: "https://showcase3.wyedesign.co.uk"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-theme-bg scroll-mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-serif italic mb-6 text-theme-text-dark">Our Work</h2>
          <p className="text-lg text-theme-text-light font-normal max-w-2xl mx-auto mb-2">Premium digital spaces engineered for performance and conversion</p>
          <p className="text-sm text-theme-text-light/70 italic max-w-2xl mx-auto">* Note: The websites featured below are concept projects showcasing our design capabilities.</p>
        </div>

        <div className="space-y-32">
          {portfolioItems.map((item, index) => (
            <div key={index} className={`flex flex-col ${item.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>
              
              {/* Image side */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 relative group"
              >
                <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-theme-bg-alt relative shadow-2xl border border-white/50 p-4 pb-0">
                  <div className="w-full h-full rounded-t-lg overflow-hidden relative border-x border-t border-theme-bg-gray">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Text side */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full lg:w-1/2 flex flex-col justify-center"
              >
                <div className="inline-block px-3 py-1 bg-theme-text-dark text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-6 w-max">
                  Case Study {index + 1}
                </div>
                <h3 className="text-3xl md:text-4xl font-serif italic mb-6 text-theme-text-dark">{item.title}</h3>
                <p className="text-lg text-theme-text-light font-normal leading-relaxed mb-10">
                  {item.description}
                </p>
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-theme-accent text-xs font-bold uppercase tracking-widest hover:opacity-80 transition-opacity w-max pb-1 border-b border-theme-accent">
                    View Live Example
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                ) : (
                  <button className="group flex items-center gap-2 text-theme-accent text-xs font-bold uppercase tracking-widest hover:opacity-80 transition-opacity w-max pb-1 border-b border-theme-accent">
                    View Live Example
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                )}
              </motion.div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
