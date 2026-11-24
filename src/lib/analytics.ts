export const analyticsConsentKey = "wye-design-analytics-consent";
export const measurementId =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-K2DXS9S4GV"
    : "";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    wyeAnalyticsInitialized?: boolean;
  }
}

export function isAnalyticsEnabled() {
  return (
    Boolean(measurementId) &&
    typeof window !== "undefined" &&
    window.location.hostname === "wyedesign.co.uk"
  );
}

export function initializeAnalytics() {
  if (!isAnalyticsEnabled()) return false;

  // Never retain or replay interactions from before the visitor's consent.
  try {
    if (window.localStorage.getItem(analyticsConsentKey) !== "accepted") return false;
  } catch {
    return false;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () {
    window.dataLayer!.push(arguments);
  };

  // Queue configuration before events, even if the external script is still loading.
  if (!window.wyeAnalyticsInitialized) {
    window.gtag("js", new Date());
    window.gtag("config", measurementId, { anonymize_ip: true });
    window.wyeAnalyticsInitialized = true;
  }

  return true;
}

export function trackEvent(name: string, parameters?: Record<string, string>) {
  if (!initializeAnalytics()) return false;
  window.gtag!("event", name, parameters);
  return true;
}
