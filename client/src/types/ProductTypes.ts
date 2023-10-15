export interface ProductPost {
    serialNumber: number;
    status: boolean ;
    isProductNew: boolean ;
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
  };