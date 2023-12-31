import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Document {
  serialNumber: number;
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

const ProductSchema = new Schema<IProduct>({
  serialNumber: { type: Number },
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

const ProductModel = mongoose.model<IProduct>("Product", ProductSchema);

export default ProductModel;
