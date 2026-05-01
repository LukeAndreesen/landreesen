import React, { useRef, useEffect } from "react";

// Source: https://ibelick.com/blog/create-animated-gradient-borders-with-css
const Rectangle = ({
  children,
  width = "w-[700px]",
  height = "w-[700px]",
  bg = "#050505",
  borderWidth = "border",
  borderRound = "rounded-[8px]",
  className = "",
}) => {
  const boxRef = useRef(null);

  useEffect(() => {
    const boxElement = boxRef.current;

    if (!boxElement) {
      return;
    }

    const updateAnimation = () => {
      const angle =
        (parseFloat(boxElement.style.getPropertyValue("--angle")) + 0.2) % 360;
      boxElement.style.setProperty("--angle", `${angle}deg`);
      requestAnimationFrame(updateAnimation);
    };

    requestAnimationFrame(updateAnimation);
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        "--angle": "0deg",
        "--border-color": "linear-gradient(var(--angle), rgba(255,255,255,.92), rgba(16,185,129,.75), rgba(251,191,36,.78), rgba(99,102,241,.8), rgba(255,255,255,.92))",
        "--bg-color": `linear-gradient(${bg}, ${bg})`,
      }}
      className={`flex ${height} ${width} items-center justify-center ${borderRound} ${borderWidth} border-[#0000] p-2 shadow-[0_24px_90px_rgba(0,0,0,.45)] [background:padding-box_var(--bg-color),border-box_var(--border-color)] ${className}`}
    >
      {children}
    </div>
  );
};

export default Rectangle;
