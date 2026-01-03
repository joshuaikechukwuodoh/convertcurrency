import { CURRENCIES } from "./constant";
import { Currency } from "./constant";

// Helper function to get all currency codes
export const getCurrencyCodes = (): string[] => {
  const codes: string[] = [];
  const currencycollect = Object.values(CURRENCIES);
  for (let i = 0; i < currencycollect.length; i++) {
    codes.push(currencycollect[i].code);
  }
  return codes;
};

// Helper function to get currency by code
export const getCurrency = (code: string): Currency | undefined => {
  return CURRENCIES[code];
};

// Helper function to convert between currencies
export const convertCurrency = (
  amount: number,
  fromCode: string,
  toCode: string
): number => {
  const fromCurrency = CURRENCIES[fromCode];
  const toCurrency = CURRENCIES[toCode];

  if (!fromCurrency || !toCurrency) {
    throw new Error("Invalid currency code");
  }

  // Convert to USD first, then to target currency
  const amountInUSD = amount / fromCurrency.rate;
  const convertedAmount = amountInUSD * toCurrency.rate;

  return convertedAmount;
};
