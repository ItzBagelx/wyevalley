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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-theme-text-dark leading-[1.1] mb-8">
            Premium websites for Hereford's local business
          </h1>
          <p className="text-lg md:text-xl text-theme-text-light mb-10 max-w-2xl mx-auto leading-relaxed">
            We design, host and manage a high end digital space for your company, so you can focus on what matters most. All done stress free.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="btn-shimmer w-full sm:w-auto px-8 py-4 bg-theme-accent text-white rounded-full text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 group shadow-lg shadow-theme-accent/20 hover:shadow-xl hover:shadow-theme-accent/30 transition-shadow"
            >
              View our work
              <motion.span
                className="inline-flex"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </motion.button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-theme-text text-theme-text rounded-full text-sm font-bold uppercase tracking-wider hover:bg-theme-bg-alt transition-all">
              Book a free consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
