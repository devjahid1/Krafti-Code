export default function SectionHeading({ eyebrow, children, className = '' }) {
  return (
    <div className={`mx-auto max-w-[52.5rem] text-center ${className}`} data-reveal>
      <p className="mb-5 font-inclusive text-sm uppercase tracking-[0.11em] text-[#b38ff9]">{eyebrow}</p>
      <h2 className="text-balance text-[clamp(2rem,6vw,3rem)] font-semibold leading-[1.18] tracking-normal text-white lg:tracking-[-0.04em]">
        {children}
      </h2>
    </div>
  );
}
