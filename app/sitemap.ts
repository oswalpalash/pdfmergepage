import type { MetadataRoute } from "next";
import { absoluteUrl, indexableLandingPages } from "@/app/lib/pseo";

export const revalidate = 3600;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return indexableLandingPages.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.sitemapPriority,
  }));
}
