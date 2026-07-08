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
        },

        onUpdate: () => {
          el.textContent = Math.floor(obj.value) + "+";
        },
      });
    });
  });

  return (
    <section className="bg-black py-10">
      <div className="site-container">
        <dl className="grid gap-8 rounded-md border border-[#111] bg-[#050409] px-6 py-9 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-[6.2%]">
          {stats.map(([value, label], index) => (
            <div key={label} data-reveal>
<dt
  ref={(el) => (statsRef.current[index] = el)}
  className="font-inclusive text-[54px] font-semibold leading-7 tracking-[-0.04em] text-[#722df7]"
>
  0+
</dt>

              <dd className="mt-3 text-[20px] text-white">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}