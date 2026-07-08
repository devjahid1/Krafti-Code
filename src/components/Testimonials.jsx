import { testimonials } from "../data/content.js";
import { assets } from "../lib/assets.js";

export default function Testimonials() {
  return (
    <section className="bg-black pb-16 lg:pb-[5.25rem]">
      <div className="site-container">
        <div className="mb-10" data-reveal>
          <p className="font-inclusive text-sm uppercase tracking-[0.11em] text-[#b38ff9]">
            What clients say
          </p>
          <h2 className="mt-3 text-[48px] font-semibold tracking-normal lg:tracking-[-0.04em]">
            Trusted By Brands <span className="text-[#722df7]">That Grow</span>
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <figure
              className="glass-card rounded-[6px] border border-[#101010] bg-[#050409] p-6"
              key={testimonial.name}
              data-reveal
            >
              <figcaption className="mb-4 flex items-center gap-4">
                <img
  src={testimonial.avater}
  alt={testimonial.name}
  className="size-12 shrink-0 rounded-full object-cover"
  loading="lazy"
  decoding="async"
/>
                <div className="min-w-0">
                  <p className="text-[16px] text-white">{testimonial.name}</p>
                  <p className="text-[12px] text-[#d5d5d5]">
                    {testimonial.username}
                  </p>
                </div>
              </figcaption>
              <p className="mb-5 text-[#fbc914]" aria-label="5 out of 5 stars">
                ★★★★★
              </p>
              <blockquote className="text-[15px] leading-8 text-[#999]">
  {testimonial.quote}
</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
