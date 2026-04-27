import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Admin() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    axios
      .post("http://localhost:5000/api/products/add_products", formData)
      .then((response) => {
        console.log(response.data);
        navigate("/myAdmin");
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  };
  return (
    <section className="max-w-8xl w-full h-screen p-4">
      <h2 className="text-2xl text-center font-bold mb-4">Admin Dashboard</h2>

      <div className="w-210 mx-auto my-10 p-4 rounded-lg">
        <form
          className="flex justify-center items-center flex-col gap-4"
          onSubmit={handleSubmit}
        >
          {/* PRODUCT NAME */}
          <div className="w-full col-span-3 grid grid-cols-subgrid gap-2">
            <label htmlFor="name">Product Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* PRODUCT IMAGE */}
          <div className="w-full col-span-3 grid grid-cols-subgrid gap-2">
            <label htmlFor="image">Product Image:</label>
            <input
              type="file"
              id="image"
              name="image"
              className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* PRODUCT DESCRIPTION */}
          <div className="w-full col-span-3 grid grid-cols-subgrid gap-2">
            <label htmlFor="description">Product Description:</label>
            <textarea
              id="description"
              name="description"
              className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* PRODUCT PRICE */}
          <div className="w-full col-span-3 grid grid-cols-subgrid gap-2">
            <label htmlFor="price">Product Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              step="1"
              className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Add Product
          </button>
        </form>
      </div>
    </section>
  );
}

export default Admin;
