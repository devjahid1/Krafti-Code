import { services } from "../data/content.js";
import SectionHeading from "./SectionHeading.jsx";
import vectorImg from "../assets/Vector5.png";
import learnmore from "../assets/learnmore.png"

export default function Services() {
  return (
    <section
      id="services"
      className="bg-black pb-16 pt-20 md:pb-[4.5rem] lg:pt-[7.375rem]"
    >
      <div className="site-container">
        <SectionHeading eyebrow="What we do">
          Digital Solutions That{" "}
          <span className="text-[#722df7]">Deliver Real Results</span>
        </SectionHeading>

        {/* Curved Line */}
        <div className="mt-6 flex justify-center">
          <img
            src={vectorImg}
            alt=""
            className="w-[320px] md:w-[320px] xl:w-[320px] ml-40"
          />
        </div>

     <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4 max-w-[1441px]">

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
                bg-[linear-gradient(354deg,rgba(200,36,255,0.12)_-5.44%,rgba(22,23,41,0)_102.2%)]
                backdrop-blur-[20px]
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-[#722df7]/40
                hover:shadow-[0_20px_60px_rgba(114,45,247,0.18)]
              "
            >

              <div>

                {/* Icon */}

                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl border border-[#6418fd]/60 bg-[#120725]">

                  <img
                    src={service.icon}
                    alt={service.title}
                    className="h-8 w-8 object-contain"
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
                className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-white transition-all duration-300 group-hover:text-[#b38ff9]"
              >
                <img src={learnmore} alt="" />
              </a>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}