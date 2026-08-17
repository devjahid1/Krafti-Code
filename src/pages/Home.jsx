import { lazy, Suspense, useState } from "react";

import Cursor from "../components/Cursor";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import ContactModal from "../components/ContactModal";

// =====================================================
// Lazy Loaded Sections
// =====================================================

const Services = lazy(() => import("../components/Services"));
const Stats = lazy(() => import("../components/Stats"));
const Process = lazy(() => import("../components/Process"));
const Portfolio = lazy(() => import("../components/Portfolio"));
const Pricing = lazy(() => import("../components/Pricing"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const CTA = lazy(() => import("../components/CTA"));
const Footer = lazy(() => import("../components/Footer"));

// =====================================================
// Section Loader
// =====================================================

function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-16">
      <div
        className="
          h-8
          w-8
          animate-spin
          rounded-full
          border-2
          border-[#722df7]
          border-t-transparent
        "
      />
    </div>
  );
}

// =====================================================
// Home Page
// =====================================================

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      {/* =================================================
          Custom Cursor
      ================================================= */}

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
        {/* =================================================
            Header
        ================================================= */}

        <Header onContactOpen={() => setIsContactOpen(true)} />

        {/* =================================================
            Main Content
        ================================================= */}

        <main>
          {/* =================================================
              Hero Section
          ================================================= */}

          <Hero onContactOpen={() => setIsContactOpen(true)} />

          {/* =================================================
              About Section
          ================================================= */}

          <About />

          {/* =================================================
              Lazy Loaded Sections
          ================================================= */}

          <Suspense fallback={<SectionLoader />}>
            {/* Services */}
            <Services />

            {/* Statistics */}
            <Stats />

            {/* Our Process */}
            <Process />

            {/* Portfolio */}
            <Portfolio />

            {/* Testimonials */}
            <Testimonials />

            {/* Pricing */}
            <Pricing />

            {/* Call To Action */}
            <CTA onContactOpen={() => setIsContactOpen(true)} />
          </Suspense>
        </main>

        {/* =================================================
            Footer
        ================================================= */}

        <Suspense fallback={null}>
          <Footer />
        </Suspense>

        {/* =================================================
            Contact Modal
        ================================================= */}

        <ContactModal
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        />
      </div>
    </>
  );
}
