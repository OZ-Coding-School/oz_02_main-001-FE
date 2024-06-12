import React from "react";
import Scrap from "@components/recipe/Scrap";
import { useNavigate } from "react-router-dom";

interface BestBookmarkedRecipeItemProps {
  bestBookmarkedData: BestBookmarkedRecipeType;
}

const BestBookmarkedRecipeItem: React.FC<BestBookmarkedRecipeItemProps> = ({
  bestBookmarkedData,
}) => {
  const navigate = useNavigate();
  const handleRecipeItemClick = (): void => {
    navigate(`/recipe/${bestBookmarkedData.recipeId}`);
  };

  return (
    <>
      <div className="flex flex-col gap-y-2">
        <p className="text-[20px] font-semibold">{bestBookmarkedData.user.nickname}님의 레시피</p>
        <div className="flex flex-row gap-x-3 cursor-pointer" onClick={handleRecipeItemClick}>
          <img
            src={bestBookmarkedData.mainImage}
            className="w-[55%] border border-gray-200 rounded-[8px] object-cover"
            style={{ aspectRatio: "1 / 1" }}
          />
          <div className="flex flex-col justify-between">
            <p>{bestBookmarkedData.title}</p>
            <Scrap
              book={bestBookmarkedData.bookmarksCount}
              bookStatus={bestBookmarkedData.bookmarkStatus}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BestBookmarkedRecipeItem;
