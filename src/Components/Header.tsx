import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Header: React.FC = () => {
  const [hoveredIcon, setHoveredIcon] = useState("");

  const handleIconMouseEnter = (iconName: string) => {
    setHoveredIcon(iconName);
  };

  const handleIconMouseLeave = () => {
    setHoveredIcon("");
  };

  return (
    <div className="w-full bg-green-900 p-4 flex justify-end">
      <div className="w-1/12">
        {hoveredIcon ? (
          <a
            href={
              hoveredIcon === "facebook"
                ? "https://www.facebook.com/"
                : hoveredIcon === "instagram"
                ? "https://www.instagram.com/"
                : "https://www.youtube.com/"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className={`flex h-8 w-full items-center justify-center rounded-full text-center bg-${
                hoveredIcon === "facebook"
                  ? "blue"
                  : hoveredIcon === "instagram"
                  ? "purple"
                  : "red"
              }-700 overflow-hidden transition-all duration-1000 ease-linear`}
              onMouseLeave={handleIconMouseLeave}
            >
              <span className="text-sm font-bold text-white">
                {hoveredIcon}
              </span>
            </div>
          </a>
        ) : (
          <div className="flex gap-2">
            <div
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-blue-700 text-center transition-all duration-1000 ease-linear"
              onMouseEnter={() => handleIconMouseEnter("facebook")}
            >
              <FaFacebook className="text-2xl text-white" />
            </div>
            <div
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-purple-700 text-center transition-all duration-1000 ease-linear"
              onMouseEnter={() => handleIconMouseEnter("instagram")}
            >
              <FaInstagram className="text-2xl text-white" />
            </div>
            <div
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-red-700 text-center transition-all duration-1000 ease-linear"
              onMouseEnter={() => handleIconMouseEnter("youtube")}
            >
              <FaYoutube className="text-2xl text-white" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
