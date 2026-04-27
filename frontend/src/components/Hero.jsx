import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { SplitText } from "gsap/all";
import { useNavigate } from "react-router-dom";

function Hero() {
  const container = useRef();
  const navigate = useNavigate();

  useGSAP(
    () => {
      const titleSplite = new SplitText(".hero-title", {
        type: "chars, words",
      });
      const tl = gsap.timeline();
      tl.from(titleSplite.chars, {
        yPercent: 100,
        duration: 1.8,
        ease: "expo.out",
        stagger: 0.06,
      })

        .from(
          ".hero-sub",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5",
        )
        .from(
          ".hero-btn",
          {
            opacity: 0,
            scale: 0.8,
            duration: 0.5,
            stagger: 0.2,
          },
          "-=0.4",
        );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="bg-dark text-muted min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-primary/20 blur-3xl rounded-full top-20" />

      {/* Main Brand */}
      <h1 className="hero-title text-5xl md:text-7xl font-brand text-primary tracking-widest">
        BKS
      </h1>

      {/* Subtitle */}
      <h2 className="hero-sub text-2xl md:text-4xl font-poppins mt-2">
        Enterprise
      </h2>

      {/* Tagline */}
      <p className="hero-sub text-muted mt-4 max-w-xl">
        Delivering Pure Water Solutions with Advanced RO Technology 💧
      </p>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">
        <button
          className="hero-btn explore"
          onClick={() => navigate("/products")}
        >
          Explore Products
        </button>

        <button
          className="hero-btn contact"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </button>
      </div>

      {/* Bottom Water Text */}
      <div className="absolute bottom-10 text-muted text-sm">
        Clean Water • Healthy Life
      </div>
    </section>
  );
}

export default Hero;
