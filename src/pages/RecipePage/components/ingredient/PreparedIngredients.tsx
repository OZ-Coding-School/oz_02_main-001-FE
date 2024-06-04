import React from "react";
import BadgeTitle from "../title/BadgeTitle";

interface PreparedIngredientsProps {
  ingredients: IngredientType[];
}

const PreparedIngredients: React.FC<PreparedIngredientsProps> = ({ ingredients }) => {
  return (
    <div className="grid gap-5">
      <div className="flex items-center justify-between ">
        <BadgeTitle type="forkKnife" title="준비 재료" />
        <div>
          <span className="text-redPink">{ingredients.length}</span> 개
        </div>
      </div>
      <div className="flex justify-center">
        <div className="border-2 border-lightBeige rounded-[5px] w-[98%] h-auto p-3">
          {ingredients.map((ingredient) => (
            <div className="flex justify-between" key={ingredient.id}>
              <span>{ingredient.name}</span>
              <div>
                <span>{ingredient.quantity}</span> {ingredient.unit}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreparedIngredients;
