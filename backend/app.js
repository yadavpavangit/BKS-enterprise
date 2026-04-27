import "dotenv/config";
import express from "express";
import connectDB from "./src/DB/db.js";
import cors from "cors";
import productRouter from "./src/routers/auth.router.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/products", productRouter);

connectDB();

app.listen(5000, () => {
  console.log("Server running at PORT http://localhost:5000");
});
