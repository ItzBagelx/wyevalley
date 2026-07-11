import { motion } from 'motion/react';
import { Check } from 'lucide-react';

type PricingProps = {
  openModal: () => void;
};

export default function Pricing({ openModal }: PricingProps) {
  return (
    <section className="py-24 px-6 bg-theme-bg-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif italic text-theme-text-dark mb-4">Simple, honest pricing.</h2>
          <p className="text-lg text-theme-text-light font-normal max-w-2xl mx-auto">
            High-end web design made affordable. We completely undercut traditional agency fees to make a premium digital presence accessible for Hereford local businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          
          {/* Card 1: Pay Monthly */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-theme-bg-gray/50 rounded-3xl p-8 lg:p-10 shadow-xl flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4">
              <span className="bg-theme-accent/10 text-theme-accent text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                Most Popular
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-serif italic text-theme-text-dark mb-2">Pay Monthly</h3>
              <p className="text-sm text-theme-text-light mb-6 font-normal min-h-[40px]">
                Saves you hours of frustration. Slightly more than a DIY builder, but we do all the work.
              </p>
              
              <div className="flex items-baseline gap-2 mb-6 border-b border-theme-bg-gray/30 pb-6">
                <span className="text-5xl font-serif italic text-theme-text-dark">£40</span>
                <span className="text-theme-text-light font-normal">/ month</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-theme-accent shrink-0 mt-0.5" />
                  <span className="text-theme-text-dark font-normal">£0 Upfront Setup Fee</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-theme-accent shrink-0 mt-0.5" />
                  <span className="text-theme-text-dark font-normal">Custom Website Design (3-5 Pages)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-theme-accent shrink-0 mt-0.5" />
                  <span className="text-theme-text-dark font-normal">Premium Hosting & Domain</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-theme-accent shrink-0 mt-0.5" />
                  <span className="text-theme-text-dark font-normal">SSL Security Certificate</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-theme-accent shrink-0 mt-0.5" />
                  <span className="text-theme-text-dark font-normal">Continuous Updates & Maintenance</span>
                </li>
              </ul>
            </div>
            
            <div>
              <button 
                onClick={openModal}
                className="w-full py-4 bg-theme-accent text-white rounded-full text-sm font-bold uppercase tracking-wider hover:bg-theme-accent/90 transition-colors shadow-md"
              >
                Get Started
              </button>
              <p className="text-center text-[10px] uppercase tracking-widest text-theme-text-light mt-4 font-bold opacity-75">Cancel anytime</p>
            </div>
          </motion.div>

          {/* Card 2: Fixed Price */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-theme-bg-alt border border-white/50 rounded-3xl p-8 lg:p-10 shadow-xl flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              <h3 className="text-2xl font-serif italic text-theme-text-dark mb-2">Fixed Price</h3>
              <p className="text-sm text-theme-text-light mb-6 font-normal min-h-[40px]">
                Completely undercuts agencies charging £3,000+. Ideal for Hereford trades & cafes.
              </p>
              
              <div className="flex items-baseline gap-2 mb-6 border-b border-theme-bg-gray/30 pb-6">
                <span className="text-5xl font-serif italic text-theme-text-dark">£400</span>
                <span className="text-theme-text-light font-normal">upfront</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-theme-accent shrink-0 mt-0.5" />
                  <span className="text-theme-text-dark font-normal">Custom Website Design (3-5 Pages)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-theme-accent shrink-0 mt-0.5" />
                  <span className="text-theme-text-dark font-normal">SEO Fundamentals Built-in</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-theme-accent shrink-0 mt-0.5" />
                  <span className="text-theme-text-dark font-normal">SSL Security Certificate</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-theme-accent shrink-0 mt-0.5" />
                  <span className="text-theme-text-dark font-normal">Full Site Ownership</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-theme-accent shrink-0 mt-0.5" />
                  <span className="text-theme-text-dark font-normal">Security & Support Included</span>
                </li>
              </ul>
            </div>
            
            <div>
              <button 
                onClick={openModal}
                className="w-full py-4 bg-theme-text-dark text-white rounded-full text-sm font-bold uppercase tracking-wider hover:bg-theme-text transition-colors shadow-md"
              >
                Get Started
              </button>
              <p className="text-center text-[10px] uppercase tracking-widest text-theme-text-light mt-4 font-bold opacity-75">+ £15/mo Maintenance Retainer</p>
            </div>
          </motion.div>

        </div>
        
        {/* Footnote context */}
        <div className="mt-16 text-center text-xs text-theme-text-light max-w-xl mx-auto leading-relaxed border-t border-theme-bg-gray/50 pt-8">
          <p className="mb-3">
            <strong>Fixed-Price Retainer:</strong> A £15/month retainer is required for fixed-price projects. This keeps your site online securely, and includes domain renewal and security updates.
          </p>
          <p>
            <strong>Why monthly pricing?</strong> Premium DIY builders like Wix or Squarespace cost £15–£30/month once you buy a domain name and custom email. For just a fraction more, we handle the hours of layout and development frustration for you.
          </p>
        </div>

      </div>
    </section>
  );
}
