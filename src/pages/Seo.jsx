import {
  FiArrowUpRight,
  FiBarChart2,
  FiCheck,
  FiGlobe,
  FiSearch,
  FiTrendingUp,
} from "react-icons/fi";

const Seo = ({ onContactOpen }) => {
  const services = [
    {
      icon: FiSearch,
      title: "Technical SEO",
      text: "We build a technically healthy foundation so search engines can crawl, understand, and index your website efficiently.",
    },
    {
      icon: FiTrendingUp,
      title: "Organic Growth",
      text: "We optimize your website around meaningful search opportunities that can bring qualified visitors over time.",
    },
    {
      icon: FiGlobe,
      title: "On-Page SEO",
      text: "We improve page structure, headings, metadata, internal links, and content signals for better discoverability.",
    },
    {
      icon: FiBarChart2,
      title: "SEO Insights",
      text: "We use measurable data to identify opportunities, track progress, and continuously improve your search presence.",
    },
  ];

  const features = [
    "Technical SEO optimization",
    "Keyword research",
    "On-page optimization",
    "SEO-friendly page structure",
    "Metadata optimization",
    "Internal linking",
    "Content optimization",
    "Performance improvements",
    "Search visibility tracking",
    "SEO recommendations",
  ];

  const process = [
    {
      number: "01",
      title: "Discover",
      text: "We analyze your website, industry, competitors, audience, and existing search presence.",
    },
    {
      number: "02",
      title: "Strategize",
      text: "We identify the highest-value opportunities and create a practical SEO roadmap.",
    },
    {
      number: "03",
      title: "Optimize",
      text: "We improve technical structure, content, metadata, performance, and internal linking.",
    },
    {
      number: "04",
      title: "Grow",
      text: "We measure results, identify new opportunities, and keep improving your organic visibility.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative flex min-h-screen items-center">

        {/* Background */}

        <div className="pointer-events-none absolute inset-0">

          <div
            className="
              absolute
              left-[10%]
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
              bottom-[-100px]
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

            {/* LEFT */}

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

                  Search Engine Optimization
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
                Get discovered.

                <span className="block text-white/30">
                  Get remembered.
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
                We create SEO-ready websites that are built for search
                engines, designed for people, and structured for long-term
                organic growth.
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

            {/* RIGHT SEO VISUAL */}

            <div className="relative mx-auto h-[500px] w-full max-w-[480px]">

              {/* Main Search Card */}

              <div
                className="
                  absolute
                  right-0
                  top-5
                  w-full
                  max-w-[430px]
                  rounded-3xl
                  border
                  border-white/10
                  bg-[#0d0d0d]
                  p-5
                  shadow-2xl
                "
              >

                {/* Search Bar */}

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-4
                    py-3
                  "
                >

                  <FiSearch
                    size={17}
                    className="text-white/30"
                  />

                  <span className="text-sm text-white/50">
                    yourbusiness.com
                  </span>

                </div>

                {/* Ranking */}

                <div className="mt-6">

                  <div className="flex items-end justify-between">

                    <div>

                      <p className="text-xs text-white/30">
                        Organic visibility
                      </p>

                      <p className="mt-1 text-3xl font-semibold">
                        84%
                      </p>

                    </div>

                    <span
                      className="
                        flex
                        items-center
                        gap-1
                        rounded-full
                        bg-violet-500/10
                        px-3
                        py-1
                        text-xs
                        text-violet-400
                      "
                    >
                      <FiTrendingUp size={13} />

                      +28.4%
                    </span>

                  </div>

                  {/* Chart */}

                  <div className="mt-8 flex h-32 items-end gap-2">

                    {[25, 35, 30, 48, 42, 65, 58, 75, 70, 92].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t-md bg-violet-500/20"
                          style={{
                            height: `${height}%`,
                          }}
                        />
                      )
                    )}

                  </div>

                </div>

              </div>

              {/* Ranking Card */}

              <div
                className="
                  absolute
                  bottom-12
                  left-0
                  w-[220px]
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#111]
                  p-5
                  shadow-2xl
                "
              >

                <div className="flex items-center justify-between">

                  <span className="text-xs text-white/40">
                    Keyword
                  </span>

                  <span className="text-xs text-violet-400">
                    Position
                  </span>

                </div>

                <div className="mt-5 space-y-4">

                  <div className="flex items-center justify-between">

                    <span className="text-sm text-white/60">
                      web design
                    </span>

                    <span className="font-medium">
                      #2
                    </span>

                  </div>

                  <div className="flex items-center justify-between">

                    <span className="text-sm text-white/60">
                      web agency
                    </span>

                    <span className="font-medium">
                      #4
                    </span>

                  </div>

                  <div className="flex items-center justify-between">

                    <span className="text-sm text-white/60">
                      UI design
                    </span>

                    <span className="font-medium">
                      #7
                    </span>

                  </div>

                </div>

              </div>

              {/* Floating Status */}

              <div
                className="
                  absolute
                  right-[-10px]
                  top-[170px]
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
                    SEO Ready
                  </p>

                  <p className="text-[10px] text-white/30">
                    Technical foundation
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

      <section
        id="seo-services"
        className="border-t border-white/10"
      >

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
              Search Visibility
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
              Beautiful websites are great.

              <span className="text-white/30">
                {" "}Being found is better.
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
              SEO should not be an afterthought. We consider search
              visibility from the structure of your website to the content
              your customers actually search for.
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

                  <p className="mt-4 max-w-md text-sm leading-7 text-white/40">
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
                SEO Foundation
              </p>

              <h2
                className="
                  text-4xl
                  font-semibold
                  tracking-[-0.04em]
                  md:text-5xl
                "
              >
                Built for people.

                <span className="block text-white/30">
                  Structured for search.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/40">
                We combine clean technical structure with useful content
                and thoughtful user experience to create websites that
                search engines can understand.
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
              SEO that starts with

              <span className="text-white/30">
                {" "}a strategy.
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

                <p className="mt-3 text-sm leading-7 text-white/40">
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
                Ready To Grow?
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
                Let's put your website

                <span className="block text-white/30">
                  where people can find it.
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

export default Seo;