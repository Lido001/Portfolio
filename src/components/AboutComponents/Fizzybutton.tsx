
import React from "react";
import { Download } from "lucide-react"; // Importing Download icon from Lucide

const SwipeButton: React.FC = () => {
  return (
    <button className="relative group w-64 h-16 text-lg rounded font-semibold uppercase border border-black bg-white text-black overflow-hidden flex items-center justify-center">
      {/* Background Swipe Effect */}
      <span className="absolute inset-0 bg-black transform -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
      
      {/* Button Content: Text + Icon */}
      <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 ease-in-out group-hover:text-white">
        <span>Download CV</span>
        <Download className="w-5 h-5 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />
      </span>
    </button>
  );
};

export default SwipeButton;



