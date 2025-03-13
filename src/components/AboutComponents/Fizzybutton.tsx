import React, { useState } from "react";
import { Download, CheckCircle } from "lucide-react";
import Swal from "sweetalert2";
import resume from "/VISUAL STUDIO/PROJECTS/REACT PROJECTS/Personal Portfolio/public/Lido_CV.pdf";

const SwipeButton: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  const handleDownload = async () => {
    if (downloadComplete) {
      const result = await Swal.fire({
        title: "File Already Downloaded!",
        text: "Do you want to download it again?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, download again",
        cancelButtonText: "Cancel",
      });

      if (!result.isConfirmed) return; // If user cancels, stop here
    }

    const pdfUrl = resume // File should be in 'public' folder
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Lido_CV.pdf";

    setIsDownloading(true);
    setDownloadComplete(false);

    setTimeout(() => {
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsDownloading(false);
      setDownloadComplete(true);
      Swal.fire({
        title: "Download Complete!",
        text: "Your CV has been downloaded successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });
    }, 1500); // Simulated delay for a better user experience
  };

  return (
    <div className="">
      {/* Button */}
      <button
        onClick={handleDownload}
        className={`relative group w-64 h-14 py-7 px-1 md:w-56 md:h-12 text-lg md:text-base rounded font-semibold uppercase border border-black bg-white text-black overflow-hidden flex items-center justify-center shadow-md transition-all duration-300 
        ${isDownloading ? "opacity-50 pointer-events-none" : ""}`}
      >
        {/* Background Swipe Effect */}
        <span className="absolute inset-0 bg-black transform -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0 will-change-transform"></span>

        {/* Button Content */}
        <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 ease-in-out group-hover:text-white">
          {downloadComplete ? (
            <>
              <span>Download Complete</span>
              <CheckCircle className="w-5 h-5 text-green-500" />
            </>
          ) : (
            <>
              <span>{isDownloading ? "Downloading..." : "Download CV"}</span>
              <Download
                className={`w-5 h-5 ${
                  isDownloading
                    ? "animate-bounce"
                    : "opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                }`}
              />
            </>
          )}
        </span>
      </button>
    </div>
  );
};

export default SwipeButton;
