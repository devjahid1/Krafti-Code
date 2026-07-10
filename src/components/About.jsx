import { FaCheckCircle } from "react-icons/fa";

const features = [
  "Modern UI/UX Design",
  "Responsive Web Development",
  "SEO Optimized Websites",
  "Fast Loading Performance",
  "Secure & Scalable Solutions",
  "Ongoing Support & Maintenance",
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-black py-20 lg:py-28"
    >
      <div className="site-container">

        {/* Header */}
        <div
          className="mx-auto mb-16 max-w-5xl text-center"
          data-reveal
        >
          <p className="font-inclusive text-sm uppercase tracking-[0.12em] text-[#722df7]">
            ABOUT KRAFTI CODE
          </p>

          <h2 className="mt-4 text-[48px] font-semibold leading-tight text-white lg:text-[48px] lg:leading-[1.15]">
            Creating Exceptional
            <br />
            <span className="text-[#722df7]">
              Websites For Ambitious Brands.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-[#9f9f9f]">
            We build modern, high-performing websites that help businesses
            establish a strong online presence, build trust, and grow with
            confidence in today's competitive digital world.
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-8 lg:grid-cols-2">

          {/* Left */}
{/* Left */}
<div
  className="rounded-3xl border border-[#181818] bg-[#07070a] p-8 transition-all duration-300 hover:border-[#722df7] hover:shadow-[0_0_35px_rgba(114,45,247,.15)]"
  data-reveal
>
  <h3 className="text-3xl font-semibold text-white">
    Who We Are
  </h3>

  <p className="mt-8 leading-9 text-[#9b9b9b]">
    <span className="font-semibold text-white">
      Krafti Code
    </span>{" "}
    is a modern web design and development agency dedicated to helping
    businesses build a powerful online presence. We believe that every
    business deserves a website that not only looks exceptional but also
    delivers real results.

    <br />
    <br />

    Our team specializes in creating fast, responsive, and user-focused
    digital experiences tailored to each client's unique goals. From
    corporate websites and landing pages to e-commerce platforms and custom
    web applications, we combine creativity with modern technologies to
    deliver solutions that perform.

    <br />
    <br />

    At Krafti Code, we don't just build websites—we build long-term
    partnerships. Our focus is on quality, transparency, innovation, and
    continuous support, ensuring every project helps our clients grow with
    confidence in today's digital world.

    <br />

  </p>

  <div className="mt-10 rounded-2xl border border-[#1d1d1d] bg-[#0d0d11] p-6">
    <h4 className="text-xl font-semibold text-white">
      Our Mission
    </h4>

    <p className="mt-4 leading-8 text-[#9b9b9b]">
      To empower businesses with innovative, high-quality digital solutions
      that strengthen their online presence, enhance user experience, and
      support sustainable business growth.
    </p>
  </div>

</div>

          {/* Right */}
          <div
            className="rounded-3xl border border-[#181818] bg-[#07070a] p-8 transition-all duration-300 hover:border-[#722df7] hover:shadow-[0_0_35px_rgba(114,45,247,.15)]"
            data-reveal
          >
            <h3 className="text-3xl font-semibold text-white">
              Why Choose Krafti Code?
            </h3>

            <p className="mt-5 leading-8 text-[#9b9b9b]">
              We combine creativity, strategy, and technology to create
              websites that don't just look beautiful—they perform
              exceptionally well and help your business grow.
            </p>

            <div className="mt-10 space-y-5">

              {features.map((feature) => (

                <div
                  key={feature}
                  className="flex items-center gap-4 rounded-2xl border border-[#171717] bg-[#0d0d11] p-5 transition-all duration-300 hover:border-[#722df7]"
                >

                  <FaCheckCircle
                    size={22}
                    className="text-[#722df7]"
                  />

                  <span className="text-white">
                    {feature}
                  </span>

                </div>

              ))}

            </div>

            <a
              href="#portfolio"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#722df7] px-7 py-4 font-medium text-white transition-all duration-300 hover:bg-[#8b50ff]"
            >
              Explore Our Portfolio

              <span>→</span>

            </a>

          </div>

        </div>

      </div>
    </section>
  );
}