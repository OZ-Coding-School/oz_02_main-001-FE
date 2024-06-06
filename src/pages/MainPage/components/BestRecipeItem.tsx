import React from "react";
import Like from "@components/recipe/Like";
import { MainPageCategoryDataType } from "src/types/mainPageDataType";
import Scrap from "@components/recipe/Scrap";
import { Link } from "react-router-dom";

interface BestRecipeItemProps {
  categoryData: MainPageCategoryDataType;
  isBestBookmarked?: boolean;
}

const BestRecipeItem: React.FC<BestRecipeItemProps> = ({ categoryData, isBestBookmarked }) => {
  return (
    <>
      <div className="flex flex-col gap-y-2">
        <p className="text-[20px] font-semibold">{categoryData.userNickname}님의 레시피</p>
        <Link
          to={`/recipe/${categoryData.recipeId}`}
          className="flex flex-row gap-x-3 cursor-pointer"
        >
          <img
            src={categoryData.mainImage}
            className="w-[55%] border border-gray-200 rounded-[8px] object-cover"
            style={{ aspectRatio: "1 / 1" }}
          />
          <div className="flex flex-col justify-between">
            <p>{categoryData.title}</p>
            {!isBestBookmarked ? (
              <Like like={categoryData.likesCount} likeStatus={categoryData.likesStatus} />
            ) : (
              <Scrap book={categoryData.bookmarksCount} bookStatus={categoryData.bookmarksStatus} />
            )}
          </div>
        </Link>
      </div>
    </>
  );
};

export default BestRecipeItem;
