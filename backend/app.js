import "dotenv/config";
import express from "express";
import connectDB from "./src/DB/db.js";
import cors from "cors";
import productRouter from "./src/routers/auth.router.js";
import controller from "./src/controllers/auth.controller.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", controller.getProducts);

app.use("/api/products", productRouter);
connectDB();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
