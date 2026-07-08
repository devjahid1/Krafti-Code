import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { navItems } from '../data/content.js';
import { assets } from '../lib/assets.js';
import Button from './Button.jsx';
import useActiveSection from '../hooks/useActiveSection.js';

export default function Header({ onContactOpen }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection();
  const menuRef = useRef(null);

  const handleNavClick = (event, href) => {
    event.preventDefault();
    setIsMenuOpen(false);
    window.dispatchEvent(new CustomEvent('lenis-scroll-to', { detail: href }));
  };

  useGSAP(
    () => {
      if (!menuRef.current) return;

      if (isMenuOpen) {
        gsap.set(menuRef.current, { display: 'block' });
        gsap.fromTo(
          menuRef.current,
          { autoAlpha: 0, y: -12 },
          { autoAlpha: 1, y: 0, duration: 0.28, ease: 'power2.out' },
        );
      } else {
        gsap.to(menuRef.current, {
          autoAlpha: 0,
          y: -10,
          duration: 0.18,
          ease: 'power2.in',
          onComplete: () => gsap.set(menuRef.current, { display: 'none' }),
        });
      }
    },
    { dependencies: [isMenuOpen], scope: menuRef },
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.03] backdrop-blur-sm">
      <nav
        className="site-container flex min-h-20 items-center justify-between py-3 lg:min-h-24"
        aria-label="Primary navigation"
      >
        <a
          className="block w-[clamp(4rem,7vw,5.8125rem)]"
          href="#home"
          onClick={(event) => handleNavClick(event, '#home')}
          aria-label="Krafti Code home"
        >
          <img src={assets.logo} alt="Krafti Code" className="h-auto w-full" width="93" height="87" />
        </a>
        <div className="hidden items-center gap-8 text-base tracking-normal xl:gap-[3.375rem] lg:flex">
          {navItems.map(([item, href]) => {
            const isActive = activeSection === href.replace('#', '');
            return (
              <a
                key={item}
                href={href}
                onClick={(event) => handleNavClick(event, href)}
                className={`relative transition hover:text-[#d0bbf0] ${isActive ? 'text-[#d0bbf0]' : 'text-white'}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item}
                {isActive && <span className="absolute -bottom-3 left-0 h-px w-10 bg-[#d0bbf0]" />}
              </a>
            );
          })}
        </div>
<div className="hidden lg:block">
  <Button
    variant="secondary"
    className="rounded-[30px] px-6"
    onClick={onContactOpen}
  >
    Lets Talk
  </Button>
</div>
        <button
          type="button"
          className="relative grid size-11 place-items-center rounded-full border border-[#6318b3] text-white lg:hidden"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          <span className="flex w-5 flex-col gap-1.5">
            <span className={`h-px bg-white transition ${isMenuOpen ? 'translate-y-[0.4375rem] rotate-45' : ''}`} />
            <span className={`h-px bg-white transition ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-px bg-white transition ${isMenuOpen ? '-translate-y-[0.4375rem] -rotate-45' : ''}`} />
          </span>
        </button>
      </nav>
      <div ref={menuRef} className="hidden lg:hidden">
        <div className="mx-4 mb-4 rounded-2xl border border-white/10 bg-[#07040d] p-4 shadow-[0_18px_80px_rgba(0,0,0,0.45)] sm:mx-8">
          <div className="grid gap-2">
            {navItems.map(([item, href]) => {
              const isActive = activeSection === href.replace('#', '');
              return (
                <a
                  key={item}
                  href={href}
                  onClick={(event) => handleNavClick(event, href)}
                  className={`rounded-lg px-4 py-3 text-sm transition hover:bg-white/5 ${
                    isActive ? 'bg-[#6418fd]/16 text-[#d0bbf0]' : 'text-white'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item}
                </a>
              );
            })}
          </div>
          <Button
            variant="primary"
            className="mt-4 w-full"
            onClick={() => {
              setIsMenuOpen(false);
              onContactOpen();
            }}
          >
            Lets Talk
          </Button>
        </div>
      </div>
    </header>
  );
}
