import { lazy, Suspense, useEffect, useState } from "react";
import Cursor from "./components/Cursor";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About";
import ContactModal from "./components/ContactModal.jsx";
import SplashScreen from "./components/SplashScreen.jsx";

import useLenis from "./hooks/useLenis.js";
import useScrollAnimations from "./hooks/useScrollAnimations.js";

// Lazy Loaded Sections
const Services = lazy(() => import("./components/Services.jsx"));
const Stats = lazy(() => import("./components/Stats.jsx"));
const Process = lazy(() => import("./components/Process.jsx"));
const Portfolio = lazy(() => import("./components/Portfolio.jsx"));
const Testimonials = lazy(() => import("./components/Testimonials.jsx"));
const CTA = lazy(() => import("./components/CTA.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));

function SectionLoader() {
  return (
    <div className="flex justify-center items-center py-16">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#722df7] border-t-transparent"></div>
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useLenis();
  useScrollAnimations();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // আগে ছিল 2500ms

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  if (loading) {
    return <SplashScreen onFinish={() => setLoading(false)} />;
  }

  return (
    <>
    <Cursor/>
        <div
      className="
        min-h-screen
        overflow-x-hidden
        bg-black
        text-white
        antialiased
      "
    >
      <Header onContactOpen={() => setIsContactOpen(true)} />

      <main>
        {/* Above the Fold */}
        <Hero onContactOpen={() => setIsContactOpen(true)} />
        <About />

        {/* Lazy Loaded Sections */}
        <Suspense fallback={<SectionLoader />}>
          <Services />
          <Stats />
          <Process />
          <Portfolio />
          <Testimonials />
          <CTA onContactOpen={() => setIsContactOpen(true)} />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
    </>

  );
}