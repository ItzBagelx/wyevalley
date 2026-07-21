"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const consentKey = "wye-design-analytics-consent";
const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, parameters?: Record<string, string>) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", name, parameters);
  }
}

export default function Analytics() {
  const [consent, setConsent] = useState<"accepted" | "rejected" | null>(null);

  useEffect(() => {
    const savedConsent = window.localStorage.getItem(consentKey);
    if (savedConsent === "accepted" || savedConsent === "rejected") {
      setConsent(savedConsent);
    }
  }, []);

  if (!measurementId) {
    return null;
  }

  const chooseConsent = (choice: "accepted" | "rejected") => {
    window.localStorage.setItem(consentKey, choice);
    setConsent(choice);
  };

  return (
    <>
      {consent === "accepted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${measurementId}', { anonymize_ip: true });
            `}
          </Script>
        </>
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
