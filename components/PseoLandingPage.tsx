import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, howToJsonLd, softwareApplicationJsonLd } from "@/app/lib/jsonLd";
import { type LandingPage } from "@/app/lib/pseo";
import { PdfMergeTool } from "@/components/PdfMergeTool";
import { PseoAnalyticsTracker } from "@/components/PseoAnalyticsTracker";

type PseoLandingPageProps = {
  page: LandingPage;
};

export function PseoLandingPage({ page }: PseoLandingPageProps) {
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
  const breadcrumbSchema = breadcrumbJsonLd(
    page.path,
    page.h1,
    page.slug ? { path: "/merge-pdf-guides", name: "PDF Merge Guides" } : undefined,
  );
  const softwareSchema = softwareApplicationJsonLd({
    name: "pdfmerge.page",
    description: page.metaDescription,
    path: page.path,
  });

  const sectionCardClass =
    "rounded-[24px] border border-slate-200/80 bg-white/92 p-6 shadow-[0_22px_55px_-45px_rgba(15,23,42,0.6)] backdrop-blur sm:p-8";
  const sectionHeadingClass = "text-2xl font-extrabold tracking-tight text-slate-900";

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f6f8fc] pb-20 text-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-240px] top-[-120px] h-[420px] w-[420px] rounded-full bg-sky-200/50 blur-3xl" />
        <div className="absolute right-[-220px] top-[180px] h-[360px] w-[360px] rounded-full bg-blue-200/45 blur-3xl" />
        <div className="absolute bottom-[-200px] left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-indigo-100/40 blur-3xl" />
      </div>

      <PseoAnalyticsTracker context={analyticsContext} />
      <header className="sticky top-0 z-50 border-b border-slate-200/75 bg-white/75 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#137fec] text-xs font-black text-white">
              PDF
            </span>
            <p className="text-lg font-extrabold tracking-tight text-slate-900">PDFMerge</p>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-600 md:flex">
            <a href="#merge-tool" className="transition hover:text-[#137fec]">
              Tool
            </a>
            <Link href="/" className="transition hover:text-[#137fec]">
              Home
            </Link>
          </nav>
          <a
            href="#merge-tool"
            data-pseo-event="pseo_cta_click"
            data-pseo-location="header_primary"
            data-pseo-label={page.primaryCtaLabel}
            className="inline-flex items-center rounded-lg bg-[#137fec] px-4 py-2 text-sm font-bold text-white transition hover:bg-blue-600"
          >
            {page.primaryCtaLabel}
          </a>
        </div>
      </header>

      <div className="relative mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/90 p-7 shadow-[0_35px_90px_-60px_rgba(15,23,42,0.7)] backdrop-blur sm:p-10">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-[-110px] top-[-90px] h-60 w-60 rounded-full bg-blue-100/70 blur-3xl" />
            <div className="absolute bottom-[-120px] left-[-80px] h-56 w-56 rounded-full bg-sky-100/70 blur-3xl" />
          </div>
          <div className="relative">
            <div>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{page.h1}</h1>
              <p className="mt-4 text-base leading-relaxed text-slate-700">{page.heroDescription}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{page.heroSupport}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#merge-tool"
                  data-pseo-event="pseo_cta_click"
                  data-pseo-location="hero_primary"
                  data-pseo-label={page.primaryCtaLabel}
                  className="inline-flex items-center rounded-xl bg-[#137fec] px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-600"
                >
                  {page.primaryCtaLabel}
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-8">
          <PdfMergeTool
            heading="Try the merge tool right now"
            description="Upload at least two PDF files, reorder with drag-and-drop, then merge into one downloadable file."
            buttonLabel={page.primaryCtaLabel}
            analyticsContext={analyticsContext}
          />
        </div>

        <section className={`mt-8 ${sectionCardClass}`}>
          <h2 className={sectionHeadingClass}>Who this page is for</h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
            {page.audience.map((item) => (
              <li key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className={`mt-8 ${sectionCardClass}`}>
          <h2 className={sectionHeadingClass}>Why this page converts</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {page.valueProps.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-4"
              >
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">Benefit {index + 1}</p>
                <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={`mt-8 ${sectionCardClass}`}>
          <h2 className={sectionHeadingClass}>3-step workflow</h2>
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

        <section className={`mt-8 ${sectionCardClass}`}>
          <h2 className={sectionHeadingClass}>Common mistakes (and fixes)</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {page.mistakes.map((item) => (
              <article key={item.mistake} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-base font-semibold text-slate-900">{item.mistake}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.fix}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={`mt-8 ${sectionCardClass}`}>
          <h2 className={sectionHeadingClass}>Best use cases</h2>
          <ul className="mt-4 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
            {page.useCases.map((item) => (
              <li key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className={`mt-8 ${sectionCardClass}`}>
          <h2 className={sectionHeadingClass}>FAQ</h2>
          <div className="mt-4 space-y-3">
            {page.faq.map((item) => (
              <details key={item.question} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                <summary className="cursor-pointer text-sm font-semibold text-slate-900">{item.question}</summary>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={`mt-8 ${sectionCardClass}`}>
          <h2 className={sectionHeadingClass}>Next steps</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Use the merge tool above to ship your final PDF now. If you handle recurring merges, bookmark this route so
            each workflow starts faster.
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
