export interface AirtelGlobalPayConfig {
  enabled: boolean;
  environment: "sandbox" | "production";
  receivingAccount: string;
  merchantId?: string;
  apiBaseUrl?: string;
}

export interface PaymentIntent {
  id: string;
  amount: number;
  currency: string;
  customerReference: string;
  status: "created" | "pending" | "paid" | "failed" | "cancelled";
  provider: "airtel-global-pay";
}

/**
 * WARMABLON acts as the application/payment orchestration layer.
 * Provider credentials must be supplied through a secrets manager or
 * environment variables. Never commit API keys, PINs, OTPs or passwords.
 */
export const airtelGlobalPayConfig: AirtelGlobalPayConfig = {
  enabled: process.env.AIRTEL_GLOBAL_PAY_ENABLED === "true",
  environment: process.env.AIRTEL_GLOBAL_PAY_ENV === "production" ? "production" : "sandbox",
  receivingAccount: process.env.AIRTEL_GLOBAL_PAY_RECEIVING_ACCOUNT ?? "",
  merchantId: process.env.AIRTEL_GLOBAL_PAY_MERCHANT_ID,
  apiBaseUrl: process.env.AIRTEL_GLOBAL_PAY_API_BASE_URL,
};

export function createPaymentIntent(
  amount: number,
  currency: string,
  customerReference: string
): PaymentIntent {
  if (!Number.isFinite(amount) || amount <= 0) {
    throw new Error("Payment amount must be greater than zero");
  }

  return {
    id: `wb_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`,
    amount,
    currency,
    customerReference,
    status: "created",
    provider: "airtel-global-pay",
  };
}
