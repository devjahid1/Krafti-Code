import { FiArrowUpRight, FiCheck } from "react-icons/fi";

const WebsiteDesign = ({ onContactOpen }) => {
  const features = [
    "Custom website design",
    "Responsive for all devices",
    "Modern and conversion-focused UI",
    "User-friendly navigation",
    "Brand-focused visual design",
    "Performance-conscious layouts",
  ];

  return (
    <main className="min-h-screen bg-black text-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-violet-600/20 blur-[150px]" />

          <div className="absolute bottom-[-200px] right-[-100px] w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[140px]" />
        </div>


        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 py-32">

          {/* Small Label */}

          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-sm text-white/60">
              <span className="w-2 h-2 rounded-full bg-violet-500" />
              Website Design
            </span>
          </div>


          {/* Heading */}

          <h1
            className="
              max-w-5xl
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              font-semibold
              tracking-[-0.05em]
              leading-[0.95]
            "
          >
            Websites that make
            <span className="block text-violet-400">
              your brand stand out.
            </span>
          </h1>


          {/* Description */}

          <p
            className="
              mt-8
              max-w-2xl
              text-base
              md:text-lg
              leading-8
              text-white/55
            "
          >
            We design modern, memorable, and conversion-focused websites
            that turn your ideas into a strong digital experience.
          </p>


          {/* CTA */}

          <div className="mt-10">

            <button
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
      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Left */}

            <div>

              <p className="text-sm uppercase tracking-[0.2em] text-violet-400 mb-5">
                Our Approach
              </p>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] leading-tight">
                Design with purpose,
                <span className="text-white/40">
                  {" "}not just decoration.
                </span>
              </h2>

            </div>


            {/* Right */}

            <div className="flex items-center">

              <p className="text-lg leading-8 text-white/50">
                A great website should do more than look beautiful.
                It should communicate your brand, guide your visitors,
                build trust, and make it easy for people to take action.
                That's what we focus on when designing every website.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHAT WE DESIGN
      ===================================================== */}

      <section className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">

          <div className="mb-16">

            <p className="text-sm uppercase tracking-[0.2em] text-violet-400 mb-5">
              What We Create
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.04em]">
              Everything your website
              <span className="text-white/40">
                {" "}needs.
              </span>
            </h2>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">

            {[
              {
                number: "01",
                title: "Landing Pages",
                text: "Focused landing pages designed to communicate your value and drive action.",
              },
              {
                number: "02",
                title: "Business Websites",
                text: "Professional websites that establish credibility and showcase your business.",
              },
              {
                number: "03",
                title: "Creative Websites",
                text: "Unique visual experiences for brands that want to stand apart from the crowd.",
              },
              {
                number: "04",
                title: "Portfolio Websites",
                text: "Elegant portfolio experiences that put your work front and center.",
              },
              {
                number: "05",
                title: "Agency Websites",
                text: "High-impact agency websites built around your services, story, and brand.",
              },
              {
                number: "06",
                title: "Product Websites",
                text: "Clear and engaging product experiences designed to turn visitors into customers.",
              },
            ].map((item) => (

              <div
                key={item.number}
                className="
                  bg-black
                  p-8
                  md:p-10
                  min-h-[260px]
                  transition-colors
                  duration-300
                  hover:bg-white/[0.03]
                "
              >

                <div className="flex justify-between items-start">

                  <span className="text-sm text-white/30">
                    {item.number}
                  </span>

                  <FiArrowUpRight
                    className="text-white/20"
                    size={20}
                  />

                </div>


                <div className="mt-16">

                  <h3 className="text-xl font-medium mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-7 text-white/40">
                    {item.text}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURES
      ===================================================== */}

      <section className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">

          <div className="grid lg:grid-cols-2 gap-16">

            {/* Left */}

            <div>

              <p className="text-sm uppercase tracking-[0.2em] text-violet-400 mb-5">
                Why Krafti Code
              </p>

              <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em] leading-tight">
                Built around your
                <span className="text-white/40">
                  {" "}brand.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-white/45 leading-7">
                We don't use a one-size-fits-all approach. Every design
                starts with understanding your business, audience, goals,
                and visual identity.
              </p>

            </div>


            {/* Right */}

            <div className="grid sm:grid-cols-2 gap-x-10">

              {features.map((feature, index) => (

                <div
                  key={index}
                  className="flex items-start gap-4 py-5 border-b border-white/10"
                >

                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-500/10 text-violet-400">
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

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">

          <div className="mb-16">

            <p className="text-sm uppercase tracking-[0.2em] text-violet-400 mb-5">
              Our Process
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.04em]">
              From idea to
              <span className="text-white/40">
                {" "}experience.
              </span>
            </h2>

          </div>


          <div className="grid md:grid-cols-4 gap-8">

            {[
              {
                number: "01",
                title: "Discover",
                text: "We understand your business, audience, goals, and requirements.",
              },
              {
                number: "02",
                title: "Strategy",
                text: "We create a clear structure and visual direction for the website.",
              },
              {
                number: "03",
                title: "Design",
                text: "We turn the strategy into a polished and engaging interface.",
              },
              {
                number: "04",
                title: "Refine",
                text: "We review, improve, and prepare the final experience.",
              },
            ].map((step) => (

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
          CTA
      ===================================================== */}

      <section className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-32">

          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-10
              md:p-16
              lg:p-20
              text-center
            "
          >

            <div className="absolute inset-0 pointer-events-none">

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] rounded-full bg-violet-600/20 blur-[120px]" />

            </div>


            <div className="relative z-10">

              <p className="text-sm uppercase tracking-[0.2em] text-violet-400 mb-5">
                Have a project in mind?
              </p>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.04em]">
                Let's build something
                <span className="block text-white/40">
                  worth remembering.
                </span>
              </h2>


              <button
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

export default WebsiteDesign;