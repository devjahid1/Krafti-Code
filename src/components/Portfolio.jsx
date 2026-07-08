import { assets } from "../lib/assets.js";
import { projects } from "../data/content.js";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-black py-16 lg:py-[7rem]"
    >
      <div className="site-container">

        {/* Heading */}
        <div
          className="mb-12 text-center"
          data-reveal
        >
          <p className="font-inclusive text-sm uppercase tracking-[0.11em] text-[#b38ff9]">
            Our Projects
          </p>

          <h2 className="mt-3 text-[48px] font-semibold tracking-normal lg:tracking-[-0.04em]">
            Websites We're{" "}
            <span className="text-[#722df7]">
              Proud of
            </span>
          </h2>
        </div>

        {/* Portfolio Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          speed={1000}
          spaceBetween={24}
          watchOverflow={false}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
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
                className="group overflow-hidden rounded-2xl border border-[#1b1b1b] bg-[#030303] transition-all duration-500 hover:border-[#722df7] hover:shadow-[0_0_35px_rgba(114,45,247,.25)]"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={assets.portfolio[project.image]}
                    alt={project.title}
                    className="aspect-[1.55] w-full object-cover transition duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="flex min-h-[185px] flex-col p-6">

                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-sm text-[#8b8b8b]">
                      {project.type}
                    </p>
                  </div>

                  {/* View Button */}
                  <div className="mt-auto pt-8 flex justify-center">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[#722df7] px-6 py-3 text-sm font-medium text-[#722df7] transition-all duration-300 hover:-translate-y-1 hover:bg-[#722df7] hover:text-white"
                    >
                      View Project
                      <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                        ↗
                      </span>
                    </a>
                  </div>

                </div>

              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom Navigation */}
        <div className="mt-12 flex items-center justify-center gap-6">

          <button
            className="portfolio-prev flex h-14 w-14 items-center justify-center rounded-full border border-[#722df7] bg-[#111] text-[#722df7] transition-all duration-300 hover:scale-110 hover:bg-[#722df7] hover:text-white"
          >
            <FaArrowLeft />
          </button>

          <div className="h-[1px] w-24 bg-[#722df7]/30"></div>

          <button
            className="portfolio-next flex h-14 w-14 items-center justify-center rounded-full border border-[#722df7] bg-[#111] text-[#722df7] transition-all duration-300 hover:scale-110 hover:bg-[#722df7] hover:text-white"
          >
            <FaArrowRight />
          </button>

        </div>

      </div>
    </section>
  );
}