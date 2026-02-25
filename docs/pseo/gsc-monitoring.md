# GSC and Conversion Monitoring

## What is live now
- 28 indexable pSEO routes (homepage + 27 keyword landings).
- Route-level event instrumentation for:
  - `pseo_landing_view`
  - `pseo_cta_click`
  - `pseo_internal_link_click`
  - `pseo_merge_start`
  - `pseo_merge_success`
  - `pseo_merge_failed`

## Weekly review workflow
1. Open Google Search Console `Performance` report.
2. Filter to each primary route from `docs/pseo/keyword-matrix.csv`.
3. Capture:
   - impressions,
   - clicks,
   - CTR,
   - average position.
4. Compare query terms against intended route keyword.
5. If multiple pages rank for the same query cluster, keep one canonical winner and adjust internal links toward it.

## Event-level checks
- Monitor per route:
  - `pseo_landing_view` to `pseo_merge_start` rate.
  - `pseo_merge_start` to `pseo_merge_success` rate.
- Low `view -> start` means weak CTA/above-the-fold relevance.
- Low `start -> success` means merge UX problems or input quality issues.

## Decision rules
- If a route has impressions but low CTR after 2-3 weeks:
  - rewrite title and meta description,
  - tighten H1 to exact query language.
- If a route has clicks but low merge starts:
  - strengthen hero copy and primary CTA text,
  - move intent clarifier higher.
- If a route has strong starts but low success:
  - test error handling and file-validation messaging in merge component.
