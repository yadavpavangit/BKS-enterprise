import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Trash2, Package } from "lucide-react";
import { FaTrash } from "react-icons/fa";
import { Bounce } from "react-toastify";
import Swal from "sweetalert2";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get(`/api/products`);

        // If backend returns array directly
        if (Array.isArray(res.data)) {
          setProducts(res.data);
        }
        // If backend returns { products: [] }
        else if (Array.isArray(res.data.products)) {
          setProducts(res.data.products);
        } else {
          console.warn("Unexpected products response:", res.data);
          setError("Failed to load products.");
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

  const deleteProduct = async (prodId) => {
    // SWEET ALERT CONFIRMATION
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await api.delete(`/api/products/${prodId}`);
          setProducts((prev) => prev.filter((prod) => prod._id !== prodId));
          Swal.fire({
            title: "Deleted!",
            text: "Product has been deleted successfully.",
            icon: "success",
          });
        } catch (error) {
          console.error(error.response);
          Swal.fire({
            title: "Error!",
            text: "Failed to delete product. Please try again later.",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <div className="">
      {/* Loading */}
      {loading && (
        <div className="flex justify-center items-center py-20">
          <div className="w-12 h-12 border-4 border-orange-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="bg-red-100 text-red-600 px-5 py-4 rounded-xl font-medium">
          {error}
        </div>
      )}

      {/* Empty */}
      {!loading && products.length === 0 && (
        <div className="bg-white rounded-2xl shadow-md p-10 text-center">
          <h2 className="text-2xl font-semibold text-gray-700">
            No Products Found
          </h2>
          <p className="text-gray-500 mt-2">
            Add some products to display here.
          </p>
        </div>
      )}

      {/* Products */}
      <div className="flex flex-col gap-6">
        {products.map((product) => {
          return (
            <div
              key={product._id}
              className="group w-full bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 border border-gray-100"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Left Side */}
                <div className="flex items-center gap-6 w-full">
                  {/* Image */}
                  <div className="bg-gradient-to-r from-orange-100 to-red-100 p-2 rounded-2xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 object-contain group-hover:scale-105 transition duration-300"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-bold text-gray-800">
                      {product.name}
                    </h2>

                    <p className="text-gray-500 max-w-xl">
                      {product.description}
                    </p>

                    <h3 className="text-xl font-bold text-orange-600 mt-2">
                      ₹{product.price}
                    </h3>
                  </div>
                </div>

                {/* Right Side */}
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition duration-300 shadow-md hover:shadow-lg"
                  onClick={() => deleteProduct(product._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllProducts;
