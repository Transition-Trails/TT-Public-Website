/**
 * Track a meaningful user interaction in Replit Project Analytics.
 *
 * The Umami tracker is injected only in published builds with analytics
 * enabled. Optional chaining keeps development and unpublished builds safe.
 */
export function trackEvent(name, data) {
  if (typeof window === "undefined") return;

  try {
    window.umami?.track(name, data);
  } catch {
    // Analytics must never interrupt navigation or other user actions.
  }
}