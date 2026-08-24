import { FiArrowUpRight, FiCheck } from "react-icons/fi";

const WebDevelopment = ({ onContactOpen }) => {
  const technologies = [
    "React & modern JavaScript",
    "Responsive web development",
    "Fast and optimized websites",
    "Scalable architecture",
    "API & third-party integrations",
    "Clean and maintainable code",
  ];

  const services = [
    {
      number: "01",
      title: "Business Websites",
      text: "Fast, reliable, and scalable websites built around your business goals and digital presence.",
    },
    {
      number: "02",
      title: "Web Applications",
      text: "Interactive web applications designed to handle real-world business workflows and user needs.",
    },
    {
      number: "03",
      title: "Custom Development",
      text: "Tailored development solutions for unique ideas, products, platforms, and digital experiences.",
    },
    {
      number: "04",
      title: "E-Commerce",
      text: "Modern shopping experiences designed to make browsing, purchasing, and managing products simple.",
    },
    {
      number: "05",
      title: "CMS Development",
      text: "Flexible content-driven websites that make it easier to manage and update your digital content.",
    },
    {
      number: "06",
      title: "Web Integrations",
      text: "Connect your website with APIs, payment systems, external services, and business tools.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Understand",
      text: "We learn about your product, business, users, goals, and technical requirements.",
    },
    {
      number: "02",
      title: "Plan",
      text: "We define the architecture, features, technology, and development roadmap.",
    },
    {
      number: "03",
      title: "Build",
      text: "We turn the approved direction into a functional, responsive, and polished product.",
    },
    {
      number: "04",
      title: "Launch",
      text: "We test, refine, optimize, and prepare your website for a smooth launch.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Background Glow */}

        <div className="absolute inset-0 pointer-events-none">

          <div
            className="
              absolute
              top-[-200px]
              left-1/2
              -translate-x-1/2
              w-[650px]
              h-[650px]
              rounded-full
              bg-violet-600/20
              blur-[160px]
            "
          />

          <div
            className="
              absolute
              bottom-[-250px]
              right-[-100px]
              w-[450px]
              h-[450px]
              rounded-full
              bg-purple-500/10
              blur-[150px]
            "
          />

        </div>


        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 py-32">

          {/* Label */}

          <div className="mb-8">

            <span
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                text-sm
                text-white/60
              "
            >
              <span className="w-2 h-2 rounded-full bg-violet-500" />

              Web Development
            </span>

          </div>


          {/* Heading */}

          <h1
            className="
              max-w-6xl
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              font-semibold
              tracking-[-0.05em]
              leading-[0.95]
            "
          >
            We build websites
            <span className="block text-violet-400">
              that actually work.
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
            From business websites to custom web applications, we build
            fast, scalable, and reliable digital products that are designed
            to perform in the real world.
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
                Development That Matters
              </p>

              <h2
                className="
                  text-4xl
                  md:text-5xl
                  lg:text-6xl
                  font-semibold
                  tracking-[-0.04em]
                  leading-tight
                "
              >
                Clean code,
                <span className="text-white/40">
                  {" "}real results.
                </span>
              </h2>

            </div>


            {/* Right */}

            <div className="flex items-center">

              <p className="text-lg leading-8 text-white/50">
                A beautiful interface is only one part of a successful
                website. We focus on the technology behind the experience
                too — building websites that load quickly, work smoothly,
                adapt to different devices, and are ready to grow with
                your business.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">

          <div className="mb-16">

            <p className="text-sm uppercase tracking-[0.2em] text-violet-400 mb-5">
              What We Build
            </p>

            <h2
              className="
                text-4xl
                md:text-5xl
                lg:text-6xl
                font-semibold
                tracking-[-0.04em]
              "
            >
              Development for
              <span className="text-white/40">
                {" "}different needs.
              </span>
            </h2>

          </div>


          <div
            className="
              grid
              sm:grid-cols-2
              lg:grid-cols-3
              gap-px
              bg-white/10
              border
              border-white/10
            "
          >

            {services.map((service) => (

              <div
                key={service.number}
                className="
                  bg-black
                  p-8
                  md:p-10
                  min-h-[270px]
                  transition-colors
                  duration-300
                  hover:bg-white/[0.03]
                "
              >

                <div className="flex justify-between items-start">

                  <span className="text-sm text-white/30">
                    {service.number}
                  </span>

                  <FiArrowUpRight
                    className="text-white/20"
                    size={20}
                  />

                </div>


                <div className="mt-16">

                  <h3 className="text-xl font-medium mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm leading-7 text-white/40">
                    {service.text}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          TECHNOLOGY / FEATURES
      ===================================================== */}

      <section className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">

          <div className="grid lg:grid-cols-2 gap-16">

            {/* Left */}

            <div>

              <p className="text-sm uppercase tracking-[0.2em] text-violet-400 mb-5">
                Built For Performance
              </p>

              <h2
                className="
                  text-4xl
                  md:text-5xl
                  font-semibold
                  tracking-[-0.04em]
                  leading-tight
                "
              >
                Technology that
                <span className="text-white/40">
                  {" "}supports your goals.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-white/45 leading-7">
                We choose technologies and development practices based on
                what your project actually needs — not simply what's
                trending.
              </p>

            </div>


            {/* Right */}

            <div className="grid sm:grid-cols-2 gap-x-10">

              {technologies.map((technology, index) => (

                <div
                  key={index}
                  className="
                    flex
                    items-start
                    gap-4
                    py-5
                    border-b
                    border-white/10
                  "
                >

                  <span
                    className="
                      mt-1
                      flex
                      h-6
                      w-6
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
                    {technology}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          DEVELOPMENT PROCESS
      ===================================================== */}

      <section className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">

          <div className="mb-16">

            <p className="text-sm uppercase tracking-[0.2em] text-violet-400 mb-5">
              Our Process
            </p>

            <h2
              className="
                text-4xl
                md:text-5xl
                lg:text-6xl
                font-semibold
                tracking-[-0.04em]
              "
            >
              From concept to
              <span className="text-white/40">
                {" "}production.
              </span>
            </h2>

          </div>


          <div className="grid md:grid-cols-4 gap-8">

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

            {/* Glow */}

            <div className="absolute inset-0 pointer-events-none">

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  w-[400px]
                  h-[300px]
                  rounded-full
                  bg-violet-600/20
                  blur-[120px]
                "
              />

            </div>


            <div className="relative z-10">

              <p className="text-sm uppercase tracking-[0.2em] text-violet-400 mb-5">
                Ready to Build?
              </p>

              <h2
                className="
                  text-4xl
                  md:text-5xl
                  lg:text-6xl
                  font-semibold
                  tracking-[-0.04em]
                "
              >
                Let's turn your idea
                <span className="block text-white/40">
                  into something real.
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

export default WebDevelopment;