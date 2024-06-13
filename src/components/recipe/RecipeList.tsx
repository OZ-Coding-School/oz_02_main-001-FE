import React from "react";
import RecipeItem from "@components/recipe/RecipeItem";

interface RecipeListProps {
  queryKey: string;
  recipeData: RecipeType[];
}

const RecipeList: React.FC<RecipeListProps> = ({ queryKey, recipeData }) => {
  return (
    <div className="flex flex-col gap-3 p-3">
      {recipeData.map((recipe) => (
        <RecipeItem queryKey={queryKey} key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
