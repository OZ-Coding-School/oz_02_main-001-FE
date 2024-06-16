import Like from "@components/recipe/Like";
import Scrap from "@components/recipe/Scrap";
import React from "react";

interface RecommendedRecipeItemProps {
  recipe: RecommendedRecipeType;
  handleRecipeClick: (recipeId: number) => void;
}

const RecommendedRecipeItem: React.FC<RecommendedRecipeItemProps> = ({
  recipe,
  handleRecipeClick,
}) => {
  return (
    <div
      className="text-[0.9rem] flex flex-col gap-4 border border-[#000000]/15 rounded-[5px] p-3"
      onClick={() => handleRecipeClick(recipe.recipeId)}
    >
      <div>
        <div className="flex w-full justify-between items-start gap-2">
          <span className="font-[500] text-[1.1rem]">{recipe.title}</span>
        </div>
        <div className="text-gray-600">{recipe.nickname}</div>
      </div>
      <div className="flex gap-1">
        <span className=" text-redPink">{recipe.includeIngredients.length}개의 재료 있음</span>
        <span>/</span>
        <span>총 {recipe.includeIngredients.length + recipe.notIncludeIngredients.length}개 </span>
      </div>
      <div className="flex flex-col ">
        <div className="flex gap-2">
          <span className="min-w-fit">있는 재료:</span>
          <span> {recipe.includeIngredients.join(", ")}</span>
        </div>
        <div className="flex gap-2">
          <span className="min-w-fit">없는 재료:</span>
          <span className="text-[#000000]/50">{recipe.notIncludeIngredients.join(", ")}</span>
        </div>
      </div>
    </div>
  );
};

export default RecommendedRecipeItem;
