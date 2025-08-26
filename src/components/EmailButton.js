import React, { useState } from 'react';

const EmailButton = ({ text }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleCopy = () => {
    const email = "landreesen@uchicago.edu";
    navigator.clipboard.writeText(email).then(() => {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 1000); // Hide popup after 1 second
    });
  };

  return (
    <div className="relative inline-block">
      {/* Gradient Border Wrapper */}
      <div className="relative w-auto inline-block bg-gradient-to-r from-white to-gray-400 rounded-full p-[2px]">
        <button
          className="px-10 py-4 text-xl text-white bg-black rounded-full flex items-center justify-center hover:bg-white hover:text-black"
          onClick={handleCopy}
        >
          {text}
        </button>
      </div>
      {/* Popup Notification */}
      {showPopup && (
        <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm py-2 px-4 rounded-lg shadow-md text-center">
          Copied to clipboard!
        </div>
      )}
    </div>
  );
};

export default EmailButton;
