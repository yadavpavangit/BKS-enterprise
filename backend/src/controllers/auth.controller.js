import Product from "../models/product.model.js";
import uploadImage from "../service/storage.service.js";

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
      description,
      price,
    });
    res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
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

export default { addProducts, getProducts, getProductById };
