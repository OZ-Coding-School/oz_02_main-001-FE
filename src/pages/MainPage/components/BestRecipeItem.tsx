import React from "react";
import Like from "@components/recipe/Like";
import { MainPageCategoryDataType } from "src/types/mainPageDataType";
import Scrap from "@components/recipe/Scrap";
import { useNavigate } from "react-router-dom";

interface BestRecipeItemProps {
  categoryData: MainPageCategoryDataType;
  isBestBookmarked?: boolean;
}

const BestRecipeItem: React.FC<BestRecipeItemProps> = ({ categoryData, isBestBookmarked }) => {
  const navigate = useNavigate();

  const handleRecipeClick = (): void => {
    navigate(`/recipe/${categoryData.recipeId}`);
  };

  return (
    <>
      <div className="flex flex-col gap-y-2">
        <p className="text-[20px] font-semibold">{categoryData.userNickname}님의 레시피</p>
        <div className="flex flex-row gap-x-3 cursor-pointer" onClick={handleRecipeClick}>
          <img
            src={categoryData.mainImage}
            className="w-[55%] h-[55%] border border-gray-200 rounded-[8px]"
          />
          <div className="flex flex-col justify-between">
            <p>{categoryData.title}</p>
            {!isBestBookmarked ? (
              <Like like={categoryData.likesCount} likeStatus={categoryData.likesStatus} />
            ) : (
              <Scrap book={categoryData.bookmarksCount} bookStatus={categoryData.bookmarksStatus} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BestRecipeItem;
