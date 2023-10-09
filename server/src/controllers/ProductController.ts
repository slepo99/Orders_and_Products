import { Request, Response } from "express";
import ProductService from "../services/ProductService";
import { IProduct } from "../models/Product";

class ProductController{
  async create(req: Request, res: Response) {
    try {
      const product = await ProductService.create(req.body as Partial<IProduct>);
      res.json(product);
    } catch (error) {
      console.error("Error creating product:", error);
      res.status(500).json({ error: "Failed to create product." });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const product = await ProductService.getAll();
      res.json(product);
    } catch (error) {
      console.error("Error getting tests:", error);
      res.status(500).json({ error: "Failed to fetch products." });
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ error: "ID undefined" });
        return;
      }
      const product = await ProductService.getOne(id);
      if (!product) {
        res.status(404).json({ error: "product not found" });
        return;
      }
      res.json(product);
    } catch (error) {
      console.error("Error getting product:", error);
      res.status(500).json({ error: "Failed to fetch product." });
    }
  }
}

export default new ProductController();