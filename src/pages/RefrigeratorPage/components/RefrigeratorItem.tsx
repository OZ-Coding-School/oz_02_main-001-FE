import RectangularSmallButton from "@components/buttons/RectangularSmallButton";
import React from "react";
import { PiHamburger } from "react-icons/pi";
import { useNavigate } from "react-router";
import { RefrigeratorType } from "src/types/refrigeratorType";

interface RefrigeratorItemProps {
  refrigerator: RefrigeratorType;
  ingredients: { id: number; name: string }[];
  isDeletedMode: boolean;
  handleDeleteClick: () => void;
  deleteAllIngredients: () => void;
}

const RefrigeratorItem: React.FC<RefrigeratorItemProps> = ({
  refrigerator,
  ingredients,
  isDeletedMode,
  handleDeleteClick,
  deleteAllIngredients,
}) => {
  const navigate = useNavigate();
  const hasIngredientsWithName = ingredients.some((ingredient) => ingredient.name);

  return (
    <div>
      <div className="flex items-center space-x-2 mt-4">
        <div className="bg-[#EBF6C1] rounded-lg w-8 h-8 flex justify-center items-center ml-6">
          <PiHamburger className="w-6 h-6" style={{ color: "#A2A38B" }} />
        </div>
        <span className="text-gray-500">{refrigerator.nickname}님의 냉장고</span>
      </div>
      <div className="mt-4 flex space-x-2 absolute right-[28px]">
        {hasIngredientsWithName && (
          <div className="transform scale-y-90">
            <RectangularSmallButton
              handleClick={handleDeleteClick}
              buttonText={isDeletedMode ? "완료" : "재료 삭제"}
            />
          </div>
        )}
        <div className="transform scale-y-90">
          <RectangularSmallButton
            handleClick={() => {
              if (isDeletedMode) {
                deleteAllIngredients();
              } else {
                navigate(`/ingredientList`);
              }
            }}
            buttonText={isDeletedMode ? "모두 삭제" : "재료 추가"}
          />
        </div>
      </div>
      <div className="mt-[60px] border w-full px-2 h-[3px] bg-gray-100"></div>
    </div>
  );
};

export default RefrigeratorItem;
