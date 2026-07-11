import { assets } from "../lib/assets.js";
import LightRays from "./LightRays";
import HeroTop from "./HeroTop";
import HeroFloatingCards from "./HeroFloatingCards";
import "./Hero.css";

export default function Hero({ onContactOpen }) {
  return (
    <section
      id="home"
      aria-label="Hero Section"
      className="relative isolate overflow-hidden pt-28 sm:pt-36 lg:min-h-screen"
    >
      {/* Background Effect */}
      <LightRays
        raysColor="#777a88"
        raysSpeed={1.2}
        lightSpread={1.2}
        rayLength={70.2}
        fadeDistance={2}
        saturation={1}
        followMouse={false}
        mouseInfluence={0.05}
        noiseAmount={0.1}
        distortion={0.05}
      />

      {/* Hero Background */}
<img
  src={assets.heroBg}
  alt=""
  aria-hidden="true"
  width={1920}
  height={1080}
  fetchPriority="high"
  loading="eager"
  decoding="async"
className="
hero-bg
hidden
lg:block
absolute
left-1/2
top-8
-translate-x-1/2
w-full
max-w-[1920px]
object-cover
opacity-90
pointer-events-none
select-none
will-change-transform
"
/>

      {/* Purple Glow */}
      <div className="absolute left-1/2 top-[35%] -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-[#722df7]/20 blur-[160px]" />

      {/* Floating Cards */}
      <HeroFloatingCards />

      {/* Hero Content */}
      <HeroTop onContactOpen={onContactOpen} />
    </section>
  );
}
