import { FaCheck } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

// =====================================================
// Pricing Plans
// =====================================================

const plans = [
  {
    name: "STARTER",
    price: "$999",
    startingAt: true,
    description:
      "Perfect for small businesses and solopreneurs who need a clean, professional web presence fast.",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Professional UI",
      "Basic SEO",
      "Contact/lead form",
      "Social media integration",
      "Basic performance optimization",
      "1 revision round",
      "2-week delivery",
      "14-day post-launch support",
    ],
    button: "Get Started",
    popular: false,
  },

  {
    name: "PREMIUM",
    price: "$1999",
    startingAt: true,
    description:
      "For growing brands that want a high-converting website with custom design and advanced functionality.",
    features: [
      "Up to 15 pages",
      "Custom UI/UX",
      "Advanced SEO",
      "CMS integration",
      "Analytics",
      "API/third-party integrations",
      "Performance optimization",
      "3 revision rounds",
      "4 week delivery",
      "30-day post-launch support",
    ],
    button: "Start Building",
    popular: true,
  },

  {
    name: "ENTERPRISE",
    price: "Custom",
    startingAt: false,
    suffix: "pricing",
    description:
      "Tailored solutions for complex platforms, large teams, and high-traffic digital products.",
    features: [
      "Unlimited pages",
      "Advanced interactions/animations",
      "Full custom design system",
      "Advanced web applications",
      "Dashboards",
      "Authentication",
      "Custom API integrations",
      "Third-party integrations",
      "Advanced performance optimization",
      "Scalable architecture",
      "Dedicated project management",
      "Ongoing maintenance/support",
      "Custom SLA",
    ],
    button: "Let's Talk",
    popular: false,
  },
];

// =====================================================
// Feature Check
// =====================================================

