import mongoose, { Document, Schema, Types } from "mongoose";

export interface IOrder extends Document {
  title: string;
  date: Date;
  description: string;
  products: Types.ObjectId[];
}

const OrderSchema = new Schema<IOrder>({
  title: String,
  date: Date,
  description: String,
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
});

const OrderModel = mongoose.model<IOrder>("Order", OrderSchema);

export default OrderModel;
