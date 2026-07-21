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
          
          {/* Card 1: Pay Monthly */}
          <div
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
                A managed option for businesses that want one predictable monthly cost.
              </p>
              
              <div className="flex items-baseline gap-2 mb-6 border-b border-theme-bg-gray/30 pb-6">
                <span className="text-5xl font-serif italic text-theme-text-dark">£30</span>
                <span className="text-theme-text-light font-normal">/ month</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-theme-accent shrink-0 mt-0.5" />
                  <span className="text-theme-text-dark font-normal">£0 Upfront Setup Fee</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-theme-accent shrink-0 mt-0.5" />
                  <span className="text-theme-text-dark font-normal">Custom website design (3–5 pages)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-theme-accent shrink-0 mt-0.5" />
                  <span className="text-theme-text-dark font-normal">Hosting, domain and SSL setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-theme-accent shrink-0 mt-0.5" />
                  <span className="text-theme-text-dark font-normal">SSL Security Certificate</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-theme-accent shrink-0 mt-0.5" />
                  <span className="text-theme-text-dark font-normal">Ongoing maintenance and agreed updates</span>
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

          {/* Card 2: Fixed Price */}
          <div
            className="bg-theme-bg-alt border border-white/50 rounded-3xl p-8 lg:p-10 shadow-xl flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              <h3 className="text-2xl font-serif italic text-theme-text-dark mb-2">Fixed Price</h3>
              <p className="text-sm text-theme-text-light mb-6 font-normal min-h-[40px]">
                A fixed upfront build, with a separate monthly service for keeping the site online and maintained.
              </p>
              
              <div className="flex items-baseline gap-2 mb-6 border-b border-theme-bg-gray/30 pb-6">
                <span className="text-5xl font-serif italic text-theme-text-dark">£400</span>
                <span className="text-theme-text-light font-normal">upfront</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-theme-accent shrink-0 mt-0.5" />
                  <span className="text-theme-text-dark font-normal">Custom website design (3–5 pages)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-theme-accent shrink-0 mt-0.5" />
                  <span className="text-theme-text-dark font-normal">On-page SEO essentials included</span>
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
                  <span className="text-theme-text-dark font-normal">Ongoing security and support service</span>
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
              <p className="text-center text-[10px] uppercase tracking-widest text-theme-text-light mt-4 font-bold opacity-75">+ £15/mo Maintenance Retainer</p>
            </div>
          </div>

        </div>
        
        {/* Footnote context */}
        <div className="mt-16 text-center text-xs text-theme-text-light max-w-xl mx-auto leading-relaxed border-t border-theme-bg-gray/50 pt-8">
          <p>
            <strong>Fixed-price service:</strong> The £15/month service keeps the website online and covers domain renewal and security updates. Your proposal confirms the scope and ongoing arrangements before work begins.
          </p>
          <Link href="/pricing" className="mt-5 inline-block font-bold text-theme-accent underline underline-offset-4">Compare both options in detail</Link>
        </div>

      </div>
    </section>
  );
}
