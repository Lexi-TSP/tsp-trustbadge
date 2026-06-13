# Changelog

## 0.3.0 — 2026-06-13

Re-home of `@lexitsp/trustbadge-react` into the post-relaunch architecture.

- **Renamed** `@lexitsp/trustbadge-react` → `tsp-trustbadge` (wordmark-aligned with `tsp-verify`).
- **Relicensed** MIT → **Apache-2.0**, with the aligned trademark/conformance `NOTICE`.
- **Retargeted types** off `@lexitsp/sdk/v3` onto a self-contained local structural
  type module (`src/tsp-types.ts`), faithful to the TSP v3.0 schema in `tsp-spec`.
  TrustBadge no longer depends on any verifier package at build time.
- `tsp-verify` is now the recommended (optional peer) verifier pairing.
- No behavioral change to the component, its props, or its rendered output.
