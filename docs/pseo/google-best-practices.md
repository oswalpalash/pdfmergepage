# Google-Aligned pSEO Best Practices

This project follows current Google Search guidance for scaled pages:

1. Create helpful, people-first pages
- Reference: <https://developers.google.com/search/docs/fundamentals/creating-helpful-content>
- Implementation:
  - Every route includes an actionable workflow, mistakes/fixes, and direct tool access.
  - No fabricated statistics or unverifiable performance claims.

2. Avoid scaled content abuse and doorway patterns
- Reference: <https://developers.google.com/search/docs/essentials/spam-policies>
- Implementation:
  - Pages are grouped by intent clusters (generic, workflow, page-order, privacy, use-case, device).
  - Added `/merge-pdf-guides` hub so routes are navigable and user-meaningful, not isolated doorway URLs.

3. Keep technical SEO clean and explicit
- Reference: <https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap>
- Implementation:
  - Canonical metadata per route.
  - XML sitemap + robots coverage.
  - Stable static routes with deterministic generation.

4. Use structured data where content visibly supports it
- Reference: <https://developers.google.com/search/docs/appearance/structured-data/faqpage>
- Implementation:
  - FAQ, HowTo, Breadcrumb, SoftwareApplication, and WebSite schemas are added only where matching visible sections exist.

5. Monitor outcomes and iterate
- Reference: Search Console Performance + Coverage reports.
- Implementation:
  - Route-level pSEO analytics events (`pseo_landing_view`, `pseo_cta_click`, `pseo_merge_*`).
  - Weekly review rules in `docs/pseo/gsc-monitoring.md`.
