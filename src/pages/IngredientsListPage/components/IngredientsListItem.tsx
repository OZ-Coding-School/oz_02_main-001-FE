import React from "react";
import { IngredientDataType } from "src/types/ingredientType";
import RoundedSmallButton from "@components/buttons/RoundedSmallButton";

interface IngredientsListItemProps {
  ingredient: IngredientDataType;
  buttonState: boolean;
  toggleButtonState: (id: number) => void;
}

const IngredientsListItem: React.FC<IngredientsListItemProps> = ({
  ingredient,
  buttonState,
  toggleButtonState,
}) => {
  return (
    <div>
      <div className="flex justify-between items-center my-2 py-2">
        <span className="">{ingredient.name}</span>
        <RoundedSmallButton
          handleClick={() => toggleButtonState(ingredient.id)}
          buttonText={buttonState ? "취소" : "추가"}
        />
      </div>
      <div className="border border-solid"></div>
    </div>
  );
};

export default IngredientsListItem;