function CheckItem({ children }) {
  return (
    <li className="flex items-start gap-3">
      <span
        className="
          mt-[2px]
          flex
          h-[18px]
          w-[18px]
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#722df7]/20
          text-[9px]
          text-[#9b68ff]
        "
      >
        <FaCheck />
      </span>

      <span className="text-[14px] leading-6 text-[#b5b0b9]">{children}</span>
    </li>
  );
}

// =====================================================
// Pricing Component
// =====================================================

export default function Pricing({ onPackageSelect, onScheduleSelect }) {
  // ===================================================
  // Package Selection
  // ===================================================

  const handlePlanClick = (planName) => {
    if (typeof onPackageSelect === "function") {
      onPackageSelect(planName);
    }
  };

  // ===================================================
  // Schedule Selection
  // ===================================================

  const handleScheduleClick = () => {
    if (typeof onScheduleSelect === "function") {
      onScheduleSelect();
    }
  };

  return (
    <section
      id="pricing"
      className="
        relative
        overflow-hidden
        bg-black
        py-24
        lg:py-32
      "
    >
      {/* =================================================
          Background Glow
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-20
          h-[450px]
          w-[650px]
          -translate-x-1/2
          rounded-full
          bg-[#722df7]/10
          blur-[160px]
        "
      />

      <div
        className="
          site-container
          relative
          z-10
        "
      >
        {/* =================================================
            Header
        ================================================= */}

        <div
          className="
            mx-auto
            max-w-[720px]
            text-center
          "
        >
          <p
            className="
              text-[12px]
              font-medium
              uppercase
              tracking-[0.22em]
              text-[#b18aff]
            "
          >
            Pricing Plans
          </p>

          <h2
            className="
              mt-6
              text-4xl
              font-bold
              leading-tight
              tracking-[-0.04em]
              text-white
              sm:text-5xl
              lg:text-[44px]
            "
          >
            Simple, Transparent <span className="text-[#722df7]">Pricing</span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-[650px]
              text-[15px]
              leading-7
              text-[#9c989f]
              sm:text-[16px]
            "
          >
            No hidden fees. No bloated retainers. Pick the plan that fits your
            project and let's build something great together.
          </p>
        </div>

        {/* =================================================
            Pricing Cards
        ================================================= */}

        <div
          className="
            mx-auto
            mt-16
            grid
            max-w-[1220px]
            gap-5
            lg:grid-cols-3
            lg:items-stretch
          "
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`
                relative
                flex
                flex-col
                overflow-visible
                rounded-[10px]
                border
                p-7
                transition-all
                duration-300

                ${
                  plan.popular
                    ? `
                      border-[#722df7]
                      bg-gradient-to-b
                      from-[#210b5a]
                      via-[#12062f]
                      to-[#090509]
                      shadow-[0_20px_80px_rgba(114,45,247,.12)]
                    `
                    : `
                      border-white/[0.08]
                      bg-gradient-to-b
                      from-[#050505]
                      to-[#120611]
                      hover:border-[#722df7]/40
                      hover:shadow-[0_20px_60px_rgba(114,45,247,.08)]
                    `
                }
              `}
            >
              {/* =================================================
                  Popular
              ================================================= */}

              {plan.popular && (
                <div
                  className="
                    absolute
                    left-1/2
                    top-0
                    -translate-x-1/2
                    -translate-y-1/2
                    whitespace-nowrap
                    rounded-full
                    bg-[#722df7]
                    px-4
                    py-1.5
                    text-[10px]
                    font-semibold
                    tracking-[0.14em]
                    text-white
                  "
                >
                  MOST POPULAR
                </div>
              )}

              {/* =================================================
                  Plan Name
              ================================================= */}

              <p
                className="
                  text-[11px]
                  font-medium
                  tracking-[0.2em]
                  text-[#b18aff]
                "
              >
                {plan.name}
              </p>

              {/* =================================================
                  Price
              ================================================= */}

              <div className="mt-4 flex items-baseline gap-2">
                {plan.startingAt && (
                  <span
                    className="
                      text-[13px]
                      font-medium
                      text-[#77727d]
                      whitespace-nowrap
                    "
                  >
                    Starting at
                  </span>
                )}

                <h3
                  className={`
                    font-bold
                    tracking-[-0.04em]
                    text-white

                    ${plan.price === "Custom" ? "text-[42px]" : "text-[44px]"}
                  `}
                >
                  {plan.price}
                </h3>

                {plan.suffix && (
                  <span className="text-[13px] text-[#77727d]">
                    {plan.suffix}
                  </span>
                )}
              </div>

              {/* =================================================
                  Description
              ================================================= */}

              <p
                className="
                  mt-3
                  min-h-[68px]
                  text-[14px]
                  leading-6
                  text-[#a39ea8]
                "
              >
                {plan.description}
              </p>

              {/* =================================================
                  Divider
              ================================================= */}

              <div className="my-7 h-px bg-white/[0.07]" />

              {/* =================================================
                  Features
              ================================================= */}

              <ul className="flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <CheckItem key={feature}>{feature}</CheckItem>
                ))}
              </ul>

              {/* =================================================
                  Button
              ================================================= */}

              <button
                type="button"
                onClick={() => handlePlanClick(plan.name)}
                className={`
                  group
                  mt-10
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-[6px]
                  border
                  py-3.5
                  text-[14px]
                  font-medium
                  transition-all
                  duration-300
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#722df7]/50

                  ${
                    plan.popular
                      ? `
                        border-[#722df7]
                        bg-[#722df7]
                        text-white
                        hover:bg-[#823cff]
                      `
                      : `
                        border-white/[0.12]
                        bg-white/[0.03]
                        text-white
                        hover:border-[#722df7]/60
                        hover:bg-[#722df7]/10
                      `
                  }
                `}
              >
                {plan.button}

                <FiArrowUpRight
                  className="
                    text-[18px]
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </button>
            </div>
          ))}
        </div>

        {/* =================================================
            Discovery Call
        ================================================= */}

        <div className="mt-14 flex justify-center">
          <div
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-2
              text-center
              text-[16px]
              text-[#77727d]
            "
          >
            <span
              className="
                flex
                h-[18px]
                w-[18px]
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#722df7]/20
                text-[9px]
                text-[#9b68ff]
              "
            >
              <FaCheck />
            </span>

            <span>All plans include a free 30-minute discovery call.</span>

            <button
              type="button"
              onClick={handleScheduleClick}
              className="
                text-[#a875ff]
                transition
                hover:text-white
              "
            >
              Schedule yours →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
