export type PseoAnalyticsContext = {
  pageId: string;
  keyword: string;
  intent: string;
  path: string;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Array<Record<string, unknown>>;
  }
}

function emitEvent(name: string, payload: Record<string, unknown>) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", name, payload);
  }

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: name, ...payload });
  }
}

export function trackPseoEvent(name: string, context: PseoAnalyticsContext, payload: Record<string, unknown> = {}) {
  emitEvent(name, {
    page_id: context.pageId,
    keyword: context.keyword,
    intent: context.intent,
    page_path: context.path,
    ...payload,
  });
}
