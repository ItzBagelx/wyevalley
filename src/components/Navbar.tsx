import { motion } from 'motion/react';

type NavbarProps = {
  openModal: () => void;
};

export default function Navbar({ openModal }: NavbarProps) {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-theme-nav/75 backdrop-blur-md py-6 px-6"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-serif font-semibold tracking-tight uppercase text-theme-text-dark">
          Wye Design
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-xs font-medium uppercase tracking-widest opacity-70 hover:opacity-100 transition-opacity text-theme-text">Services</a>
          <a href="#portfolio" className="text-xs font-medium uppercase tracking-widest opacity-70 hover:opacity-100 transition-opacity text-theme-text">Work</a>
          <a href="#pricing" className="text-xs font-medium uppercase tracking-widest opacity-70 hover:opacity-100 transition-opacity text-theme-text">Pricing</a>
        </div>

        <motion.button
          onClick={openModal}
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          className="px-5 py-2.5 bg-theme-accent text-white rounded-full text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
        >
          Let's Talk
        </motion.button>
      </div>
    </motion.nav>
  );
}
