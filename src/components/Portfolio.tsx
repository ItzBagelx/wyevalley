import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const portfolioItems = [
  {
    title: "The Modern Restaurant Experience",
    description: "A visual-first design crafted for cafes and restaurants. Features a mobile-perfect, readable menu and seamless integration with your table booking system.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
    reverse: false,
    link: "https://showcase1.wyedesign.co.uk"
  },
  {
    title: "Premium Tradesman Portfolio",
    description: "Built for electricians, plumbers, and builders who want to attract high-end residential work. Showcases past projects with crisp galleries and instant quote request forms.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
    reverse: true
  },
  {
    title: "The Boutique Salon Booking",
    description: "An elegant, airy aesthetic tailored for hair salons and spas. Focuses on stylist profiles, service menus, and frictionless online booking integrations.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop",
    reverse: false
  }
];

export default function Portfolio() {
  return (
    <section className="py-24 px-6 bg-theme-bg">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-serif italic mb-6 text-theme-text-dark">Our Work</h2>
          <p className="text-lg text-theme-text-light font-normal max-w-2xl mx-auto">Premium digital spaces engineered for performance and conversion</p>
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
