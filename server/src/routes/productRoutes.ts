import express from "express";
import ProductController from "../controllers/ProductController";
const productRouter = express.Router();
productRouter.post("/products", ProductController.create);
productRouter.get("/products", ProductController.getAll);
productRouter.get("/products/:id", ProductController.getOne);
export default productRouter;