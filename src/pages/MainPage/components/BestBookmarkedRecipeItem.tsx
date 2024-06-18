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
            fetchPriority="high"
            src={bestBookmarkedData.mainImage}
            className="w-[55%] border border-gray-200 rounded-[8px] object-cover aspect-square"
            alt="베스트 레시피 이미지"
            srcSet="small.sebp 500w medium.webp 1000w large.webp 2000w"
          />
          <div className="flex flex-col justify-between">
            <p>{bestBookmarkedData.title}</p>
            <Scrap
              queryKey="main"
              book={bestBookmarkedData.bookmarksCount}
              status={bestBookmarkedData.bookmarkStatus}
              recipe={bestBookmarkedData.recipeId}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BestBookmarkedRecipeItem;
