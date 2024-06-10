import React, { useState } from "react";
import { IngredientDataType } from "src/types/ingredientType";
import RoundedSmallButton from "@components/buttons/RoundedSmallButton";

interface IngredientsListItemProps {
  ingredient: IngredientDataType;
  buttonState: boolean;
  toggleButtonState: (id: number) => void;
}

const IngredientsListItem: React.FC<IngredientsListItemProps> = ({
  ingredient,
  toggleButtonState,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (ingredient.id !== undefined) {
      toggleButtonState(ingredient.id);
      setIsClicked(!isClicked);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center pl-10 pr-5 py-5">
        <span>{ingredient.name}</span>
        <RoundedSmallButton
          handleClick={handleClick}
          buttonText={isClicked ? "취소" : "추가"}
          isClicked={isClicked}
        />
      </div>
      <div className="border border-solid"></div>
    </div>
  );
};

export default IngredientsListItem;
