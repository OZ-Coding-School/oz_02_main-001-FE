import React from "react";
import Like from "@components/recipe/Like";
import Scrap from "@components/recipe/Scrap";
import { useNavigate } from "react-router-dom";

interface BestRecipeItemProps {
  categoryData: MainPageCategoryDataType;
  isBestBookmarked?: boolean;
}

const BestRecipeItem: React.FC<BestRecipeItemProps> = ({ categoryData, isBestBookmarked }) => {
  const navigate = useNavigate();
  const handleRecipeItemClick = (): void => {
    navigate(`/recipe/${categoryData.recipeId}`);
  };

  return (
    <>
      <div className="flex flex-col gap-y-2">
        <p className="text-[20px] font-semibold">{categoryData.user.nickname}님의 레시피</p>
        <div className="flex flex-row gap-x-3 cursor-pointer" onClick={handleRecipeItemClick}>
          <img
            src={categoryData.mainImage}
            className="w-[55%] border border-gray-200 rounded-[8px] object-cover"
            style={{ aspectRatio: "1 / 1" }}
          />
          <div className="flex flex-col justify-between">
            <p>{categoryData.title}</p>
            {!isBestBookmarked ? (
              <Like like={categoryData.likesCount} likeStatus={categoryData.likeStatus} />
            ) : (
              <Scrap book={categoryData.bookmarksCount} bookStatus={categoryData.bookmarkStatus} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BestRecipeItem;
