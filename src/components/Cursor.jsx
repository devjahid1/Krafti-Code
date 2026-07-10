import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);

  const dotRef = useRef(null);

  const mouse = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const current = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const velocity = useRef({
    x: 0,
    y: 0,
  });


  const animationRef = useRef(null);

  useEffect(() => {
    if (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0
    ) {
      return;
    }

    document.body.style.cursor = "none";

    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", move, {
      passive: true,
    });

    const animate = () => {
      const dx =
        mouse.current.x - current.current.x;

      const dy =
        mouse.current.y - current.current.y;

const lerp = (start, end, amount) =>
  start + (end - start) * amount;

current.current.x = lerp(
  current.current.x,
  mouse.current.x,
  0.18
);

current.current.y = lerp(
  current.current.y,
  mouse.current.y,
  0.18
);

if (cursorRef.current) {
  cursorRef.current.style.transform = `
    translate3d(
      ${current.current.x}px,
      ${current.current.y}px,
      0
    )
    translate(-50%, -50%)
  `;
}

      if (dotRef.current) {
        dotRef.current.style.transform = `
          translate3d(
            ${current.current.x}px,
            ${current.current.y}px,
            0
          )
          translate(-50%,-50%)
        `;
      }

      animationRef.current =
        requestAnimationFrame(animate);
    };

    animate();

        const handleMouseDown = () => {
      cursorRef.current?.classList.add("cursor-click");
      dotRef.current?.classList.add("cursor-dot-click");
    };

    const handleMouseUp = () => {
      cursorRef.current?.classList.remove("cursor-click");
      dotRef.current?.classList.remove("cursor-dot-click");
    };

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    const hoverables = document.querySelectorAll(
      "button,a,[data-cursor]"
    );

    const enter = () => {
      cursorRef.current?.classList.add("cursor-hover");
    };

    const leave = () => {
      cursorRef.current?.classList.remove("cursor-hover");
    };

    hoverables.forEach((item) => {
      item.addEventListener("mouseenter", enter);
      item.addEventListener("mouseleave", leave);
    });

    return () => {
      document.body.style.cursor = "";

      window.removeEventListener(
        "mousemove",
        move
      );

      window.removeEventListener(
        "mousedown",
        handleMouseDown
      );

      window.removeEventListener(
        "mouseup",
        handleMouseUp
      );

      hoverables.forEach((item) => {
        item.removeEventListener(
          "mouseenter",
          enter
        );

        item.removeEventListener(
          "mouseleave",
          leave
        );
      });

      cancelAnimationFrame(
        animationRef.current
      );
    };
  }, []);

    return (
    <>
      {/* Main Ring */}
      <div
        ref={cursorRef}
        className="custom-cursor"
      >
        <div className="cursor-ring" />
      </div>

      {/* Inner Glow Dot */}
      <div
        ref={dotRef}
        className="cursor-dot"
      />
    </>
  );
}