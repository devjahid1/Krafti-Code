import {
  FiArrowUpRight,
  FiCheck,
  FiMousePointer,
} from "react-icons/fi";

const UiUx = ({ onContactOpen }) => {
  const principles = [
    {
      number: "01",
      title: "User First",
      text: "Every interaction starts with understanding the people using your product.",
    },
    {
      number: "02",
      title: "Clear by Design",
      text: "We simplify complex ideas into interfaces that feel natural and easy to use.",
    },
    {
      number: "03",
      title: "Built to Scale",
      text: "Flexible design systems keep your product consistent as it grows.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Discover",
      text: "We research your users, business goals, competitors, and product requirements.",
    },
    {
      number: "02",
      title: "Structure",
      text: "We map user flows, information architecture, and the overall experience.",
    },
    {
      number: "03",
      title: "Prototype",
      text: "We transform ideas into interactive interfaces that can be tested and refined.",
    },
    {
      number: "04",
      title: "Refine",
      text: "We polish interactions, visual details, and usability before the final handoff.",
    },
  ];

  const capabilities = [
    "User research",
    "User journey mapping",
    "Wireframing",
    "Interactive prototypes",
    "Design systems",
    "Responsive interface design",
    "UX audits",
    "Product interface design",
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
              left-1/2
              top-1/2
              h-[700px]
              w-[700px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-violet-600/10
              blur-[180px]
            "
          />

          <div
            className="
              absolute
              right-[-100px]
              top-20
              h-[350px]
              w-[350px]
              rounded-full
              bg-fuchsia-500/10
              blur-[140px]
            "
          />

        </div>


        {/* Background Grid */}

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

          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_.9fr]">

            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <div>

              {/* Label */}

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

                  UI / UX Design
                </span>

              </div>


              {/* Heading */}

              <h1
                className="
                  text-5xl
                  font-semibold
                  leading-[0.92]
                  tracking-[-0.06em]
                  sm:text-6xl
                  md:text-7xl
                  lg:text-[88px]
                "
              >
                Design that

                <span className="block text-white/35">
                  feels right.
                </span>

              </h1>


              {/* Description */}

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
                We create thoughtful digital experiences where usability,
                visual design, and human behavior come together.
              </p>


              {/* CTA */}

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


            {/* =================================================
                DESIGN VISUAL
            ================================================= */}

            <div className="relative hidden h-[500px] lg:block">

              {/* Main UI Card */}

              <div
                className="
                  absolute
                  left-10
                  top-10
                  h-[320px]
                  w-[430px]
                  rotate-[-5deg]
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#111]
                  shadow-2xl
                "
              >

                {/* Browser Header */}

                <div
                  className="
                    flex
                    h-10
                    items-center
                    gap-2
                    border-b
                    border-white/10
                    px-4
                  "
                >
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                </div>


                {/* UI Content */}

                <div className="p-7">

                  <div className="h-2 w-20 rounded-full bg-violet-400/70" />

                  <div className="mt-5 h-8 w-64 rounded-lg bg-white/10" />

                  <div className="mt-3 h-3 w-48 rounded-full bg-white/5" />

                  <div className="mt-8 grid grid-cols-3 gap-3">

                    <div className="h-20 rounded-xl bg-white/[0.04]" />

                    <div className="h-20 rounded-xl bg-violet-500/10" />

                    <div className="h-20 rounded-xl bg-white/[0.04]" />

                  </div>

                </div>

              </div>


              {/* Floating Interaction Card */}

              <div
                className="
                  absolute
                  right-0
                  top-24
                  w-[190px]
                  rotate-[7deg]
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#141414]
                  p-5
                  shadow-2xl
                "
              >

                <div className="flex items-center justify-between">

                  <span className="text-xs text-white/40">
                    Interaction
                  </span>

                  <FiMousePointer
                    className="text-violet-400"
                    size={16}
                  />

                </div>


                <div className="mt-6">

                  <div
                    className="
                      flex
                      h-10
                      w-full
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-violet-500/20
                      bg-violet-500/10
                    "
                  >
                    <span className="text-xs text-violet-300">
                      Explore
                    </span>
                  </div>

                </div>

              </div>


              {/* User Flow Card */}

              <div
                className="
                  absolute
                  bottom-10
                  left-0
                  w-[210px]
                  rotate-[4deg]
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#101010]
                  p-5
                  shadow-2xl
                "
              >

                <span className="text-xs text-white/35">
                  User Flow
                </span>


                <div className="mt-5 space-y-3">

                  <div className="flex items-center gap-3">

                    <span className="h-7 w-7 rounded-lg bg-violet-500/15" />

                    <span className="h-2 w-24 rounded-full bg-white/10" />

                  </div>


                  <div className="ml-3 h-5 w-px bg-white/10" />


                  <div className="flex items-center gap-3">

                    <span className="h-7 w-7 rounded-lg bg-white/5" />

                    <span className="h-2 w-20 rounded-full bg-white/10" />

                  </div>

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
              Experience Over Decoration
            </p>


            <h2
              className="
                text-4xl
                font-semibold
                leading-[1]
                tracking-[-0.05em]
                md:text-6xl
                lg:text-7xl
              "
            >
              Good design looks

              <span className="text-white/35">
                {" "}beautiful.
              </span>

              <br />

              Great design feels

              <span className="text-violet-400">
                {" "}effortless.
              </span>

            </h2>


            <p
              className="
                mt-8
                max-w-2xl
                text-lg
                leading-8
                text-white/45
              "
            >
              We think beyond colors, typography, and screens.
              We think about what happens before the click,
              during the interaction, and after it.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          PRINCIPLES
      ===================================================== */}

      <section className="border-t border-white/10">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">

          <div className="grid gap-px border border-white/10 bg-white/10 lg:grid-cols-3">

            {principles.map((item) => (

              <div
                key={item.number}
                className="
                  min-h-[300px]
                  bg-[#050505]
                  p-8
                  transition-colors
                  duration-300
                  hover:bg-white/[0.025]
                  md:p-10
                "
              >

                <span className="text-sm text-violet-400">
                  {item.number}
                </span>


                <h3 className="mt-20 text-2xl font-medium">
                  {item.title}
                </h3>


                <p className="mt-4 text-sm leading-7 text-white/40">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CAPABILITIES
      ===================================================== */}

      <section className="border-t border-white/10">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">

          <div className="grid gap-16 lg:grid-cols-2">

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
                What We Do
              </p>


              <h2
                className="
                  text-4xl
                  font-semibold
                  tracking-[-0.04em]
                  md:text-5xl
                "
              >
                From first sketch

                <span className="text-white/35">
                  {" "}to final interaction.
                </span>

              </h2>

            </div>


            <div className="grid sm:grid-cols-2">

              {capabilities.map((item, index) => (

                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-4
                    border-b
                    border-white/10
                    py-5
                  "
                >

                  <span className="text-xs text-white/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>


                  <span className="text-sm text-white/60">
                    {item}
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

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">

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
                text-4xl
                font-semibold
                tracking-[-0.04em]
                md:text-5xl
                lg:text-6xl
              "
            >
              Think.

              <span className="text-white/30">
                {" "}Structure.
              </span>

              <span className="text-white/50">
                {" "}Design.
              </span>

              <span className="text-violet-400">
                {" "}Refine.
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

            {/* CTA Glow */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[300px]
                w-[450px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-violet-600/20
                blur-[130px]
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
                Have an idea?
              </p>


              <h2
                className="
                  text-4xl
                  font-semibold
                  tracking-[-0.04em]
                  md:text-5xl
                  lg:text-6xl
                "
              >
                Let's design an experience

                <span className="block text-white/35">
                  people actually enjoy.
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

export default UiUx;