import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function useScrollAnimations() {
  useGSAP(() => {
    gsap.set('[data-reveal]', { autoAlpha: 0, y: 34 });
    gsap.utils.toArray('[data-reveal]').forEach((element) => {
      gsap.to(element, {
        autoAlpha: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 84%',
        },
      });
    });

    gsap.to('[data-hero-glow]', {
      y: -18,
      scale: 1.015,
      duration: 3.8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }, []);
}
