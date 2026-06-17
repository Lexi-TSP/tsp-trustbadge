# Security Policy

## Reporting a vulnerability

**Do not open a public issue for security vulnerabilities.**

Report privately through GitHub's **["Report a vulnerability"](../../security/advisories/new)** (Security → Advisories) on this repository. This opens a private advisory visible only to the maintainers.

If you cannot use GitHub advisories, contact the maintainer at **security@truststandardprotocol.com**.

Please include the affected version (commit SHA, tag, or package version), a description and impact, and reproduction steps where possible.

## Scope

This repository is the embeddable **TrustBadge** component. It **displays** a verification result from a TSP TrustEnvelope; it is **not** a certification mark and performs no authorization. We are especially interested in reports where:

- the badge renders a **verified / valid** state for a tampered, unsigned, or unverified envelope,
- verification result handling can be spoofed by untrusted input,
- the component leaks data off the user's machine during verification.

## What TSP does and does not claim

TSP proves an output came from a declared system under a declared policy and was not tampered with. **Verification is not a truth claim**, and a rendered badge is not a certification or endorsement.

## Response

We aim to acknowledge a valid report within **5 business days** and to agree a coordinated disclosure timeline with the reporter.
