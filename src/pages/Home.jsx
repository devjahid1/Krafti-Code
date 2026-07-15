import { lazy, Suspense, useState } from "react";

import Cursor from "../components/Cursor";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import ContactModal from "../components/ContactModal";

// Lazy Loaded Sections
const Services = lazy(() => import("../components/Services"));
const Stats = lazy(() => import("../components/Stats"));
const Process = lazy(() => import("../components/Process"));
const Portfolio = lazy(() => import("../components/Portfolio"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const CTA = lazy(() => import("../components/CTA"));
const Footer = lazy(() => import("../components/Footer"));

function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#722df7] border-t-transparent"></div>
    </div>
  );
}

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <Cursor />

      <div
        className="
          min-h-screen
          overflow-x-hidden
          bg-black
          text-white
          antialiased
        "
      >
        <Header
          onContactOpen={() => setIsContactOpen(true)}
        />

        <main>
          {/* Hero */}
          <Hero
            onContactOpen={() => setIsContactOpen(true)}
          />

          {/* About */}
          <About />

          {/* Lazy Loaded Sections */}
          <Suspense fallback={<SectionLoader />}>
            <Services />

            <Stats />

            <Process />

            <Portfolio />

            <Testimonials />

            <CTA
              onContactOpen={() => setIsContactOpen(true)}
            />
          </Suspense>
        </main>

        {/* Footer */}
        <Suspense fallback={null}>
          <Footer />
        </Suspense>

        {/* Contact Modal */}
        <ContactModal
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        />
      </div>
    </>
  );
}