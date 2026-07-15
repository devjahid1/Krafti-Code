import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import SplashScreen from "./components/SplashScreen";
import useLenis from "./hooks/useLenis";
import useScrollAnimations from "./hooks/useScrollAnimations";

// Pages
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import WebsiteDesign from "./pages/WebsiteDesign";
import WebDevelopment from "./pages/WebDevelopment";
import UiUx from "./pages/UiUx";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CokkiePolicy";
import RefundPolicy from "./pages/RefundPolicy";
import TermsConditions from "./pages/TermsConditions";

export default function App() {
  const [loading, setLoading] = useState(true);

  useLenis();
  useScrollAnimations();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

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
    <Routes>
      {/* Landing Page */}
      <Route path="/" element={<Home />} />

      {/* Services */}
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

      {/* Company */}
      <Route
        path="/teams"
        element={<Teams />}
      />

      {/* Policies */}
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
    </Routes>
  );
}