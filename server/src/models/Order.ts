import mongoose, { Document, Schema, Types } from "mongoose";



export interface IOrder extends Document {
  title: string;
  date: string;
  description: string;
  products: Types.ObjectId[];
}


const OrderSchema = new Schema<IOrder>({
  title: { type: String },
  date: { type: String },
  description: { type: String },
  products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
});

const OrderModel = mongoose.model<IOrder>("Order", OrderSchema);

export default OrderModel;
