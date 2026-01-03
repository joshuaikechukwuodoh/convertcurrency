// constants.ts - Global Currency Exchange Rates
// Base currency: USD (rate = 1)
// All rates are relative to 1 USD

export interface Currency {
  name: string;
  symbol: string;
  code: string;
  rate: number;
  country: string;
}

export const CURRENCIES: Record<string, Currency> = {
  // North America
  USD: { name: "US Dollar", symbol: "$", code: "USD", rate: 1, country: "United States" },
  CAD: { name: "Canadian Dollar", symbol: "C$", code: "CAD", rate: 1.35, country: "Canada" },
  MXN: { name: "Mexican Peso", symbol: "$", code: "MXN", rate: 17.5, country: "Mexico" },
  
  // Europe
  EUR: { name: "Euro", symbol: "€", code: "EUR", rate: 0.92, country: "Eurozone" },
  GBP: { name: "British Pound", symbol: "£", code: "GBP", rate: 0.79, country: "United Kingdom" },
  CHF: { name: "Swiss Franc", symbol: "Fr", code: "CHF", rate: 0.88, country: "Switzerland" },
  SEK: { name: "Swedish Krona", symbol: "kr", code: "SEK", rate: 10.5, country: "Sweden" },
  NOK: { name: "Norwegian Krone", symbol: "kr", code: "NOK", rate: 10.8, country: "Norway" },
  DKK: { name: "Danish Krone", symbol: "kr", code: "DKK", rate: 6.9, country: "Denmark" },
  PLN: { name: "Polish Zloty", symbol: "zł", code: "PLN", rate: 4.0, country: "Poland" },
  CZK: { name: "Czech Koruna", symbol: "Kč", code: "CZK", rate: 23.5, country: "Czech Republic" },
  HUF: { name: "Hungarian Forint", symbol: "Ft", code: "HUF", rate: 360, country: "Hungary" },
  RON: { name: "Romanian Leu", symbol: "lei", code: "RON", rate: 4.6, country: "Romania" },
  BGN: { name: "Bulgarian Lev", symbol: "лв", code: "BGN", rate: 1.8, country: "Bulgaria" },
  HRK: { name: "Croatian Kuna", symbol: "kn", code: "HRK", rate: 6.9, country: "Croatia" },
  RUB: { name: "Russian Ruble", symbol: "₽", code: "RUB", rate: 92, country: "Russia" },
  UAH: { name: "Ukrainian Hryvnia", symbol: "₴", code: "UAH", rate: 37, country: "Ukraine" },
  TRY: { name: "Turkish Lira", symbol: "₺", code: "TRY", rate: 32, country: "Turkey" },
  
  // Asia
  CNY: { name: "Chinese Yuan", symbol: "¥", code: "CNY", rate: 7.2, country: "China" },
  JPY: { name: "Japanese Yen", symbol: "¥", code: "JPY", rate: 149, country: "Japan" },
  KRW: { name: "South Korean Won", symbol: "₩", code: "KRW", rate: 1320, country: "South Korea" },
  INR: { name: "Indian Rupee", symbol: "₹", code: "INR", rate: 83, country: "India" },
  IDR: { name: "Indonesian Rupiah", symbol: "Rp", code: "IDR", rate: 15700, country: "Indonesia" },
  MYR: { name: "Malaysian Ringgit", symbol: "RM", code: "MYR", rate: 4.7, country: "Malaysia" },
  SGD: { name: "Singapore Dollar", symbol: "S$", code: "SGD", rate: 1.34, country: "Singapore" },
  THB: { name: "Thai Baht", symbol: "฿", code: "THB", rate: 35.5, country: "Thailand" },
  PHP: { name: "Philippine Peso", symbol: "₱", code: "PHP", rate: 56, country: "Philippines" },
  VND: { name: "Vietnamese Dong", symbol: "₫", code: "VND", rate: 24500, country: "Vietnam" },
  PKR: { name: "Pakistani Rupee", symbol: "₨", code: "PKR", rate: 278, country: "Pakistan" },
  BDT: { name: "Bangladeshi Taka", symbol: "৳", code: "BDT", rate: 110, country: "Bangladesh" },
  LKR: { name: "Sri Lankan Rupee", symbol: "Rs", code: "LKR", rate: 325, country: "Sri Lanka" },
  MMK: { name: "Myanmar Kyat", symbol: "K", code: "MMK", rate: 2100, country: "Myanmar" },
  HKD: { name: "Hong Kong Dollar", symbol: "HK$", code: "HKD", rate: 7.8, country: "Hong Kong" },
  TWD: { name: "Taiwan Dollar", symbol: "NT$", code: "TWD", rate: 31.5, country: "Taiwan" },
  KHR: { name: "Cambodian Riel", symbol: "៛", code: "KHR", rate: 4100, country: "Cambodia" },
  LAK: { name: "Lao Kip", symbol: "₭", code: "LAK", rate: 21500, country: "Laos" },
  NPR: { name: "Nepalese Rupee", symbol: "Rs", code: "NPR", rate: 133, country: "Nepal" },
  
  // Middle East
  AED: { name: "UAE Dirham", symbol: "د.إ", code: "AED", rate: 3.67, country: "United Arab Emirates" },
  SAR: { name: "Saudi Riyal", symbol: "﷼", code: "SAR", rate: 3.75, country: "Saudi Arabia" },
  QAR: { name: "Qatari Riyal", symbol: "﷼", code: "QAR", rate: 3.64, country: "Qatar" },
  KWD: { name: "Kuwaiti Dinar", symbol: "د.ك", code: "KWD", rate: 0.31, country: "Kuwait" },
  BHD: { name: "Bahraini Dinar", symbol: "د.ب", code: "BHD", rate: 0.38, country: "Bahrain" },
  OMR: { name: "Omani Rial", symbol: "﷼", code: "OMR", rate: 0.38, country: "Oman" },
  ILS: { name: "Israeli Shekel", symbol: "₪", code: "ILS", rate: 3.7, country: "Israel" },
  JOD: { name: "Jordanian Dinar", symbol: "د.ا", code: "JOD", rate: 0.71, country: "Jordan" },
  LBP: { name: "Lebanese Pound", symbol: "ل.ل", code: "LBP", rate: 89500, country: "Lebanon" },
  IQD: { name: "Iraqi Dinar", symbol: "ع.د", code: "IQD", rate: 1310, country: "Iraq" },
  
  // Africa
  ZAR: { name: "South African Rand", symbol: "R", code: "ZAR", rate: 18.5, country: "South Africa" },
  NGN: { name: "Nigerian Naira", symbol: "₦", code: "NGN", rate: 1487, country: "Nigeria" },
  EGP: { name: "Egyptian Pound", symbol: "£", code: "EGP", rate: 48.5, country: "Egypt" },
  KES: { name: "Kenyan Shilling", symbol: "KSh", code: "KES", rate: 129, country: "Kenya" },
  GHS: { name: "Ghanaian Cedi", symbol: "₵", code: "GHS", rate: 15, country: "Ghana" },
  TZS: { name: "Tanzanian Shilling", symbol: "TSh", code: "TZS", rate: 2520, country: "Tanzania" },
  UGX: { name: "Ugandan Shilling", symbol: "USh", code: "UGX", rate: 3700, country: "Uganda" },
  MAD: { name: "Moroccan Dirham", symbol: "د.م.", code: "MAD", rate: 10, country: "Morocco" },
  ETB: { name: "Ethiopian Birr", symbol: "Br", code: "ETB", rate: 120, country: "Ethiopia" },
  XOF: { name: "West African CFA Franc", symbol: "Fr", code: "XOF", rate: 604, country: "West Africa" },
  XAF: { name: "Central African CFA Franc", symbol: "Fr", code: "XAF", rate: 604, country: "Central Africa" },
  
  // Oceania
  AUD: { name: "Australian Dollar", symbol: "A$", code: "AUD", rate: 1.52, country: "Australia" },
  NZD: { name: "New Zealand Dollar", symbol: "NZ$", code: "NZD", rate: 1.64, country: "New Zealand" },
  FJD: { name: "Fijian Dollar", symbol: "FJ$", code: "FJD", rate: 2.27, country: "Fiji" },
  
  // South America
  BRL: { name: "Brazilian Real", symbol: "R$", code: "BRL", rate: 5.0, country: "Brazil" },
  ARS: { name: "Argentine Peso", symbol: "$", code: "ARS", rate: 850, country: "Argentina" },
  CLP: { name: "Chilean Peso", symbol: "$", code: "CLP", rate: 950, country: "Chile" },
  COP: { name: "Colombian Peso", symbol: "$", code: "COP", rate: 4100, country: "Colombia" },
  PEN: { name: "Peruvian Sol", symbol: "S/", code: "PEN", rate: 3.75, country: "Peru" },
  UYU: { name: "Uruguayan Peso", symbol: "$", code: "UYU", rate: 39, country: "Uruguay" },
  VES: { name: "Venezuelan Bolívar", symbol: "Bs.", code: "VES", rate: 36, country: "Venezuela" },
  
  // Central America & Caribbean
  GTQ: { name: "Guatemalan Quetzal", symbol: "Q", code: "GTQ", rate: 7.8, country: "Guatemala" },
  CRC: { name: "Costa Rican Colón", symbol: "₡", code: "CRC", rate: 520, country: "Costa Rica" },
  PAB: { name: "Panamanian Balboa", symbol: "B/.", code: "PAB", rate: 1, country: "Panama" },
  JMD: { name: "Jamaican Dollar", symbol: "J$", code: "JMD", rate: 155, country: "Jamaica" },
  TTD: { name: "Trinidad & Tobago Dollar", symbol: "TT$", code: "TTD", rate: 6.8, country: "Trinidad & Tobago" },
  
  // Other Notable Currencies
  ISK: { name: "Icelandic Króna", symbol: "kr", code: "ISK", rate: 138, country: "Iceland" },
  AMD: { name: "Armenian Dram", symbol: "֏", code: "AMD", rate: 400, country: "Armenia" },
  GEL: { name: "Georgian Lari", symbol: "₾", code: "GEL", rate: 2.7, country: "Georgia" },
  KZT: { name: "Kazakhstani Tenge", symbol: "₸", code: "KZT", rate: 460, country: "Kazakhstan" },
  UZS: { name: "Uzbekistani Som", symbol: "so'm", code: "UZS", rate: 12500, country: "Uzbekistan" },
  AFN: { name: "Afghan Afghani", symbol: "؋", code: "AFN", rate: 70, country: "Afghanistan" },
  
  // Cryptocurrencies (Bonus - highly volatile)
  BTC: { name: "Bitcoin", symbol: "₿", code: "BTC", rate: 0.000024, country: "Global" },
  ETH: { name: "Ethereum", symbol: "Ξ", code: "ETH", rate: 0.00044, country: "Global" },
};

