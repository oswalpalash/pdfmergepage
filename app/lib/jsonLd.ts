import { SITE_URL } from "@/app/lib/pseo";

export type FaqItem = {
  question: string;
  answer: string;
};

type HowToStep = {
  title: string;
  detail: string;
};

type HowToPayload = {
  name: string;
  description: string;
  path: string;
  steps: HowToStep[];
};

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  } as const;
}

export function howToJsonLd(payload: HowToPayload) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: payload.name,
    description: payload.description,
    url: `${SITE_URL}${payload.path === "/" ? "" : payload.path}`,
    step: payload.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.detail,
    })),
  } as const;
}

export function breadcrumbJsonLd(path: string, name: string) {
  const canonical = `${SITE_URL}${path === "/" ? "" : path}`;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@id": SITE_URL,
          name: "pdfmerge.page",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@id": canonical,
          name,
        },
      },
    ],
  } as const;
}

type SoftwareApplicationPayload = {
  name: string;
  description: string;
  path: string;
};

export function softwareApplicationJsonLd(payload: SoftwareApplicationPayload) {
  const canonical = `${SITE_URL}${payload.path === "/" ? "" : payload.path}`;

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: payload.name,
    description: payload.description,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    url: canonical,
    featureList: [
      "Merge multiple PDF files into one document",
      "Drag-and-drop file reordering before merge",
      "Browser-based local processing",
    ],
  } as const;
}
