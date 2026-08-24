import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Native browser scroll
    window.scrollTo(0, 0);

    // Lenis scroll reset
    window.dispatchEvent(
      new CustomEvent("lenis-scroll-to", {
        detail: 0,
      })
    );
  }, [pathname]);

  return null;
}