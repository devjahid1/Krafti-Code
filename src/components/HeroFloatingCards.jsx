import avatar1 from "../assets/avater1.webp";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroFloatingCards() {
  const avatarRef = useRef(null);
  const cleanCodeRef = useRef(null);
  const fastWebsiteRef = useRef(null);

  useGSAP(() => {
    gsap.to(avatarRef.current, {
      y: 80,
      ease: "none",
      scrollTrigger: {
        trigger: "#home",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.to(cleanCodeRef.current, {
      x: -18,
      y: -8,
      rotation: -2,
      duration: 2.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(fastWebsiteRef.current, {
      x: 18,
      y: 8,
      rotation: 2,
      duration: 3.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div className="absolute inset-0 hidden lg:block pointer-events-none">
      {/* Avatar */}
      <div className="absolute top-45 right-70 z-20">
        <img
          ref={avatarRef}
          src={avatar1}
          alt="Happy client"
          width={254}
          height={67}
          loading="eager"
          decoding="async"
          className="select-none"
        />
      </div>

      {/* Experience */}
      <div className="absolute top-45 left-330 z-20">
        <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full border border-white/10 bg-[#0d0d14]/20 backdrop-blur-xl shadow-xl">
          <h2 className="text-3xl font-bold text-white">
            5+
          </h2>

          <p className="mt-1 text-center text-xs leading-4 text-gray-400">
            Years of
            <br />
            Experience
          </p>
        </div>
      </div>

      {/* Clean Code */}
      <div
        ref={cleanCodeRef}
        className="absolute top-[22rem] right-[35rem] z-20"
      >
        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0d0d14]/30 px-6 py-4 backdrop-blur-xl shadow-xl">
          <span className="text-2xl text-[#b38ff9]">
            &lt;/&gt;
          </span>

          <span className="text-white">
            Clean Code
          </span>
        </div>
      </div>

      {/* Fast Website */}
      <div
        ref={fastWebsiteRef}
        className="absolute bottom-60 right-[32rem] z-20"
      >
        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0d0d14]/30 px-6 py-4 backdrop-blur-xl shadow-xl">
          <span className="text-2xl text-[#b38ff9]">
            ⚡
          </span>

          <span className="text-white">
            Fast Website
          </span>
        </div>
      </div>
    </div>
  );
}