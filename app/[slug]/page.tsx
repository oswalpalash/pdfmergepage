import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PseoLandingPage } from "@/components/PseoLandingPage";
import { buildLandingMetadata, getKeywordLandingPageBySlug, getRelatedLandingPages, staticKeywordSlugs } from "@/app/lib/pseo";

export const revalidate = 3600;
export const dynamicParams = false;

type LandingRouteProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return staticKeywordSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: LandingRouteProps): Metadata {
  const page = getKeywordLandingPageBySlug(params.slug);
  if (!page) {
    return {
      title: "Page not found | pdfmerge.page",
      robots: { index: false, follow: false },
    };
  }
  return buildLandingMetadata(page);
}

export default function KeywordLandingPage({ params }: LandingRouteProps) {
  const page = getKeywordLandingPageBySlug(params.slug);
  if (!page) {
    notFound();
  }

  return <PseoLandingPage page={page} relatedPages={getRelatedLandingPages(page.id, 6)} />;
}
