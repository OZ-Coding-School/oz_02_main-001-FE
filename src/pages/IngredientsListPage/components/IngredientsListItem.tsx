import React, { useEffect, useState } from "react";
import RoundedSmallButton from "@components/buttons/RoundedSmallButton";

interface IngredientsListItemProps {
  ingredient: IngredientDataType;
  handleToggleChange: (id: number, status: number) => void;
  selectedIngredientIds: number[];
}

const IngredientsListItem: React.FC<IngredientsListItemProps> = ({
  ingredient,
  handleToggleChange,
  selectedIngredientIds,
}) => {
  const isSelected = selectedIngredientIds.includes(ingredient.id);
  const [isClicked, setIsClicked] = useState<boolean>(isSelected);

  useEffect(() => {
    setIsClicked(isSelected);
  }, [isSelected]);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
    handleToggleChange(ingredient.id, !isClicked ? 1 : 0);
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
