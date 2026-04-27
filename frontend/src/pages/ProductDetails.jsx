import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetails() {
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchingProductData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products/${id}`);
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
    <div className="min-h-screen bg-[#020617] px-4 py-14 text-white sm:px-6 lg:px-10">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-linear-to-br from-slate-900 via-slate-950 to-sky-950/80 px-6 py-10 shadow-[0_35px_80px_rgba(15,23,42,0.55)] sm:px-10 lg:px-14">
        <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">
              Product detail
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              {productData.name}
            </h1>
          </div>
          <div className="rounded-3xl bg-white/5 px-4 py-3 text-sm text-slate-200 shadow-xl shadow-slate-950/30">
            <span className="font-semibold text-sky-300">Price:</span> ₹
            {productData.price}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/40">
            <img
              src={productData.image}
              alt={productData.name}
              className="h-[420px] w-full rounded-[1.75rem] object-contain object-center shadow-xl shadow-slate-950/50"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="space-y-5 rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/40">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center rounded-full bg-sky-500/10 px-3 py-1 text-sm font-medium text-sky-200">
                  Available now
                </span>
                <span className="rounded-full bg-slate-900/80 px-3 py-1 text-sm text-slate-300">
                  SKU: {productData._id?.slice(-6).toUpperCase()}
                </span>
              </div>
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-white">
                  Description
                </h2>
                <p className="text-slate-300 leading-7">
                  {productData.description ||
                    "No description available for this product."}
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-900/80 p-4 text-sm text-slate-300">
                  <p className="font-semibold text-white">Condition</p>
                  <p className="mt-2">Brand new</p>
                </div>
                <div className="rounded-3xl bg-slate-900/80 p-4 text-sm text-slate-300">
                  <p className="font-semibold text-white">Category</p>
                  <p className="mt-2">Water Purification</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/40">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm text-slate-400">Fast shipping</p>
                  <p className="mt-1 text-lg font-semibold text-white">
                    Get it within 2-4 days
                  </p>
                </div>
                <div className="rounded-3xl bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-300">
                  Free delivery
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button className="min-w-[160px] rounded-3xl bg-sky-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-sky-400">
                  Add to cart
                </button>
                <button className="min-w-[160px] rounded-3xl border border-slate-700 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-slate-100 transition hover:border-slate-500">
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
