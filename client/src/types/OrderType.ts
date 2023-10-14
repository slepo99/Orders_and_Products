export interface Product {
  _id?: string;
  serialNumber: number;
  status: string;
  // isNew: boolean;
  photo: string;
  title: string;
  type: string;
  specification: string;
  guarantee: {
    start: string;
    end: string;
  };
  price: [
    { value: number; symbol: string; isDefault: boolean },
    { value: number; symbol: string; isDefault: boolean }
  ];
  order: number;
  date: string;
}
export interface OrderDescription {
  title: string;
  date: string;
  description: string;
}
export interface Order extends OrderDescription {
  products: Product[]
  _id: string
}