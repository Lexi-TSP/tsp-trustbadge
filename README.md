# tsp-trustbadge

**End-user TrustBadge React component** for the [Trust Standard Protocol](https://truststandardprotocol.com) (TSP v3.0).

[![npm](https://img.shields.io/npm/v/tsp-trustbadge?style=flat-square&label=npm)](https://www.npmjs.com/package/tsp-trustbadge)
[![License: Apache-2.0](https://img.shields.io/badge/license-Apache--2.0-blue?style=flat-square)](./LICENSE)

TrustBadge renders a one-click trust receipt for a verified `TrustEnvelope`: source,
model, timestamp, ledger, system prompt, uncertainty, policy/refusal/flags, and a
per-check breakdown with crypto/trust/network failure tiers.

> **TrustBadge does not verify.** It is a presentation component. You inject a
> `verify` function — pair it with [`tsp-verify`](https://www.npmjs.com/package/tsp-verify)
> (Apache-2.0), the reference TSP verifier. This keeps the badge dependency-free of
> any verifier at build time and free to use any conformant verifier at runtime.

## Install

```bash
npm install tsp-trustbadge tsp-verify
```

`react`/`react-dom` (>=18) are peer dependencies; `tsp-verify` is an optional peer
(supply your own `verify` if you prefer).

## Usage

```tsx
import { TrustBadge } from "tsp-trustbadge";
import "tsp-trustbadge/styles.css";
import { verifyLocal } from "tsp-verify";

export function Output({ envelope, manifest }) {
  return (
    <TrustBadge
      envelope={envelope}
      verify={(env) => verifyLocal(env, { manifest })}
      verifyMode="lazy"
    />
  );
}
```

`verifyMode`: `"lazy"` (default — verify on first panel open), `"eager"` (on mount),
or `"manual"`. Pass `initialResult` to pre-empt the first verify call (e.g. SSR).

## License

Apache-2.0. See [`LICENSE`](./LICENSE) and [`NOTICE`](./NOTICE). The Apache-2.0
grant covers this code; it does not grant rights to the TSP marks or to claim
official/certified status — see `NOTICE`.

## Relationship to `@lexitsp/trustbadge-react`

This package supersedes the pre-relaunch `@lexitsp/trustbadge-react` (MIT). It is
re-homed to the one-repo-per-concern architecture, relicensed Apache-2.0, and
retargeted off `@lexitsp/sdk` (superseded by `tsp-verify`).
