import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const targetFiles = [
  "app/page.tsx",
  "app/[slug]/page.tsx",
  "app/merge-pdf-guides/page.tsx",
  "components/PseoLandingPage.tsx",
  "components/PseoAnalyticsTracker.tsx",
  "app/sitemap.ts",
  "app/robots.ts",
];

const requiredPatterns = [
  {
    file: "app/[slug]/page.tsx",
    pattern: /generateStaticParams/,
    reason: "static param generation for keyword pages",
  },
  {
    file: "app/[slug]/page.tsx",
    pattern: /dynamicParams\s*=\s*false/,
    reason: "dynamic params hardening",
  },
  {
    file: "app/lib/pseo.ts",
    pattern: /alternates:\s*\{\s*canonical:/,
    reason: "canonical metadata",
  },
  {
    file: "components/PseoLandingPage.tsx",
    pattern: /faqJsonLd\(/,
    reason: "FAQ structured data",
  },
  {
    file: "components/PseoLandingPage.tsx",
    pattern: /howToJsonLd\(/,
    reason: "HowTo structured data",
  },
  {
    file: "components/PseoLandingPage.tsx",
    pattern: /breadcrumbJsonLd\(/,
    reason: "breadcrumb structured data",
  },
  {
    file: "components/PseoLandingPage.tsx",
    pattern: /softwareApplicationJsonLd\(/,
    reason: "software application structured data",
  },
  {
    file: "components/PseoLandingPage.tsx",
    pattern: /PseoAnalyticsTracker/,
    reason: "landing analytics tracker",
  },
  {
    file: "components/PseoLandingPage.tsx",
    pattern: /href="#merge-tool"/,
    reason: "immediate CTA to merge tool",
  },
  {
    file: "components/PdfMergeTool.tsx",
    pattern: /pseo_merge_success/,
    reason: "merge conversion event",
  },
  {
    file: "app/layout.tsx",
    pattern: /websiteJsonLd\(/,
    reason: "website structured data",
  },
  {
    file: "components/PseoLandingPage.tsx",
    pattern: /merge-pdf-guides/,
    reason: "guides hub internal linking",
  },
  {
    file: "app/sitemap.ts",
    pattern: /merge-pdf-guides/,
    reason: "guides hub in sitemap",
  },
];

const errors = [];

for (const relativePath of targetFiles) {
  const fullPath = path.join(root, relativePath);
  if (!fs.existsSync(fullPath)) {
    errors.push(`${relativePath}: missing file`);
  }
}

for (const check of requiredPatterns) {
  const fullPath = path.join(root, check.file);
  if (!fs.existsSync(fullPath)) {
    errors.push(`${check.file}: missing file`);
    continue;
  }

  const source = fs.readFileSync(fullPath, "utf8");
  if (!check.pattern.test(source)) {
    errors.push(`${check.file}: missing ${check.reason}`);
  }
}

const templatePath = path.join(root, "components/PseoLandingPage.tsx");
if (fs.existsSync(templatePath)) {
  const source = fs.readFileSync(templatePath, "utf8");
  const h2Count = (source.match(/<h2/g) || []).length;
  if (h2Count < 6) {
    errors.push(`components/PseoLandingPage.tsx: too few H2 sections (${h2Count}, expected >= 6)`);
  }

  const siblingLinkCount = (source.match(/relatedPage\.path/g) || []).length;
  if (siblingLinkCount < 1) {
    errors.push("components/PseoLandingPage.tsx: related page internal links appear to be missing");
  }
}

const matrixPath = path.join(root, "docs/pseo/keyword-matrix.csv");
if (fs.existsSync(matrixPath)) {
  const lines = fs
    .readFileSync(matrixPath, "utf8")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  const dataRows = Math.max(lines.length - 1, 0);
  if (dataRows < 70) {
    errors.push(`docs/pseo/keyword-matrix.csv: too few live rows (${dataRows}, expected >= 70)`);
  }
}

if (errors.length > 0) {
  console.error("pSEO quality gate failed:\n");
  for (const issue of errors) {
    console.error(`- ${issue}`);
  }
  process.exit(1);
}

console.log(
  JSON.stringify(
    {
      ok: true,
      checked_files: targetFiles.length,
      checks: requiredPatterns.length,
    },
    null,
    2,
  ),
);
