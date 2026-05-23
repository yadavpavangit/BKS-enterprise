import express from "express";
import authController from "../controllers/auth.controller.js";
import multer from "multer";

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
});

router.post("/", upload.single("image"), authController.addProducts);

router.get("/", authController.getProducts);
router.get("/:id", authController.getProductById);
router.delete("/:id", authController.deleteProduct);

export default router;
