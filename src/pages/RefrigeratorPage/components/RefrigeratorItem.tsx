import RectangularSmallButton from "@components/buttons/RectangularSmallButton";
import React from "react";
import { PiHamburger } from "react-icons/pi";
import { useNavigate } from "react-router";

interface RefrigeratorItemProps {
  nickname: string;
  isDeletedMode: boolean;
  handleDeleteClick: () => void;
  deleteAllIngredients: () => void;
  handleSave: () => void;
  isExistIngredient: boolean;
}

const RefrigeratorItem: React.FC<RefrigeratorItemProps> = ({
  nickname,
  isDeletedMode,
  handleDeleteClick,
  deleteAllIngredients,
  handleSave,
  isExistIngredient,
}) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex items-center space-x-2 mt-4">
        <div className="bg-[#EBF6C1] rounded-lg w-8 h-8 flex justify-center items-center ml-6">
          <PiHamburger className="w-6 h-6" style={{ color: "#A2A38B" }} />
        </div>
        <span className="text-gray-500">{nickname}님의 냉장고</span>
      </div>
      <div className="mt-4 flex space-x-2 absolute right-[28px]">
        {isExistIngredient && (
          <div className="transform scale-y-90">
            <RectangularSmallButton
              handleClick={isDeletedMode ? handleSave : handleDeleteClick}
              buttonText={isDeletedMode ? "완료" : "재료 삭제"}
            />
          </div>
        )}

        <div className="transform scale-y-90">
          <RectangularSmallButton
            handleClick={() => (isDeletedMode ? deleteAllIngredients : navigate(`/ingredientList`))}
            buttonText={isDeletedMode ? "모두 삭제" : "재료 추가"}
          />
        </div>
      </div>
      <div className="mt-[60px] border w-full px-2 h-[3px] bg-gray-100"></div>
    </div>
  );
};

export default RefrigeratorItem;
