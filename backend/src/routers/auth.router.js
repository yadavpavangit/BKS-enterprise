import express from "express";
import authController from "../controllers/auth.controller.js";
import multer from "multer";

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
});

router.post(
  "/add_products",
  upload.single("image"),
  authController.addProducts,
);

export default router;
