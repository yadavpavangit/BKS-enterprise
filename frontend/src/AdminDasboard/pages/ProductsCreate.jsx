import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

function ProductsCreate() {
  const navigate = useNavigate();
  const fileInputRef = useRef();
  const [formData, setFormData] = useState({
    image: null,
    name: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (
        !formData.image ||
        !formData.name ||
        !formData.price ||
        !formData.description
      ) {
        return alert("All fields are required");
      }

      const data = new FormData();

      data.append("image", formData.image);
      data.append("name", formData.name);
      data.append("price", formData.price);
      data.append("description", formData.description);

      const response = await api.post(`/api/products`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response.data);

      setFormData({
        image: null,
        name: "",
        price: "",
        description: "",
      });
      fileInputRef.current.value = "";

      navigate("/myAdmin");
    } catch (error) {
      console.log("Error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-6 px-4">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Add Product
        </h2>

        <form
          className="flex flex-col gap-5"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          {/* IMAGE */}
          <div className="fieldWrapper">
            <label htmlFor="image" className="labelClass">
              Product Image
            </label>
            <input
              ref={fileInputRef}
              type="file"
              name="image"
              id="image"
              className="inputClass"
              onChange={handleChange}
            />
          </div>

          {/* NAME */}
          <div className="fieldWrapper">
            <label htmlFor="name" className="labelClass">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter product name"
              className="inputClass"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* PRICE */}
          <div className="fieldWrapper">
            <label htmlFor="price" className="labelClass">
              Price
            </label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="Enter price"
              className="inputClass"
              value={formData.price}
              onChange={handleChange}
            />
          </div>

          {/* DESCRIPTION */}
          <div className="fieldWrapper">
            <label htmlFor="description" className="labelClass">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              rows="4"
              placeholder="Enter product description"
              className="inputClass"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="mt-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProductsCreate;
