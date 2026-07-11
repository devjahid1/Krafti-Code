import Button from "./Button.jsx";
import { assets } from "../lib/assets.js";

export default function HeroTop({ onContactOpen }) {
  const scrollPortfolio = (event) => {
    event.preventDefault();

    window.dispatchEvent(
      new CustomEvent("lenis-scroll-to", {
        detail: "#portfolio",
      })
    );
  };

  return (
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

          <a
            href="#portfolio"
            onClick={scrollPortfolio}
            className="inline-flex items-center gap-3 text-[15px] tracking-[-0.02em] text-white transition hover:text-[#d0bbf0]"
          >
            <span className="grid h-12 w-12 place-items-center rounded-full border border-[#aca4c8]">
              ▶
            </span>

            <span>View Our Work</span>
          </a>
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
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r  to-transparent" />

            {/* Right Fade */}
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l to-transparent" />

            <div className="marquee">
              <div className="marquee-track">

                {[...assets.brands, ...assets.brands].map((brand, index) => (
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
                ))}

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}