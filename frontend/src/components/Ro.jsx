import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

function Ro() {
  useGSAP(() => {
    const isMobile = window.innerWidth < 768;

    gsap.set(".ro-img", {
      scale: isMobile ? 1.2 : 1.2,
      y: 0,
    });

    const brandSplit = SplitText.create(".text-bks", {
      type: "lines",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#ro",
        start: "top top",
        end: isMobile ? "+=500" : "+=1200",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(".ro-img", {
      scale: 1,
      y: isMobile ? -20 : -80,
      ease: "power2.out",
    }).from(
      brandSplit.lines,
      {
        opacity: 0,
        yPercent: 100,
        stagger: 0.08,
        duration: 1,
        ease: "expo.out",
      },
      "-=0.2",
    );
  });

  return (
    <section
      id="ro"
      className="
    relative
    h-screen
    overflow-hidden
    flex
    items-end
    justify-center
    bg-gradient-to-br
    from-blue-900
    via-sky-700
    to-blue-400
    text-white
  "
    >
      {/* Glow */}
      <div className="absolute w-[400px] h-[400px] bg-white/10 blur-3xl rounded-full top-20" />

      {/* Content */}
      <div className="absolute bottom-10 md:-bottom-30 flex flex-col items-center pb-12 md:pb-20">
        <img
          src="/images/ro.png"
          alt="RO"
          className="
        ro-img
        w-52
        md:w-[420px]
        object-contain
      "
        />

        <div className="absolute bottom-8 md:bottom-50 text-center">
          <span className="text-bks text-2xl md:text-4xl font-extrabold tracking-widest">
            BSK Enterprise
          </span>
        </div>
      </div>
    </section>
  );
}

export default Ro;
