import { motion } from 'motion/react';
import { Smartphone, Zap, ShieldCheck } from 'lucide-react';

const pillars = [
  {
    icon: Smartphone,
    title: "Flawless mobile design",
    description: "Your customers need a reliable, instant experience whether they are booking a table on their phone or requesting a quote on their laptop."
  },
  {
    icon: Zap,
    title: "Lightning-fast loading",
    description: "We deliver premium, custom-coded designs made just for you that load instantly. A fast website means more inquiries, more bookings and better SEO"
  },
  {
    icon: ShieldCheck,
    title: "Fully managed hosting",
    description: "We handle the servers, the security and the daily backups. We take care of it all, hassle free."
  }
];

export default function ValueProposition() {
  return (
    <section id="services" className="py-24 bg-theme-bg-light px-6 border-y border-theme-bg-gray scroll-mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-serif italic mb-8 text-theme-text-dark">Online presence is a must</h2>
          <p className="text-lg text-theme-text-light font-normal leading-relaxed">
            Your customers need a premium, hassle-free experience whether they are booking a table on their phone or requesting a quote on their laptop. We deliver intuitive, high end, custom-coded designs for all your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {pillars.map((pillar, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-theme-accent/10 flex items-center justify-center mb-6 text-theme-accent">
                <pillar.icon strokeWidth={1.5} size={32} />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-theme-text-dark mb-4">{pillar.title}</h3>
              <p className="text-sm text-theme-text-light font-normal leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
