import React, { useState } from "react";

interface ScrapProps {
  book: number;
  bookStatus: number;
}

const Scrap: React.FC<ScrapProps> = ({ book, bookStatus }) => {
  const [scrapCount, setScrapCount] = useState<{ book: number; booked: boolean }>({
    book,
    booked: bookStatus === 1,
  });

  const handleScrap = (event: React.MouseEvent) => {
    event.stopPropagation();
    setScrapCount((prevState) => ({
      book: prevState.booked ? prevState.book - 1 : prevState.book + 1,
      booked: !prevState.booked,
    }));
  };

  return (
    <div className="flex items-center">
      <button
        className={`rounded-full focus:outline-none transition-colors ${
          scrapCount.booked ? "bg-white text-leafGreen" : "bg-white text-leafGreen"
        }`}
        onClick={handleScrap}
      >
        <svg
          className="w-6 h-6"
          fill={scrapCount.booked ? "currentColor" : "none"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v18l-7-3.5L5 23V5z" />
        </svg>
      </button>
      <span className="ml-1 text-[#000000]/50">{scrapCount.book}</span>
    </div>
  );
};

export default Scrap;
