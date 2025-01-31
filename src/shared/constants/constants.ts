const PRICE_CURRENCY = Object.freeze({
  USD: "usd",
  EUR: "eur",
  GBP: "gbp",
});

export type PriceCurrency = keyof typeof PRICE_CURRENCY;
