import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const trailRefs = useRef([]);
  const positions = useRef(
    Array(5)
      .fill({ x: -100, y: -100 })
      .map((pos) => ({ ...pos }))
  );

  const lerp = (start, end, amt) => start + (end - start) * amt;

  useEffect(() => {
    const handleMouseMove = (e) => {
      positions.current[0].x = e.clientX;
      positions.current[0].y = e.clientY;
    };

    const animate = () => {
      for (let i = 1; i < positions.current.length; i++) {
        positions.current[i].x = lerp(
          positions.current[i].x,
          positions.current[i - 1].x,
          0.25
        );
        positions.current[i].y = lerp(
          positions.current[i].y,
          positions.current[i - 1].y,
          0.25
        );
      }

      positions.current.forEach((pos, i) => {
        if (trailRefs.current[i]) {
          trailRefs.current[i].style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
        }
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (trailRefs.current[i] = el)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: `${18 - i * 3}px`,
            height: `${18 - i * 3}px`,
            borderRadius: "9999px",
            backgroundColor: `rgba(14, 165, 233, ${1 - i * 0.2})`,
            pointerEvents: "none",
            zIndex: 9999,
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(2px)",
            mixBlendMode: "difference",
            transition: "transform 0.2s ease-out, opacity 0.2s ease-in",
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
