type AnalyticsEvent =
  | "appointment_cta_click"
  | "appointment_form_start"
  | "appointment_form_submit"
  | "phone_click"
  | "whatsapp_click"
  | "directions_click";

type PageCategory = "home" | "service" | "blog" | "contact" | "other";
type CtaLocation = "header" | "footer" | "sticky" | "appointment_form" | "contact_page" | "service_page" | "blog_page" | "page_content";
type AnalyticsEventParams = {
  page_category?: PageCategory;
  cta_location?: CtaLocation;
};

type Gtag = (...args: [string, ...unknown[]]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
    __clinicAnalyticsReady?: boolean;
    __clinicAnalyticsListenersReady?: boolean;
  }
}

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();

const isProductionHost = () =>
  typeof window !== "undefined" &&
  (window.location.hostname === "www.drhamidphysio.in" ||
    window.location.hostname === "drhamidphysio.in");

const getPageCategory = (pathname: string): PageCategory => {
  if (pathname === "/") return "home";
  if (pathname === "/contact") return "contact";
  if (pathname.startsWith("/services/") || pathname === "/services") return "service";
  if (pathname.startsWith("/blogs")) return "blog";
  return "other";
};

const getCtaLocation = (element: Element): CtaLocation => {
  if (element.closest("#appointment-request-form")) return "appointment_form";
  if (element.closest("header")) return "header";
  if (element.closest("footer")) return "footer";
  if (element.closest(".fixed")) return "sticky";

  const pathname = window.location.pathname;
  if (pathname === "/contact") return "contact_page";
  if (pathname.startsWith("/services")) return "service_page";
  if (pathname.startsWith("/blogs")) return "blog_page";
  return "page_content";
};

const allowedCampaignKeys = new Set([
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_id",
  "utm_source_platform",
  "utm_creative_format",
  "utm_marketing_tactic",
  "utm_content",
  "utm_term",
  "gclid",
  "gbraid",
  "wbraid",
  "dclid",
  "msclkid",
]);

const getSafePageLocation = (pathname: string, includeCampaignParams = false) => {
  const safePath = pathname.split("?")[0].split("#")[0] || "/";
  const campaignParams = new URLSearchParams();
  if (includeCampaignParams) {
    new URLSearchParams(window.location.search).forEach((value, key) => {
      if (allowedCampaignKeys.has(key.toLowerCase()) && value.length <= 200) {
        campaignParams.set(key.toLowerCase(), value);
      }
    });
  }

  const campaignQuery = campaignParams.toString();
  return `${window.location.origin}${safePath}${campaignQuery ? `?${campaignQuery}` : ""}`;
};

const getSafePageReferrer = (previousPath?: string) => {
  if (previousPath) return getSafePageLocation(previousPath);
  if (!document.referrer) return "";

  try {
    const referrer = new URL(document.referrer);
    return referrer.protocol === "https:" || referrer.protocol === "http:"
      ? referrer.origin
      : "";
  } catch {
    return "";
  }
};

const setSafePageContext = (pageLocation: string, pageTitle: string, pageReferrer: string) => {
  window.gtag?.("set", {
    page_location: pageLocation,
    page_title: pageTitle,
    page_referrer: pageReferrer,
  });
};

