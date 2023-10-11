import { Request, Response } from "express";
import OrderService from "../services/OrderService";
import { IOrder } from "../models/Order";

class OrderController {
  async create(req: Request, res: Response) {
    try {
      const order = await OrderService.create(req.body as Partial<IOrder>);
      res.json(order);
    } catch (error) {
      console.error("Error creating order:", error);
      res.status(500).json({ error: "Failed to order." });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const order = await OrderService.getAll();
      res.json(order);
    } catch (error) {
      console.error("Error getting orders:", error);
      res.status(500).json({ error: "Failed to fetch orders." });
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ error: "ID undefined" });
        return;
      }
      const order = await OrderService.getOne(id);
      if (!order) {
        res.status(404).json({ error: "order not found" });
        return;
      }
      res.json(order);
    } catch (error) {
      console.error("Error getting order:", error);
      res.status(500).json({ error: "Failed to fetch order." });
    }
  }
  async update(req: Request, res: Response) {
    try {
      const order = await OrderService.update(req.body);
      return res.json(order);
    } catch (e) {
      console.error("Error updating order");
      res.status(500).json({ error: "Failed to update order" });
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const order = await OrderService.delete(req.params.id);
      return res.json(order);
    } catch (e) {
      console.error("Error deleting order");
      res.status(500).json({ error: "Failed to delete order" });
    }
  }
}

export default new OrderController();
