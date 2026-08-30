import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import SplashScreen from "./components/SplashScreen";
import ContactModal from "./components/ContactModal";
import ScrollToTop from "./components/ScrollToTop";
import PageSeo from "./seo";

import useLenis from "./hooks/useLenis";
import useScrollAnimations from "./hooks/useScrollAnimations";

// =========================
// Pages
// =========================

import Home from "./pages/Home";
import Teams from "./pages/Teams";

import WebsiteDesign from "./pages/WebsiteDesign";
import WebDevelopment from "./pages/WebDevelopment";
import UiUx from "./pages/UiUx";
import Responsive from "./pages/Responsive";
import Seo from "./pages/Seo";
import Careers from "./pages/Careers";

// =========================
// Legal / Policies
// =========================

import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CokkiePolicy";
import RefundPolicy from "./pages/RefundPolicy";
import TermsConditions from "./pages/TermsConditions";
import NotFound from "./pages/NotFound";

export default function App() {
  const [loading, setLoading] = useState(true);

  // =========================
  // Contact Modal
  // =========================

  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContactModal = () => {
    setIsContactOpen(true);
  };

  const closeContactModal = () => {
    setIsContactOpen(false);
  };

  // =========================
  // Smooth Scroll
  // =========================

  useLenis();

  // =========================
  // Scroll Animations
  // =========================

  useScrollAnimations();

  // =========================
  // Splash Screen Timer
  // =========================

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // =========================
  // Prevent Scroll While Loading
  // =========================

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  // =========================
  // Splash Screen
  // =========================

  if (loading) {
    return (
      <SplashScreen
        onFinish={() => setLoading(false)}
      />
    );
  }

  // =========================
  // Routes
  // =========================

  return (
    <>
      <PageSeo />
      {/* =================================
          RESET SCROLL ON ROUTE CHANGE
      ================================= */}

      <ScrollToTop />

      <Routes>

        {/* =================================
            HOME
        ================================= */}

        <Route
          path="/"
          element={<Home />}
        />

        {/* =================================
            SERVICES
        ================================= */}

        <Route
          path="/website-design"
          element={
            <WebsiteDesign
              onContactOpen={openContactModal}
            />
          }
        />

        <Route
          path="/web-development"
          element={
            <WebDevelopment
              onContactOpen={openContactModal}
            />
          }
        />

        <Route
          path="/ui-ux"
          element={
            <UiUx
              onContactOpen={openContactModal}
            />
          }
        />

        <Route
          path="/responsive"
          element={
            <Responsive
              onContactOpen={openContactModal}
            />
          }
        />

        <Route
          path="/seo"
          element={
            <Seo
              onContactOpen={openContactModal}
            />
          }
        />

        {/* =================================
            COMPANY
        ================================= */}

        <Route
          path="/teams"
          element={<Teams />}
        />

        <Route
          path="/careers"
          element={<Careers />}
        />

        {/* =================================
            LEGAL / POLICIES
        ================================= */}

        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />

        <Route
          path="/cookie-policy"
          element={<CookiePolicy />}
        />

        <Route
          path="/refund-policy"
          element={<RefundPolicy />}
        />

        <Route
          path="/terms-conditions"
          element={<TermsConditions />}
        />

        {/* =================================
            404 FALLBACK
        ================================= */}

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

      {/* =================================
          GLOBAL CONTACT MODAL
      ================================= */}

      <ContactModal
        isOpen={isContactOpen}
        onClose={closeContactModal}
      />
    </>
  );
}
