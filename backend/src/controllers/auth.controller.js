import Product from "../models/product.model.js";

import { uploadImage, deleteImage } from "../service/storage.service.js";

const addProducts = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }
    const productExists = await Product.findOne({ name });
    if (productExists) {
      return res.status(400).json({ message: "Product already exists" });
    }

    const image = await uploadImage(req.file);

    const newProduct = await Product.create({
      name,
      image: image.url,
      imageFileId: image.fileId,
      description,
      price,
    });
    return res.status(201).json({
      success: true,
      message: "Product added successfully",
      product: newProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message || "Server error" });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "product Not found" });
    }

    await deleteImage(product.imageFileId);

    await Product.findByIdAndDelete(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "server error" });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    if (req.file) {
      await deleteImage(product.imageFileId);
      const image = await uploadImage(req.file);

      product.name = name || product.name;
      product.description = description || product.description;
      product.price = price || product.price;
      product.image = image.url;
      product.imageFileId = image.fileId;
    }
    await product.save();
    return res.json({
      success: true,
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "server error" });
  }
};

export default {
  addProducts,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
