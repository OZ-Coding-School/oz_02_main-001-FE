import React, { useState } from "react";
import RecipeItem from "@components/recipe/RecipeItem";
import BigButton from "@components/buttons/BigButton";

interface RecipeListProps {
  recipeData: RecipeType[];
}

const RecipeList: React.FC<RecipeListProps> = ({ recipeData }) => {
  const [more, setMore] = useState(3);
  const handleLoadMore = () => {
    setMore((prevCount) => prevCount + 3);
  };
  {
    /* more버튼 클릭시 3개씩 출력 */
  }

  return (
    <div className="flex flex-col gap-3 p-3">
      {recipeData.slice(0, more).map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
      {more < recipeData.length && <BigButton buttonText={"더보기"} handleClick={handleLoadMore} />}
    </div>
  );
};

export default RecipeList;
