import React, { useEffect, useRef, useCallback } from "react";

const CustomCursor = ({
  trailCount = 6,
  maxSize = 20,
  baseColor = "14, 165, 233", // rgb without alpha
  lerpAmount = 0.2,
}) => {
  const trailRefs = useRef([]);
  const positions = useRef(
    Array(trailCount)
      .fill({ x: -100, y: -100 })
      .map((pos) => ({ ...pos }))
  );

  const lerp = useCallback((start, end, amt) => start + (end - start) * amt, []);

  useEffect(() => {
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
          // Opacity goes from 1 (first circle) down to ~0.2 (last circle)
          el.style.opacity = `${1 - i / (positions.current.length + 1)}`;
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
            backgroundColor: `rgba(${baseColor}, ${1 - i / (trailCount + 1)})`,
            pointerEvents: "none",
            zIndex: 9999,
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(2px)",
            // mixBlendMode: "difference", // Uncomment if you want cool invert effect, but test for visibility issues
            willChange: "transform, opacity",
            // transition removed for smoother rAF animation
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
