import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-theme-nav/75 backdrop-blur-md py-6 px-6"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-serif font-semibold tracking-tight uppercase text-theme-text-dark">
          Wye Valley<span className="font-sans font-light opacity-60 ml-1">Web</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-xs font-medium uppercase tracking-widest opacity-70 hover:opacity-100 transition-opacity text-theme-text">Services</a>
          <a href="#" className="text-xs font-medium uppercase tracking-widest opacity-70 hover:opacity-100 transition-opacity text-theme-text">Work</a>
          <a href="#" className="text-xs font-medium uppercase tracking-widest opacity-70 hover:opacity-100 transition-opacity text-theme-text">Pricing</a>
        </div>

        <button className="px-5 py-2.5 bg-theme-accent text-white rounded-full text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity">
          Let's Talk
        </button>
      </div>
    </motion.nav>
  );
}
