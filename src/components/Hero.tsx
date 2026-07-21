import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden px-6">
      <div className="max-w-7xl mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-theme-accent">
            Hereford &amp; Herefordshire
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-theme-text-dark leading-[1.1] mb-8">
            Web design for Hereford trades and small businesses
          </h1>
          <p className="text-lg md:text-xl text-theme-text-light mb-10 max-w-2xl mx-auto leading-relaxed">
            Custom websites, hosting and maintenance — all handled for you.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact#proposal"
              className="w-full sm:w-auto px-8 py-4 bg-theme-accent text-white rounded-full text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 group shadow-lg shadow-theme-accent/20 hover:shadow-xl hover:shadow-theme-accent/30 transition-shadow"
            >
              Get a proposal
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#services"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-theme-text text-theme-text rounded-full text-sm font-bold uppercase tracking-wider hover:bg-theme-bg-alt transition-all"
            >
              How it works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
