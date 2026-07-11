import "./HeroFloatingCards.css";

import avatar1 from "../assets/avatar1.webp";
import avatar2 from "../assets/avatar2.webp";
import avatar3 from "../assets/avatar3.webp";

export default function HeroFloatingCards() {
  return (
    <div className="absolute inset-0 hidden lg:block pointer-events-none">

      {/* 50+ Projects */}
      <div className="hero-projects absolute z-20">
        <img
          src={avatar1}
          alt="50+ Projects"
          width={254}
          height={67}
          loading="eager"
          decoding="async"
          className="w-[170px] xl:w-[185px] 2xl:w-[200px] h-auto select-none"
        />
      </div>

      {/* 5+ Experience */}
      <div className="hero-experience absolute z-20">
        <div
          className="
            flex
            h-[105px]
            w-[105px]
            xl:h-[110px]
            xl:w-[110px]
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-black/20
            backdrop-blur-xl
          "
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">
              5+
            </h2>

            <p className="mt-1 text-xs leading-4 text-gray-300">
              Years of
              <br />
              Experience
            </p>
          </div>
        </div>
      </div>

      {/* Clean Code */}
      <div className="hero-clean absolute z-20">
        <img
          src={avatar2}
          alt="Clean Code"
          loading="eager"
          decoding="async"
          className="w-[150px] xl:w-[165px] 2xl:w-[180px] h-auto select-none"
        />
      </div>

      {/* Fast Website */}
      <div className="hero-fast absolute z-20">
        <img
          src={avatar3}
          alt="Fast Website"
          loading="eager"
          decoding="async"
          className="w-[150px] xl:w-[165px] 2xl:w-[180px] h-auto select-none"
        />
      </div>

    </div>
  );
}