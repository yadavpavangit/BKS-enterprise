import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";

function UpdateProductForm() {
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const { id } = useParams();

  const [formData, setFormData] = useState({
    image: null,
    name: "",
    price: "",
    description: "",
  });

  // PREVIEW IMAGE STATE
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await api.get(`/api/products/${id}`);
        const product = res.data;

        setFormData({
          image: null,
          name: product.name,
          price: product.price,
          description: product.description,
        });
        setPreviewImage(product.image);
      } catch (error) {
        console.error("Error fetching product:", error);
        toast.error("Failed to load product details. Please try again.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    };
    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prev) => ({ ...prev, image: files[0] }));
      setPreviewImage(URL.createObjectURL(files[0]));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!formData.name || !formData.price || !formData.description) {
        toast.error("Please fill in all fields.", {
          position: "top-right",
          autoClose: 5000,
        });
        return;
      }

      const data = new FormData();

      if (formData.image) {
        data.append("image", formData.image);
      }
      data.append("name", formData.name);
      data.append("price", formData.price);
      data.append("description", formData.description);

      await api.put(`/api/products/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Product updated successfully");
      navigate("/myAdmin");
    } catch (error) {
      console.error("Error updating product:", error);
      toast.error("Failed to update product. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-6 px-4">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Update Product
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
            {previewImage && (
              <img
                src={previewImage}
                alt="preview"
                className="w-32 h-32 object-contain rounded-lg border"
              />
            )}
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
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateProductForm;
