import Button from './Button.jsx';
import { assets } from '../lib/assets.js';

export default function CTA({ onContactOpen }) {
  return (
    <section id="contact" className="bg-black py-10">
      <div className="site-container">
        <div className="relative overflow-hidden rounded-2xl border border-[#141414] bg-[linear-gradient(183deg,rgba(24,8,59,0.7)_2.84%,rgba(1,1,1,0.7)_95.46%)] px-5 py-8 sm:px-6 sm:py-10 md:px-12">
          <img
            src={assets.ctaObject}
            alt=""
            className="absolute right-[-2.5rem] top-[-9.375rem] hidden w-[45%] min-w-[30rem] rotate-[33deg] opacity-[0.03] md:block"
            loading="lazy"
            decoding="async"
          />
          <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex max-w-[53.125rem] flex-col gap-8 md:flex-row md:items-center" data-reveal>
              <img
                src={assets.footerObject}
                alt=""
                className="w-32 max-w-[45%] object-contain sm:w-40 md:w-[13.3125rem]"
                loading="lazy"
                decoding="async"
              />
              <div>
                <h2 className="max-w-[43.125rem] text-balance text-[clamp(1.75rem,5.5vw,2.25rem)] font-semibold leading-tight tracking-normal lg:tracking-[-0.04em]">
                  Ready to build a website that drives growth?
                </h2>
                <p className="mt-4 max-w-[36.0625rem] text-base leading-8 text-[#b1adad] sm:text-[17px]">
                  We design and develop modern, high-performing websites that help brands stand out, attract
                  customers and scale faster.
                </p>
              </div>
            </div>
            <Button className="self-start lg:self-end" onClick={onContactOpen}>
              Lets Build Your Website
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
