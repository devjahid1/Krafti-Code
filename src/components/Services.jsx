import { services } from "../data/content.js";
import SectionHeading from "./SectionHeading.jsx";

import vectorImg from "../assets/Vector5.png";
import learnmore from "../assets/learnmore.png";
import serviceBg from "../assets/service-bg.png";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-black pb-16 pt-20 md:pb-[4.5rem] lg:pt-[7.375rem]"
    >
      <div className="site-container">
        <SectionHeading eyebrow="What we do">
          Digital Solutions That{" "}
          <span className="text-[#722df7]">
            Deliver Real Results
          </span>
        </SectionHeading>

        {/* Curved Line */}
        <div className="mt-6 flex justify-center">
          <img
            src={vectorImg}
            alt=""
            className="ml-40 w-[320px]"
          />
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid max-w-[1441px] gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
<article
  key={service.title}
  data-reveal
  className="
    group
    flex
    min-h-[401px]
    flex-col
    justify-between
    rounded-[8px]
    border
    border-white/[0.02]
    backdrop-blur-[20px]
    p-8
    transition-all
    duration-300
    hover:-translate-y-2
    hover:border-[#722df7]/40
    hover:shadow-[0_20px_60px_rgba(114,45,247,0.18)]
  "
  style={{
    backgroundImage: `url(${serviceBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
              <div>
                {/* Icon */}
                <div className="mb-8 flex h- w-14 items-center justify-center">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="h-8 w-8 object-contain h-[40px] w-[40px]"
                  />
                </div>

                {/* Title */}
                <h3 className="text-[22px] font-semibold text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-5 text-[15px] leading-8 text-[#868686]">
                  {service.body}
                </p>
              </div>

              {/* Learn More */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();

                  window.dispatchEvent(
                    new CustomEvent("lenis-scroll-to", {
                      detail: "#contact",
                    })
                  );
                }}
                className="mt-10 inline-flex items-center gap-2 transition-all duration-300 group-hover:translate-x-2"
              >
                <img
                  src={learnmore}
                  alt="Learn More"
                  className="h-auto w-auto"
                />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}