import React, { useEffect, useRef, useCallback } from "react";

const CustomCursor = ({
  trailCount = 6,
  maxSize = 20,
  lerpAmount = 0.2,
  colorFrom = [14, 165, 233],   // Tailwind Sky-500
  colorTo = [236, 72, 153],     // Tailwind Pink-500
}) => {
  const trailRefs = useRef([]);
  const positions = useRef(
    Array(trailCount)
      .fill({ x: -100, y: -100 })
      .map((pos) => ({ ...pos }))
  );

  const lerp = useCallback((start, end, amt) => start + (end - start) * amt, []);

  // Function to interpolate between two colors
  const getGradientColor = (index) => {
    const t = index / (trailCount - 1); // 0 to 1
    const r = Math.round(lerp(colorFrom[0], colorTo[0], t));
    const g = Math.round(lerp(colorFrom[1], colorTo[1], t));
    const b = Math.round(lerp(colorFrom[2], colorTo[2], t));
    const a = 1 - index / (trailCount + 1); // opacity
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  };

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      positions.current[0].x = e.clientX;
      positions.current[0].y = e.clientY;
    };

    let animationFrameId;

    const animate = () => {
      for (let i = 1; i < positions.current.length; i++) {
        positions.current[i].x = lerp(
          positions.current[i].x,
          positions.current[i - 1].x,
          lerpAmount
        );
        positions.current[i].y = lerp(
          positions.current[i].y,
          positions.current[i - 1].y,
          lerpAmount
        );
      }

      positions.current.forEach((pos, i) => {
        const el = trailRefs.current[i];
        if (el) {
          el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [lerp, lerpAmount]);

  return (
    <>
      {[...Array(trailCount)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (trailRefs.current[i] = el)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: `${maxSize - i * 3}px`,
            height: `${maxSize - i * 3}px`,
            borderRadius: "50%",
            backgroundColor: getGradientColor(i),
            pointerEvents: "none",
            zIndex: 9999,
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            willChange: "transform, opacity",
            transition: "opacity 0.3s ease",
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
