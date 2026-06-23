import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      } px-6`}
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
