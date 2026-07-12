import { useState, useEffect } from "react";
import Button from "./Button.jsx";
import { assets } from "../lib/assets.js";
import showreel from "../assets/showreel.mp4";

export default function HeroTop({ onContactOpen }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Lock body scroll + ESC close
  useEffect(() => {
    document.body.style.overflow = isVideoOpen ? "hidden" : "";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsVideoOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVideoOpen]);

  return (
    <>
      <div className="site-container relative z-10 pb-20 lg:pb-0 mt-[116px]">
        <div className="max-w-[691px]" data-reveal>

          {/* Eyebrow */}
          <p className="font-inclusive text-sm uppercase tracking-[0.11em] text-white">
            Design. Develop. <span className="text-[#b38ff9]">Grow</span>.
          </p>

          {/* Heading */}
          <h1 className="mt-6 text-balance text-[42px] font-bold leading-tight text-white sm:text-[52px] lg:text-[56px] lg:leading-[1.14] lg:tracking-[-0.04em]">
            We Create Websites That Drive{" "}
            <em className="font-bold italic text-[#722df7]">
              Real Growth
            </em>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-[467px] text-[16px] leading-7 text-[#b1adad] sm:text-[17px]">
            We design and develop modern, high-performing websites that help
            brands stand out, attract customers and scale faster.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <Button onClick={onContactOpen}>
              Lets Build Your Website
            </Button>

            <button
              type="button"
              onClick={() => setIsVideoOpen(true)}
              className="inline-flex items-center gap-3 text-[15px] tracking-[-0.02em] text-white transition hover:text-[#d0bbf0]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full border border-[#aca4c8] transition-all duration-300 hover:border-[#722df7] hover:bg-[#722df7]/10">
                ▶
              </span>

              <span>View Our Work</span>
            </button>
          </div>

          {/* Trusted Brands */}
          <div
            className="mt-24 pb-10 w-full max-w-[691px] overflow-hidden"
            data-reveal
          >
            <p className="mb-8 text-[17px] font-medium text-white">
              Trusted by ambitious brands
            </p>

            <div className="relative overflow-hidden">

              {/* Left Fade */}
              <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16" />

              {/* Right Fade */}
              <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16" />

              <div className="marquee">
                <div className="marquee-track">

                                    {[...assets.brands, ...assets.brands].map(
                    (brand, index) => (
                      <div
                        key={index}
                        className="marquee-item flex items-center justify-center"
                      >
                        <img
                          src={brand}
                          alt={`Brand ${index + 1}`}
                          width={80}
                          height={42}
                          loading="lazy"
                          decoding="async"
                          className="h-10 w-auto opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                        />
                      </div>
                    )
                  )}

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Video Popup */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/10 backdrop-blur-sm"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-[50%] max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-[#050505] shadow-[0_30px_100px_rgba(0,0,0,.75)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsVideoOpen(false)}
              className="
                absolute
                right-5
                top-5
                z-20
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-xl
                text-white
                transition-all
                duration-300
                hover:bg-[#722df7]
                hover:rotate-90
                hover:scale-110
              "
            >
              ✕
            </button>

            {/* Local Video */}
            <video
              src={showreel}
              autoPlay
              controls
              playsInline
              preload="metadata"
              controlsList="nodownload"
              className="aspect-video w-full"
            />
          </div>
        </div>
      )}

          </>
  );
}