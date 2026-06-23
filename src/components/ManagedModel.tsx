import { motion } from 'motion/react';
import { PenTool, Server, RefreshCw } from 'lucide-react';

const steps = [
  {
    number: "01",
    icon: PenTool,
    title: "Premium Custom Design",
    description: "We don't use clunky templates. We custom-build a modern website tailored to your brand and your best customers."
  },
  {
    number: "02",
    icon: Server,
    title: "Enterprise Hosting & Security",
    description: "Your site is hosted on our world-class infrastructure. It stays lightning-fast, secure, and online 24/7."
  },
  {
    number: "03",
    icon: RefreshCw,
    title: "Unlimited Updates",
    description: "Changed your menu? Hired a new team member? Just send us an email, and we update your website that same day. We handle all the maintenance."
  }
];

export default function ManagedModel() {
  return (
    <section className="py-24 px-6 bg-theme-bg border-y border-theme-bg-gray text-theme-text">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl font-serif italic mb-6 text-theme-text-dark">The "Fully Managed" Model</h2>
          <p className="text-xl text-theme-text-light font-normal leading-relaxed">
            A VIP concierge service for your digital presence. You aren't just renting a site; you are hiring a dedicated web team.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="text-8xl font-serif italic text-theme-text-dark/5 absolute -top-12 -left-6 -z-10 select-none">
                {step.number}
              </div>
              <div className="bg-white border border-white/50 shadow-xl shadow-theme-bg-alt/50 p-8 rounded-3xl h-full mt-4 flex flex-col justify-between">
                <div>
                  <step.icon strokeWidth={1.5} size={32} className="text-theme-accent mb-6" />
                  <h3 className="text-sm font-bold uppercase tracking-widest text-theme-text-dark mb-4">{step.title}</h3>
                </div>
                <p className="text-sm text-theme-text-light font-normal leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
