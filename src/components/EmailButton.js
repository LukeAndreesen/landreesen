import React, { useState } from "react";

const EmailButton = ({ text }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleCopy = () => {
    const email = "landreesen@uchicago.edu";
    navigator.clipboard.writeText(email).then(() => {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 1000);
    });
  };

  return (
    <div className="relative inline-block">
      <div className="relative inline-block rounded-full bg-[linear-gradient(120deg,#ffffff,#10b981,#fbbf24)] p-[1px]">
        <button
          className="min-h-12 rounded-full bg-black px-6 text-sm font-medium tracking-normal text-white transition-colors duration-200 hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 md:px-8 md:text-base"
          onClick={handleCopy}
        >
          {text}
        </button>
      </div>
      {showPopup && (
        <div className="absolute left-1/2 top-full mt-3 min-w-40 -translate-x-1/2 rounded-[8px] border border-white/10 bg-zinc-950 px-4 py-2 text-center text-sm text-white shadow-xl">
          Copied to clipboard!
        </div>
      )}
    </div>
  );
};

export default EmailButton;
