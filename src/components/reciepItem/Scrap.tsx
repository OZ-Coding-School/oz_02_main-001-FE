{
  /* 각 api들은 api명세서의 주소를 토대로 하되 기능에 맞춰 '임시'로 작성함 */
}

import React, { useEffect, useState } from "react";

interface ScrapProps {
  recipeId?: number;
}

const Scrap: React.FC<ScrapProps> = ({ recipeId }) => {
  const [scrapState, setScrapState] = useState<{ scrapCount: number; isScraped: boolean }>({
    scrapCount: 0,
    isScraped: false,
  });

  useEffect(() => {
    async function fetchScrapCount() {
      try {
        const response = await fetch(`/api/v1/recipes/${recipeId}/scrap`);
        const data = await response.json();
        setScrapState(data);
      } catch (error) {
        console.error("즐겨찾기 수 불러오기 실패:", error);
      }
    }
    fetchScrapCount();
  }, [recipeId]);

  const handleScrap = async () => {
    try {
      const response = await fetch(
        `/api/v1/recipes/${recipeId}/${scrapState.isScraped ? "unscrap" : "scrap"}`,
        {
          method: "POST",
        },
      );
      const data = await response.json();
      setScrapState(data);
    } catch (error) {
      console.error("즐겨찾기 실패:", error);
    }
  };

  return (
    <div className="flex items-center">
      <button
        className={`rounded-full focus:outline-none transition-colors ${
          scrapState.isScraped ? "bg-white text-leafGreen" : "bg-white text-leafGreen"
        }`}
        onClick={handleScrap}
      >
        <svg
          className="w-6 h-6"
          fill={scrapState.isScraped ? "currentColor" : "none"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v18l-7-3.5L5 23V5z" />
        </svg>
      </button>
      <span className="ml-1 text-[#000000]/50">{scrapState.scrapCount}</span>
    </div>
  );
};

export default Scrap;
