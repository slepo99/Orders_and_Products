import express from "express";
import mongoose, { Number } from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { Server } from "socket.io";
import { createServer } from "http";

import { initializeWebSocketCounter } from "./sockets/SessionCounter";
import authRouter from "./routes/authRoutes";
import productRouter from "./routes/productRoutes";
import orderRouter from "./routes/orderRoutes";

dotenv.config({ path: "./.env" });
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: "*" } });

const PORT: string = process.env.PORT as string;
const dbUrl: string = process.env.DB_URL as string;

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/api", productRouter);
app.use("/auth", authRouter);
app.use("/api", orderRouter);

async function startApp() {
  try {
    await mongoose.connect(dbUrl);
    initializeWebSocketCounter(io);
    httpServer.listen(PORT, () => {
      console.log("server works on " + PORT + " port");
    });
  } catch (e) {
    console.log(e);
  }
}
export default app;
startApp();
