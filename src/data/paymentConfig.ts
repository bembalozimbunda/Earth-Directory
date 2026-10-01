export interface PaymentReceivingAccount {
  provider: "airtel-global-pay";
  country: "ZM";
  currency: "ZMW";
  accountIdentifier: string;
  enabled: boolean;
}

// The receiving identifier is intentionally supplied at runtime/admin setup.
// Never commit API keys, client secrets, PINs or access tokens to GitHub.
export const paymentReceivingAccount: PaymentReceivingAccount = {
  provider: "airtel-global-pay",
  country: "ZM",
  currency: "ZMW",
  accountIdentifier: "",
  enabled: false,
};

export function configureReceivingAccount(accountIdentifier: string): PaymentReceivingAccount {
  const normalized = accountIdentifier.trim();
  if (!normalized) {
    throw new Error("An Airtel Global Pay receiving account is required.");
  }

  return {
    ...paymentReceivingAccount,
    accountIdentifier: normalized,
    enabled: true,
  };
}
