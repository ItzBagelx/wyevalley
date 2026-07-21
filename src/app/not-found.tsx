import Link from "next/link";
import SiteFrame from "../components/SiteFrame";

export default function NotFound() {
  return (
    <SiteFrame>
      <section className="bg-theme-bg px-6 pb-24 pt-40 text-center md:pb-32 md:pt-48">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-theme-accent">Page not found</p>
        <h1 className="mx-auto mt-5 max-w-2xl text-5xl md:text-6xl">That page is not here</h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-theme-text-light">
          The link may have changed, or the page may no longer be available. You can return to the homepage or request a website proposal.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/" className="rounded-full bg-theme-accent px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90">Back to homepage</Link>
          <Link href="/contact#proposal" className="rounded-full border border-theme-text-dark px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-theme-text-dark transition-colors hover:bg-theme-bg-alt">Request a proposal</Link>
        </div>
      </section>
    </SiteFrame>
  );
}
