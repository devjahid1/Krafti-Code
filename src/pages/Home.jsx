import { lazy, Suspense, useState } from "react";

import Cursor from "../components/Cursor";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";

import ContactModal from "../components/ContactModal";
import PricingModal from "../components/PricingModal";
import ScheduleModal from "../components/ScheduleModal";
import ThankYouModal from "../components/ThankYouModal";

// =====================================================
// Pricing - Direct Import
// =====================================================

import Pricing from "../components/Pricing";

// =====================================================
// Lazy Loaded Sections
// =====================================================

const Services = lazy(() => import("../components/Services"));
const Stats = lazy(() => import("../components/Stats"));
const Process = lazy(() => import("../components/Process"));
const Portfolio = lazy(() => import("../components/Portfolio"));
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
  // =====================================================
  // Contact Modal
  // =====================================================

  const [isContactOpen, setIsContactOpen] = useState(false);

  // =====================================================
  // Pricing Modal
  // =====================================================

  const [isPricingOpen, setIsPricingOpen] = useState(false);

  const [selectedPackage, setSelectedPackage] = useState("");

  // =====================================================
  // Schedule Modal
  // =====================================================

  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  // =====================================================
  // Thank You Modal
  // =====================================================

  const [showThankYou, setShowThankYou] = useState(false);

  // =====================================================
  // Contact Open
  // =====================================================

  const handleContactOpen = () => {
    setIsContactOpen(true);
  };

  // =====================================================
  // Contact Close
  // =====================================================

  const handleContactClose = () => {
    setIsContactOpen(false);
  };

  // =====================================================
  // Package Select
  // =====================================================

  const handlePackageSelect = (packageName) => {
    setSelectedPackage(packageName);
    setIsPricingOpen(true);
  };

  // =====================================================
  // Pricing Close
  // =====================================================

  const handlePricingClose = () => {
    setIsPricingOpen(false);
    setSelectedPackage("");
  };

  // =====================================================
  // Pricing Success
  // =====================================================

  const handlePricingSuccess = () => {
    setIsPricingOpen(false);
    setSelectedPackage("");
    setShowThankYou(true);
  };

  // =====================================================
  // Schedule Open
  // =====================================================

  const handleScheduleOpen = () => {
    setIsScheduleOpen(true);
  };

  // =====================================================
  // Schedule Close
  // =====================================================

  const handleScheduleClose = () => {
    setIsScheduleOpen(false);
  };

  // =====================================================
  // Schedule Success
  // =====================================================

  const handleScheduleSuccess = () => {
    setIsScheduleOpen(false);
    setShowThankYou(true);
  };

  // =====================================================
  // Thank You Close
  // =====================================================

  const handleThankYouClose = () => {
    setShowThankYou(false);
  };

  // =====================================================
  // Render
  // =====================================================

  return (
    <>
      {/* Custom Cursor */}

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

        <Header
          onContactOpen={handleContactOpen}
        />

        {/* =================================================
            Main
        ================================================= */}

        <main>
          {/* Hero */}

          <Hero
            onContactOpen={handleContactOpen}
          />

          {/* About */}

          <About />

          {/* =================================================
              Services / Stats / Process / Portfolio
          ================================================= */}

          <Suspense fallback={<SectionLoader />}>
            <Services />

            <Stats />

            <Process />

            <Portfolio />
          </Suspense>

          {/* =================================================
              Pricing
          ================================================= */}

          <Pricing
            onPackageSelect={handlePackageSelect}
            onScheduleSelect={handleScheduleOpen}
          />

          {/* =================================================
              Testimonials / CTA
          ================================================= */}

          <Suspense fallback={<SectionLoader />}>
            <Testimonials />

            <CTA
              onContactOpen={handleContactOpen}
            />
          </Suspense>
        </main>

        {/* =================================================
            Footer
        ================================================= */}

        <Suspense fallback={null}>
          <Footer />
        </Suspense>

        {/* =================================================
            Existing Contact Modal
        ================================================= */}

        <ContactModal
          isOpen={isContactOpen}
          onClose={handleContactClose}
        />

        {/* =================================================
            Pricing Modal
        ================================================= */}

        <PricingModal
          isOpen={isPricingOpen}
          packageName={selectedPackage}
          onClose={handlePricingClose}
          onSuccess={handlePricingSuccess}
        />

        {/* =================================================
            Schedule Modal
        ================================================= */}

        <ScheduleModal
          isOpen={isScheduleOpen}
          onClose={handleScheduleClose}
          onSuccess={handleScheduleSuccess}
        />

        {/* =================================================
            Thank You Modal
        ================================================= */}

        <ThankYouModal
          isOpen={showThankYou}
          onClose={handleThankYouClose}
        />
      </div>
    </>
  );
}