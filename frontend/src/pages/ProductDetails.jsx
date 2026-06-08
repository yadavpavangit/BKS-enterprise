import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

function ProductDetails() {
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchingProductData = async () => {
      try {
        const res = await api.get(`/api/products/${id}`);
        setProductData(res.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
        setProductData(null);
      } finally {
        setLoading(false);
      }
    };
    fetchingProductData();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-4">
        <div className="text-center space-y-3">
          <div className="h-4 w-32 rounded-full bg-slate-700 animate-pulse mx-auto" />
          <p className="text-lg font-medium">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (!productData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-4">
        <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-10 text-center shadow-2xl shadow-slate-900/50">
          <h1 className="text-3xl font-bold">Product not found</h1>
          <p className="mt-3 text-slate-400">
            The product you are looking for may have been removed.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="grid md:grid-cols-2 gap-10 p-8">
          {/* Product Image */}
          <div className="flex justify-center items-center bg-gray-100 rounded-xl p-6">
            <img
              src={productData.image}
              alt={productData.name}
              className="w-full max-h-[450px] object-contain"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-gray-900">
              {productData.name}
            </h1>

            <p className="text-3xl font-semibold text-primary mt-4">
              ₹{productData.price}
            </p>

            <div className="mt-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Description
              </h2>

              <p className="text-gray-600 leading-7">
                {productData.description ||
                  "No description available for this product."}
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition">
                Add To Cart
              </button>

              <button className="border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition">
                Buy Now
              </button>
            </div>

            <div className="mt-8 border-t pt-6">
              <div className="flex justify-between text-gray-600">
                <span>Availability</span>
                <span className="text-green-600 font-medium">In Stock</span>
              </div>

              <div className="flex justify-between text-gray-600 mt-3">
                <span>Delivery</span>
                <span>2-4 Days</span>
              </div>

              <div className="flex justify-between text-gray-600 mt-3">
                <span>Free Shipping</span>
                <span>✓ Included</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
