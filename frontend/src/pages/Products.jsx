import { useState, useEffect } from "react";
import { FaSearch, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get(`/api/products`);

        if (Array.isArray(res.data.products)) {
          setProducts(res.data.products);
        } else {
          console.warn("Unexpected products response:", res.data);
          setError("Failed to load products. Invalid response from server.");
          setProducts([]);
        }
      } catch (error) {
        console.error(error);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className="w-full min-h-screen bg-gray-100 py-12 px-6 md:px-10">
      <div>
        <div className="flex items-center gap-3 border-2 focus:border-blue-600 border-blue-500 rounded-md p-4 mb-8">
          <FaSearch />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full border-none bg-transparent focus:outline-none text-gray-700"
          />
        </div>
      </div>
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-red-600 font-semibold text-xl">Our Products</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
          Explore Our Collection
        </h1>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {loading ? (
          <h2>Loading products...</h2>
        ) : error ? (
          <h2 className="text-red-600">{error}</h2>
        ) : products.length === 0 ? (
          <h2>No products found.</h2>
        ) : (
          products.map((product) => (
            <div
              onClick={() => navigate(`/products/${product._id}`)}
              key={product._id}
              className="w-full max-w-xs bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden cursor-pointer group"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-contain p-4 group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col gap-2">
                {/* Name */}
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                  {product.name}
                </h3>

                {/* Price */}
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xl font-bold text-red-600">
                    ₹{product.price || 999}
                  </span>
                  <div className="flex items-center gap-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} size={14} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default Products;
