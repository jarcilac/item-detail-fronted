export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  stock: number;
  condition: 'new' | 'used';
  seller: {
    id: string;
    name: string;
    rating: number;
    sales: number;
  };
  paymentMethods: {
    type: string;
    name: string;
    installments?: {
      quantity: number;
      amount: number;
    }[];
  }[];
  ratings: {
    average: number;
    total: number;
  };
  reviews: {
    id: string;
    user: string;
    rating: number;
    comment: string;
    date: string;
  }[];
} 