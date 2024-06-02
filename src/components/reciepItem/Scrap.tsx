import React, { useState } from "react";

interface ScrapProps {
  initialScrapCount?: number;
}

const Scrap: React.FC<ScrapProps> = ({ initialScrapCount = 0 }) => {
  const [scrapCount, setScrapCount] = useState<number>(initialScrapCount);
  const [isScraped, setIsScraped] = useState<boolean>(false);

  const handleScrap = () => {
    if (isScraped) {
      setScrapCount(scrapCount - 1);
    } else {
      setScrapCount(scrapCount + 1);
    }
    setIsScraped(!isScraped);
  };

  return (
    <div className="flex items-center">
      <button
        className={`ml-3 rounded-full focus:outline-none transition-colors ${
          isScraped ? "bg-white text-leafGreen" : "bg-white text-leafGreen"
        }`}
        onClick={handleScrap}
      >
        <svg
          className="w-6 h-6"
          fill={isScraped ? "currentColor" : "none"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v18l-7-3.5L5 23V5z" />
        </svg>
      </button>
      <span className="ml-1 text-[#000000]/50">{scrapCount}</span>
    </div>
  );
};

export default Scrap;
