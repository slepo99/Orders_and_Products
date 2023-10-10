import express from "express";
import OrderController from "../controllers/OrderController";

const orderRouter = express.Router();
orderRouter.post("/orders", OrderController.create);
orderRouter.get("/orders", OrderController.getAll);
orderRouter.get("/orders/:id", OrderController.getOne);
orderRouter.delete("/orders/:id", OrderController.delete);
orderRouter.put("/orders", OrderController.update);
export default orderRouter;
