export interface CurrencyInfo {
  code: string;
  codein: string;
  name: string;
  high: string;
  low: string;
  varBid: string;
  pctChange: string;
  bid: string;
  ask: string;
  timestamp: string;
  create_date: string;
};

export interface ConvertedCurrency {
  [key: string]: CurrencyInfo
};

export const currencyModel: CurrencyInfo = {
  code: '',
  codein: '',
  name: '',
  high: '',
  low: '',
  varBid: '',
  pctChange: '',
  bid: '',
  ask: '',
  timestamp: '',
  create_date: '',
}
