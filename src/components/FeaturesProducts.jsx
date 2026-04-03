import React from "react";
import { featureProducts } from "../constans";

function FeaturesProducts() {
  return (
    <div className="py-20 px-4 md:px-10 min-h-screen bg-gray-50">
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold font-poppins text-gray-800">
          Featured Products
        </h2>
        <div className="w-24 h-1 bg-red-600 mt-2 rounded-full" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {featureProducts.map((product, index) => (
          <div
            key={product.id}
            className={`
              bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group
              
              ${index === 0 ? "col-span-2 md:col-span-1 lg:col-span-1" : ""}
            `}
          >
            {/* Image */}
            <div className="relative bg-gray-100 h-40 flex items-center justify-center overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="h-full object-contain group-hover:scale-110 transition duration-300"
              />

              {/* Discount Badge */}
              <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                {Math.round(
                  ((product.price - product.discountPrice) / product.price) *
                    100,
                )}
                % OFF
              </span>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col gap-2">
              <h3 className="text-sm font-semibold text-gray-700 line-clamp-2">
                {product.name}
              </h3>

              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-green-600">
                  ₹{product.discountPrice}
                </span>
                <span className="text-sm text-muted line-through">
                  ₹{product.price}
                </span>
              </div>

              <button className="mt-2 bg-red-600 text-white text-sm py-2 rounded-lg hover:bg-red-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturesProducts;
