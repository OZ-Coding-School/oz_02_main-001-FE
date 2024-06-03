import React from "react";
import Like from "./Like";
import Scrap from "./Scrap";
import Card from "./Card";

interface RecipeProps {
  id?: number;
  title: string;
  userName: string;
}

const recipe: RecipeProps = {
  id: 1,
  title: "1등 레시피",
  userName: "101번째 냉장고",
};

const RecipeItems: React.FC = () => {
  return (
    <div className="border border-gray-400 rounded-md p-2">
      <div className="flex items-center gap-3">
        <Card />
        <div className="h-[110px] flex flex-col justify-between">
          <div className="flex flex-col items-left">
            <span className="text-[20px] w-auto">{recipe.title}</span>
            <span className="text-[12px] mt-1 font-light">{recipe.userName}</span>
          </div>
          <div className="flex gap-2 w-[160px]">
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

export default RecipeItems;
