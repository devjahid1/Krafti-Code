import { processSteps } from "../data/content.js";
import vectorImg from "../assets/Vector5.png";

export default function Process() {
  return (
    <section id="process" className="bg-[#08010a] py-16 lg:py-[5.375rem]">
      <div className="site-container">
        {/* Heading */}
        <div className="max-w-[32.5rem]" data-reveal>
          <p className="font-inclusive text-sm uppercase tracking-[0.11em] text-[#b38ff9]">
            Our Process
          </p>

          <h2 className="mt-4 text-balance text-[48px] font-semibold leading-tight lg:tracking-[-0.04em]">
            A Simple Process For{" "}
            <span className="block text-[#722df7]">Power Results</span>
          </h2>

          {/* Vector */}
          <img src={vectorImg} alt="" className="mt-3 w-[320px]" />
        </div>

        {/* Process */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-5">
          {processSteps.map(([icon, title, body], index) => (
            <article key={title} className="relative flex flex-col" data-reveal>
              {/* Connector Line */}
              {index !== processSteps.length - 1 && (
                <div className="absolute left-14 right-[-4rem] top-7 hidden lg:flex items-center z-0">
                  {/* Start Dot */}
                  <span className=" mx-1 h-2 w-2 rounded-full bg-[#722df7] shrink-0" />

                  {/* Dotted Line */}
                  <div
                    className="h-[1px] flex-1"
                    style={{
                      
                      backgroundImage:
                        "repeating-linear-gradient(to right,#B592F9 0 6px,transparent 6px 14px)",
                    }}
                  />

                  {/* End Dot */}
                  <span className="h-2 w-2 rounded-full bg-[#722df7] shrink-0" />
                </div>
              )}

              {/* Icon */}
              <div className="relative z-10 mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-[#6418fd]/60 bg-[#130822]">
                <img
                  src={icon}
                  alt={title}
                  className="h-[91px] w-[91px] object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-[18px] font-semibold text-white">{title}</h3>

              {/* Description */}
              <p className="mt-3 whitespace-pre-line text-[14px] leading-7 text-[#8f8f8f]">
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
