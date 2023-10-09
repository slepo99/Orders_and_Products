import express from "express";
import mongoose, { Number } from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/authRoutes";
import productRouter from "./routes/productRoutes";

dotenv.config({ path: "./.env" });
const app = express();

const PORT: string = process.env.PORT as string;
const dbUrl: string = process.env.DB_URL as string;

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/api", productRouter)
app.use("/auth", authRouter);

async function startApp() {
  try {
    await mongoose.connect(dbUrl);

    app.listen(PORT, () => {
      console.log("server works on " + PORT + " port");
    });
  } catch (e) {
    console.log(e);
  }
}
export default app;
startApp();
