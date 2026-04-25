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

export default { addProducts };
