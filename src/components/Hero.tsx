import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif italic text-theme-text-dark leading-[1.1] mb-8">
            Beautiful, high-performing websites for Hereford’s best local businesses.
          </h1>
          <p className="text-lg md:text-xl text-theme-text-light mb-10 max-w-2xl mx-auto leading-relaxed">
            We design, host, and manage a premium digital presence for your company, so you can focus entirely on running your business. No upfront costs, no tech headaches.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-theme-accent text-white rounded-full text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-2 group">
              View Our Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-theme-text text-theme-text rounded-full text-sm font-bold uppercase tracking-wider hover:bg-theme-bg-alt transition-all">
              Book a Free Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
