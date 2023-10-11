import OrderModel, { IOrder } from "../models/Order";

class OrderService {
  async create(order: Partial<IOrder>): Promise<IOrder> {
    try {
      const createdOrder = new OrderModel(order);
      await createdOrder.save();
      return createdOrder;
    } catch (error) {
      console.error("Error creating order:", error);
      throw new Error("Failed to create order.");
    }
  }

  async getAll(): Promise<IOrder[]> {
    try {
      const order = await OrderModel.find();
      return order;
    } catch (error) {
      console.error("Error getting order:", error);
      throw new Error("Failed to fetch order.");
    }
  }

  async getOne(id: string): Promise<IOrder | null> {
    try {
      if (!id) {
        throw new Error("ID undefined");
      }
      const order = await OrderModel.findById(id);
      if (!order) {
        throw new Error("Order not found");
      }
      return order;
    } catch (error) {
      console.error("Error getting order:", error);
      throw new Error("Failed to fetch order.");
    }
  }

  async update(order:Partial<IOrder>) {
    if (!order._id) {
      throw new Error("ID undefined");
    }
    const updetedOrder = await OrderModel.findByIdAndUpdate(order._id, order, {
      new: true,
    });
    return updetedOrder;
  }
  async delete(id: string) {
    if (!id) {
      throw new Error("ID undefined");
    }
    const order = await OrderModel.findByIdAndDelete(id);
    return order;
  }
}

export default new OrderService();
