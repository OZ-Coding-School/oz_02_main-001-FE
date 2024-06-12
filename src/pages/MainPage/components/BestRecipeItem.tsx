import React from "react";
import Like from "@components/recipe/Like";
import { useNavigate } from "react-router-dom";

interface BestRecipeItemProps {
  bestRecipeData: BestRecipeType;
}

const BestRecipeItem: React.FC<BestRecipeItemProps> = ({ bestRecipeData }) => {
  const navigate = useNavigate();
  const handleRecipeItemClick = (): void => {
    navigate(`/recipe/${bestRecipeData.recipeId}`);
  };

  return (
    <>
      <div className="flex flex-col gap-y-2">
        <p className="text-[20px] font-semibold">{bestRecipeData.user.nickname}님의 레시피</p>
        <div className="flex flex-row gap-x-3 cursor-pointer" onClick={handleRecipeItemClick}>
          <img
            src={bestRecipeData.mainImage}
            className="w-[55%] border border-gray-200 rounded-[8px] object-cover"
            style={{ aspectRatio: "1 / 1" }}
          />
          <div className="flex flex-col justify-between">
            <p>{bestRecipeData.title}</p>

            <Like
              like={bestRecipeData.likesCount}
              status={bestRecipeData.likeStatus}
              user={bestRecipeData.user.id}
              recipe={bestRecipeData.recipeId}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BestRecipeItem;
