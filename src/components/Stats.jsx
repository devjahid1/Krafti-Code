import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { stats } from "../data/content.js";

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
  const statsRef = useRef([]);

  useGSAP(() => {
    statsRef.current.forEach((el, index) => {
      if (!el) return;

      const obj = { value: 0 };

      gsap.to(obj, {
        value: stats[index][0],
        duration: 2,
        ease: "power2.out",

        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },

        onUpdate: () => {
          el.textContent = `${Math.floor(obj.value)}+`;
        },
      });
    });
  }, []);

  return (
    <section className="w-full bg-black py-12 lg:py-16">
      <div className="site-container">
        <dl className="grid items-center gap-8 rounded-2xl border border-[#1a1a1a] bg-[#000000] px-8 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:px-16">
{stats.map(([value, label], index) => (
  <div
    key={label}
    data-reveal
    className="flex justify-center"
  >
    <div className="w-[220px]">
      <dt
        ref={(el) => (statsRef.current[index] = el)}
        className="font-inclusive text-[48px] font-semibold leading-none tracking-[-0.04em] text-[#722df7] sm:text-[54px]"
      >
        0+
      </dt>

      <dd className="mt-4 text-[18px] font-medium leading-7 text-white sm:text-[20px]">
        {label}
      </dd>
    </div>
  </div>
))}
        </dl>
      </div>
    </section>
  );
}