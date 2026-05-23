import React from "react";
import { FaCross, FaPlus } from "react-icons/fa";

import { IoPulse } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiPulseLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();

  return (
    <section className="max-w-8xl w-full p-4">
      <h2 className="text-2xl text-center font-bold mb-4">Admin Dashboard</h2>

      <div className="w-full mx-auto my-10 rounded-lg">
        <div className="max-w-80 h-auto border border-white rounded-sm p-5 bg-white/90">
          <div className="w-full flex items-center justify-center">
            <button
              className="bg-cyan-500 px-5 py-2 rounded-md flex items-center gap-2"
              onClick={() => navigate("/product-create")}
            >
              Create Products <FaPlus />
            </button>
          </div>

          <div className="mt-5 w-full">
            {/* ALL PRODUCTS */}
            <div className="flex max-w-40 items-center group cursor-pointer">
              <button className="">
                <MdKeyboardArrowRight size={30} color="blue" />
              </button>
              <h2 className="text-cyan-500 text-center font-medium group-hover:text-lg group-active:scale-95 transition-all duration-150 hover:text-cyan-600">
                All Products
              </h2>
            </div>
            {/* ALL PRODUCTS */}
            {/* <div className="flex max-w-40 items-center group cursor-pointer">
              <button className="">
                <MdKeyboardArrowRight size={30} color="blue" />
              </button>
              <h2 className="text-cyan-500 text-center font-medium group-hover:text-lg group-active:scale-95 transition-all duration-150 hover:text-cyan-600">
                All Products
              </h2>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Admin;
