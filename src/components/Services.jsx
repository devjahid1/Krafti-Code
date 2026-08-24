import { services } from "../data/content.js";
import { useNavigate } from "react-router-dom";

import SectionHeading from "./SectionHeading.jsx";

import vectorImg from "../assets/Vector5.png";
import learnmore from "../assets/learnmore.png";
import serviceBg from "../assets/service-bg.png";

export default function Services() {
  const navigate = useNavigate();

  // ==========================================
  // Service → Page Route
  // ==========================================

  const getServiceRoute = (title) => {
    const normalizedTitle = title
      .toLowerCase()
      .trim()
      .replace(/\s+/g, " ");

    // Website Design
    if (
      normalizedTitle.includes("custom web design") ||
      normalizedTitle.includes("website design") ||
      normalizedTitle.includes("web design")
    ) {
      return "/website-design";
    }

    // Web Development
    if (
      normalizedTitle.includes("web development") ||
      normalizedTitle.includes("web develop")
    ) {
      return "/web-development";
    }

    // UI/UX
    if (
      normalizedTitle.includes("ui/ux") ||
      normalizedTitle.includes("ui ux") ||
      normalizedTitle.includes("ui & ux") ||
      normalizedTitle.includes("user interface")
    ) {
      return "/ui-ux";
    }

    // Responsive
    if (
      normalizedTitle.includes("responsive") ||
      normalizedTitle.includes("responsive design")
    ) {
      return "/responsive";
    }

    // SEO
    if (
      normalizedTitle.includes("seo") ||
      normalizedTitle.includes("search engine optimization") ||
      normalizedTitle.includes("search optimization")
    ) {
      return "/seo";
    }

    // Fallback
    return "/";
  };

  return (
    <section
      id="services"
      className="bg-black pb-16 pt-20 md:pb-[4.5rem] lg:pt-[7.375rem]"
    >
      <div className="site-container">

        {/* ======================================
            SECTION HEADING
        ====================================== */}

        <SectionHeading eyebrow="What we do">
          Digital Solutions That{" "}
          <span className="text-[#722df7]">
            Deliver Real Results
          </span>
        </SectionHeading>

        {/* ======================================
            CURVED LINE
        ====================================== */}

        <div className="mt-6 flex justify-center">
          <img
            src={vectorImg}
            alt=""
            className="ml-40 w-[320px]"
          />
        </div>

        {/* ======================================
            SERVICES GRID
        ====================================== */}

        <div
          className="
            mt-16
            grid
            max-w-[1441px]
            gap-6
            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {services.map((service) => {
            const route = getServiceRoute(service.title);

            return (
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
                  p-8
                  backdrop-blur-[20px]
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
                {/* ==================================
                    SERVICE CONTENT
                ================================== */}

                <div>
                  {/* Icon */}

                  <div className="mb-8 flex w-14 items-center justify-center">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="h-[64px] w-[64px] object-contain"
                    />
                  </div>

                  {/* Title */}

                  <h3 className="text-[22px] font-semibold text-white">
                    {service.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      mt-5
                      w-[290px]
                      whitespace-pre-line
                      text-[16px]
                      leading-8
                      text-[#868686]
                    "
                  >
                    {service.body}
                  </p>
                </div>

                {/* ==================================
                    LEARN MORE
                ================================== */}

                <button
                  type="button"
                  onClick={() => {
                    navigate(route);

                    // Page-এর একদম শুরুতে যাবে
                    window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                  }}
                  className="
                    mt-10
                    inline-flex
                    w-fit
                    items-center
                    gap-2
                    transition-all
                    duration-300
                    group-hover:translate-x-2
                  "
                >
                  <img
                    src={learnmore}
                    alt="Learn More"
                    className="h-auto w-auto"
                  />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}