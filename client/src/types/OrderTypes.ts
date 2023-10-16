// type CommonProductFields = {
//   serialNumber: number;
//   status: boolean;
//   isProductNew: boolean;
//   photo: string;
//   title: string;
//   type: string;
//   specification: string;
//   guarantee: {
//     start: string;
//     end: string;
//   };
//   price: [
//     { value: number; symbol: string; isDefault: boolean },
//     { value: number; symbol: string; isDefault: boolean }
//   ];
//   order: number;
//   date: string;
// };

export interface ProductGet  {
  _id?: string;
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
    { value: string; symbol: string; isDefault: boolean }
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
  products: ProductGet[];
  _id: string;
}
