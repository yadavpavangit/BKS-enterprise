import React from "react";
import { FaCheck } from "react-icons/fa";
import { plans } from "../constans";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Plan() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#plans",
        start: "top 80%",
      },
    });
    tl.fromTo(
      "#plans",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.3,
      },
    );
  });

  return (
    <div id="plans" className="w-full pt-20 px-6 flex justify-center bg-black">
      <div className="w-full max-w-6xl">
        {/* Heading */}
        <h2 className="text-primary text-center font-semibold text-xl">
          Our Plans
        </h2>
        <h1 className="text-white text-center text-4xl font-bold my-6">
          Choose Your Optimal Plan
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white/20 rounded-lg p-8 text-center shadow-md hover:shadow-xl transition flex flex-col justify-between"
            >
              <div className="w-full bg-accent text-white font-bold py-3 rounded-md text-center text-lg mb-8">
                {plan.name}
              </div>

              <div className="flex items-baseline justify-center mb-10">
                <span className="text-4xl font-semibold text-gray-100">₹</span>
                <span className="text-7xl font-bold text-[#f3274c] mx-1">
                  {plan.price}
                </span>
                <span className="text-lg font-bold text-gray-100 uppercase tracking-tighter">
                  / {plan.duration}
                </span>
              </div>

              <div className="flex flex-col gap-5 w-full mb-10">
                {plan.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-gray-100 text-[15px]"
                  >
                    <FaCheck className="text-[#f3274c] text-sm" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className="border border-red-500 text-red-500 py-2 rounded hover:bg-red-500 hover:text-white transition">
                Choose Plan
              </button>
            </div>
          ))}
          {/* Basic */}
        </div>
      </div>
    </div>
  );
}

export default Plan;
