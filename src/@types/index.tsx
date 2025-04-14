export interface ProductType {
    id: string;
    img: string;
    title: string;
    price: number;
    currentPrice: number;
    discount: number;
    halal: string;
    btn: string;
    quantity?: number;
    stock?: number; 
  }