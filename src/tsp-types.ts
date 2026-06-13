/**
 * tsp-trustbadge · local TSP v3 structural types
 *
 * TrustBadge is a presentation component: it renders fields off a verified
 * TrustEnvelope and a VerifyResult. It does NOT verify — the consumer injects a
 * `verify` function (pair with `tsp-verify`, Apache-2.0). These types are a
 * self-contained structural mirror of the TSP v3.0 envelope + verify-result
 * shapes the component reads, so the badge has no build-time coupling to any
 * verifier package. They are faithful to the tsp/1 (v3.0) schema in tsp-spec.
 */

export type Sha256 = string;
export type Base64 = string;
export type ISO8601 = string;
export type UuidV7 = string;

export type ContentType = "text" | "document" | "structured";
export interface Content {
  type: ContentType;
  value: string;
  hash: Sha256;
}

export type SourceType =
  | "legal-database"
  | "government-website"
  | "official-document"
  | "academic-paper"
  | "verified-website"
  | "model-knowledge"
  | "user-input"
  | "unknown";

export interface PrimarySource {
  type: SourceType;
  url?: string;
  title: string;
  retrieved?: ISO8601;
}

export interface Citation {
  url: string;
  paragraph: string;
  quote: string;
  retrieved: ISO8601;
}

export interface Declaration {
  primarySource: PrimarySource;
  citations: Citation[];
}

export interface Model {
  name: string;
  version: string;
  provider: string;
  temperature: number;
  contextWindow: number;
}

export type SystemPromptField =
  | { hash: Sha256; text: string }
  | { hash: Sha256; redacted: true; reason: string };

export interface PipelineStep {
  name: string;
  durationMs?: number;
  meta?: Record<string, unknown>;
}

export interface Process {
  model: Model;
  systemPrompt: SystemPromptField;
  pipeline?: PipelineStep[];
}

export type Severity = "low" | "med" | "high";
export interface UncertaintyEntry {
  field: string;
  reason: string;
  severity: Severity;
}

export interface AlignmentFlag {
  code: string;
  detail?: string;
}

export interface AlignmentPolicy {
  id: string;
  version: string;
}

export interface AlignmentRefusal {
  reason: string;
}

export interface Alignment {
  uncertainty: UncertaintyEntry[];
  flags?: AlignmentFlag[];
  humanReviewRequired: boolean;
  policy: AlignmentPolicy;
  refusal?: AlignmentRefusal;
}

export interface Timestamp {
  claimed: ISO8601;
  tsaToken: Base64;
  tsaUrl: string;
}

export interface Ledger {
  id: UuidV7;
  prevHash: Sha256;
  hash: Sha256;
}

export type SignatureRole = "instance" | "human-reviewer";
export type SignatureAlgorithm = "ed25519";
export interface SignatureEntry {
  role: SignatureRole;
  algorithm: SignatureAlgorithm;
  keyRef: string;
  signature: Base64;
  certChain: Base64[];
}

export interface TrustEnvelope {
  tsp: string;
  content: Content;
  declaration: Declaration;
  process: Process;
  alignment: Alignment;
  timestamp: Timestamp;
  ledger: Ledger;
  signatures: SignatureEntry[];
  executionProvenance?: unknown;
}

export type CheckStatus = "passed" | "failed" | "skipped" | "warning";
export interface CheckResult {
  status: CheckStatus;
  detail: string;
  evidence?: unknown;
}

export interface VerifyChecks {
  schema: CheckResult;
  contentHash: CheckResult;
  ledgerHash: CheckResult;
  manifestFetch: CheckResult;
  rootSignature: CheckResult;
  certChain: CheckResult;
  certValidity: CheckResult;
  revocation: CheckResult;
  tsa: CheckResult;
  dane?: CheckResult;
  signatures: CheckResult[];
}

export interface VerifyResult {
  valid: boolean;
  envelope: TrustEnvelope;
  checks: VerifyChecks;
  warnings: string[];
}
