import Button from './Button.jsx';
import { assets } from '../lib/assets.js';
import avatar1 from '../assets/avater1.png'
import avatar2 from '../assets/avater2.png'
import avatar3 from '../assets/avater3.png'
import avatar4 from '../assets/avater4.png'
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LightRays from "./LightRays";

 gsap.registerPlugin(ScrollTrigger);



export default function Hero({ onContactOpen }) {

  const avatarRef = useRef(null);
  const cleanCodeRef = useRef(null);
const fastWebsiteRef = useRef(null);

useGSAP(() => {
  gsap.to(avatarRef.current, {
    y: 80,
    ease: "none",
    scrollTrigger: {
      trigger: "#home",
      start: "left left",
      end: "right left",
      scrub: true,
    },
  });
});


useGSAP(() => {

  gsap.to(cleanCodeRef.current,{
    x:-18,
    y:-8,
    rotation:-2,
    duration:2.8,
    repeat:-1,
    yoyo:true,
    ease:"sine.inOut"
  });

  gsap.to(fastWebsiteRef.current,{
    x:18,
    y:8,
    rotation:2,
    duration:3.2,
    repeat:-1,
    yoyo:true,
    ease:"sine.inOut"
  });

});

  return (
<section
  id="home"
  className="
    relative
    overflow-hidden
    pt-30
    sm:pt-40
    lg:min-h-[900px]
    lg:pt-[10.4375rem]
  "
>
        <LightRays
    raysColor="#777a88"
    raysSpeed={1.2}
    lightSpread={1.35}
    rayLength={70.2}
    fadeDistance={2}
    saturation={1}
    followMouse={true}
    mouseInfluence={0.05}
    noiseAmount={0.10}
    distortion={0.05}
  />
<img
  src={assets.heroBg}
  alt=""
  className="
    absolute
    inset-x-0
    top-[12rem]
    left-[53rem]
    mx-auto
    w-full
    max-w-[700px]
    h-[750px]
    object-cover
    opacity-80
  "
/>




    {/* Floating Hero Cards */}
<div className="absolute inset-0 hidden lg:block pointer-events-none">

  {/* Projects Delivered */}
  <div className="absolute top-45 right-70 z-20">
    <div>


      <div>
        <img ref={avatarRef} src={avatar1} alt="" />
      </div>
    </div>
  </div>

  {/* Experience */}
  <div className="absolute top-45 left-330 z-20">
    <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full border border-white/10 bg-[#0d0d14]/10 backdrop-blur-xl shadow-xl">
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
  <div ref={cleanCodeRef} className="absolute top-[22rem] right-[35rem] z-20">
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0d0d14]/20 px-6 py-4 backdrop-blur-xl shadow-xl">
      <span className="text-2xl text-[#b38ff9]">
        &lt;/&gt;
      </span>

      <span className="text-white">
        Clean Code
      </span>
    </div>
  </div>

  {/* Fast Website */}
  <div ref={fastWebsiteRef} className="absolute bottom-60 right-[32rem] z-20">
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0d0d14]/20 px-6 py-4 backdrop-blur-xl shadow-xl">
      <span className="text-2xl text-[#b38ff9]">
        ⚡
      </span>

      <span className="text-white">
        Fast Website
      </span>
    </div>
  </div>

</div>

      <div className="absolute inset-x-0 top-1/2 h-[22rem] bg-[radial-gradient(circle_at_70%_60%,rgba(114,45,247,0.24),transparent_34%)]" />
      <div className="site-container relative z-10 grid pb-20 lg:pb-0">
        <div className="max-w-[52.5rem]" data-reveal>
          <p className="font-inclusive text-sm uppercase tracking-[0.11em] text-white">
            Design. Develop. <span className="text-[#b38ff9]">Grow</span>.
          </p>
          <h1 className="mt-6 max-w-[52.375rem] text-balance text-[56px] font-bold leading-[1.14] tracking-normal text-white sm:mt-7 lg:tracking-[-0.04em]">
            We Create Websites That Drive{' '}
            <em className="font-bold italic text-[#722df7]">Real Growth</em>
          </h1>
          <p className="mt-7 max-w-[29.1875rem] text-base leading-7 text-[#b1adad] sm:mt-10 sm:text-[17px]">
            We design and develop modern, high-performing websites that help brands stand out, attract customers
            and scale faster.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5 sm:mt-[3.25rem] sm:gap-10 lg:gap-[3.0625rem]">
            <Button onClick={onContactOpen}>Lets Build Your Website</Button>
            <a
              href="#portfolio"
              onClick={(event) => {
                event.preventDefault();
                window.dispatchEvent(new CustomEvent('lenis-scroll-to', { detail: '#portfolio' }));
              }}
              className="inline-flex items-center gap-3 text-[15px] tracking-[-0.02em] text-white transition hover:text-[#d0bbf0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b38ff9]"
            >
              <span className="grid size-12 place-items-center rounded-full border border-[#aca4c8] sm:size-[3.3125rem]">▶</span>
              <span>View Our Work</span>
            </a>
          </div>
        </div>

<div
  id="about"
  className="mt-56 mb-4 max-w-[52rem]  scroll-mt-28 sm:mt-24 lg:mt-25.25"
  data-reveal
>
  <p className="text-[17px] font-medium leading-7 text-white">
    Trusted by ambitious brands
  </p>

  <div className="mt-8 w-[39px] h-[39px] flex flex-wrap items-center justify-start gap-8 lg:flex-nowrap lg:justify-between opacity-80 grayscale">
    {assets.brands.map((brand, index) => (
      <img
        key={index}
        src={brand}
        alt={`Brand ${index + 1}`}
        className="h-12 w-auto flex-shrink-0 transition duration-300 hover:grayscale-0 hover:opacity-100"
        loading="lazy"
        decoding="async"
      />
    ))}
  </div>
</div>


      </div>
    </section>
  );
}