import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

function Ro() {
  useGSAP(() => {
    const brandSplit = SplitText.create(".text-bks", {
      type: "lines",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#ro",
        start: "top top",
        end: "+=1000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Image animation
    tl.to(".ro-img", {
      scale: 1,
      y: -120,
      duration: 1,
      ease: "power2.out",
    })

      // Fade quote out smoothly
      .to(
        ".quote",
        {
          opacity: 0,
          y: -50,
          duration: 0.5,
        },
        "<",
      )

      // Text reveal animation
      .from(
        brandSplit.lines,
        {
          opacity: 0,
          yPercent: 100,
          stagger: 0.08,
          duration: 1,
          ease: "expo.out",
        },
        "-=0.3",
      );
  });

  return (
    <section
      id="ro"
      className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden bg-blue-900
      bg-gradient-to-br from-blue-900 via-sky-700 to-blue-400 text-white"
    >
      {/* Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-white/10 blur-3xl rounded-full top-20" />

      {/* Image */}
      <div className="content absolute bottom-10 md:-bottom-30 flex justify-center w-full">
        <img
          src="/images/ro.png"
          alt="RO"
          className="ro-img w-64 md:w-96 object-contain scale-[1.6]"
        />
      </div>

      {/* Brand Name */}
      <div className="absolute bottom-24 md:bottom-50 text-center">
        <span className="text-bks text-2xl md:text-6xl font-extrabold tracking-widest">
          BSK Enterprise
        </span>
      </div>
    </section>
  );
}

export default Ro;
