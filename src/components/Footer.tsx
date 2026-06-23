import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-theme-bg text-theme-text-dark pt-24 pb-12 px-6 border-t border-theme-bg-gray">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        <div className="w-full lg:w-5/12">
          <h2 className="text-4xl md:text-5xl font-serif italic mb-8">Ready to elevate your business online?</h2>
          <p className="text-theme-text-light font-normal leading-relaxed mb-8">
            Stop losing customers to outdated websites. Partner with us for a premium, hassle-free digital presence that actually drives growth.
          </p>
          <div className="space-y-2 text-theme-text-light font-normal text-sm">
             <p>hello@wyevalleyweb.co.uk</p>
             <p>01432 000000</p>
             <p>Hereford, UK</p>
          </div>
        </div>

        <div className="w-full lg:w-7/12">
          <div className="bg-theme-text-dark text-theme-bg p-8 md:p-12 rounded-3xl flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <h3 className="text-2xl font-serif italic mb-8">Request a Consultation</h3>
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-white/60">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="business" className="text-[10px] font-bold uppercase tracking-widest text-white/60">Business Name</label>
                  <input 
                    type="text" 
                    id="business" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="Acme Corp"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-widest text-white/60">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="07700 900000"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-white/60">How can we help your business grow?</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors resize-none"
                  placeholder="Tell us about your current website and your goals..."
                ></textarea>
              </div>

              <button type="submit" className="w-full py-4 mt-4 bg-theme-accent text-white rounded-full text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity flex justify-center items-center gap-2 group">
                Send Message
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-6 border-t border-theme-bg-gray flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-theme-text-dark opacity-60 font-bold">
        <p>&copy; {new Date().getFullYear()} Wye Valley Web. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-theme-accent transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-theme-accent transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
