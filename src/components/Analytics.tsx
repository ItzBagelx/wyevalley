"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import {
  analyticsConsentKey,
  initializeAnalytics,
  isAnalyticsEnabled,
  measurementId,
  trackEvent,
} from "../lib/analytics";

export { trackEvent } from "../lib/analytics";

export default function Analytics() {
  const [consent, setConsent] = useState<"accepted" | "rejected" | null>(null);

  useEffect(() => {
    try {
      const savedConsent = window.localStorage.getItem(analyticsConsentKey);
      if (savedConsent === "accepted" || savedConsent === "rejected") {
        setConsent(savedConsent);
      }
    } catch {
      // Optional analytics stays disabled when storage is unavailable.
    }
  }, []);

  useEffect(() => {
    if (consent === "accepted") initializeAnalytics();
  }, [consent]);

  useEffect(() => {
    const trackConversionClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest("a");
      if (!(link instanceof HTMLAnchorElement)) return;

      const url = new URL(link.href, window.location.href);
      const location = `${window.location.pathname}${window.location.hash}`;

      if (url.protocol === "mailto:") {
        trackEvent("contact_email_click", { location });
      } else if (url.origin === window.location.origin && url.pathname === "/contact") {
        trackEvent("contact_cta_click", {
          location,
          destination: `${url.pathname}${url.hash}`,
        });
      }
    };

    document.addEventListener("click", trackConversionClick);
    return () => document.removeEventListener("click", trackConversionClick);
  }, []);

  if (!measurementId) {
    return null;
  }

  const chooseConsent = (choice: "accepted" | "rejected") => {
    try {
      window.localStorage.setItem(analyticsConsentKey, choice);
    } catch {
      // Do not enable collection if the consent choice cannot be persisted.
    }
    setConsent(choice);
  };

  return (
    <>
      {consent === "accepted" && isAnalyticsEnabled() && (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
          strategy="afterInteractive"
        />
      )}

      {consent === null && (
        <aside
          className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-xl rounded-2xl border border-theme-bg-gray bg-white p-5 shadow-2xl sm:flex sm:items-center sm:gap-5"
          aria-label="Cookie choices"
        >
          <p className="text-sm leading-relaxed text-theme-text-light sm:flex-1">
            We use optional analytics cookies to understand how the site is used.
            You can accept or decline them. Read our{" "}
            <a className="underline underline-offset-4" href="/privacy-policy">
              privacy policy
            </a>
            .
          </p>
          <div className="mt-4 flex gap-3 sm:mt-0">
            <button
              type="button"
              onClick={() => chooseConsent("rejected")}
              className="rounded-full border border-theme-bg-gray px-4 py-2 text-xs font-bold uppercase tracking-wider text-theme-text-dark transition-colors hover:bg-theme-bg"
            >
              Decline
            </button>
            <button
              type="button"
              onClick={() => chooseConsent("accepted")}
              className="rounded-full bg-theme-accent px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
            >
              Accept
            </button>
          </div>
        </aside>
      )}
    </>
  );
}
