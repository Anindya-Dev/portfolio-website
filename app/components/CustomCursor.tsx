"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      setIsHovering(Boolean(target.closest("a, button, [data-cursor-hover]")));
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999] hidden md:block mix-blend-difference"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="w-2 h-2 rounded-full bg-white" />
      </div>
      <div
        className="fixed pointer-events-none z-[9998] hidden md:block transition-transform duration-200"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.6 : 1})`,
          opacity: isHovering ? 0.6 : 1,
        }}
      >
        <div
          className="w-8 h-8 rounded-full border border-accent transition-colors duration-200"
          style={{
            backgroundColor: isHovering
              ? "rgba(124, 92, 255, 0.15)"
              : "transparent",
          }}
        />
      </div>
    </>
  );
}
