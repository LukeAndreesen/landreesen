import React, { useRef, useEffect } from 'react';

// Source: https://ibelick.com/blog/create-animated-gradient-borders-with-css
const Rectangle = ({ children, width='w-[700px]', height='w-[700px]', bg='#131219', borderWidth='border-2', borderRound='rounded-3xl'}) => {
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
        "--border-color": "linear-gradient(var(--angle), #059669, #FBBF24, #F59E0B, #F87171, #6366F1)",
        "--bg-color": `linear-gradient(${bg}, ${bg})`,
      }}
      className={`flex ${height} ${width} items-center justify-center ${borderRound} ${borderWidth} border-[#0000] p-3 [background:padding-box_var(--bg-color),border-box_var(--border-color)]`}
    >
      {children}
    </div>
  );
};
  

  
export default Rectangle;
  