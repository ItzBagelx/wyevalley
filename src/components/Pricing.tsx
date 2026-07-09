import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const features = [
  "Custom Website Design",
  "Premium Reliable Hosting",
  "Frequent Backups & Maintenance",
  "SSL Security Certificate",
  "Ongoing Content Updates",
  "SEO Fundamentals Built-in"
];

type PricingProps = {
  openModal: () => void;
};

export default function Pricing({ openModal }: PricingProps) {
  return (
    <section className="py-24 px-6 bg-theme-bg-light">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-serif italic text-theme-text-dark mb-6">Predictable, transparent investment.</h2>
          <p className="text-xl text-theme-text-light font-normal leading-relaxed mb-8">
            Get a £3,000+ agency website for a simple, predictable monthly fee. No massive capital investment, no hidden costs.
          </p>
          <div className="flex flex-col gap-6">
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-theme-bg flex items-center justify-center shrink-0 text-theme-accent">
                 <Check className="w-6 h-6" />
               </div>
               <div>
                 <h4 className="font-bold text-theme-text-dark text-lg uppercase tracking-wider">Zero Risk</h4>
                 <p className="text-theme-text-light font-normal">We build it, you approve it.</p>
               </div>
             </div>
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-theme-bg flex items-center justify-center shrink-0 text-theme-accent">
                 <Check className="w-6 h-6" />
               </div>
               <div>
                 <h4 className="font-bold text-theme-text-dark text-lg uppercase tracking-wider">Cancel Anytime</h4>
                 <p className="text-theme-text-light font-normal">No lock-in contracts.</p>
               </div>
             </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 max-w-lg mx-auto"
        >
          <div className="bg-theme-bg-alt border border-white/50 rounded-3xl p-10 lg:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <div className="bg-theme-text-dark text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                All-Inclusive
              </div>
            </div>
            
            <h3 className="text-2xl font-serif italic text-theme-text-dark mb-2">The Partnership</h3>
            <p className="text-theme-text-light mb-8 font-normal">Everything your business needs online.</p>
            
            <div className="flex items-baseline gap-2 mb-8 border-b border-white/50 pb-8">
              <span className="text-5xl font-serif italic text-theme-text-dark">£99</span>
              <span className="text-theme-text-light font-normal">/ month</span>
            </div>
            
            <ul className="space-y-4 mb-10">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-theme-accent shrink-0 mt-0.5" />
                  <span className="text-theme-text-dark font-normal">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button 
              onClick={openModal}
              className="w-full py-4 bg-theme-text-dark text-white rounded-full text-sm font-bold uppercase tracking-wider hover:bg-theme-text transition-colors"
            >
              Start Your Project
            </button>
            <p className="text-center text-[10px] uppercase tracking-widest text-theme-text-light mt-4 font-bold opacity-70">£0 Upfront Setup Fee</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
