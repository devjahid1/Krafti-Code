import arrow from "../assets/aroow.png";
export default function Button({
  children,
  variant = 'primary',
  className = '',
  as = 'button',
  type = 'button',
  ...props
}) {
  const styles =
    variant === 'primary'
      ? 'bg-[#6418fd] text-white shadow-[0_18px_55px_rgba(100,24,253,0.28)]'
      : 'border border-[#6318b3] bg-[#020202] text-white';
  const Component = as;

  return (
    <Component
      className={`group inline-flex min-h-12 items-center justify-center gap-3 rounded-lg px-5 text-center text-sm font-medium tracking-normal transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_65px_rgba(114,45,247,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b38ff9] sm:px-7 sm:text-[15px] ${styles} ${className}`}
      type={Component === 'button' ? type : undefined}
      {...props}
    >
      <span>{children}</span>
      <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
        <img src={arrow} alt="" />
      </span>
    </Component>
  );
}
