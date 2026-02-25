import type { Metadata } from "next";

export const SITE_URL = "https://pdfmerge.page";
export const SITE_NAME = "pdfmerge.page";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/web-app-manifest-512x512.png`;

export type LandingSectionItem = {
  title: string;
  body: string;
};

export type WorkflowStep = {
  title: string;
  detail: string;
};

export type MistakeFix = {
  mistake: string;
  fix: string;
};

export type LandingFaq = {
  question: string;
  answer: string;
};

export type SitemapChangeFrequency = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

export type LandingPage = {
  id: string;
  slug: string | null;
  path: string;
  keyword: string;
  keywordVariants: string[];
  impressions: number;
  intent: "brand" | "generic" | "workflow" | "page-order" | "privacy" | "use-case" | "device";
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroDescription: string;
  heroSupport: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  audience: string[];
  valueProps: LandingSectionItem[];
  workflow: WorkflowStep[];
  mistakes: MistakeFix[];
  useCases: string[];
  faq: LandingFaq[];
  sitemapPriority: number;
  changeFrequency: SitemapChangeFrequency;
};

const homeLanding: LandingPage = {
  id: "home",
  slug: null,
  path: "/",
  keyword: "merge pdf",
  keywordVariants: [
    "merge pdf",
    "pdf merge",
    "merge pdf files online",
    "combine pdf files",
    "pdf merge tool",
  ],
  impressions: 108,
  intent: "generic",
  metaTitle: "Merge PDF Files Online for Free",
  metaDescription:
    "Merge PDF files instantly in your browser. Drag, reorder pages, and download one clean file with no signup.",
  h1: "Merge PDF Files Online in Seconds",
  heroDescription:
    "Combine multiple PDFs into a single download without sending your files to a server. Drop files, reorder pages, and export.",
  heroSupport:
    "This page is built for fast action: upload, sort, merge, and download in one flow. Choose the route that matches your workflow and start immediately.",
  primaryCtaLabel: "Merge PDFs now",
  secondaryCtaLabel: "Open related merge guides",
  audience: [
    "Students combining notes, slides, and assignments before submission deadlines.",
    "Operations and finance teams packaging reports, invoices, or contracts for one delivery.",
    "Freelancers and agencies sending one final document instead of multiple attachments.",
  ],
  valueProps: [
    {
      title: "Client-side merging",
      body: "The merge process runs directly in your browser, so your files stay on your device.",
    },
    {
      title: "Drag-and-drop page order",
      body: "Reorder PDFs before merge so the final file follows your exact reading sequence.",
    },
    {
      title: "No account friction",
      body: "Open the page and merge immediately without login walls or trial prompts.",
    },
  ],
  workflow: [
    {
      title: "Add PDFs",
      detail: "Drag files into the drop area or browse from your device.",
    },
    {
      title: "Set order",
      detail: "Use drag handles to move files until the sequence matches the final packet you need.",
    },
    {
      title: "Merge and download",
      detail: "Click merge to generate one final PDF and download it instantly.",
    },
  ],
  mistakes: [
    {
      mistake: "Merging before checking order",
      fix: "Reorder files in the list first. Put cover pages and summaries at the top before exporting.",
    },
    {
      mistake: "Including the wrong version of a document",
      fix: "Rename files with version tags (for example: v2-final) before adding them.",
    },
    {
      mistake: "Uploading non-PDF files by accident",
      fix: "Only add `.pdf` files. Convert docs/images to PDF first, then merge.",
    },
  ],
  useCases: [
    "Create one onboarding packet from forms, policy docs, and checklists.",
    "Bundle class materials into one submission-ready PDF.",
    "Send one monthly finance pack instead of multiple attachments.",
    "Prepare legal review packets in a fixed order.",
    "Combine scanned pages from multiple sessions into one archive file.",
  ],
  faq: [
    {
      question: "Do I need an account to merge PDFs here?",
      answer: "No. You can merge PDFs immediately without signing up.",
    },
    {
      question: "Are my files uploaded to your server?",
      answer: "No. The merge action happens in your browser so files stay local to your device.",
    },
    {
      question: "Can I change the document order before merging?",
      answer: "Yes. Drag files in the list to the exact sequence you want before clicking merge.",
    },
    {
      question: "What happens after I merge?",
      answer: "A single merged PDF is generated and downloaded to your device.",
    },
    {
      question: "Can I merge more than two files?",
      answer: "Yes. Add as many PDFs as needed and sort them before export.",
    },
  ],
  sitemapPriority: 1,
  changeFrequency: "daily",
};

const keywordLandings: LandingPage[] = [
  {
    id: "pdfmerge",
    slug: "pdfmerge",
    path: "/pdfmerge",
    keyword: "pdfmerge",
    keywordVariants: ["pdfmerge", "pdf merge tool", "pdfmerge.page"],
    impressions: 41,
    intent: "brand",
    metaTitle: "pdfmerge: Merge PDF Files Quickly",
    metaDescription:
      "Looking for pdfmerge? Merge and reorder PDF files in-browser with one click export and no signup.",
    h1: "pdfmerge: Merge PDFs Without Leaving Your Browser",
    heroDescription:
      "If you searched for pdfmerge directly, this is the fastest path to the actual merge tool. Drop files, order them, and download one clean PDF.",
    heroSupport:
      "This page focuses on zero-friction brand intent: instant access to the tool plus a clear workflow for repeat merges.",
    primaryCtaLabel: "Use pdfmerge now",
    secondaryCtaLabel: "Compare with PDFMerger flow",
    audience: [
      "People returning to pdfmerge.page who want the same workflow every time.",
      "Teams who run repeat weekly merge tasks and need predictable output.",
      "Users who prefer direct tool access instead of reading long docs first.",
    ],
    valueProps: [
      {
        title: "Direct tool-first entry",
        body: "No long onboarding. You land on a ready-to-use merge interface.",
      },
      {
        title: "Consistent merge behavior",
        body: "Each run uses the same drag-order-then-export process, reducing handoff errors.",
      },
      {
        title: "Fast repeat usage",
        body: "Useful for recurring admin workflows where you merge similar document sets each cycle.",
      },
    ],
    workflow: [
      {
        title: "Drop your working set",
        detail: "Load all PDFs for the current task in one batch.",
      },
      {
        title: "Align to delivery order",
        detail: "Drag files so stakeholders see pages in the right sequence.",
      },
      {
        title: "Export final packet",
        detail: "Download one merged file and attach it to your email or portal.",
      },
    ],
    mistakes: [
      {
        mistake: "Running multiple small merges for one task",
        fix: "Add every relevant PDF in one pass so you export one final packet.",
      },
      {
        mistake: "Keeping generic filenames",
        fix: "Rename the downloaded file immediately with a descriptive title and date.",
      },
      {
        mistake: "Forgetting the cover page",
        fix: "Place summary/cover files first in the drag list before merge.",
      },
    ],
    useCases: [
      "Weekly reporting bundles",
      "Recurring school assignment packets",
      "Contract appendices sent with a main agreement",
      "Customer onboarding doc sets",
    ],
    faq: [
      {
        question: "Is this the official pdfmerge.page tool?",
        answer: "Yes. This page is a direct tool route for pdfmerge users.",
      },
      {
        question: "Can I merge files repeatedly during the same session?",
        answer: "Yes. You can clear, reorder, and merge multiple sets as needed.",
      },
      {
        question: "Can I download the merged file more than once?",
        answer: "Yes. After merge, use the download link again if you need another copy.",
      },
      {
        question: "Is there a login wall?",
        answer: "No. You can merge immediately without creating an account.",
      },
      {
        question: "Can I remove one file before exporting?",
        answer: "Yes. Use the delete action beside that file in the list.",
      },
    ],
    sitemapPriority: 0.9,
    changeFrequency: "weekly",
  },
  {
    id: "pdfmerger",
    slug: "pdfmerger",
    path: "/pdfmerger",
    keyword: "pdfmerger",
    keywordVariants: ["pdfmerger", "pdf merger online", "combine pdfs"],
    impressions: 32,
    intent: "generic",
    metaTitle: "PDFMerger Tool Online | Combine PDFs Fast",
    metaDescription:
      "Use our PDFMerger workflow to combine multiple files into one polished PDF in three simple steps.",
    h1: "PDFMerger Workflow for Clean, Ordered Output",
    heroDescription:
      "Searching for a PDFMerger usually means you need one final file fast. This page is optimized for that intent: fast upload, exact ordering, and immediate download.",
    heroSupport:
      "Use this route when speed matters and you want to merge many files in one pass without account setup.",
    primaryCtaLabel: "Start PDFMerger flow",
    secondaryCtaLabel: "Open PDF merge guide",
    audience: [
      "People combining 5-20 files for one deliverable.",
      "Admins preparing meeting packs in strict order.",
      "Ops teams consolidating PDFs from different contributors.",
    ],
    valueProps: [
      {
        title: "Built for multi-file tasks",
        body: "Handle large document batches in one run instead of piecemeal merging.",
      },
      {
        title: "Order confidence",
        body: "Drag-and-drop control ensures your final sequence matches business expectations.",
      },
      {
        title: "Low-overhead execution",
        body: "No account setup or menu hunting when you just need the job done.",
      },
    ],
    workflow: [
      {
        title: "Batch-load all files",
        detail: "Add the entire document set so you can verify the full sequence once.",
      },
      {
        title: "Review and reorder",
        detail: "Move files up and down until the packet structure is exactly right.",
      },
      {
        title: "Merge to one download",
        detail: "Export one final PDF for sharing or archival.",
      },
    ],
    mistakes: [
      {
        mistake: "Merging file groups separately",
        fix: "Combine the whole set at once to avoid final ordering mistakes.",
      },
      {
        mistake: "Not checking duplicate files",
        fix: "Scan filenames quickly before merging and remove accidental duplicates.",
      },
      {
        mistake: "Using unclear output names",
        fix: "Rename your final file with project + date to prevent version confusion.",
      },
    ],
    useCases: [
      "Board meeting packs",
      "Client proposal bundles",
      "Monthly operations reports",
      "Multi-team handoff documents",
    ],
    faq: [
      {
        question: "How many files can I merge at once?",
        answer: "You can merge multiple PDFs in one run. Add your full set, then reorder.",
      },
      {
        question: "Will the merge keep my chosen order?",
        answer: "Yes. The output follows the exact list order you set before exporting.",
      },
      {
        question: "Can I remove a file after uploading it?",
        answer: "Yes. Remove unwanted files using the delete action in the list.",
      },
      {
        question: "Do I need to install software?",
        answer: "No. The tool runs in your browser.",
      },
      {
        question: "Can I use this on a work laptop with restrictions?",
        answer: "Yes in most cases, since it runs as a standard web page without installation.",
      },
    ],
    sitemapPriority: 0.86,
    changeFrequency: "weekly",
  },
  {
    id: "pdf-merge",
    slug: "pdf-merge",
    path: "/pdf-merge",
    keyword: "pdf merge",
    keywordVariants: ["pdf merge", "merge pdf online", "merge pdf files"],
    impressions: 19,
    intent: "generic",
    metaTitle: "PDF Merge Online in 3 Steps",
    metaDescription:
      "PDF merge tool with drag-and-drop ordering. Add files, set sequence, and download one merged PDF immediately.",
    h1: "PDF Merge Online with Drag-and-Drop Ordering",
    heroDescription:
      "This page targets classic 'pdf merge' intent: merge now, no detours. You get a practical workflow and direct access to the merge interface.",
    heroSupport:
      "Use this route when you need a general-purpose merge flow that still gives you control over final page order.",
    primaryCtaLabel: "Run a PDF merge now",
    secondaryCtaLabel: "See page-order merge options",
    audience: [
      "Users who searched a general merge term and need immediate action.",
      "People combining project materials from multiple tools.",
      "Anyone packaging final PDFs before upload to external portals.",
    ],
    valueProps: [
      {
        title: "General-purpose merge page",
        body: "Works for school, legal, finance, and admin packets without custom setup.",
      },
      {
        title: "Clear 3-step flow",
        body: "No hidden options: add files, set order, merge.",
      },
      {
        title: "Immediate downloadable output",
        body: "The final file is ready right after processing.",
      },
    ],
    workflow: [
      {
        title: "Choose source PDFs",
        detail: "Collect all required documents before dropping files in.",
      },
      {
        title: "Set final reading order",
        detail: "Drag files until cover pages, body pages, and appendices are in place.",
      },
      {
        title: "Generate merged PDF",
        detail: "Click merge and save one output file for sharing.",
      },
    ],
    mistakes: [
      {
        mistake: "Uploading incomplete fileset",
        fix: "Confirm all required documents are present before merging.",
      },
      {
        mistake: "Skipping a final order review",
        fix: "Check top-to-bottom sequence one last time before exporting.",
      },
      {
        mistake: "Forgetting to keep a source backup",
        fix: "Keep original files in a folder so edits can be redone quickly if needed.",
      },
    ],
    useCases: [
      "Project submission packets",
      "Loan or account application bundles",
      "One-file compliance documentation",
      "Course module handouts",
    ],
    faq: [
      {
        question: "What is the fastest way to do a PDF merge here?",
        answer: "Add all PDFs, drag to order, then click merge. The final file downloads immediately.",
      },
      {
        question: "Can I merge PDFs from different sources?",
        answer: "Yes. As long as files are in PDF format, they can be combined in one output.",
      },
      {
        question: "Will this work on mobile?",
        answer: "Yes. It works in modern mobile browsers, though desktop is easier for large batches.",
      },
      {
        question: "Can I reorder files after adding them?",
        answer: "Yes. Drag and drop the list items before merging.",
      },
      {
        question: "Do I need to pay to use this page?",
        answer: "No. You can use the merge flow without creating an account.",
      },
    ],
    sitemapPriority: 0.83,
    changeFrequency: "weekly",
  },
  {
    id: "pdf-merger",
    slug: "pdf-merger",
    path: "/pdf-merger",
    keyword: "pdf merger",
    keywordVariants: ["pdf merger", "pdf merger online", "file merger pdf"],
    impressions: 7,
    intent: "workflow",
    metaTitle: "PDF Merger Online with Reorder Control",
    metaDescription:
      "Need a PDF merger with better order control? Drag files, fix sequence, and export one final PDF quickly.",
    h1: "PDF Merger for Sequence-Critical Document Packs",
    heroDescription:
      "When order matters, a basic merge is not enough. This page is tuned for sequence-critical work where appendices, covers, and signatures must appear exactly right.",
    heroSupport:
      "Use this version if you are preparing compliance, legal, or stakeholder-ready packets where ordering mistakes cost time.",
    primaryCtaLabel: "Use PDF merger",
    secondaryCtaLabel: "Open merge-pdf-pages page",
    audience: [
      "Legal and compliance teams building strict packet structures.",
      "Operations managers preparing delivery-ready document sets.",
      "Anyone who needs reliable ordering before sharing externally.",
    ],
    valueProps: [
      {
        title: "Order-first workflow",
        body: "The interface emphasizes file sequence so output errors are easier to prevent.",
      },
      {
        title: "Fast corrections",
        body: "Reorder in seconds instead of restarting the whole merge process.",
      },
      {
        title: "Single-delivery output",
        body: "Export one PDF that is ready for formal review flows.",
      },
    ],
    workflow: [
      {
        title: "Load cover, body, appendix docs",
        detail: "Add all sections up front so you can verify complete structure once.",
      },
      {
        title: "Validate sequence by section",
        detail: "Group files mentally into header/body/appendix while ordering.",
      },
      {
        title: "Merge and share",
        detail: "Download one sequence-correct PDF for submission.",
      },
    ],
    mistakes: [
      {
        mistake: "Appending signatures at the wrong point",
        fix: "Place signature pages in their contractual sequence before merge.",
      },
      {
        mistake: "Mixing draft and final versions",
        fix: "Remove draft files and keep only final-approved documents in the list.",
      },
      {
        mistake: "Skipping naming standards",
        fix: "Rename final outputs with team and date for traceability.",
      },
    ],
    useCases: [
      "Compliance submissions",
      "Audit response packets",
      "Board-level report bundles",
      "Contract package delivery",
    ],
    faq: [
      {
        question: "How is this page different from general PDF merge pages?",
        answer: "It prioritizes ordered packet assembly for sequence-sensitive workflows.",
      },
      {
        question: "Can I reorder files multiple times before merge?",
        answer: "Yes. Keep adjusting order until the sequence is exactly right.",
      },
      {
        question: "Is this useful for legal packets?",
        answer: "Yes. It is especially useful when document order must be exact.",
      },
      {
        question: "Can I quickly remove mistaken files?",
        answer: "Yes. Use the remove action before exporting the final PDF.",
      },
      {
        question: "Do I need extra plugins?",
        answer: "No. It runs in modern browsers without additional installation.",
      },
    ],
    sitemapPriority: 0.75,
    changeFrequency: "weekly",
  },
  {
    id: "pdf-page-merge",
    slug: "pdf-page-merge",
    path: "/pdf-page-merge",
    keyword: "pdf page merge",
    keywordVariants: ["pdf page merge", "merge pdf pages", "pdf page ordering"],
    impressions: 5,
    intent: "page-order",
    metaTitle: "PDF Page Merge for Clean Page Order",
    metaDescription:
      "Merge PDF pages while preserving your intended order. Great for chapter packs, handbooks, and training docs.",
    h1: "PDF Page Merge for Better Page Flow",
    heroDescription:
      "People searching for 'pdf page merge' usually care about reading flow, not just file count. This page focuses on page-order quality and final packet clarity.",
    heroSupport:
      "Use this route for handbooks, chapter packs, and documents where narrative order matters for comprehension.",
    primaryCtaLabel: "Merge PDF pages now",
    secondaryCtaLabel: "Open PDF page merger",
    audience: [
      "Writers and editors assembling chapter-based PDFs.",
      "Training teams publishing learning packets in sequence.",
      "Students turning separate notes into one study guide.",
    ],
    valueProps: [
      {
        title: "Flow-first output",
        body: "Arrange source PDFs so readers experience a logical page progression.",
      },
      {
        title: "Reduced review loops",
        body: "Clear ordering before export means fewer corrections after sharing.",
      },
      {
        title: "Better final readability",
        body: "Sequence control helps your merged file read like one intentional document.",
      },
    ],
    workflow: [
      {
        title: "List all page groups",
        detail: "Add PDFs by section so ordering decisions are simple.",
      },
      {
        title: "Arrange for narrative flow",
        detail: "Move sections until intro, body, and references are aligned.",
      },
      {
        title: "Export final reader-ready PDF",
        detail: "Merge and download one file ready for distribution.",
      },
    ],
    mistakes: [
      {
        mistake: "Putting references before core content",
        fix: "Move supporting sections to the end before merging.",
      },
      {
        mistake: "Forgetting a title/overview page",
        fix: "Add a short intro page at the start for context.",
      },
      {
        mistake: "Leaving duplicate chapter files",
        fix: "Delete duplicate uploads and keep one final version per chapter.",
      },
    ],
    useCases: [
      "Course packet assembly",
      "Internal handbook publishing",
      "Team onboarding guides",
      "Documentation bundles for customers",
    ],
    faq: [
      {
        question: "Can I use this for page-order-sensitive documents?",
        answer: "Yes. This route is tailored for maintaining a strong reading sequence.",
      },
      {
        question: "Do I need to split files first?",
        answer: "Not for simple cases. Add your existing PDFs and set order directly.",
      },
      {
        question: "Can I merge chapter PDFs into one handbook?",
        answer: "Yes. This is a common use case for this page.",
      },
      {
        question: "Will this keep my chosen section order?",
        answer: "Yes. Output follows the exact order in your list.",
      },
      {
        question: "Can I use it for academic materials?",
        answer: "Yes. It works well for notes, readings, and assignment packets.",
      },
    ],
    sitemapPriority: 0.7,
    changeFrequency: "weekly",
  },
  {
    id: "pdf-page-merger",
    slug: "pdf-page-merger",
    path: "/pdf-page-merger",
    keyword: "pdf page merger",
    keywordVariants: ["pdf page merger", "page merger pdf", "combine pdf pages"],
    impressions: 2,
    intent: "page-order",
    metaTitle: "PDF Page Merger for Multi-Source Packets",
    metaDescription:
      "Combine PDF pages from multiple sources into one polished file with reliable sequence control.",
    h1: "PDF Page Merger for Multi-Source Document Sets",
    heroDescription:
      "Use this page when your pages come from different teams or tools and must be combined into one coherent sequence.",
    heroSupport:
      "It is built for packet assembly workflows where clarity and ordering matter more than raw speed alone.",
    primaryCtaLabel: "Start PDF page merger",
    secondaryCtaLabel: "See merge PDF pages route",
    audience: [
      "Project managers combining exports from different departments.",
      "Teams assembling proposal appendices from multiple owners.",
      "Operators creating one packet from scanned and digital PDFs.",
    ],
    valueProps: [
      {
        title: "Multi-source friendly",
        body: "Combine PDFs from different systems without extra tooling.",
      },
      {
        title: "Sequence correction before export",
        body: "Fix ordering issues while everything is still visible in one list.",
      },
      {
        title: "One delivery artifact",
        body: "Generate a final packet ready for upload, review, or archive.",
      },
    ],
    workflow: [
      {
        title: "Collect source PDFs",
        detail: "Bring all exports and scans into one merge queue.",
      },
      {
        title: "Sort by stakeholder reading order",
        detail: "Arrange files based on how reviewers should process the packet.",
      },
      {
        title: "Merge and distribute",
        detail: "Download one file and send it through your normal handoff channel.",
      },
    ],
    mistakes: [
      {
        mistake: "Mixing internal and external versions",
        fix: "Verify final-approved files before adding them to the merge queue.",
      },
      {
        mistake: "Not separating appendices",
        fix: "Place appendices after the main narrative for cleaner review.",
      },
      {
        mistake: "Rushing final checks",
        fix: "Take one quick sequence pass before clicking merge.",
      },
    ],
    useCases: [
      "Cross-team proposal documents",
      "Vendor onboarding packets",
      "Policy + appendix bundles",
      "Scanned archive cleanup",
    ],
    faq: [
      {
        question: "Is this page useful when files come from many sources?",
        answer: "Yes. It is designed for multi-source packet assembly.",
      },
      {
        question: "Can I combine scanned and digitally generated PDFs?",
        answer: "Yes, as long as each file is in PDF format.",
      },
      {
        question: "Will this help me keep a consistent review order?",
        answer: "Yes. Drag-and-drop ordering lets you define reviewer flow.",
      },
      {
        question: "Can I remove one source file before final output?",
        answer: "Yes. Delete any unwanted file from the list before merge.",
      },
      {
        question: "Do I need separate software for this?",
        answer: "No. The full merge workflow runs in-browser.",
      },
    ],
    sitemapPriority: 0.66,
    changeFrequency: "weekly",
  },
  {
    id: "merge-pdf-pages",
    slug: "merge-pdf-pages",
    path: "/merge-pdf-pages",
    keyword: "merge pdf pages",
    keywordVariants: ["merge pdf pages", "merge pages pdf", "combine pages in pdf"],
    impressions: 2,
    intent: "workflow",
    metaTitle: "Merge PDF Pages Online Without Uploading",
    metaDescription:
      "Merge PDF pages quickly in your browser with drag-and-drop order control and instant one-file output.",
    h1: "Merge PDF Pages Without Uploading to a Server",
    heroDescription:
      "This route serves privacy-conscious intent for 'merge pdf pages' queries. You get a local, browser-based merge process with clean ordering controls.",
    heroSupport:
      "Use it when documents include sensitive contracts, financial files, or internal records that you prefer to keep on-device.",
    primaryCtaLabel: "Merge pages now",
    secondaryCtaLabel: "Open pdfmerge page",
    audience: [
      "Privacy-conscious teams handling sensitive internal files.",
      "Freelancers working with client contracts and signed documents.",
      "Anyone who wants a local merge workflow with no account friction.",
    ],
    valueProps: [
      {
        title: "Local processing",
        body: "Files remain on your device during merge instead of being sent to a remote upload queue.",
      },
      {
        title: "Practical sequence control",
        body: "Reorder pages/files before output so review readers get the right flow.",
      },
      {
        title: "Immediate one-file result",
        body: "Export a ready-to-share PDF right after processing.",
      },
    ],
    workflow: [
      {
        title: "Drop sensitive PDFs",
        detail: "Add documents directly from your local machine.",
      },
      {
        title: "Confirm review order",
        detail: "Set the file order so legal, finance, or approval context is clear.",
      },
      {
        title: "Download merged output",
        detail: "Generate one final PDF for sharing or secure storage.",
      },
    ],
    mistakes: [
      {
        mistake: "Sending individual files externally",
        fix: "Merge first, then share one controlled packet.",
      },
      {
        mistake: "Keeping vague filenames",
        fix: "Name final outputs with owner, project, and date metadata.",
      },
      {
        mistake: "Skipping sensitivity checks",
        fix: "Verify no unwanted pages are included before final export.",
      },
    ],
    useCases: [
      "Client contract bundles",
      "Financial statement packets",
      "Internal policy distributions",
      "Sensitive audit-ready files",
    ],
    faq: [
      {
        question: "Is this page focused on privacy-first merging?",
        answer: "Yes. It is built for local, browser-based merging workflows.",
      },
      {
        question: "Can I use this for sensitive documents?",
        answer: "Yes. Files stay on your device during merge.",
      },
      {
        question: "Can I reorder files before merging?",
        answer: "Yes. Drag and drop files in the list before export.",
      },
      {
        question: "Do I need registration to merge PDF pages?",
        answer: "No. You can use the tool immediately.",
      },
      {
        question: "Can I run multiple merges in one session?",
        answer: "Yes. Adjust files and repeat as many times as needed.",
      },
    ],
    sitemapPriority: 0.64,
    changeFrequency: "weekly",
  },
];

type ExpansionSeed = {
  id: string;
  slug: string;
  keyword: string;
  intent: LandingPage["intent"];
  metaTitle: string;
  metaDescription: string;
  angle: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  audience: [string, string, string];
  useCases: [string, string, string, string];
  keywordVariants?: string[];
  impressions?: number;
  sitemapPriority?: number;
};

function titleCase(value: string): string {
  return value
    .split(" ")
    .map((part) => {
      const normalized = part.toLowerCase();
      if (normalized === "pdf") return "PDF";
      return normalized.charAt(0).toUpperCase() + normalized.slice(1);
    })
    .join(" ");
}

function getVariantIndex(seedValue: string): number {
  let total = 0;
  for (const char of seedValue) total += char.charCodeAt(0);
  return total % 3;
}

function getHeadlineSuffix(intent: LandingPage["intent"]): string {
  switch (intent) {
    case "brand":
      return "Without Leaving Your Browser";
    case "page-order":
      return "with Precise Ordering";
    case "privacy":
      return "with Private Browser Processing";
    case "use-case":
      return "for Faster Submission Flows";
    case "device":
      return "on Device-Friendly Browsers";
    case "workflow":
      return "for Repeatable Workflows";
    case "generic":
    default:
      return "Online in Minutes";
  }
}

function getHeroSupport(intent: LandingPage["intent"]): string {
  switch (intent) {
    case "privacy":
      return "This route emphasizes privacy-first execution while preserving a fast merge workflow and direct output control.";
    case "page-order":
      return "This route prioritizes sequence clarity so your final packet reads in the right order for reviewers.";
    case "device":
      return "This route is tuned for device-specific behavior and quick browser execution under deadline pressure.";
    case "use-case":
      return "This route is tuned for one concrete job-to-be-done so the final merged file is ready for submission.";
    default:
      return "Each route keeps the same proven flow: add PDFs, set sequence, and export one final file. Pick the page that matches your exact query intent for cleaner relevance signals.";
  }
}

function getIntentValueProps(seed: ExpansionSeed): LandingSectionItem[] {
  if (seed.intent === "page-order") {
    return [
      {
        title: "Sequence-first assembly",
        body: "Set packet flow before export so reviewers receive sections in the intended order.",
      },
      {
        title: "Order corrections before output",
        body: "Drag-and-drop sorting lets you fix sequence issues before generating the final file.",
      },
      {
        title: "Cleaner review cycles",
        body: "Correct ordering reduces back-and-forth when multiple stakeholders review the same packet.",
      },
    ];
  }

  if (seed.intent === "privacy") {
    return [
      {
        title: "Privacy-aligned process",
        body: "Use a browser-based workflow for sensitive packets that need controlled handling.",
      },
      {
        title: "No account friction",
        body: "Open the route and merge immediately without registration blockers.",
      },
      {
        title: "One-file delivery",
        body: "Export one consolidated PDF for cleaner secure handoffs.",
      },
    ];
  }

  if (seed.intent === "device") {
    return [
      {
        title: "Device-friendly execution",
        body: "Run the same merge flow across desktop and mobile browsers without separate software setup.",
      },
      {
        title: "Quick ordering controls",
        body: "Set the final file sequence from your current device and export immediately.",
      },
      {
        title: "Consistent output",
        body: "Generate one clean file ready for sharing, upload, or archive.",
      },
    ];
  }

  return [
    {
      title: "Intent-matched workflow",
      body: `This route is tuned for ${seed.keyword} intent so users can take action immediately.`,
    },
    {
      title: "Order control before export",
      body: "Drag-and-drop sorting helps prevent packet order mistakes before generating output.",
    },
    {
      title: "Fast final delivery",
      body: "Export one merged PDF in a format ready for upload, sharing, or archival.",
    },
  ];
}

function getVariantWorkflow(seed: ExpansionSeed): WorkflowStep[] {
  const variant = getVariantIndex(seed.slug);
  if (variant === 1) {
    return [
      {
        title: `Upload the full ${seed.keyword} set`,
        detail: "Drop every required file at once so completeness checks happen in one pass.",
      },
      {
        title: "Sort by reviewer flow",
        detail: "Reorder files to match how stakeholders should consume the packet.",
      },
      {
        title: "Export and rename",
        detail: "Download one file and add project/date naming for operational clarity.",
      },
    ];
  }

  if (variant === 2) {
    return [
      {
        title: "Queue source PDFs",
        detail: "Add all documents involved in the task before touching ordering.",
      },
      {
        title: "Lock final sequence",
        detail: "Move files until cover pages, body, and appendices are in proper order.",
      },
      {
        title: "Merge for delivery",
        detail: "Export one packet-ready PDF and route it through your normal handoff channel.",
      },
    ];
  }

  return [
    {
      title: `Add source files for ${seed.keyword}`,
      detail: "Drop all required PDFs into one queue so you can validate the full packet at once.",
    },
    {
      title: "Set final reading sequence",
      detail: "Reorder files to match reviewer flow, submission requirements, or section logic.",
    },
    {
      title: "Merge and download",
      detail: "Generate one final PDF and rename it with project/date context for clean handoffs.",
    },
  ];
}

function getVariantMistakes(seed: ExpansionSeed): MistakeFix[] {
  const variant = getVariantIndex(seed.keyword);
  if (variant === 1) {
    return [
      {
        mistake: "Mixing draft and final documents",
        fix: "Remove draft files before merge and keep only final-approved versions.",
      },
      {
        mistake: "Sending multiple attachments after merging",
        fix: "Use one merged output file for a single, controlled handoff artifact.",
      },
      {
        mistake: "Skipping a naming standard",
        fix: "Name exported files with owner + workflow + date to reduce version confusion.",
      },
    ];
  }

  if (variant === 2) {
    return [
      {
        mistake: "Merging in the wrong sequence",
        fix: "Place intro/summary sections first, then core docs, then appendices.",
      },
      {
        mistake: "Forgetting to remove irrelevant pages",
        fix: "Trim the source list before merge so the final output contains only required docs.",
      },
      {
        mistake: "Rebuilding the packet from scratch on each edit",
        fix: "Keep original source files organized so updates require only a quick reorder + merge pass.",
      },
    ];
  }

  return [
    {
      mistake: "Merging partial file sets",
      fix: "Collect all required source PDFs first so the output is complete in one pass.",
    },
    {
      mistake: "Ignoring sequence checks",
      fix: "Review ordering once before merge to avoid downstream correction cycles.",
    },
    {
      mistake: "Saving with a vague filename",
      fix: "Use a descriptive filename including project, owner, and date.",
    },
  ];
}

function getVariantFaq(seed: ExpansionSeed): LandingFaq[] {
  const variant = getVariantIndex(seed.slug + seed.keyword);
  const shared = [
    {
      question: `Can I use this page specifically for "${seed.keyword}" intent?`,
      answer: "Yes. This route is mapped to that query intent with direct tool access and matching copy.",
    },
    {
      question: "Will my chosen file order be preserved?",
      answer: "Yes. The merged output follows the exact order you set in the file list.",
    },
  ];

  if (variant === 1) {
    return [
      ...shared,
      {
        question: "Can I rerun this workflow for another packet right away?",
        answer: "Yes. You can repeat merge cycles for multiple packets in the same session.",
      },
      {
        question: "Does this route include account signup requirements?",
        answer: "No. You can execute merges immediately without account setup.",
      },
      {
        question: "Can I use this for recurring team handoffs?",
        answer: "Yes. The flow is designed for repeatable, high-frequency merge tasks.",
      },
    ];
  }

  if (variant === 2) {
    return [
      ...shared,
      {
        question: "Can I remove files before final export?",
        answer: "Yes. Remove any unnecessary file from the list before clicking merge.",
      },
      {
        question: "Is this workflow browser-based?",
        answer: "Yes. The merge flow runs directly in-browser.",
      },
      {
        question: "Can I use this when submission portals allow one file only?",
        answer: "Yes. This is a common use case for the one-file output workflow.",
      },
    ];
  }

  return [
    ...shared,
    {
      question: "Do I need to register before using this tool?",
      answer: "No. You can merge files immediately without account creation.",
    },
    {
      question: "Can I run this workflow multiple times?",
      answer: "Yes. You can repeat merges for different document sets in the same session.",
    },
    {
      question: "Is this merge flow browser-based?",
      answer: "Yes. The workflow runs directly in your browser for fast execution.",
    },
  ];
}

function buildExpansionLanding(seed: ExpansionSeed): LandingPage {
  const keywordTitle = titleCase(seed.keyword);
  const path = `/${seed.slug}`;

  return {
    id: seed.id,
    slug: seed.slug,
    path,
    keyword: seed.keyword,
    keywordVariants: seed.keywordVariants ?? [seed.keyword, `${seed.keyword} online`, `${seed.keyword} tool`],
    impressions: seed.impressions ?? 0,
    intent: seed.intent,
    metaTitle: seed.metaTitle,
    metaDescription: seed.metaDescription,
    h1: `${keywordTitle} ${getHeadlineSuffix(seed.intent)}`,
    heroDescription: `${seed.angle} Use this page to run ${seed.keyword} workflows without setup friction.`,
    heroSupport: getHeroSupport(seed.intent),
    primaryCtaLabel: seed.primaryCtaLabel,
    secondaryCtaLabel: seed.secondaryCtaLabel,
    audience: [...seed.audience],
    valueProps: getIntentValueProps(seed),
    workflow: getVariantWorkflow(seed),
    mistakes: getVariantMistakes(seed),
    useCases: [...seed.useCases],
    faq: getVariantFaq(seed),
    sitemapPriority: seed.sitemapPriority ?? 0.56,
    changeFrequency: "weekly",
  };
}

const expansionSeeds: ExpansionSeed[] = [
  {
    id: "merge-pdf-files",
    slug: "merge-pdf-files",
    keyword: "merge pdf files",
    intent: "generic",
    metaTitle: "Merge PDF Files Online Quickly",
    metaDescription: "Merge PDF files into one document in-browser with drag-and-drop ordering.",
    angle: "This page targets users searching for a direct multi-file merge route.",
    primaryCtaLabel: "Merge PDF files now",
    secondaryCtaLabel: "Open pdfmerge page",
    audience: [
      "Users handling document packets with multiple contributors.",
      "Students submitting one combined assignment bundle.",
      "Teams preparing one-file monthly reports.",
    ],
    useCases: [
      "Assignment submission bundles",
      "Cross-team report packets",
      "One-file onboarding docs",
      "Vendor handoff packs",
    ],
    keywordVariants: ["merge pdf files", "merge pdf files online", "merge files pdf"],
    sitemapPriority: 0.63,
  },
  {
    id: "combine-pdf-files",
    slug: "combine-pdf-files",
    keyword: "combine pdf files",
    intent: "generic",
    metaTitle: "Combine PDF Files into One Download",
    metaDescription: "Combine PDF files instantly, reorder them, and export one polished output file.",
    angle: "Use this route for combine-focused query phrasing while keeping the same merge flow.",
    primaryCtaLabel: "Combine files now",
    secondaryCtaLabel: "Open PDFMerger flow",
    audience: [
      "Admins consolidating weekly updates from multiple owners.",
      "People packaging proposal sections into one file.",
      "Freelancers delivering one final client packet.",
    ],
    useCases: [
      "Client proposal packets",
      "Operations update bundles",
      "Finance documentation packs",
      "Policy distribution files",
    ],
    keywordVariants: ["combine pdf files", "combine PDFs online", "pdf combine files"],
    sitemapPriority: 0.62,
  },
  {
    id: "merge-pdf-online",
    slug: "merge-pdf-online",
    keyword: "merge pdf online",
    intent: "generic",
    metaTitle: "Merge PDF Online Without Setup",
    metaDescription: "Merge PDF online with drag-and-drop sorting and immediate one-file output.",
    angle: "This page captures online-intent queries that prioritize instant web access.",
    primaryCtaLabel: "Merge PDF online",
    secondaryCtaLabel: "Open PDF merge page",
    audience: [
      "Users searching specifically for web-based PDF merge tools.",
      "Teams using locked-down devices where installs are restricted.",
      "People needing a fast merge route from mobile or desktop browsers.",
    ],
    useCases: [
      "Quick portal-ready submissions",
      "Remote team document packs",
      "In-browser legal bundles",
      "Client-ready packet exports",
    ],
    keywordVariants: ["merge pdf online", "online pdf merge", "merge pdf in browser"],
    sitemapPriority: 0.61,
  },
  {
    id: "combine-pdf-pages",
    slug: "combine-pdf-pages",
    keyword: "combine pdf pages",
    intent: "page-order",
    metaTitle: "Combine PDF Pages with Order Control",
    metaDescription: "Combine PDF pages while preserving section order for cleaner reading flow.",
    angle: "Built for users who care about page progression and narrative sequence.",
    primaryCtaLabel: "Combine PDF pages",
    secondaryCtaLabel: "Open PDF page merge",
    audience: [
      "Writers assembling chapter PDFs into one guide.",
      "Training teams building structured learning packets.",
      "Operators aligning appendices after core sections.",
    ],
    useCases: [
      "Handbook publishing",
      "Course packet assembly",
      "Customer documentation sets",
      "Policy + appendix distribution",
    ],
    keywordVariants: ["combine pdf pages", "combine pages in pdf", "pdf page combine"],
    sitemapPriority: 0.6,
  },
  {
    id: "merge-multiple-pdf",
    slug: "merge-multiple-pdf",
    keyword: "merge multiple pdf",
    intent: "workflow",
    metaTitle: "Merge Multiple PDF Files in One Pass",
    metaDescription: "Merge multiple PDF files at once and export a single ordered output.",
    angle: "Designed for users merging larger batches instead of two-file quick merges.",
    primaryCtaLabel: "Merge multiple PDFs",
    secondaryCtaLabel: "Open merge pdf files route",
    audience: [
      "Teams preparing 10+ file documentation packets.",
      "Students combining many module exports at once.",
      "Admins consolidating recurring compliance files.",
    ],
    useCases: [
      "Bulk monthly reporting",
      "Compliance handoff packets",
      "Large submission bundles",
      "Documentation archives",
    ],
    keywordVariants: ["merge multiple pdf", "merge many pdf files", "multiple pdf merger"],
    sitemapPriority: 0.59,
  },
  {
    id: "merge-pdf-docs",
    slug: "merge-pdf-docs",
    keyword: "merge pdf docs",
    intent: "workflow",
    metaTitle: "Merge PDF Docs for One-File Delivery",
    metaDescription: "Merge PDF docs into one clear deliverable with sequence control before export.",
    angle: "This route emphasizes docs-oriented merge use cases and handoff readiness.",
    primaryCtaLabel: "Merge PDF docs now",
    secondaryCtaLabel: "Open combine pdf files route",
    audience: [
      "Project teams packaging documentation for review.",
      "Operations leads sending one doc set to stakeholders.",
      "Freelancers delivering final client doc bundles.",
    ],
    useCases: [
      "Project documentation packs",
      "Customer handoff docs",
      "Internal policy updates",
      "Audit prep bundles",
    ],
    keywordVariants: ["merge pdf docs", "merge docs pdf", "combine pdf docs"],
    sitemapPriority: 0.58,
  },
  {
    id: "pdf-combine-online",
    slug: "pdf-combine-online",
    keyword: "pdf combine online",
    intent: "generic",
    metaTitle: "PDF Combine Online Tool",
    metaDescription: "Use this PDF combine online tool to merge and reorder files in one quick flow.",
    angle: "Targets alternate phrasing where users search combine-first semantics.",
    primaryCtaLabel: "Combine online now",
    secondaryCtaLabel: "Open merge pdf online",
    audience: [
      "Users searching non-standard combine phrasing.",
      "Teams needing no-install browser workflows.",
      "People packaging final attachments before sending.",
    ],
    useCases: [
      "Team report consolidation",
      "Client submission files",
      "Account onboarding packets",
      "Sales proposal bundles",
    ],
    keywordVariants: ["pdf combine online", "combine pdf online", "pdf online combine"],
    sitemapPriority: 0.57,
  },
  {
    id: "merge-scanned-pdf",
    slug: "merge-scanned-pdf",
    keyword: "merge scanned pdf",
    intent: "workflow",
    metaTitle: "Merge Scanned PDF Files into One",
    metaDescription: "Merge scanned PDF files from different sessions into one ordered output.",
    angle: "This route addresses scan-heavy workflows with multi-source file assembly.",
    primaryCtaLabel: "Merge scanned PDFs",
    secondaryCtaLabel: "Open merge documents route",
    audience: [
      "Teams combining scanned pages from office workflows.",
      "People consolidating scanner output from multiple days.",
      "Ops users creating one archival scan packet.",
    ],
    useCases: [
      "Scanner archive cleanup",
      "Invoice scan bundles",
      "Paper-to-digital packet creation",
      "Legacy document consolidation",
    ],
    keywordVariants: ["merge scanned pdf", "combine scanned pdfs", "scan pdf merger"],
    sitemapPriority: 0.57,
  },
  {
    id: "merge-documents-into-one-pdf",
    slug: "merge-documents-into-one-pdf",
    keyword: "merge documents into one pdf",
    intent: "workflow",
    metaTitle: "Merge Documents into One PDF",
    metaDescription: "Merge documents into one PDF with drag-and-drop order and one final download.",
    angle: "Built for long-tail task phrasing that maps directly to one-file output goals.",
    primaryCtaLabel: "Merge documents now",
    secondaryCtaLabel: "Open merge pdf files route",
    audience: [
      "Users searching problem-statement queries instead of brand/tool queries.",
      "Managers creating one pack for approvals.",
      "Teams consolidating docs before portal uploads.",
    ],
    useCases: [
      "Approval request packets",
      "Application document bundles",
      "Quarterly report files",
      "One-file vendor submissions",
    ],
    keywordVariants: ["merge documents into one pdf", "one pdf from multiple documents", "merge docs into pdf"],
    sitemapPriority: 0.57,
  },
  {
    id: "reorder-and-merge-pdf",
    slug: "reorder-and-merge-pdf",
    keyword: "reorder and merge pdf",
    intent: "page-order",
    metaTitle: "Reorder and Merge PDF Files",
    metaDescription: "Reorder and merge PDF files for sequence-sensitive packets and clean final output.",
    angle: "This page emphasizes ordering-first workflows where page flow is the main constraint.",
    primaryCtaLabel: "Reorder and merge now",
    secondaryCtaLabel: "Open PDF page merger",
    audience: [
      "Legal and compliance reviewers requiring strict document order.",
      "Teams aligning packet flow before external submission.",
      "Writers building chapter-first document progression.",
    ],
    useCases: [
      "Compliance packet sequencing",
      "Legal appendix ordering",
      "Handbook chapter flow fixes",
      "Investor update packet ordering",
    ],
    keywordVariants: ["reorder and merge pdf", "reorder pdf pages merge", "pdf reorder merge"],
    sitemapPriority: 0.59,
  },
  {
    id: "secure-pdf-merger",
    slug: "secure-pdf-merger",
    keyword: "secure pdf merger",
    intent: "privacy",
    metaTitle: "Secure PDF Merger Workflow",
    metaDescription: "Use a secure PDF merger workflow with browser-based processing and one-file output.",
    angle: "Captures security-sensitive intent for users handling contracts, finance, or HR files.",
    primaryCtaLabel: "Start secure merge",
    secondaryCtaLabel: "Open private PDF merger",
    audience: [
      "Teams handling sensitive contracts and legal docs.",
      "Finance users consolidating confidential statements.",
      "Admins who prioritize controlled file handling flows.",
    ],
    useCases: [
      "Contract packet assembly",
      "Confidential report bundling",
      "Sensitive HR documentation packs",
      "Internal policy distributions",
    ],
    keywordVariants: ["secure pdf merger", "secure merge pdf", "safe pdf merger"],
    sitemapPriority: 0.6,
  },
  {
    id: "private-pdf-merger",
    slug: "private-pdf-merger",
    keyword: "private pdf merger",
    intent: "privacy",
    metaTitle: "Private PDF Merger Online",
    metaDescription: "Private PDF merger page for quick browser-based combining with order controls.",
    angle: "Targets privacy-first users who want zero-friction and controlled merging.",
    primaryCtaLabel: "Run private merge",
    secondaryCtaLabel: "Open secure PDF merger",
    audience: [
      "Users explicitly searching for private merge workflows.",
      "Consultants handling client-sensitive paperwork.",
      "Teams preparing internal-only documentation sets.",
    ],
    useCases: [
      "Client document consolidation",
      "Internal legal packet prep",
      "Private project archive builds",
      "Confidential handoff files",
    ],
    keywordVariants: ["private pdf merger", "private merge pdf", "pdf merger private"],
    sitemapPriority: 0.59,
  },
  {
    id: "free-pdf-merger",
    slug: "free-pdf-merger",
    keyword: "free pdf merger",
    intent: "generic",
    metaTitle: "Free PDF Merger Online",
    metaDescription: "Free PDF merger route with drag-and-drop ordering and instant one-file export.",
    angle: "Addresses cost-sensitive search intent while maintaining direct conversion flow.",
    primaryCtaLabel: "Use free merger now",
    secondaryCtaLabel: "Open no-signup merger",
    audience: [
      "Users evaluating free merge options before signup tools.",
      "Students with recurring low-budget document tasks.",
      "Small teams needing lightweight merge workflows.",
    ],
    useCases: [
      "Class submission packets",
      "Starter team reporting",
      "Simple onboarding bundles",
      "One-off proposal documents",
    ],
    keywordVariants: ["free pdf merger", "free merge pdf", "pdf merger free online"],
    sitemapPriority: 0.58,
  },
  {
    id: "no-signup-pdf-merger",
    slug: "no-signup-pdf-merger",
    keyword: "no signup pdf merger",
    intent: "generic",
    metaTitle: "No Signup PDF Merger",
    metaDescription: "Merge PDFs with no signup: upload, reorder, and export one file instantly.",
    angle: "Targets friction-avoidance intent for users rejecting account-gated tools.",
    primaryCtaLabel: "Merge with no signup",
    secondaryCtaLabel: "Open free PDF merger",
    audience: [
      "Users abandoning tools that require registration.",
      "Teams doing quick ad hoc merges without onboarding.",
      "People who need immediate execution under deadline pressure.",
    ],
    useCases: [
      "Fast one-off packet merges",
      "Urgent portal submissions",
      "Guest-device document processing",
      "Quick client-ready files",
    ],
    keywordVariants: ["no signup pdf merger", "pdf merge no sign up", "merge pdf without account"],
    sitemapPriority: 0.59,
  },
  {
    id: "merge-pdf-for-invoices",
    slug: "merge-pdf-for-invoices",
    keyword: "merge pdf for invoices",
    intent: "use-case",
    metaTitle: "Merge PDF for Invoices",
    metaDescription: "Merge invoice PDFs into one accounting-ready file with controlled ordering.",
    angle: "Built for invoice and finance packet workflows with sequence requirements.",
    primaryCtaLabel: "Merge invoice PDFs",
    secondaryCtaLabel: "Open reports merge page",
    audience: [
      "Finance teams consolidating vendor invoices by cycle.",
      "Bookkeepers preparing one archive file per month.",
      "Operations teams packaging billing backup docs.",
    ],
    useCases: [
      "Monthly invoice archive files",
      "Vendor billing packet handoffs",
      "Accounting reconciliation bundles",
      "Audit prep invoice sets",
    ],
    keywordVariants: ["merge pdf for invoices", "merge invoice pdfs", "invoice pdf merger"],
    sitemapPriority: 0.58,
  },
  {
    id: "merge-pdf-for-reports",
    slug: "merge-pdf-for-reports",
    keyword: "merge pdf for reports",
    intent: "use-case",
    metaTitle: "Merge PDF for Reports",
    metaDescription: "Merge report PDFs into one stakeholder-ready packet with proper section order.",
    angle: "Targets reporting workflows where one structured output is required.",
    primaryCtaLabel: "Merge report PDFs",
    secondaryCtaLabel: "Open merge documents route",
    audience: [
      "Ops teams sending weekly or monthly reporting packs.",
      "Managers combining team exports into one file.",
      "Analysts packaging final briefings for leadership.",
    ],
    useCases: [
      "Weekly reporting packets",
      "Monthly business review files",
      "KPI documentation bundles",
      "Stakeholder briefing PDFs",
    ],
    keywordVariants: ["merge pdf for reports", "merge report pdf", "report pdf merger"],
    sitemapPriority: 0.58,
  },
  {
    id: "merge-pdf-for-legal-documents",
    slug: "merge-pdf-for-legal-documents",
    keyword: "merge pdf for legal documents",
    intent: "use-case",
    metaTitle: "Merge PDF for Legal Documents",
    metaDescription: "Merge legal document PDFs into one sequence-controlled packet for review and filing.",
    angle: "Purpose-built for legal sequence sensitivity and handoff clarity.",
    primaryCtaLabel: "Merge legal PDFs",
    secondaryCtaLabel: "Open reorder and merge page",
    audience: [
      "Legal teams preparing filing-ready packet structures.",
      "Paralegals assembling appendices and exhibits.",
      "Operations staff handling legal handoff documentation.",
    ],
    useCases: [
      "Legal filing packet preparation",
      "Exhibit and appendix bundling",
      "Contract support document sets",
      "Case brief attachment packs",
    ],
    keywordVariants: ["merge pdf for legal documents", "legal pdf merger", "merge legal pdf files"],
    sitemapPriority: 0.6,
  },
  {
    id: "merge-pdf-on-mobile",
    slug: "merge-pdf-on-mobile",
    keyword: "merge pdf on mobile",
    intent: "device",
    metaTitle: "Merge PDF on Mobile Browser",
    metaDescription: "Merge PDF on mobile with a browser workflow and one final downloadable file.",
    angle: "Captures mobile-specific intent while preserving the same merge architecture.",
    primaryCtaLabel: "Merge on mobile",
    secondaryCtaLabel: "Open merge PDF online",
    audience: [
      "Users merging PDFs from phones during travel.",
      "Teams handling quick document updates away from desktop.",
      "People needing browser-only workflows on mobile devices.",
    ],
    useCases: [
      "On-the-go packet fixes",
      "Mobile-first submission workflows",
      "Quick phone-based merges",
      "Travel-time document consolidation",
    ],
    keywordVariants: ["merge pdf on mobile", "mobile pdf merger", "merge pdf phone"],
    sitemapPriority: 0.56,
  },
  {
    id: "merge-pdf-on-mac",
    slug: "merge-pdf-on-mac",
    keyword: "merge pdf on mac",
    intent: "device",
    metaTitle: "Merge PDF on Mac in Browser",
    metaDescription: "Merge PDF on Mac directly in-browser with drag-and-drop ordering.",
    angle: "Targets Mac platform intent without requiring local software installs.",
    primaryCtaLabel: "Merge on Mac",
    secondaryCtaLabel: "Open no-signup merger",
    audience: [
      "Mac users looking for quick browser-based merge tools.",
      "Teams standardizing on web workflows across devices.",
      "People avoiding desktop app installs for one-off tasks.",
    ],
    useCases: [
      "Mac-first team reporting packs",
      "Quick document consolidation",
      "Browser-only office workflows",
      "Account-free merge sessions",
    ],
    keywordVariants: ["merge pdf on mac", "mac pdf merger", "merge pdf macbook"],
    sitemapPriority: 0.56,
  },
  {
    id: "merge-pdf-on-windows",
    slug: "merge-pdf-on-windows",
    keyword: "merge pdf on windows",
    intent: "device",
    metaTitle: "Merge PDF on Windows Browser",
    metaDescription: "Merge PDF on Windows with browser-based sorting and instant one-file output.",
    angle: "Targets Windows-specific queries for no-install merge workflows.",
    primaryCtaLabel: "Merge on Windows",
    secondaryCtaLabel: "Open merge PDF files route",
    audience: [
      "Windows users searching for no-install PDF merge options.",
      "Office teams using browser-only approved tooling.",
      "Users merging files on shared workstations.",
    ],
    useCases: [
      "Windows workstation document merges",
      "Portal upload preparation",
      "Shared-device packet assembly",
      "Fast office handoff files",
    ],
    keywordVariants: ["merge pdf on windows", "windows pdf merger", "merge pdf windows"],
    sitemapPriority: 0.56,
  },
];

type QueryProfile = {
  slug: string;
  keyword: string;
  intent: LandingPage["intent"];
  metaTitle: string;
  metaDescription: string;
  angle: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  topicLabel: string;
  sitemapPriority?: number;
};

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function buildAudienceTriplet(topicLabel: string): [string, string, string] {
  return [
    `Teams consolidating ${topicLabel} from multiple contributors.`,
    `Operators preparing ${topicLabel} for one-file submission flows.`,
    `People standardizing ${topicLabel} handoffs before sharing externally.`,
  ];
}

function buildUseCaseQuartet(topicLabel: string): [string, string, string, string] {
  const title = titleCase(topicLabel);
  return [
    `${title} packet consolidation`,
    `One-file ${topicLabel} submissions`,
    `${title} stakeholder handoff bundles`,
    `${title} archival documentation`,
  ];
}

function buildSeedFromProfile(profile: QueryProfile): ExpansionSeed {
  return {
    id: profile.slug,
    slug: profile.slug,
    keyword: profile.keyword,
    intent: profile.intent,
    metaTitle: profile.metaTitle,
    metaDescription: profile.metaDescription,
    angle: profile.angle,
    primaryCtaLabel: profile.primaryCtaLabel,
    secondaryCtaLabel: profile.secondaryCtaLabel,
    audience: buildAudienceTriplet(profile.topicLabel),
    useCases: buildUseCaseQuartet(profile.topicLabel),
    keywordVariants: [profile.keyword, `${profile.keyword} online`, `${profile.keyword} tool`],
    sitemapPriority: profile.sitemapPriority,
  };
}

const useCaseTopics = [
  "contracts",
  "bank statements",
  "receipts",
  "tax documents",
  "resumes",
  "cover letters",
  "assignments",
  "applications",
  "onboarding documents",
  "proposals",
  "compliance documents",
  "audit files",
  "insurance claims",
  "medical records",
  "training manuals",
] as const;

const generatedUseCaseSeeds: ExpansionSeed[] = useCaseTopics.flatMap((topic) => {
  const topicSlug = slugify(topic);
  const topicTitle = titleCase(topic);
  const audience = buildAudienceTriplet(`${topic} workflows`);
  const useCases = buildUseCaseQuartet(topic);
  return [
    {
      id: `merge-pdf-for-${topicSlug}`,
      slug: `merge-pdf-for-${topicSlug}`,
      keyword: `merge pdf for ${topic}`,
      intent: "use-case",
      metaTitle: `Merge PDF for ${topicTitle}`,
      metaDescription: `Merge ${topic} PDFs into one ordered file for faster submission and review.`,
      angle: `This route is tuned for ${topic} workflows where packet completeness and order matter.`,
      primaryCtaLabel: `Merge ${topic} PDFs`,
      secondaryCtaLabel: "Open merge documents route",
      audience,
      useCases,
      keywordVariants: [`merge pdf for ${topic}`, `${topic} pdf merger`, `merge ${topic} pdf`],
      sitemapPriority: 0.55,
    },
    {
      id: `combine-pdf-for-${topicSlug}`,
      slug: `combine-pdf-for-${topicSlug}`,
      keyword: `combine pdf for ${topic}`,
      intent: "use-case",
      metaTitle: `Combine PDF for ${topicTitle}`,
      metaDescription: `Combine ${topic} PDFs into one packet with drag-and-drop ordering before export.`,
      angle: `Built for combine-style ${topic} queries where one clean output file is the objective.`,
      primaryCtaLabel: `Combine ${topic} PDFs`,
      secondaryCtaLabel: "Open merge PDF files route",
      audience,
      useCases,
      keywordVariants: [`combine pdf for ${topic}`, `combine ${topic} pdf`, `${topic} pdf combine`],
      sitemapPriority: 0.54,
    },
  ];
});

const featureProfiles: QueryProfile[] = [
  {
    slug: "merge-pdf-without-watermark",
    keyword: "merge pdf without watermark",
    intent: "workflow",
    metaTitle: "Merge PDF Without Watermark",
    metaDescription: "Merge PDF files without watermark overlays and keep a clean final output.",
    angle: "This route addresses quality-sensitive workflows where clean exports are required.",
    primaryCtaLabel: "Merge without watermark",
    secondaryCtaLabel: "Open high-quality merge route",
    topicLabel: "clean output workflows",
    sitemapPriority: 0.57,
  },
  {
    slug: "merge-pdf-without-software",
    keyword: "merge pdf without software",
    intent: "workflow",
    metaTitle: "Merge PDF Without Installing Software",
    metaDescription: "Merge PDF files in-browser without software installation.",
    angle: "Targets no-install intent for managed devices and quick one-off tasks.",
    primaryCtaLabel: "Merge without software",
    secondaryCtaLabel: "Open merge PDF online",
    topicLabel: "no-install workflows",
    sitemapPriority: 0.56,
  },
  {
    slug: "merge-pdf-in-browser",
    keyword: "merge pdf in browser",
    intent: "workflow",
    metaTitle: "Merge PDF in Browser",
    metaDescription: "Merge and reorder PDFs directly in your browser with instant file output.",
    angle: "Built for browser-first users who want immediate execution.",
    primaryCtaLabel: "Merge in browser",
    secondaryCtaLabel: "Open merge PDF online",
    topicLabel: "browser-based workflows",
    sitemapPriority: 0.57,
  },
  {
    slug: "fast-pdf-merger",
    keyword: "fast pdf merger",
    intent: "generic",
    metaTitle: "Fast PDF Merger",
    metaDescription: "Fast PDF merger flow for quick packet assembly and one-file download.",
    angle: "Targets speed-driven intent where users want direct action with minimal friction.",
    primaryCtaLabel: "Start fast merge",
    secondaryCtaLabel: "Open pdfmerge route",
    topicLabel: "speed-first merge tasks",
    sitemapPriority: 0.58,
  },
  {
    slug: "merge-large-pdf-files",
    keyword: "merge large pdf files",
    intent: "workflow",
    metaTitle: "Merge Large PDF Files",
    metaDescription: "Merge large PDF files into one ordered output for upload-ready delivery.",
    angle: "Focused on larger packets where sequence integrity matters.",
    primaryCtaLabel: "Merge large PDFs",
    secondaryCtaLabel: "Open merge multiple PDF route",
    topicLabel: "large packet workflows",
    sitemapPriority: 0.56,
  },
  {
    slug: "batch-pdf-merger",
    keyword: "batch pdf merger",
    intent: "workflow",
    metaTitle: "Batch PDF Merger",
    metaDescription: "Run a batch PDF merger workflow and export one consolidated file.",
    angle: "Designed for repeated multi-file jobs across teams.",
    primaryCtaLabel: "Run batch merge",
    secondaryCtaLabel: "Open merge multiple PDF route",
    topicLabel: "batch merge operations",
    sitemapPriority: 0.57,
  },
  {
    slug: "merge-two-pdf-files",
    keyword: "merge two pdf files",
    intent: "workflow",
    metaTitle: "Merge Two PDF Files",
    metaDescription: "Merge two PDF files in seconds with ordering control before download.",
    angle: "Captures simple two-file intent with immediate conversion path.",
    primaryCtaLabel: "Merge two PDFs",
    secondaryCtaLabel: "Open PDF merge route",
    topicLabel: "two-file merge tasks",
    sitemapPriority: 0.56,
  },
  {
    slug: "merge-three-pdf-files",
    keyword: "merge three pdf files",
    intent: "workflow",
    metaTitle: "Merge Three PDF Files",
    metaDescription: "Merge three PDF files into one clean output with drag-and-drop sequencing.",
    angle: "Targets small-batch merge workflows with predictable order.",
    primaryCtaLabel: "Merge three PDFs",
    secondaryCtaLabel: "Open merge PDF files route",
    topicLabel: "small-batch merge tasks",
    sitemapPriority: 0.55,
  },
  {
    slug: "merge-pdf-attachments",
    keyword: "merge pdf attachments",
    intent: "workflow",
    metaTitle: "Merge PDF Attachments",
    metaDescription: "Merge PDF attachments into one deliverable for cleaner communication.",
    angle: "Built for email- and ticket-driven attachment consolidation tasks.",
    primaryCtaLabel: "Merge attachments",
    secondaryCtaLabel: "Open merge for email route",
    topicLabel: "attachment consolidation workflows",
    sitemapPriority: 0.56,
  },
  {
    slug: "merge-pdf-for-email",
    keyword: "merge pdf for email",
    intent: "use-case",
    metaTitle: "Merge PDF for Email",
    metaDescription: "Merge PDF files into one email-ready attachment.",
    angle: "Targets send-one-file communication workflows.",
    primaryCtaLabel: "Create email-ready PDF",
    secondaryCtaLabel: "Open merge attachments route",
    topicLabel: "email handoff workflows",
    sitemapPriority: 0.55,
  },
  {
    slug: "merge-pdf-for-upload",
    keyword: "merge pdf for upload",
    intent: "use-case",
    metaTitle: "Merge PDF for Upload",
    metaDescription: "Merge PDFs into one upload-ready file for portals and forms.",
    angle: "Built for portal workflows requiring one-file submissions.",
    primaryCtaLabel: "Create upload-ready PDF",
    secondaryCtaLabel: "Open merge documents route",
    topicLabel: "portal upload workflows",
    sitemapPriority: 0.56,
  },
  {
    slug: "high-quality-pdf-merge",
    keyword: "high quality pdf merge",
    intent: "workflow",
    metaTitle: "High Quality PDF Merge",
    metaDescription: "High quality PDF merge flow for clean, ordered document packets.",
    angle: "Targets quality-sensitive users preparing client-facing outputs.",
    primaryCtaLabel: "Run high-quality merge",
    secondaryCtaLabel: "Open merge without watermark route",
    topicLabel: "quality-first document workflows",
    sitemapPriority: 0.57,
  },
  {
    slug: "secure-online-pdf-merge",
    keyword: "secure online pdf merge",
    intent: "privacy",
    metaTitle: "Secure Online PDF Merge",
    metaDescription: "Secure online PDF merge route with browser-based processing and order control.",
    angle: "Captures security-sensitive online-intent queries.",
    primaryCtaLabel: "Start secure online merge",
    secondaryCtaLabel: "Open secure PDF merger",
    topicLabel: "secure online workflows",
    sitemapPriority: 0.58,
  },
  {
    slug: "combine-pdf-online-free",
    keyword: "combine pdf online free",
    intent: "generic",
    metaTitle: "Combine PDF Online Free",
    metaDescription: "Combine PDF online free with drag-and-drop ordering and no signup.",
    angle: "Matches cost-sensitive combine intent for direct action.",
    primaryCtaLabel: "Combine PDF free",
    secondaryCtaLabel: "Open free PDF merger",
    topicLabel: "free combine workflows",
    sitemapPriority: 0.57,
  },
  {
    slug: "reorder-pdf-files-before-merge",
    keyword: "reorder pdf files before merge",
    intent: "page-order",
    metaTitle: "Reorder PDF Files Before Merge",
    metaDescription: "Reorder PDF files before merge to ensure correct packet sequence.",
    angle: "Built for sequence-sensitive merges where order errors are costly.",
    primaryCtaLabel: "Reorder then merge",
    secondaryCtaLabel: "Open reorder and merge route",
    topicLabel: "sequence-controlled workflows",
    sitemapPriority: 0.58,
  },
  {
    slug: "merge-pdf-and-save-as-one-file",
    keyword: "merge pdf and save as one file",
    intent: "workflow",
    metaTitle: "Merge PDF and Save as One File",
    metaDescription: "Merge PDF files and save as one file for cleaner submission workflows.",
    angle: "Targets long-tail users describing the exact output they need.",
    primaryCtaLabel: "Merge and save now",
    secondaryCtaLabel: "Open merge documents route",
    topicLabel: "single-output workflows",
    sitemapPriority: 0.56,
  },
];

const deviceProfiles: QueryProfile[] = [
  {
    slug: "merge-pdf-on-iphone",
    keyword: "merge pdf on iphone",
    intent: "device",
    metaTitle: "Merge PDF on iPhone",
    metaDescription: "Merge PDF on iPhone directly in your browser with drag-and-drop ordering.",
    angle: "Targets iPhone-specific merge intent with no app install requirement.",
    primaryCtaLabel: "Merge on iPhone",
    secondaryCtaLabel: "Open merge on mobile",
    topicLabel: "iPhone merge workflows",
    sitemapPriority: 0.54,
  },
  {
    slug: "merge-pdf-on-android",
    keyword: "merge pdf on android",
    intent: "device",
    metaTitle: "Merge PDF on Android",
    metaDescription: "Merge PDF on Android in-browser and download one final file.",
    angle: "Built for Android users needing quick browser-based execution.",
    primaryCtaLabel: "Merge on Android",
    secondaryCtaLabel: "Open merge on mobile",
    topicLabel: "Android merge workflows",
    sitemapPriority: 0.54,
  },
  {
    slug: "merge-pdf-on-ipad",
    keyword: "merge pdf on ipad",
    intent: "device",
    metaTitle: "Merge PDF on iPad",
    metaDescription: "Merge PDF on iPad with easy file reordering and one-file output.",
    angle: "Targets tablet-first users running document tasks on iPad.",
    primaryCtaLabel: "Merge on iPad",
    secondaryCtaLabel: "Open merge on mobile",
    topicLabel: "iPad merge workflows",
    sitemapPriority: 0.53,
  },
  {
    slug: "merge-pdf-on-chromebook",
    keyword: "merge pdf on chromebook",
    intent: "device",
    metaTitle: "Merge PDF on Chromebook",
    metaDescription: "Merge PDF on Chromebook in-browser without software installs.",
    angle: "Built for education and browser-only Chromebook environments.",
    primaryCtaLabel: "Merge on Chromebook",
    secondaryCtaLabel: "Open merge PDF online",
    topicLabel: "Chromebook merge workflows",
    sitemapPriority: 0.53,
  },
  {
    slug: "merge-pdf-on-linux",
    keyword: "merge pdf on linux",
    intent: "device",
    metaTitle: "Merge PDF on Linux",
    metaDescription: "Merge PDF on Linux using a browser-based drag-and-drop workflow.",
    angle: "Targets Linux users who prefer web tools for one-off merge tasks.",
    primaryCtaLabel: "Merge on Linux",
    secondaryCtaLabel: "Open merge PDF online",
    topicLabel: "Linux merge workflows",
    sitemapPriority: 0.53,
  },
  {
    slug: "merge-pdf-in-safari",
    keyword: "merge pdf in safari",
    intent: "device",
    metaTitle: "Merge PDF in Safari",
    metaDescription: "Merge PDF in Safari browser and export one ordered output file.",
    angle: "Targets Safari-specific browser intent with direct merge flow.",
    primaryCtaLabel: "Merge in Safari",
    secondaryCtaLabel: "Open merge on Mac",
    topicLabel: "Safari browser workflows",
    sitemapPriority: 0.52,
  },
  {
    slug: "merge-pdf-in-chrome",
    keyword: "merge pdf in chrome",
    intent: "device",
    metaTitle: "Merge PDF in Chrome",
    metaDescription: "Merge PDF in Chrome with drag-and-drop ordering and one-file download.",
    angle: "Built for Chrome users seeking fast in-browser merge execution.",
    primaryCtaLabel: "Merge in Chrome",
    secondaryCtaLabel: "Open merge PDF online",
    topicLabel: "Chrome browser workflows",
    sitemapPriority: 0.52,
  },
];

function dedupeSeedsBySlug(seeds: ExpansionSeed[]): ExpansionSeed[] {
  const seen = new Set<string>();
  return seeds.filter((seed) => {
    if (seen.has(seed.slug)) return false;
    seen.add(seed.slug);
    return true;
  });
}

function dedupeLandingPagesByPath(pages: LandingPage[]): LandingPage[] {
  const seen = new Set<string>();
  return pages.filter((page) => {
    if (seen.has(page.path)) return false;
    seen.add(page.path);
    return true;
  });
}

const generatedProgrammaticSeeds: ExpansionSeed[] = [
  ...generatedUseCaseSeeds,
  ...featureProfiles.map(buildSeedFromProfile),
  ...deviceProfiles.map(buildSeedFromProfile),
];

const allExpansionSeeds = dedupeSeedsBySlug([...expansionSeeds, ...generatedProgrammaticSeeds]);
const expansionKeywordLandings: LandingPage[] = allExpansionSeeds.map(buildExpansionLanding);
const keywordLandingPages: LandingPage[] = dedupeLandingPagesByPath([
  ...keywordLandings,
  ...expansionKeywordLandings,
]);

export const allLandingPages: LandingPage[] = [homeLanding, ...keywordLandingPages];
export const indexableLandingPages: LandingPage[] = allLandingPages;

export function isKeywordLandingPage(page: LandingPage): page is LandingPage & { slug: string } {
  return page.slug !== null;
}

export const staticKeywordSlugs = keywordLandingPages
  .map((page) => page.slug)
  .filter((slug): slug is string => Boolean(slug));

export function absoluteUrl(path: string): string {
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path}`;
}

export function getHomeLandingPage(): LandingPage {
  return homeLanding;
}

export function getKeywordLandingPages(): LandingPage[] {
  return keywordLandingPages;
}

export function getKeywordLandingPageBySlug(slug: string): LandingPage | null {
  const normalized = slug.trim().toLowerCase();
  return keywordLandingPages.find((page) => page.slug === normalized) ?? null;
}

export function getRelatedLandingPages(currentId: string, limit = 5): LandingPage[] {
  return [...allLandingPages]
    .filter((page) => page.id !== currentId)
    .sort((left, right) => right.impressions - left.impressions)
    .slice(0, limit);
}

export function buildLandingMetadata(page: LandingPage): Metadata {
  const url = absoluteUrl(page.path);
  const title = `${page.metaTitle} | ${SITE_NAME}`;

  return {
    title,
    description: page.metaDescription,
    keywords: page.keywordVariants,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: page.metaDescription,
      url,
      siteName: SITE_NAME,
      type: "website",
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 512,
          height: 512,
          alt: page.h1,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: page.metaDescription,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}
