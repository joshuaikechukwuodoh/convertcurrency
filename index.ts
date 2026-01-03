import { convertCurrency, getCurrencyCodes } from "./helper";

console.log("Conversion USD to EUR (100):", convertCurrency(100, "USD", "EUR"));
console.log("Currency Codes:", getCurrencyCodes().length, "codes found.");
console.log("First 5 codes:", getCurrencyCodes().slice(0, 5));
