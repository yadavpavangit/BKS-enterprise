import { Schema, model } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
});
export default model("Product", productSchema);
