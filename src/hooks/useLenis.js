import { useEffect } from 'react';
import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.4,
    });

    let frameId = 0;
    const raf = (time) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    lenis.on('scroll', ScrollTrigger.update);
    const handleScrollTo = (event) => {
      lenis.scrollTo(event.detail, {
        offset: -92,
        duration: 1.1,
      });
    };

    window.addEventListener('lenis-scroll-to', handleScrollTo);
    frameId = requestAnimationFrame(raf);

    return () => {
      window.removeEventListener('lenis-scroll-to', handleScrollTo);
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);
}
