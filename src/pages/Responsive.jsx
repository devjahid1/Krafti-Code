import {
  FiArrowUpRight,
  FiCheck,
  FiMonitor,
  FiSmartphone,
  FiTablet,
  FiZap,
} from "react-icons/fi";

const Responsive = ({ onContactOpen }) => {
  const services = [
    {
      icon: FiMonitor,
      title: "Desktop First",
      text: "Layouts that take full advantage of larger screens while keeping every element balanced and easy to navigate.",
    },
    {
      icon: FiTablet,
      title: "Tablet Ready",
      text: "Flexible layouts that adapt naturally to tablet screens without breaking spacing, hierarchy, or interactions.",
    },
    {
      icon: FiSmartphone,
      title: "Mobile Perfect",
      text: "Every section is carefully optimized for smaller screens, touch interactions, and mobile-first usability.",
    },
    {
      icon: FiZap,
      title: "Fast Everywhere",
      text: "Responsive design combined with performance-focused development keeps your experience smooth across devices.",
    },
  ];

  const features = [
    "Mobile-first layouts",
    "Fluid responsive grids",
    "Flexible typography",
    "Responsive images",
    "Touch-friendly interactions",
    "Tablet optimization",
    "Desktop optimization",
    "Cross-browser compatibility",
    "Performance-focused UI",
    "Consistent visual hierarchy",
  ];

  const process = [
    {
      number: "01",
      title: "Analyze",
      text: "We study your content, users, layouts, and device requirements before creating the responsive structure.",
    },
    {
      number: "02",
      title: "Structure",
      text: "We create flexible grids, spacing systems, typography scales, and components that adapt naturally.",
    },
    {
      number: "03",
      title: "Optimize",
      text: "Every breakpoint is refined to make sure the experience feels intentional rather than simply resized.",
    },
    {
      number: "04",
      title: "Test",
      text: "We test layouts across different screen sizes and interactions to deliver a consistent experience.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative flex min-h-screen items-center">

        {/* Background Glow */}

        <div className="pointer-events-none absolute inset-0">

          <div
            className="
              absolute
              left-[8%]
              top-[15%]
              h-[500px]
              w-[500px]
              rounded-full
              bg-violet-600/10
              blur-[170px]
            "
          />

          <div
            className="
              absolute
              bottom-[-120px]
              right-[5%]
              h-[450px]
              w-[450px]
              rounded-full
              bg-indigo-500/10
              blur-[160px]
            "
          />

        </div>

        {/* Grid */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-7xl
            px-6
            py-32
            lg:px-10
          "
        >

          <div className="grid items-center gap-20 lg:grid-cols-[1fr_.85fr]">

            {/* =================================================
                HERO CONTENT
            ================================================= */}

            <div>

              <div className="mb-8">

                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-4
                    py-2
                    text-sm
                    text-white/60
                  "
                >

                  <span className="h-2 w-2 rounded-full bg-violet-400" />

                  Responsive Web Design

                </span>

              </div>

              <h1
                className="
                  max-w-4xl
                  text-5xl
                  font-semibold
                  leading-[0.92]
                  tracking-[-0.06em]
                  sm:text-6xl
                  md:text-7xl
                  lg:text-[88px]
                "
              >

                One website.

                <span className="block text-white/30">
                  Every screen.
                </span>

              </h1>

              <p
                className="
                  mt-8
                  max-w-xl
                  text-base
                  leading-8
                  text-white/50
                  md:text-lg
                "
              >
                We create responsive websites that adapt beautifully to
                every screen size — from large desktop monitors to tablets
                and mobile devices.
              </p>

              {/* Start Project */}

              <div className="mt-10">

                <button
                  type="button"
                  onClick={onContactOpen}
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-white
                    px-7
                    py-4
                    text-sm
                    font-semibold
                    text-black
                    transition-all
                    duration-300
                    hover:bg-violet-500
                    hover:text-white
                  "
                >

                  Start a Project

                  <span
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-black
                      text-white
                      transition-transform
                      duration-300
                      group-hover:rotate-45
                    "
                  >
                    <FiArrowUpRight size={17} />
                  </span>

                </button>

              </div>

            </div>

            {/* =================================================
                RESPONSIVE VISUAL
            ================================================= */}

            <div className="relative mx-auto h-[520px] w-full max-w-[480px]">

              {/* Desktop */}

              <div
                className="
                  absolute
                  right-0
                  top-4
                  w-[390px]
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#101010]
                  p-3
                  shadow-2xl
                  sm:w-[420px]
                "
              >

                <div
                  className="
                    rounded-xl
                    border
                    border-white/10
                    bg-[#080808]
                    p-4
                  "
                >

                  {/* Browser */}

                  <div className="flex items-center gap-2">

                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />

                    <div
                      className="
                        ml-3
                        h-6
                        flex-1
                        rounded-md
                        bg-white/[0.04]
                      "
                    />

                  </div>

                  {/* Website Skeleton */}

                  <div className="mt-6 grid grid-cols-[1fr_1.4fr] gap-3">

                    <div className="space-y-3">

                      <div className="h-4 w-16 rounded bg-white/10" />

                      <div className="h-2 w-full rounded bg-white/5" />

                      <div className="h-2 w-4/5 rounded bg-white/5" />

                      <div className="mt-6 h-8 w-24 rounded-full bg-violet-500/30" />

                    </div>

                    <div
                      className="
                        h-32
                        rounded-xl
                        bg-gradient-to-br
                        from-violet-500/20
                        to-white/[0.02]
                      "
                    />

                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2">

                    <div className="h-16 rounded-lg bg-white/[0.04]" />
                    <div className="h-16 rounded-lg bg-white/[0.04]" />
                    <div className="h-16 rounded-lg bg-white/[0.04]" />

                  </div>

                </div>

              </div>

              {/* Tablet */}

              <div
                className="
                  absolute
                  bottom-10
                  left-4
                  w-[210px]
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#111]
                  p-3
                  shadow-2xl
                "
              >

                <div
                  className="
                    rounded-xl
                    border
                    border-white/10
                    bg-[#080808]
                    p-3
                  "
                >

                  <div className="h-3 w-12 rounded bg-white/10" />

                  <div className="mt-4 h-20 rounded-lg bg-violet-500/10" />

                  <div className="mt-3 space-y-2">

                    <div className="h-2 w-full rounded bg-white/5" />
                    <div className="h-2 w-4/5 rounded bg-white/5" />

                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2">

                    <div className="h-10 rounded bg-white/[0.04]" />
                    <div className="h-10 rounded bg-white/[0.04]" />

                  </div>

                </div>

              </div>

              {/* Mobile */}

              <div
                className="
                  absolute
                  bottom-0
                  right-[-5px]
                  w-[120px]
                  rounded-[24px]
                  border
                  border-white/10
                  bg-[#111]
                  p-2
                  shadow-2xl
                "
              >

                <div
                  className="
                    rounded-[18px]
                    border
                    border-white/10
                    bg-[#080808]
                    p-2
                  "
                >

                  <div className="mx-auto h-1 w-8 rounded-full bg-white/10" />

                  <div
                    className="
                      mt-4
                      h-20
                      rounded-lg
                      bg-violet-500/10
                    "
                  />

                  <div className="mt-3 space-y-2">

                    <div className="h-2 w-full rounded bg-white/10" />
                    <div className="h-2 w-4/5 rounded bg-white/5" />
                    <div className="h-2 w-3/5 rounded bg-white/5" />

                  </div>

                  <div className="mt-4 h-7 rounded-full bg-violet-500/20" />

                </div>

              </div>

              {/* Floating Badge */}

              <div
                className="
                  absolute
                  right-[-5px]
                  top-[175px]
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#111]
                  px-4
                  py-3
                  shadow-xl
                "
              >

                <span
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-violet-500/10
                    text-violet-400
                  "
                >
                  <FiCheck size={15} />
                </span>

                <div>

                  <p className="text-xs text-white/70">
                    Fully Responsive
                  </p>

                  <p className="text-[10px] text-white/30">
                    Every screen size
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="border-t border-white/10">

        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">

          <div className="max-w-4xl">

            <p
              className="
                mb-6
                text-sm
                uppercase
                tracking-[0.2em]
                text-violet-400
              "
            >
              Responsive Experience
            </p>

            <h2
              className="
                text-4xl
                font-semibold
                leading-[1]
                tracking-[-0.05em]
                md:text-6xl
              "
            >

              Your users are everywhere.

              <span className="text-white/30">
                {" "}Your website should be too.
              </span>

            </h2>

            <p
              className="
                mt-8
                max-w-2xl
                text-lg
                leading-8
                text-white/40
              "
            >
              A responsive website is more than making things smaller.
              We rethink layouts, spacing, navigation, typography, and
              interactions for every screen.
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="border-t border-white/10">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">

          <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">

            {services.map((service) => {

              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="
                    min-h-[320px]
                    bg-[#050505]
                    p-8
                    transition-colors
                    duration-300
                    hover:bg-white/[0.025]
                    md:p-10
                  "
                >

                  <Icon
                    size={25}
                    className="text-violet-400"
                  />

                  <h3 className="mt-20 text-2xl font-medium">
                    {service.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      max-w-md
                      text-sm
                      leading-7
                      text-white/40
                    "
                  >
                    {service.text}
                  </p>

                </div>
              );

            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          FEATURES
      ===================================================== */}

      <section className="border-t border-white/10">

        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">

          <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr]">

            <div>

              <p
                className="
                  mb-5
                  text-sm
                  uppercase
                  tracking-[0.2em]
                  text-violet-400
                "
              >
                Responsive Foundation
              </p>

              <h2
                className="
                  text-4xl
                  font-semibold
                  tracking-[-0.04em]
                  md:text-5xl
                "
              >

                Designed to adapt.

                <span className="block text-white/30">
                  Never to compromise.
                </span>

              </h2>

              <p
                className="
                  mt-6
                  max-w-md
                  text-sm
                  leading-7
                  text-white/40
                "
              >
                Every component is designed with flexibility in mind so
                your website remains beautiful and functional regardless
                of the device being used.
              </p>

            </div>

            <div className="grid sm:grid-cols-2">

              {features.map((feature) => (

                <div
                  key={feature}
                  className="
                    flex
                    items-center
                    gap-4
                    border-b
                    border-white/10
                    py-5
                  "
                >

                  <span
                    className="
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-violet-500/10
                      text-violet-400
                    "
                  >
                    <FiCheck size={14} />
                  </span>

                  <span className="text-sm text-white/60">
                    {feature}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="border-t border-white/10">

        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">

          <div className="mb-16">

            <p
              className="
                mb-5
                text-sm
                uppercase
                tracking-[0.2em]
                text-violet-400
              "
            >
              Our Process
            </p>

            <h2
              className="
                max-w-3xl
                text-4xl
                font-semibold
                tracking-[-0.05em]
                md:text-6xl
              "
            >

              Responsive by design.

              <span className="text-white/30">
                {" "}Not by accident.
              </span>

            </h2>

          </div>

          <div className="grid gap-8 md:grid-cols-4">

            {process.map((step) => (

              <div
                key={step.number}
                className="border-t border-white/10 pt-6"
              >

                <span className="text-sm text-violet-400">
                  {step.number}
                </span>

                <h3 className="mt-8 text-xl font-medium">
                  {step.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-7
                    text-white/40
                  "
                >
                  {step.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="border-t border-white/10">

        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10">

          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-10
              text-center
              md:p-16
              lg:p-20
            "
          >

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[350px]
                w-[500px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-violet-600/20
                blur-[140px]
              "
            />

            <div className="relative z-10">

              <p
                className="
                  mb-5
                  text-sm
                  uppercase
                  tracking-[0.2em]
                  text-violet-400
                "
              >
                Ready To Build?
              </p>

              <h2
                className="
                  mx-auto
                  max-w-4xl
                  text-4xl
                  font-semibold
                  leading-tight
                  tracking-[-0.05em]
                  md:text-6xl
                "
              >

                Let's create a website

                <span className="block text-white/30">
                  that works everywhere.
                </span>

              </h2>

              <button
                type="button"
                onClick={onContactOpen}
                className="
                  group
                  mt-10
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-white
                  px-7
                  py-4
                  text-sm
                  font-semibold
                  text-black
                  transition-all
                  duration-300
                  hover:bg-violet-500
                  hover:text-white
                "
              >

                Start a Project

                <span
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-black
                    text-white
                    transition-transform
                    duration-300
                    group-hover:rotate-45
                  "
                >
                  <FiArrowUpRight size={17} />
                </span>

              </button>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Responsive;