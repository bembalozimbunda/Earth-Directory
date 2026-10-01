/**
 * Payment security boundary for WARMABLON.
 *
 * Safe configuration values may be committed as code defaults.
 * Secrets must be injected at runtime through environment variables or a
 * managed secrets service. Never request or store SIM PINs, OTPs, passwords,
 * private keys, or API client secrets in source control.
 */
export const PAYMENT_SECRET_ENV_VARS = [
  "AIRTEL_GLOBAL_PAY_CLIENT_ID",
  "AIRTEL_GLOBAL_PAY_CLIENT_SECRET",
  "AIRTEL_GLOBAL_PAY_API_KEY",
] as const;

export function paymentSecretsConfigured(): boolean {
  return PAYMENT_SECRET_ENV_VARS.every((name) => Boolean(process.env[name]));
}
