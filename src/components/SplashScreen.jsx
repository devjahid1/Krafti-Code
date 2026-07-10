import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function SplashScreen({ onFinish }) {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const progressRef = useRef(null);
  const glow1Ref = useRef(null);
const glow2Ref = useRef(null);
const bgRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }

        return prev + 1;
      });
    }, 25);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
  if (progress !== 100) return;

  const tl = gsap.timeline({
    onComplete: () => {
      onFinish?.();
    },
  });

  tl.to(progressRef.current, {
    opacity: 0,
    y: 20,
    duration: 0.3,
  })

    .to(
      subtitleRef.current,
      {
        opacity: 0,
        y: 20,
        duration: 0.3,
      },
      "-=.2"
    )

    .to(
      titleRef.current,
      {
        opacity: 0,
        y: 20,
        duration: 0.3,
      },
      "-=.2"
    )

    .to(
      logoRef.current,
      {
        scale: 1.4,
        opacity: 0,
        duration: 0.6,
        ease: "power3.inOut",
      },
      "-=.2"
    )

    .to(
      containerRef.current,
      {
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
      },
      "-=.2"
    );
}, [progress, onFinish]);

useGSAP(() => {

  const tl = gsap.timeline();

tl.from(logoRef.current, {
  opacity: 0,
  scale: 0.9,
  duration: 0.8,
  ease: "power2.out",
})

  .from(titleRef.current,{
    y:40,
    opacity:0,
    duration:.8
  },"-=.5")

  .from(subtitleRef.current,{
    y:20,
    opacity:0,
    duration:.8
  },"-=.4")

  .from(progressRef.current,{
    opacity:0,
    y:30,
    duration:.6
  },"-=.4");


  gsap.to(glow2Ref.current,{
    x:40,
    y:-25,
    duration:6,
    repeat:-1,
    yoyo:true,
    ease:"sine.inOut"
  });

  gsap.to(bgRef.current,{
    rotation:360,
    duration:30,
    repeat:-1,
    ease:"none"
  });

});

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[#050505]"
    >
        <div
  ref={bgRef}
  className="absolute inset-0 bg-[radial-gradient(circle_at_center,#722df710,transparent_65%)]"
/>
      {/* Purple Glow */}
<div
  ref={glow1Ref}
  className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#722df7] opacity-20 blur-[160px]"
/>

<div
  ref={glow2Ref}
  className="absolute right-20 top-16 h-56 w-56 rounded-full bg-[#9b5cff] opacity-30 blur-[120px]"
/>

      <div className="relative z-10 flex w-full max-w-lg flex-col items-center px-6">

        {/* Logo */}

        <img
          ref={logoRef}
          src="/assets/logo.webp"
          alt="Krafti Code"
          className="className=w-28 select-none"
        />

        {/* Title */}

        <h1
          ref={titleRef}
          className="mt-7 text-center text-4xl font-bold tracking-[0.18em] text-white"
        >
          KRAFTI CODE
        </h1>

        {/* Subtitle */}

        <p
          ref={subtitleRef}
          className="mt-3 text-center text-[#b38ff9]"
        >
          Your Vision. Our Code. Your Success.
        </p>

        {/* Progress */}

        <div
          ref={progressRef}
          className="mt-12 w-full"
        >
          <div className="h-2 overflow-hidden rounded-full bg-[#181818]">

            <div
              className="h-full rounded-full bg-gradient-to-r from-[#722df7] to-[#9b5cff] transition-all duration-300"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

          <div className="mt-4 flex items-center justify-between">

            <span className="text-sm text-[#888]">
              Loading...
            </span>

            <span className="text-sm font-semibold text-[#b38ff9]">
              {progress}%
            </span>

          </div>

        </div>

      </div>
    </div>
  );
}

