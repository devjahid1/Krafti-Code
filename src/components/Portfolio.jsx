import { assets } from "../lib/assets.js";
import { projects } from "../data/content.js";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-black py-16 lg:py-[7rem]">
      <div className="site-container">
        {/* Heading */}
        <div className="mb-14 text-center" data-reveal>
          <p className="font-inclusive text-sm uppercase tracking-[0.11em] text-[#b38ff9]">
            Our Projects
          </p>

          <h2 className="mt-3 text-[40px] font-semibold leading-tight lg:text-[48px] lg:tracking-[-0.04em]">
            Websites We're <span className="text-[#722df7]">Proud of</span>
          </h2>
        </div>

        {/* Portfolio Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          loop
          speed={900}
          spaceBetween={22}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            prevEl: ".portfolio-prev",
            nextEl: ".portfolio-next",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.title}>
              <article
                className="
    group
    overflow-hidden
    rounded-2xl
    border
    border-[#1b1b1b]
    bg-[#050505]
    transition-all
    duration-500
    hover:border-[#722df7]
    hover:shadow-[0_0_30px_rgba(114,45,247,.18)]
  "
              >
                {/* Image */}
                <div className="p-3">
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={assets.portfolio[project.image]}
                      alt={project.title}
                      loading="lazy"
                      className="
                        aspect-[1.55]
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex items-end justify-between px-5 pb-5 pt-2">
                  <div>
                    <h3 className="text-[24px] font-medium text-white transition-colors duration-300 group-hover:text-[#f4f4f4]">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-[15px] text-[#7b7b7b]">
                      {project.type}
                    </p>
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title}`}
                    className="transition-all duration-300"
                  >
                    <FaArrowRight className="text-[18px] text-[#722df7] transition-transform duration-300 group-hover:translate-x-2 mb-9" />
                  </a>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom Navigation */}
        <div className="mt-10 flex items-center justify-center gap-5">
          <button
            className="
              portfolio-prev
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-[#722df7]
              bg-transparent
              text-[#722df7]
              transition-all
              duration-300
              hover:bg-[#722df7]
              hover:text-white
            "
          >
            <FaArrowLeft />
          </button>

          <div className="h-[1px] w-24 bg-[#722df7]/30"></div>

          <button
            className="
              portfolio-next
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-[#722df7]
              bg-transparent
              text-[#722df7]
              transition-all
              duration-300
              hover:bg-[#722df7]
              hover:text-white
            "
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
