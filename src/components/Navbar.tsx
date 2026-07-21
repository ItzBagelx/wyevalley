"use client";

import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { primaryNavigation } from "../lib/site";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-theme-text/10 bg-theme-nav/95 px-4 py-3.5 shadow-[0_8px_30px_rgba(45,45,45,0.06)] backdrop-blur-md sm:px-6 md:border-transparent md:px-6 md:py-5 md:shadow-none">
        <div className="mx-auto flex max-w-7xl items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr]">
          <Link
            href="/"
            className="group flex min-w-0 flex-col leading-none md:justify-self-start"
          >
            <span className="font-serif text-[1.35rem] font-semibold tracking-tight text-theme-text-dark md:text-xl">
              Wye Design
            </span>
          </Link>

          <div className="hidden items-center gap-7 md:flex md:justify-self-center">
            {primaryNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-medium uppercase tracking-widest text-theme-text/70 transition-opacity hover:text-theme-text"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-theme-accent px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-transform hover:-translate-y-0.5 md:inline-flex md:justify-self-end"
          >
            Request a proposal <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>

          <div className="flex items-center gap-2 md:hidden">
            <Link
              href="/contact#proposal"
              className="inline-flex items-center gap-1.5 rounded-full border border-theme-accent/20 bg-white/55 px-3 py-2 text-[0.63rem] font-bold uppercase tracking-[0.12em] text-theme-accent transition-colors hover:bg-white"
            >
              Enquire <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
            <button
              type="button"
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
                isMobileMenuOpen
                  ? "bg-theme-text-dark text-white"
                  : "bg-theme-accent text-white shadow-sm"
              }`}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto border-t border-theme-text/10 bg-theme-bg px-6 pb-8 pt-7 md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            <p className="mb-5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-theme-text/55">
              Explore Wye Design
            </p>
            <div className="flex flex-col border-t border-theme-text/10">
              {primaryNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-b border-theme-text/10 py-5 font-serif text-3xl text-theme-text-dark"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-theme-accent px-5 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-[0_10px_20px_rgba(74,93,78,0.18)]"
            >
              Request a proposal <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
