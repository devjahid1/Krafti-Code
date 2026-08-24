import {
  FaArrowRight,
  FaBriefcase,
  FaLocationDot,
  FaCode,
  FaUsers,
} from "react-icons/fa6";

import Footer from "../components/Footer";

const positions = [
  {
    title: "Senior Web Developer",
    location: "Bangladesh",
    type: "Full-Time",
    department: "Engineering / Development",
    salary: "৳50,000 – ৳80,000 / month",
    experience: "Senior Level",
    applyUrl:
      "https://krafti-code.breezy.hr/p/fc50255cd20d/senior-web-developer",
  },
];

export default function Careers() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative">
        {/* Background Glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#722df7]/10 blur-[140px]" />

          <div className="absolute right-[-200px] top-[-100px] h-[600px] w-[600px] rounded-full bg-[#722df7]/10 blur-[160px]" />

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="site-container relative pt-32 pb-28 sm:pt-40 sm:pb-36 lg:pt-48 lg:pb-40">

          {/* Small Label */}
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-10 bg-[#722df7]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#8d5cff]">
              Careers / 01
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-6xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[88px]">
            Build the future.
            <br />

            <span className="bg-gradient-to-r from-[#8c4dff] via-[#722df7] to-[#b98cff] bg-clip-text text-transparent">
              With us.
            </span>
          </h1>

          {/* Description */}
          <div className="mt-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

            <p className="max-w-2xl text-base leading-7 text-[#858585] sm:text-lg">
              We are building a team of creative thinkers, designers,
              developers, and problem solvers who care about creating
              meaningful digital experiences.
            </p>

            <div className="hidden text-right lg:block">
              <p className="text-xs uppercase tracking-[0.25em] text-[#555]">
                Krafti Code
              </p>

              <p className="mt-2 text-sm text-[#777]">
                Digital Experiences
              </p>
            </div>

          </div>

          {/* Scroll Indicator */}
          <div className="mt-20 flex items-center gap-4 text-xs uppercase tracking-[0.25em] text-[#555]">
            <span className="flex h-8 w-5 items-start justify-center rounded-full border border-[#333] p-1">
              <span className="h-2 w-1 rounded-full bg-[#722df7]" />
            </span>

            Explore opportunities
          </div>

        </div>
      </section>


      {/* =====================================================
          OPEN POSITIONS
      ===================================================== */}

      <section className="relative pb-32 sm:pb-40">

        <div className="site-container">

          {/* Section Header */}
          <div className="mb-12 flex flex-col justify-between gap-6 border-b border-[#1a1a1a] pb-8 sm:flex-row sm:items-end">

            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#722df7]">
                  Join Krafti Code
                </span>
              </div>

              <h2 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
                Open Positions
              </h2>
            </div>

            <div className="flex items-center gap-3 text-sm text-[#666]">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#222] text-white">
                {positions.length}
              </span>

              <span>
                {positions.length === 1 ? "Open role" : "Open roles"}
              </span>
            </div>

          </div>


          {/* Jobs */}
          <div className="space-y-4">

            {positions.map((position, index) => (

              <article
                key={position.title}
                className="group relative overflow-hidden rounded-2xl border border-[#1c1c1c] bg-[#070707] transition-all duration-500 hover:-translate-y-1 hover:border-[#722df7]/40"
              >

                {/* Hover Glow */}
                <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-[#722df7]/10 opacity-0 blur-[90px] transition duration-500 group-hover:opacity-100" />

                <div className="relative p-6 sm:p-8 lg:p-10">

                  {/* Top Row */}
                  <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                    {/* Left */}
                    <div className="flex gap-5">

                      {/* Number */}
                      <span className="hidden pt-1 text-xs font-medium text-[#444] sm:block">
                        0{index + 1}
                      </span>

                      <div>

                        <div className="mb-3 flex items-center gap-3">
                          <span className="h-2 w-2 rounded-full bg-[#722df7] shadow-[0_0_12px_#722df7]" />

                          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#666]">
                            {position.department}
                          </span>
                        </div>

                        <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
                          {position.title}
                        </h3>

                        {/* Meta */}
                        <div className="mt-6 flex flex-wrap gap-2">

                          <span className="inline-flex items-center gap-2 rounded-full border border-[#222] bg-[#0c0c0c] px-4 py-2 text-xs text-[#999]">
                            <FaLocationDot className="text-[#722df7]" />
                            {position.location}
                          </span>

                          <span className="inline-flex items-center gap-2 rounded-full border border-[#222] bg-[#0c0c0c] px-4 py-2 text-xs text-[#999]">
                            <FaBriefcase className="text-[#722df7]" />
                            {position.type}
                          </span>

                          <span className="inline-flex items-center gap-2 rounded-full border border-[#222] bg-[#0c0c0c] px-4 py-2 text-xs text-[#999]">
                            <FaUsers className="text-[#722df7]" />
                            {position.experience}
                          </span>

                        </div>

                      </div>

                    </div>


                    {/* Right */}
                    <div className="flex flex-col gap-4 lg:items-end">

                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#555]">
                          Monthly Salary
                        </p>

                        <p className="mt-1 text-sm font-medium text-white">
                          {position.salary}
                        </p>
                      </div>

                      <a
                        href={position.applyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/button inline-flex w-fit items-center gap-3 rounded-full bg-[#722df7] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#8644ff] hover:shadow-[0_0_35px_rgba(114,45,247,0.35)]"
                      >
                        Apply Now

                        <FaArrowRight className="text-xs transition-transform duration-300 group-hover/button:translate-x-1" />
                      </a>

                    </div>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CULTURE / CTA
      ===================================================== */}

      <section className="site-container pb-32 sm:pb-40">

        <div className="relative overflow-hidden rounded-3xl border border-[#24113f] bg-[#05000c] px-6 py-20 text-center sm:px-12 sm:py-24">

          {/* Glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#722df7]/15 blur-[120px]" />

          <div className="relative">

            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-[#722df7]/30 bg-[#722df7]/10 text-[#8c5cff]">
              <FaCode />
            </div>

            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#722df7]">
              Your next chapter
            </p>

            <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Don't see the right position?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#777] sm:text-base">
              We are always interested in meeting talented people. If you
              believe you can make an impact at Krafti Code, we'd love to hear
              from you.
            </p>

            <a
              href="mailto:hello@krafticode.com?subject=Career Inquiry"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#722df7] bg-[#722df7] px-7 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#8644ff] hover:shadow-[0_0_35px_rgba(114,45,247,0.35)]"
            >
              Get in Touch
              <FaArrowRight className="text-xs" />
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />

    </main>
  );
}