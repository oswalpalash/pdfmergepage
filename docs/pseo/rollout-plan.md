# PDF Merge pSEO Rollout Plan

## Phase 0 (completed in this implementation)
- Launch core pSEO architecture:
  - reusable landing template,
  - keyword config layer,
  - static slug generation,
  - canonical metadata + JSON-LD + sitemap + robots.
- Publish live pages for the highest-impression keyword set from current GSC data.

## Phase 1 (completed)
- Monitor live cluster pages:
  - `/pdfmerge`
  - `/pdfmerger`
  - `/pdf-merge`
  - `/pdf-merger`
  - `/pdf-page-merge`
  - `/pdf-page-merger`
  - `/merge-pdf-pages`
- Track:
  - index status,
  - impressions by page,
  - CTR by query.
- Keep only one primary canonical winner per query intent if cannibalization appears.

## Phase 2 (completed in this update)
- Expanded and published all planned phase-2 routes from `docs/pseo/keyword-matrix.csv`.
- Added route-level pSEO analytics events:
  - `pseo_landing_view`
  - `pseo_cta_click`
  - `pseo_internal_link_click`
  - `pseo_merge_start`
  - `pseo_merge_success`
  - `pseo_merge_failed`
- Wired click instrumentation through data attributes so CTA and internal-link behavior can be measured without refactoring page templates.

## Phase 3 (ongoing)
- Monthly content refresh:
  - tighten titles/meta descriptions based on CTR,
  - improve CTA copy for low-conversion pages,
  - merge or prune underperformers after 60-90 days.
- Quarterly technical audit:
  - sitemap freshness,
  - canonical integrity,
  - duplicate intent conflicts.
