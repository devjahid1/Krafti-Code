import { assets } from '../lib/assets.js';
import LightRays from "./LightRays";
import HeroTop from "./HeroTop";
import HeroFloatingCards from "./HeroFloatingCards";





export default function Hero({ onContactOpen }) {

  return (
<section
  id="home"
  aria-label="Hero Section"
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
    followMouse={false}
    mouseInfluence={0.05}
    noiseAmount={0.10}
    distortion={0.05}
  />
<img
  src={assets.heroBg}
  alt="brand logo background"
  width={700}
  height={750}
  fetchPriority="high"
  loading="eager"
  decoding="async"
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
    select-none
    will-change-transform
    [transform-style:preserve-3d]
  "
/>



    {/* Floating Hero Cards */}
      <HeroFloatingCards />

      <div className="absolute inset-x-0 top-1/2 h-[22rem] bg-[radial-gradient(circle_at_70%_60%,rgba(114,45,247,0.24),transparent_34%)]" />
<HeroTop onContactOpen={onContactOpen} />
    </section>
  );
}