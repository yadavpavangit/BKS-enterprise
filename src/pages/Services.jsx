import React from "react";
import Banner from "../components/Banner";
import { servicePoints } from "../constans";
import { FaCheck } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Plan from "../components/Plan";

function Services() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#services",
        start: "top center",
      },
    });
    tl.fromTo(
      "#services",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.3,
      },
    )
      .fromTo(
        "#service-img",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.3,
        },
      )
      .fromTo(
        "#service-content",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.3,
        },
      );
  });

  return (
    <section className="min-h-dvh">
      <Banner title={"Services"} />
      <div id="services" className="max-w-8xl px-6 md:px-10 py-10">
        <h2 className="text-xl md:text-2xl text-red-600 text-center font-semibold font-source">
          Our Services
        </h2>

        <div className="w-full flex flex-col items-center md:items-start md:flex-row gap-10 mt-10">
          {/* IMAGE */}
          <div id="service-img" className="w-full flex justify-center md:w-1/2">
            <img src="/images/service-ro.jpg" alt="" className="rounded-xl" />
          </div>
          {/* CONTENT */}
          <div
            id="service-content"
            className="w-full md:w-1/2 flex flex-col items-center gap-6 justify-start"
          >
            <h2 className="text-start font-brand text-4xl md:text-5xl font-bold">
              Our Work Process Make Your Dream True
            </h2>
            <p className="indent-3 text-start text-[12px] md:text-[14px] text-gray-400 font-poppins">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
              aut, unde consectetur commodi voluptatibus qui at. In, numquam
              delectus vero quidem minima nam distinctio enim dignissimos
              placeat tempora, provident sint.
            </p>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 mt-6">
              {servicePoints.map((point) => (
                <div
                  key={point.id}
                  className="flex items-center gap-4 hover:translate-x-1 transition duration-200"
                >
                  <div className="w-8 h-7 flex items-center justify-center rounded-full border border-gray-300">
                    <FaCheck className="text-red-500 text-sm" />
                  </div>

                  <h1 className="text-sm font-semibold text-gray-100">
                    {point.name}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PLANS */}
        <Plan />
      </div>
    </section>
  );
}

export default Services;
