import React from "react";
import RecipeItem from "@components/recipe/RecipeItem";
import { RecipeType } from "src/types/recipeItemType";

interface RecipeListProps {
  recipeData: RecipeType[];
}

const RecipeList: React.FC<RecipeListProps> = ({ recipeData }) => {
  return (
    <div className="flex flex-col gap-3 p-3">
      {recipeData.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
