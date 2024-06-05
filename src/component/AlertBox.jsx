// src/components/AlertBox.jsx
import React from "react";

const AlertBox = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed top-0 flex items-center justify-center z-50 pt-2 w-full">
      <div className="bg-[#06372e] p-6 rounded-lg shadow-lg max-w-md w-80 flex items-right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <p className="block text-white text-left">{message}</p>
      </div>
    </div>
  );
};

export default AlertBox;
