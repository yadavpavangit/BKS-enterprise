import React from "react";

function ProductsCreate() {
  return (
    <div className="min-h-screen flex items-center justify-center py-6 px-4">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Add Product
        </h2>

        <form className="flex flex-col gap-5">
          {/* IMAGE */}
          <div className="fieldWrapper">
            <label htmlFor="image" className="labelClass">
              Product Image
            </label>
            <input type="file" name="image" id="image" className="inputClass" />
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
