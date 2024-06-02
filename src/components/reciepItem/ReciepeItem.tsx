{
  /* 각 api들은 api명세서의 주소를 토대로 하되 기능에 맞춰 '임시'로 작성함 */
}

import React, { useState, useEffect } from "react";
import Like from "./Like";
import Scrap from "./Scrap";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

interface RecipeItemProps {
  recipeId?: number;
}

async function fetchRecipeData(recipeId?: number) {
  const response = await fetch(`/api/v1/recipes/${recipeId}`);
  const data = await response.json();
  return data;
}

const RecipeItem: React.FC<RecipeItemProps> = ({ recipeId }) => {
  const [recipeData, setRecipeData] = useState<{
    recipeTitle: string;
    user: string;
  }>({
    recipeTitle: "",
    user: "",
  });

  const { recipeTitle, user } = recipeData;

  useEffect(() => {
    async function fetchData() {
      const data = await fetchRecipeData(recipeId);
      setRecipeData(data);
    }
    fetchData();
  }, [recipeId]);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/api/v1/recipes/${recipeId}`);
  };

  return (
    <div className="border border-gray-400 rounded-md p-2 ml-4 mr-4">
      <div className="flex items-center gap-3">
        <Card />
        <div className="h-[110px] flex flex-col justify-between">
          <div className="flex flex-col items-start gap-1">
            <span className="text-[20px] w-auto" onClick={handleClick}>
              {recipeTitle}
            </span>
            <span className="text-[12px] font-light">{user}</span>
          </div>
          <div className="flex gap-2 w-fit">
            <span>
              <Like />
            </span>
            <span>
              <Scrap />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;
