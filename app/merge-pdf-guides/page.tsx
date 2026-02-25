import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_URL, getKeywordLandingPages } from "@/app/lib/pseo";

const PAGE_PATH = "/merge-pdf-guides";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: `PDF Merge Guides Hub | ${SITE_NAME}`,
  description:
    "Browse all PDF merge landing pages by intent: generic, workflow, page-order, privacy, use-case, and device.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: `PDF Merge Guides Hub | ${SITE_NAME}`,
    description:
      "Browse all PDF merge landing pages by intent: generic, workflow, page-order, privacy, use-case, and device.",
    url: PAGE_URL,
    siteName: SITE_NAME,
    type: "website",
  },
};

const intentOrder = ["brand", "generic", "workflow", "page-order", "privacy", "use-case", "device"] as const;

const intentLabels: Record<(typeof intentOrder)[number], string> = {
  brand: "Brand",
  generic: "Generic",
  workflow: "Workflow",
  "page-order": "Page Order",
  privacy: "Privacy",
  "use-case": "Use Case",
  device: "Device",
};

export default function MergePdfGuidesPage() {
  const pages = getKeywordLandingPages();
  const grouped = intentOrder.map((intent) => ({
    intent,
    pages: pages
      .filter((page) => page.intent === intent)
      .sort((left, right) => right.impressions - left.impressions || left.keyword.localeCompare(right.keyword)),
  }));

  return (
    <main className="min-h-screen bg-slate-50 pb-16 text-slate-900">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-900/5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Navigation Hub</p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">PDF Merge Guides</h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-700">
            This hub is built for crawl clarity and user navigation. It groups every live merge landing by search
            intent so visitors can move from broad terms to exact workflows fast.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-500">
            <span className="rounded-full bg-slate-100 px-3 py-1">{pages.length} live keyword routes</span>
            <Link href="/" className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-700 hover:bg-slate-200">
              Open main merge tool
            </Link>
          </div>
        </header>

        {grouped.map((group) =>
          group.pages.length ? (
            <section key={group.intent} className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">{intentLabels[group.intent]} queries</h2>
              <p className="mt-2 text-sm text-slate-600">
                Routes focused on {intentLabels[group.intent].toLowerCase()} intent and conversion into immediate merge actions.
              </p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {group.pages.map((page) => (
                  <li key={page.id}>
                    <Link
                      href={page.path}
                      className="block rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-100"
                    >
                      {page.keyword}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null,
        )}
      </div>
    </main>
  );
}
