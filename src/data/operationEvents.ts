import type { DataDomain } from "./operationConfig";

export interface OperationEvent<T = unknown> {
  id: string;
  domain: DataDomain;
  sourceId: string;
  observedAt: string;
  receivedAt: string;
  payload: T;
  provenance: {
    source: string;
    reference?: string;
    confidence?: number;
  };
}

export function createOperationEvent<T>(
  input: Omit<OperationEvent<T>, "receivedAt">
): OperationEvent<T> {
  return {
    ...input,
    receivedAt: new Date().toISOString(),
  };
}
