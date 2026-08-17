import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import SplashScreen from "./components/SplashScreen";
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

// =========================
// Legal / Policies
// =========================

import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CokkiePolicy";
import RefundPolicy from "./pages/RefundPolicy";
import TermsConditions from "./pages/TermsConditions";

export default function App() {
  const [loading, setLoading] = useState(true);

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
    <Routes>

      {/* =================================
          HOME / LANDING PAGE
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
        element={<WebsiteDesign />}
      />

      <Route
        path="/web-development"
        element={<WebDevelopment />}
      />

      <Route
        path="/ui-ux"
        element={<UiUx />}
      />


      {/* =================================
          COMPANY
      ================================= */}

      <Route
        path="/teams"
        element={<Teams />}
      />


      {/* =================================
          LEGAL / POLICY PAGES
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
        element={<Home />}
      />

    </Routes>
  );
}