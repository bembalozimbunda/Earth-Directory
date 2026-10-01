export type DataDomain =
  | "geography"
  | "zambia"
  | "finance"
  | "trade"
  | "transport"
  | "institutions"
  | "languages"
  | "audit";

export type DataSourceKind = "static" | "api" | "database" | "event" | "user";

export interface DataSourceDefinition {
  id: string;
  domain: DataDomain;
  kind: DataSourceKind;
  refreshSeconds?: number;
  authoritative: boolean;
  provenanceRequired: boolean;
}

/**
 * Operational data belongs outside the Git repository whenever it changes
 * frequently or grows beyond application configuration. Git remains the
 * source of truth for schemas, adapters and business rules.
 */
export const OPERATION_DATA_SOURCES: DataSourceDefinition[] = [
  { id: "earth-static-registry", domain: "geography", kind: "static", authoritative: false, provenanceRequired: true },
  { id: "zambia-registry", domain: "zambia", kind: "database", authoritative: false, provenanceRequired: true },
  { id: "central-bank-feeds", domain: "finance", kind: "api", refreshSeconds: 300, authoritative: true, provenanceRequired: true },
  { id: "fx-market-feeds", domain: "finance", kind: "api", refreshSeconds: 60, authoritative: false, provenanceRequired: true },
  { id: "sadc-corridor-feeds", domain: "trade", kind: "api", refreshSeconds: 300, authoritative: false, provenanceRequired: true },
  { id: "border-events", domain: "transport", kind: "event", refreshSeconds: 30, authoritative: false, provenanceRequired: true },
  { id: "institution-registry", domain: "institutions", kind: "database", authoritative: false, provenanceRequired: true },
  { id: "language-registry", domain: "languages", kind: "database", authoritative: false, provenanceRequired: true },
  { id: "integrity-ledger", domain: "audit", kind: "database", authoritative: true, provenanceRequired: true },
];

export const OPERATION_SCALE_TARGETS = {
  initial: { records: 1_000_000, eventsPerSecond: 10 },
  regional: { records: 100_000_000, eventsPerSecond: 1_000 },
  planetary: { records: 10_000_000_000, eventsPerSecond: 100_000 },
} as const;
