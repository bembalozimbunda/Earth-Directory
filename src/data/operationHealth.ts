export interface OperationHealth {
  status: "healthy" | "degraded" | "offline";
  generatedAt: string;
  dataPlane: {
    sourceCount: number;
    authoritativeSources: number;
    provenanceRequired: boolean;
  };
  scale: {
    configuredRecordTarget: number;
    configuredEventRateTarget: number;
  };
}

export function buildOperationHealth(sourceCount: number, authoritativeSources: number): OperationHealth {
  return {
    status: "healthy",
    generatedAt: new Date().toISOString(),
    dataPlane: {
      sourceCount,
      authoritativeSources,
      provenanceRequired: true,
    },
    scale: {
      configuredRecordTarget: 1_000_000,
      configuredEventRateTarget: 10,
    },
  };
}
