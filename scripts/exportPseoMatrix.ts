import fs from "node:fs";
import path from "node:path";
import { getHomeLandingPage, getKeywordLandingPages } from "../app/lib/pseo";

function quote(value: string | number): string {
  const text = String(value);
  if (text.includes(",") || text.includes("\"") || text.includes("\n")) {
    return `"${text.replaceAll("\"", "\"\"")}"`;
  }
  return text;
}

const root = process.cwd();
const outputPath = path.join(root, "docs", "pseo", "keyword-matrix.csv");

const home = getHomeLandingPage();
const pages = [home, ...getKeywordLandingPages()]
  .map((page) => ({
    keyword: page.keyword,
    cluster: page.intent,
    intent: "transactional",
    impressions: page.impressions,
    clicks: 0,
    slug: page.path,
    status: "live",
    priority: page.sitemapPriority >= 0.7 ? "p0" : page.sitemapPriority >= 0.6 ? "p1" : "p2",
    target_h1: page.h1,
    primary_cta: page.primaryCtaLabel,
    secondary_cta: page.secondaryCtaLabel,
    notes: "Generated from app/lib/pseo.ts",
  }))
  .sort((left, right) => right.impressions - left.impressions || left.keyword.localeCompare(right.keyword));

const header = [
  "keyword",
  "cluster",
  "intent",
  "impressions",
  "clicks",
  "slug",
  "status",
  "priority",
  "target_h1",
  "primary_cta",
  "secondary_cta",
  "notes",
];

const lines = [header.join(",")];
for (const row of pages) {
  lines.push(
    [
      row.keyword,
      row.cluster,
      row.intent,
      row.impressions,
      row.clicks,
      row.slug,
      row.status,
      row.priority,
      row.target_h1,
      row.primary_cta,
      row.secondary_cta,
      row.notes,
    ]
      .map(quote)
      .join(","),
  );
}

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${lines.join("\n")}\n`, "utf8");
console.log(`Wrote ${pages.length} live keyword rows to ${path.relative(root, outputPath)}.`);
