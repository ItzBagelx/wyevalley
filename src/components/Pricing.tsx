import Link from "next/link";
import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-theme-bg-light scroll-mt-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif italic text-theme-text-dark mb-4">Simple, honest pricing.</h2>
          <p className="text-lg text-theme-text-light font-normal max-w-2xl mx-auto">
            Two straightforward ways to get a custom website, with the final scope agreed before work starts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          <div
            className="bg-white border border-theme-bg-gray/50 rounded-3xl p-8 lg:p-10 shadow-xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-serif italic text-theme-text-dark mb-2">Pay monthly</h3>
              <p className="text-sm text-theme-text-light mb-6 font-normal min-h-[40px]">
                Nothing upfront. Pay monthly for 24 months, then keep the website online for £15 per month.
              </p>
              
              <div className="flex items-baseline gap-2 mb-6 border-b border-theme-bg-gray/30 pb-6">
                <span className="text-5xl font-serif italic text-theme-text-dark">£30</span>
                <span className="text-theme-text-light font-normal">/ month</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-theme-accent shrink-0 mt-0.5" />
                  <span className="text-theme-text-dark font-normal">£0 upfront</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-theme-accent shrink-0 mt-0.5" />
                  <span className="text-theme-text-dark font-normal">Custom 3–5 page website</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-theme-accent shrink-0 mt-0.5" />
                  <span className="text-theme-text-dark font-normal">Hosting, domain, SSL and maintenance included</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-theme-accent shrink-0 mt-0.5" />
                  <span className="text-theme-text-dark font-normal">Full ownership after month 24</span>
                </li>
              </ul>
            </div>
            
            <div>
              <Link
                href="/contact#proposal"
                className="flex w-full items-center justify-center rounded-full bg-theme-accent py-4 text-center text-sm font-bold uppercase tracking-wider text-white shadow-md transition-colors hover:bg-theme-accent/90"
              >
                Request a proposal
              </Link>
            </div>
          </div>

          <div
            className="bg-theme-bg-alt border border-white/50 rounded-3xl p-8 lg:p-10 shadow-xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-serif italic text-theme-text-dark mb-2">Pay upfront</h3>
              <p className="text-sm text-theme-text-light mb-6 font-normal min-h-[40px]">
                Pay for the website upfront, own it from launch and pay £15 per month thereafter.
              </p>
              
              <div className="flex items-baseline gap-2 mb-6 border-b border-theme-bg-gray/30 pb-6">
                <span className="text-5xl font-serif italic text-theme-text-dark">£495</span>
                <span className="text-theme-text-light font-normal">upfront</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-theme-accent shrink-0 mt-0.5" />
                  <span className="text-theme-text-dark font-normal">Custom 3–5 page website</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-theme-accent shrink-0 mt-0.5" />
                  <span className="text-theme-text-dark font-normal">Hosting, domain and SSL included</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-theme-accent shrink-0 mt-0.5" />
                  <span className="text-theme-text-dark font-normal">Full ownership from launch</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-theme-accent shrink-0 mt-0.5" />
                  <span className="text-theme-text-dark font-normal">On-page SEO essentials included</span>
                </li>
              </ul>
            </div>
            
            <div>
              <Link
                href="/contact#proposal"
                className="flex w-full items-center justify-center rounded-full bg-theme-text-dark py-4 text-center text-sm font-bold uppercase tracking-wider text-white shadow-md transition-colors hover:bg-theme-text"
              >
                Request a proposal
              </Link>
              <p className="text-center text-xs text-theme-text-light mt-4">Then £15/month</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
