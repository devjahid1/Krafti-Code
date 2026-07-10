import { testimonials } from "../data/content.js";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function Testimonials() {
  return (
    <section className="bg-black pb-16 lg:pb-[5.25rem]">
      <div className="site-container">

        {/* Heading */}
        <div className="mb-10" data-reveal>
          <p className="font-inclusive text-sm uppercase tracking-[0.11em] text-[#b38ff9]">
            What clients say
          </p>

          <h2 className="mt-3 text-[48px] font-semibold tracking-normal lg:tracking-[-0.04em]">
            Trusted By Brands{" "}
            <span className="text-[#722df7]">
              That Grow
            </span>
          </h2>
        </div>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          grabCursor={true}
          speed={1000}
          spaceBetween={20}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            640: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3,
            },

            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.name}>

              <figure
                className="glass-card h-[340px] rounded-lg border border-[#101010] bg-[#050409] p-6 transition duration-300 hover:border-[#722df7] hover:shadow-[0_0_30px_rgba(114,45,247,.18)]"
              >

                <figcaption className="mb-4 flex items-center gap-4">

                  <img
                    src={testimonial.avater}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                    loading="lazy"
                  />

                  <div>

                    <p className="text-base font-medium text-white">
                      {testimonial.name}
                    </p>

                    <p className="text-xs text-[#d5d5d5]">
                      {testimonial.username}
                    </p>

                  </div>

                </figcaption>

                <p
                  className="mb-5 text-[#fbc914]"
                  aria-label="5 out of 5 stars"
                >
                  ★★★★★
                </p>

                <blockquote className="text-[15px] leading-8 text-[#999]">
                  {testimonial.quote}
                </blockquote>

              </figure>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}