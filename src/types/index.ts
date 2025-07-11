export interface Cryptocurrency {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  image: string;
}

export interface Portfolio {
  id: string;
  cryptocurrency: Cryptocurrency;
  amount: number;
  averagePrice: number;
  totalValue: number;
}

export interface Transaction {
  id: string;
  type: 'buy' | 'sell';
  cryptocurrency: Cryptocurrency;
  amount: number;
  price: number;
  timestamp: Date;
  total: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  portfolio: Portfolio[];
  transactions: Transaction[];
}