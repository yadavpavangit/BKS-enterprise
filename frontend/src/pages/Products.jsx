import { useState, useEffect } from "react";
// import { featureProducts } from "../constans";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchProducts = async () => {
      let res = await axios.get(
        "http://localhost:5000/api/products/get_products",
      );
      setProducts(res.data);
    };
    fetchProducts();
  }, []);
  return (
    <section className="w-full min-h-screen bg-gray-100 py-12 px-6 md:px-10">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-red-600 font-semibold text-xl">Our Products</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
          Explore Our Collection
        </h1>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {products.map((product) => (
          <div
            onClick={() => navigate(`/products/${product._id}`)}
            key={product._id}
            className="w-full max-w-xs bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-60 mx-auto h-56 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col gap-2">
              {/* Category */}
              {/* <span className="text-xs text-gray-400 uppercase">
                {product.category || "Category"}
              </span> */}

              {/* Name */}
              <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                {product.name}
              </h3>

              {/* Rating */}
              {/* <div className="flex items-center gap-1 text-yellow-500 text-sm">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar className="text-gray-300" />
                <span className="text-gray-500 ml-2">(4.0)</span>
              </div> */}

              {/* Price */}
              <div className="flex items-center justify-between mt-2">
                <span className="text-xl font-bold text-red-600">
                  ₹{product.price || 999}
                </span>

                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition text-sm">
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
