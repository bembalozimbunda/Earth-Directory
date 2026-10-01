import { airtelGlobalPayConfig, createPaymentIntent } from "./airtelGlobalPay";

export function startAirtelPayment(
  amount: number,
  currency: string,
  customerReference: string
) {
  if (!airtelGlobalPayConfig.enabled) {
    throw new Error("Airtel Global Pay is not enabled");
  }

  if (!airtelGlobalPayConfig.receivingAccount) {
    throw new Error("Airtel Global Pay receiving account is not configured");
  }

  return createPaymentIntent(amount, currency, customerReference);
}
