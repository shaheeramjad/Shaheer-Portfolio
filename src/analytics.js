import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const IDLE_AFTER_MS = 30_000;
const REPORT_AFTER_MS = 1_000;
let analyticsEnabled = false;
let analyticsConfigured = false;
let posthogClient = null;
const pendingEvents = [];

export function initializeAnalytics() {
  const apiKey = process.env.REACT_APP_POSTHOG_KEY;
  const apiHost = process.env.REACT_APP_POSTHOG_HOST || "https://us.i.posthog.com";
  const sessionReplayEnabled = process.env.REACT_APP_POSTHOG_SESSION_REPLAY === "true";

  if (!apiKey || typeof window === "undefined") return;
  analyticsConfigured = true;

  const load = () => {
    import("posthog-js").then(({ default: posthog }) => {
      posthog.init(apiKey, {
        api_host: apiHost,
        capture_pageview: false,
        capture_pageleave: false,
        autocapture: false,
        disable_session_recording: !sessionReplayEnabled,
        person_profiles: "identified_only",
        persistence: "localStorage+cookie",
        respect_dnt: true,
        session_recording: {
          maskAllInputs: true,
          maskTextSelector: "[data-private]",
        },
      });
      posthog.register(readCampaign());
      posthogClient = posthog;
      analyticsEnabled = true;
      pendingEvents.splice(0).forEach(([event, properties]) => posthog.capture(event, properties));
    });
  };

  if ("requestIdleCallback" in window) window.requestIdleCallback(load, { timeout: 2_000 });
  else window.setTimeout(load, 0);
}

export function capture(event, properties = {}) {
  if (!analyticsConfigured) return;
  if (!analyticsEnabled) {
    pendingEvents.push([event, properties]);
    return;
  }
  posthogClient.capture(event, properties);
}

function readCampaign() {
  const params = new URLSearchParams(window.location.search);
  const allowed = ["ref", "visit", "utm_source", "utm_medium", "utm_campaign", "utm_content"];
  return Object.fromEntries(
    allowed
      .map((key) => [key, params.get(key)])
      .filter(([, value]) => value)
      .map(([key, value]) => [`campaign_${key}`, value.slice(0, 120)])
  );
}

function visiblePixels(element) {
  const rect = element.getBoundingClientRect();
  return Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));
}

export function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    const campaign = readCampaign();
    if (analyticsEnabled && Object.keys(campaign).length) posthogClient.register(campaign);
    capture("portfolio_page_viewed", {
      path: location.pathname,
      title: document.title,
      ...campaign,
    });
  }, [location.pathname]);

  useEffect(() => {
    let lastActivity = Date.now();
    let pageActiveMs = 0;
    let maxScrollDepth = 0;
    const sectionMs = new Map();
    const sections = Array.from(document.querySelectorAll("[data-track-section]"));
    const reportedDepths = new Set();

    const markActivity = () => {
      lastActivity = Date.now();
    };

    const updateScrollDepth = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const depth = scrollable > 0 ? Math.min(100, Math.round((window.scrollY / scrollable) * 100)) : 100;
      maxScrollDepth = Math.max(maxScrollDepth, depth);

      [25, 50, 75, 90, 100].forEach((milestone) => {
        if (depth >= milestone && !reportedDepths.has(milestone)) {
          reportedDepths.add(milestone);
          capture("portfolio_scroll_depth_reached", {
            path: location.pathname,
            depth_percent: milestone,
          });
        }
      });
    };

    const tick = () => {
      if (document.visibilityState !== "visible" || Date.now() - lastActivity > IDLE_AFTER_MS) return;

      pageActiveMs += 1_000;
      const mostVisible = sections
        .map((element) => ({ element, pixels: visiblePixels(element) }))
        .sort((a, b) => b.pixels - a.pixels)[0];

      if (mostVisible && mostVisible.pixels >= Math.min(150, window.innerHeight * 0.25)) {
        const name = mostVisible.element.dataset.trackSection;
        sectionMs.set(name, (sectionMs.get(name) || 0) + 1_000);
      }
    };

    const flush = () => {
      sectionMs.forEach((duration, section) => {
        if (duration >= REPORT_AFTER_MS) {
          capture("portfolio_section_attention", {
            path: location.pathname,
            section,
            active_seconds: Math.round(duration / 1_000),
          });
        }
      });

      if (pageActiveMs >= REPORT_AFTER_MS) {
        capture("portfolio_page_engagement", {
          path: location.pathname,
          active_seconds: Math.round(pageActiveMs / 1_000),
          max_scroll_depth: maxScrollDepth,
        });
      }

      sectionMs.clear();
      pageActiveMs = 0;
    };

    const trackClick = (event) => {
      const target = event.target.closest("[data-analytics-event]");
      if (!target) return;
      capture(target.dataset.analyticsEvent, {
        label: target.dataset.analyticsLabel || target.textContent.trim().slice(0, 100),
        path: location.pathname,
      });
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") flush();
      else markActivity();
    };

    const activityEvents = ["pointerdown", "keydown", "scroll", "touchstart"];
    activityEvents.forEach((name) => window.addEventListener(name, markActivity, { passive: true }));
    window.addEventListener("scroll", updateScrollDepth, { passive: true });
    document.addEventListener("click", trackClick);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pagehide", flush);

    updateScrollDepth();
    const timer = window.setInterval(tick, 1_000);

    return () => {
      window.clearInterval(timer);
      flush();
      activityEvents.forEach((name) => window.removeEventListener(name, markActivity));
      window.removeEventListener("scroll", updateScrollDepth);
      document.removeEventListener("click", trackClick);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pagehide", flush);
    };
  }, [location.pathname]);

  return null;
}
