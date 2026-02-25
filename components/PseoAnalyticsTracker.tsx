"use client";

import { useEffect } from "react";
import { trackPseoEvent, type PseoAnalyticsContext } from "@/app/lib/analytics";

type PseoAnalyticsTrackerProps = {
  context: PseoAnalyticsContext;
};

export function PseoAnalyticsTracker({ context }: PseoAnalyticsTrackerProps) {
  useEffect(() => {
    trackPseoEvent("pseo_landing_view", context);

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const clickable = target?.closest<HTMLElement>("[data-pseo-event]");
      if (!clickable) return;

      const eventName = clickable.dataset.pseoEvent;
      if (!eventName) return;

      trackPseoEvent(eventName, context, {
        location: clickable.dataset.pseoLocation ?? "unspecified",
        label: clickable.dataset.pseoLabel ?? null,
        destination: clickable.getAttribute("href") ?? null,
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [context]);

  return null;
}
