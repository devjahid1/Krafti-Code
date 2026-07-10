import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

import "./styles.css";
import "./cursor.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { ReactLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

ScrollTrigger.config({
  ignoreMobileResize: true,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReactLenis
      root
      options={{
        duration: 1.8,
        lerp: 0.07,
        smoothWheel: true,
        wheelMultiplier: 0.85,
        touchMultiplier: 1.2,
        syncTouch: true,
        syncTouchLerp: 0.08,
        autoResize: true,
        infinite: false,
      }}
    >
      <App />
    </ReactLenis>
  </StrictMode>
);