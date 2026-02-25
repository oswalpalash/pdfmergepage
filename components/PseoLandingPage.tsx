import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, howToJsonLd, softwareApplicationJsonLd } from "@/app/lib/jsonLd";
import { absoluteUrl, type LandingPage } from "@/app/lib/pseo";
import { PdfMergeTool } from "@/components/PdfMergeTool";
import { PseoAnalyticsTracker } from "@/components/PseoAnalyticsTracker";

type PseoLandingPageProps = {
  page: LandingPage;
  relatedPages: LandingPage[];
};

export function PseoLandingPage({ page, relatedPages }: PseoLandingPageProps) {
  const analyticsContext = {
    pageId: page.id,
    keyword: page.keyword,
    intent: page.intent,
    path: page.path,
  };

  const faqSchema = faqJsonLd(page.faq);
  const howToSchema = howToJsonLd({
    name: `${page.keyword} workflow`,
    description: `Step-by-step process to ${page.keyword} quickly on pdfmerge.page.`,
    path: page.path,
    steps: page.workflow.map((step) => ({ title: step.title, detail: step.detail })),
  });
  const breadcrumbSchema = breadcrumbJsonLd(page.path, page.h1);
  const softwareSchema = softwareApplicationJsonLd({
    name: "pdfmerge.page",
    description: page.metaDescription,
    path: page.path,
  });

  const secondaryLink = relatedPages[0];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#e0f2fe,_#f8fafc_55%,_#f1f5f9)] pb-16 text-slate-900">
      <PseoAnalyticsTracker context={analyticsContext} />
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="rounded-3xl border border-slate-200 bg-white/85 p-8 shadow-2xl shadow-slate-900/5 backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Programmatic SEO Landing</p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{page.h1}</h1>
          <p className="mt-4 text-base leading-relaxed text-slate-700">{page.heroDescription}</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">{page.heroSupport}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#merge-tool"
              data-pseo-event="pseo_cta_click"
              data-pseo-location="hero_primary"
              data-pseo-label={page.primaryCtaLabel}
              className="inline-flex items-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              {page.primaryCtaLabel}
            </a>
            {secondaryLink ? (
              <Link
                href={secondaryLink.path}
                data-pseo-event="pseo_cta_click"
                data-pseo-location="hero_secondary"
                data-pseo-label={page.secondaryCtaLabel}
                className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
              >
                {page.secondaryCtaLabel}
              </Link>
            ) : null}
          </div>
          <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-500">
            <span className="rounded-full bg-slate-100 px-3 py-1">Keyword: {page.keyword}</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">Intent: {page.intent}</span>
            {page.impressions > 0 ? (
              <span className="rounded-full bg-slate-100 px-3 py-1">{page.impressions} tracked impressions</span>
            ) : null}
            <span className="rounded-full bg-slate-100 px-3 py-1">Canonical: {absoluteUrl(page.path)}</span>
          </div>
        </header>

        <div className="mt-8">
          <PdfMergeTool
            heading={`Try "${page.keyword}" right now`}
            description="Upload at least two PDF files, reorder with drag-and-drop, then merge into one downloadable file."
            buttonLabel={page.primaryCtaLabel}
            analyticsContext={analyticsContext}
          />
        </div>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 sm:p-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Who this page is for</h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
            {page.audience.map((item) => (
              <li key={item} className="rounded-xl bg-slate-50 px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 sm:p-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Why this {page.keyword} page converts</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {page.valueProps.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 sm:p-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">3-step workflow for {page.keyword}</h2>
          <ol className="mt-5 grid gap-4 md:grid-cols-3">
            {page.workflow.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-sky-700">Step {index + 1}</p>
                <h3 className="mt-2 text-base font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{step.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 sm:p-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Common mistakes (and fixes)</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {page.mistakes.map((item) => (
              <article key={item.mistake} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-base font-semibold text-slate-900">{item.mistake}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.fix}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 sm:p-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Best use cases for {page.keyword}</h2>
          <ul className="mt-4 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
            {page.useCases.map((item) => (
              <li key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 sm:p-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">FAQ</h2>
          <div className="mt-4 space-y-3">
            {page.faq.map((item) => (
              <details key={item.question} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                <summary className="cursor-pointer text-sm font-semibold text-slate-900">{item.question}</summary>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 sm:p-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Related PDF merge pages</h2>
          <p className="mt-2 text-sm text-slate-600">
            Explore adjacent intent pages for broader keyword coverage and clearer crawl pathways.
          </p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPages.map((relatedPage) => (
              <li key={relatedPage.id}>
                <Link
                  href={relatedPage.path}
                  data-pseo-event="pseo_internal_link_click"
                  data-pseo-location="related_pages"
                  data-pseo-label={relatedPage.keyword}
                  className="block rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-100"
                >
                  {relatedPage.keyword}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 sm:p-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Next steps</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Use the merge tool above to ship your final PDF now. If you handle recurring merges, bookmark this route and
            the related intent pages so each workflow starts with the right template.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="#merge-tool"
              data-pseo-event="pseo_cta_click"
              data-pseo-location="next_steps_primary"
              data-pseo-label={page.primaryCtaLabel}
              className="inline-flex items-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              {page.primaryCtaLabel}
            </a>
            <Link
              href="/"
              data-pseo-event="pseo_internal_link_click"
              data-pseo-location="next_steps_secondary"
              data-pseo-label="Open main merge page"
              className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
            >
              Open main merge page
            </Link>
          </div>
        </section>
      </div>

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
    </main>
  );
}
