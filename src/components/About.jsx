import {
  FiArrowUpRight,
  FiBarChart2,
  FiHeart,
  FiRefreshCw,
  FiTrendingUp,
} from "react-icons/fi";

export default function About() {
  const features = [
    {
      icon: FiHeart,
      title: "Human-First Design",
      description:
        "Every decision starts with your users. We craft experiences that feel intuitive, delightful, and on-brand.",
    },
    {
      icon: FiBarChart2,
      title: "Results-Driven",
      description:
        "We measure success by your metrics — conversions, leads, and growth — not vanity scores.",
    },
    {
      icon: FiRefreshCw,
      title: "Transparent Process",
      description:
        "Clear timelines, honest communication, and no surprises. You’re in the loop at every stage.",
    },
    {
      icon: FiTrendingUp,
      title: "Long-Term Partnership",
      description:
        "We don't disappear after launch. Ongoing support, iteration, and growth are part of the deal.",
    },
  ];

  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-black
        px-6
        py-24
        text-white
        sm:px-8
        lg:px-16
        xl:px-24
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#722df7]/5
          blur-[140px]
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-[1280px]
        "
      >
        {/* Main Grid */}
        <div
          className="
            grid
            grid-cols-1
            gap-12
            lg:grid-cols-[1.35fr_1fr]
            lg:gap-16
            xl:gap-20
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div>
            {/* Eyebrow */}
            <div
              className="
                mb-6
                flex
                items-center
                gap-3
                text-[11px]
                font-medium
                uppercase
                tracking-[0.22em]
                text-[#a76cff]
              "
            >
              <span className="h-px w-6 bg-[#722df7]" />
              Who We Are
            </div>

            {/* Heading */}
            <h2
              className="
                max-w-[700px]
                text-4xl
                font-semibold
                leading-[1.12]
                tracking-[-0.04em]
                sm:text-5xl
                lg:text-[48px]
                xl:text-[50px]
              "
            >
              We Turn Ideas Into{" "}
              <span
                className="
                  bg-gradient-to-r
                  from-[#722df7]
                  via-[#914cff]
                  to-[#b77aff]
                  bg-clip-text
                  text-transparent
                "
              >
                Digital Experiences
              </span>
            </h2>

            {/* Paragraph 1 */}
            <p
              className="
                mt-16
                max-w-[700px]
                text-[15px]
                leading-7
                text-white/60
                sm:text-[16px]
                sm:leading-8
              "
            >
              Krafti Code is a full-service web design and development studio
              founded in 2019. We partner with ambitious brands — from bold
              startups to established enterprises — to craft websites that
              don't just look beautiful, but perform exceptionally. Every
              pixel we place and every line of code we write is driven by one
              goal: your growth.
            </p>

            {/* Paragraph 2 */}
            <p
              className="
                mt-7
                max-w-[700px]
                text-[15px]
                leading-7
                text-white/60
                sm:text-[16px]
                sm:leading-8
              "
            >
              Our team of designers, developers, and strategists collaborate
              closely with clients to understand their business, audience, and
              goals before anything else. We believe the best digital products
              are born at the intersection of deep craft and genuine
              partnership.
            </p>

            {/* Mission Box */}
            <div
              className="
                mt-8
                max-w-[700px]
                rounded-lg
                border
                border-white/[0.08]
                bg-gradient-to-br
                from-[#10051b]
                via-[#09040f]
                to-[#08030d]
                px-6
                py-6
                shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]
              "
            >
              <div
                className="
                  mb-4
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#a76cff]
                "
              >
                Our Mission
              </div>

              <p
                className="
                  text-[14px]
                  italic
                  leading-7
                  text-white/65
                  sm:text-[15px]
                "
              >
                “To empower every client with a world-class web presence that
                drives real, measurable results — without the agency fluff.”
              </p>
            </div>
          </div>

          {/* =================================================
              RIGHT FEATURE CARDS
          ================================================= */}

          <div
            className="
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
            "
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="
                    group
                    relative
                    min-h-[230px]
                    overflow-hidden
                    rounded-lg
                    border
                    border-white/[0.08]
                    bg-gradient-to-br
                    from-[#0d0613]
                    via-[#100617]
                    to-[#1b0620]
                    p-5
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-[#722df7]/30
                    hover:shadow-[0_15px_50px_rgba(114,45,247,0.10)]
                  "
                >
                  {/* Hover Glow */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      h-32
                      w-32
                      rounded-full
                      bg-[#722df7]/10
                      opacity-0
                      blur-3xl
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  {/* Icon */}
                  <div
                    className="
                      relative
                      mb-5
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-[#a76cff]/20
                      bg-[#12091d]
                      text-[#c178ff]
                      transition-all
                      duration-300
                      group-hover:border-[#a76cff]/40
                      group-hover:bg-[#722df7]/10
                    "
                  >
                    <Icon size={21} strokeWidth={1.6} />
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      relative
                      text-[16px]
                      font-semibold
                      tracking-tight
                      text-white
                    "
                  >
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      relative
                      mt-4
                      text-[13px]
                      leading-6
                      text-white/50
                    "
                  >
                    {feature.description}
                  </p>

                  {/* Arrow */}
                  <div
                    className="
                      absolute
                      bottom-5
                      right-5
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/[0.06]
                      text-white/20
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:text-[#a76cff]
                      group-hover:opacity-100
                    "
                  >
                    <FiArrowUpRight size={15} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}