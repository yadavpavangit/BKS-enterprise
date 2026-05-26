import "dotenv/config";
import express from "express";
import connectDB from "./src/DB/db.js";
import cors from "cors";
import productRouter from "./src/routers/auth.router.js";

const app = express();
app.use(express.json());
app.use(cors());

// app.get("/", (req, res) => {
//   res.status(200).json({
//     success: true,
//     message: "API Running Successfully",
//     endpoints: {
//       getAllProducts: "/api/products",
//     },
//   });
// });

app.use("/api/products", productRouter);
connectDB();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
