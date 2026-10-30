type AnalyticsEvent =
  | "appointment_whatsapp_click"
  | "callback_whatsapp_click"
  | "phone_call_click";

type Gtag = (...args: [string, ...unknown[]]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
    __clinicAnalyticsReady?: boolean;
  }
}

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();
const isProductionHost = () =>
  typeof window !== "undefined" &&
  (window.location.hostname === "www.drhamidphysio.in" ||
    window.location.hostname === "drhamidphysio.in");

export const initializeAnalytics = () => {
  if (!import.meta.env.PROD || !isProductionHost() || !measurementId || window.__clinicAnalyticsReady) {
    return;
  }

  window.__clinicAnalyticsReady = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    // Match Google's gtag.js bootstrap: preserve the Arguments object in the queue.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments);
  };

  const scriptId = "google-analytics-gtag";
  if (!document.getElementById(scriptId)) {
    const script = document.createElement("script");
    script.id = scriptId;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.appendChild(script);
  }

  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    send_page_view: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const link = target.closest<HTMLAnchorElement>('a[href^="tel:"]');
    if (link) trackAnalyticsEvent("phone_call_click");
  });
};

export const trackAnalyticsEvent = (eventName: AnalyticsEvent) => {
  if (!import.meta.env.PROD || !isProductionHost() || !measurementId || !window.gtag) {
    return;
  }

  // Deliberately send no event parameters; form fields and WhatsApp URLs stay out of Analytics.
  window.gtag("event", eventName);
};
