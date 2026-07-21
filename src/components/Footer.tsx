import Link from "next/link";
import { ArrowRight } from "lucide-react";
import EmailLink from "./EmailLink";

export default function Footer() {
  return (
    <footer className="bg-theme-bg text-theme-text-dark pt-24 pb-12 px-6 border-t border-theme-bg-gray">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        <div className="w-full lg:w-5/12">
          <h2 className="text-4xl md:text-5xl font-serif italic mb-8">Ready to elevate your business online?</h2>
          <p className="text-theme-text-light font-normal leading-relaxed mb-8">
            Stop losing customers from a poor digital presence. Partner with us for a premium, hassle-free digital presence that will actually give results.
          </p>
          <div className="space-y-2 text-theme-text-light font-normal text-sm">
             <p><EmailLink className="underline underline-offset-4 hover:text-theme-accent">hello@wyedesign.co.uk</EmailLink></p>
             <p>Serving Hereford &amp; Herefordshire</p>
          </div>
        </div>

        <div className="w-full lg:w-7/12 flex flex-col justify-center">
          <div className="bg-theme-accent text-theme-bg p-10 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
            <h3 className="text-3xl font-serif italic mb-6 text-white">Let's build something great.</h3>
            <p className="text-white/70 mb-10 leading-relaxed max-w-md">
              Tell us about your business and goals, and we&apos;ll get back to you by email about the next step.
            </p>
            <Link
              href="/contact#proposal"
              className="w-max px-8 py-4 bg-white text-theme-accent rounded-full text-xs font-bold uppercase tracking-widest hover:bg-theme-bg-alt hover:text-theme-accent transition-colors flex justify-center items-center gap-2 group"
            >
              Request a proposal
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-6 border-t border-theme-bg-gray flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-theme-text-dark opacity-60 font-bold">
        <p>&copy; {new Date().getFullYear()} Wye Design. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy-policy" className="hover:text-theme-accent transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-theme-accent transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
