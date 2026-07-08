import { useEffect, useState } from "react";

import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Stats from "./components/Stats.jsx";
import Process from "./components/Process.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Testimonials from "./components/Testimonials.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";
import ContactModal from "./components/ContactModal.jsx";
import SplashScreen from "./components/SplashScreen.jsx";

import useLenis from "./hooks/useLenis.js";
import useScrollAnimations from "./hooks/useScrollAnimations.js";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useLenis();
  useScrollAnimations();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
  document.body.style.overflow = loading ? "hidden" : "";

  return () => {
    document.body.style.overflow = "";
  };
}, [loading]);

if (loading) {
  return (
    <SplashScreen
      onFinish={() => setLoading(false)}
    />
  );
}


  return (
    <div
  className="
  min-h-screen
  overflow-x-clip
  bg-black
  text-white
  antialiased
  animate-[fadeIn_.8s_ease]
"
>
      <Header onContactOpen={() => setIsContactOpen(true)} />

      <main>
        <Hero onContactOpen={() => setIsContactOpen(true)} />
        <Services />
        <Stats />
        <Process />
        <Portfolio />
        <Testimonials />
        <CTA onContactOpen={() => setIsContactOpen(true)} />
      </main>

      <Footer />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}