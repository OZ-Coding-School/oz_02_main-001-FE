import React from "react";
import Like from "./Like";
import Scrap from "./Scrap";
import { useNavigate } from "react-router-dom";

interface RecipeItemProps {
  queryKey: string;
  recipe: RecipeType;
}

const RecipeItem: React.FC<RecipeItemProps> = ({ queryKey, recipe }) => {
  const navigate = useNavigate();
  const handleRecipeItemClick = (): void => {
    navigate(`/recipe/${recipe.id}`);
  };
  return (
    <div
      className="w-full border border-[#D7D7D7] rounded-md p-2 flex items-center gap-3"
      onClick={handleRecipeItemClick}
    >
      <div className="w-[30%]">
        <img
          loading="lazy"
          src={recipe.mainImage}
          className="size-full rounded-[5px] object-cover aspect-square"
          alt="레시피 대표 사진"
        />
      </div>
      <div className="w-[70%] flex flex-col justify-between" style={{ aspectRatio: "2/0.85" }}>
        <div className="flex flex-col items-left">
          <span className="text-[1rem]">{recipe.title}</span>
          <span className="text-[12px] mt-1 font-light">{recipe.user}</span>
        </div>
        <div className="flex gap-2 w-full ">
          <span>
            <Like
              queryKey={queryKey}
              recipe={recipe.id}
              like={recipe.like}
              status={recipe.likeStatus}
            />
          </span>
          <span>
            <Scrap
              queryKey={queryKey}
              recipe={recipe.id}
              book={recipe.book}
              status={recipe.bookStatus}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;