const registerInteractionListeners = () => {
  if (window.__clinicAnalyticsListenersReady) return;
  window.__clinicAnalyticsListenersReady = true;

  const appointmentFormsStarted = new WeakSet<HTMLFormElement>();
  const submitAttemptsTriggeredByClick = new WeakSet<HTMLFormElement>();
  const invalidAttemptsReported = new WeakSet<HTMLFormElement>();
  const trackAppointmentSubmitAttempt = () => {
    trackAnalyticsEvent("appointment_form_submit", {
      page_category: getPageCategory(window.location.pathname),
      cta_location: "appointment_form",
    });
  };

  document.addEventListener("focusin", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const form = target.closest<HTMLFormElement>("#appointment-request-form");
    if (!form || appointmentFormsStarted.has(form)) return;

    appointmentFormsStarted.add(form);
    trackAnalyticsEvent("appointment_form_start", {
      page_category: getPageCategory(window.location.pathname),
    });
  });

  document.addEventListener("submit", (event) => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement) || form.id !== "appointment-request-form") return;
    if (submitAttemptsTriggeredByClick.has(form)) return;
    trackAppointmentSubmitAttempt();
  }, true);

  document.addEventListener("invalid", (event) => {
    const control = event.target;
    if (!(control instanceof Element)) return;
    const form = control.closest<HTMLFormElement>("#appointment-request-form");
    if (
      !form ||
      submitAttemptsTriggeredByClick.has(form) ||
      invalidAttemptsReported.has(form)
    ) {
      return;
    }

    invalidAttemptsReported.add(form);
    trackAppointmentSubmitAttempt();
    window.setTimeout(() => invalidAttemptsReported.delete(form), 0);
  }, true);

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const clickable = target.closest<HTMLElement>("a, button");
    if (!clickable) return;

    const link = clickable instanceof HTMLAnchorElement ? clickable : null;
    const href = link?.getAttribute("href")?.trim().toLowerCase() ?? "";
    const context: AnalyticsEventParams = {
      page_category: getPageCategory(window.location.pathname),
      cta_location: getCtaLocation(clickable),
    };
    const label = (clickable.getAttribute("aria-label") ?? clickable.textContent ?? "")
      .trim()
      .toLowerCase();
    const appointmentForm = clickable.closest<HTMLFormElement>("#appointment-request-form");
    const appointmentSubmitButton =
      appointmentForm && clickable.matches("button[type='submit']");

    if (
      (href.startsWith("/contact#appointment-request") || href.startsWith("/#appointment")) ||
      appointmentSubmitButton ||
      ((href.includes("wa.me/") || href.includes("api.whatsapp.com/")) &&
        /book|appointment|consultation/.test(label)) ||
      (clickable.tagName === "BUTTON" &&
        /book|appointment|consultation/.test(label) &&
        !/callback/.test(label))
    ) {
      trackAnalyticsEvent("appointment_cta_click", context);
    }

    if (appointmentForm && appointmentSubmitButton) {
      submitAttemptsTriggeredByClick.add(appointmentForm);
      trackAppointmentSubmitAttempt();
      window.setTimeout(() => submitAttemptsTriggeredByClick.delete(appointmentForm), 0);
    }

    if (href.startsWith("tel:")) {
      trackAnalyticsEvent("phone_click", context);
    } else if (href.includes("wa.me/") || href.includes("api.whatsapp.com/")) {
      trackAnalyticsEvent("whatsapp_click", context);
    } else if (
      href.includes("maps.app.goo.gl/") ||
      href.includes("google.com/maps") ||
      href.includes("maps.google.")
    ) {
      trackAnalyticsEvent("directions_click", context);
    }
  });
};

export const initializeAnalytics = () => {
  if (
    !import.meta.env.PROD ||
    !isProductionHost() ||
    !measurementId ||
    window.__clinicAnalyticsReady
  ) {
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
    script.onerror = () => {
      // Keep local queue calls harmless if Google's library is unavailable.
      window.__clinicAnalyticsReady = false;
    };
    document.head.appendChild(script);
  }

  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    send_page_view: false,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    transport_type: "beacon",
  });

  setSafePageContext(
    getSafePageLocation(window.location.pathname, true),
    document.title,
    getSafePageReferrer(),
  );
  registerInteractionListeners();
};

export const trackPageView = (pathname: string, previousPath?: string) => {
  if (!window.gtag || !import.meta.env.PROD || !isProductionHost() || !measurementId) return;

  const safePath = pathname.split("?")[0].split("#")[0] || "/";
  const pageLocation = getSafePageLocation(pathname, !previousPath);
  const pageReferrer = getSafePageReferrer(previousPath);
  setSafePageContext(pageLocation, document.title, pageReferrer);

  window.gtag("event", "page_view", {
    page_title: document.title,
    page_location: pageLocation,
    page_path: safePath,
    page_category: getPageCategory(safePath),
    page_referrer: pageReferrer,
  });
};

export const trackAnalyticsEvent = (
  eventName: AnalyticsEvent,
  params: AnalyticsEventParams = {},
) => {
  if (!import.meta.env.PROD || !isProductionHost() || !measurementId || !window.gtag) {
    return;
  }

  // Only static labels are sent. Never pass form values, message text, or full links.
  window.gtag("event", eventName, {
    ...params,
    page_category: params.page_category ?? getPageCategory(window.location.pathname),
  });
};
