import React from "react";
import Like from "./Like";
import Scrap from "./Scrap";
import { RecipeType } from "src/types/recipeItemType";
import { useNavigate } from "react-router-dom";

interface RecipeItemProps {
  recipe: RecipeType;
}

const RecipeItem: React.FC<RecipeItemProps> = ({ recipe }) => {
  const navigate = useNavigate();
  const handleRecipeItemClick = (): void => {
    navigate(`/recipe/${recipe.id}`);
  };
  return (
    <div
      className="border border-[#D7D7D7] rounded-md p-2 flex items-center gap-3"
      onClick={handleRecipeItemClick}
    >
      <div className="w-[30%]">
        <img
          src={recipe.image}
          className="w-full h-full rounded-[5px] object-cover"
          style={{ aspectRatio: "1/1" }}
        />
      </div>
      <div className="h-[110px] flex flex-col justify-between">
        <div className="flex flex-col items-left">
          <span className="text-[20px] w-auto">{recipe.title}</span>
          <span className="text-[12px] mt-1 font-light">{recipe.user}</span>
        </div>
        <div className="flex gap-2 w-full ">
          <span>
            <Like like={recipe.like} likeStatus={recipe.likeStatus} />
          </span>
          <span>
            <Scrap book={recipe.book} bookStatus={recipe.bookStatus} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;
