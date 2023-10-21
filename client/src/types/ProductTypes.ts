export interface ProductPost {
  serialNumber: string;
  status: boolean;
  isProductNew: boolean;
  photo: string;
  title: string;
  type: string;
  specification: string;
  guarantee: {
    start: string;
    end: string;
  };
  price: [
    { value: string; symbol: string; isDefault: boolean },
    { value: string; symbol: string; isDefault: boolean },
  ];
  order: number;
  date: string;
}
