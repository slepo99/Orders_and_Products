import mongoose, { Document, Schema } from "mongoose";

export interface IProduct {
  serialNumber: number;
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

export interface IOrder extends Document {
  title: string;
  date: Date;
  description: string;
  products: IProduct[];
}

const ProductSchema = new Schema<IProduct>({
  serialNumber: { type: Number },
  //isNew: { type: Boolean },
  photo: { type: String },
  title: { type: String },
  type: { type: String },
  specification: { type: String },
  guarantee: {
    start: { type: String },
    end: { type: String },
  },
  price: [
    {
      value: { type: Number },
      symbol: { type: String },
      isDefault: { type: Boolean },
    },
    {
      value: { type: Number },
      symbol: { type: String },
      isDefault: { type: Boolean },
    },
  ],
  order: { type: Number },
  date: { type: String },
});

const OrderSchema = new Schema<IOrder>({
  title: { type: String },
  date: { type: Date },
  description: { type: String },
  products: [ProductSchema],
});

const OrderModel = mongoose.model<IOrder>("Order", OrderSchema);

export default OrderModel;
