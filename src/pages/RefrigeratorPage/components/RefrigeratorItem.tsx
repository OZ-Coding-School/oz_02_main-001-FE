import React, { useState } from "react";
import { PiHamburger } from "react-icons/pi";
import { useNavigate } from "react-router";
import { RefrigeratorType } from "src/types/refrigeratorType";

interface RefrigeratorItemProps {
  refrigerator: RefrigeratorType;
  ingredients: Array<{ id: number; name: string }>;
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
        <span className="text-gray-400">{refrigerator.nickname}님의 냉장고</span>
      </div>
      <div className="mt-4 absolute right-[22px]">
        {hasIngredientsWithName && (
          <button
            onClick={handleDeleteClick}
            className={`border border-solid ${isDeletedMode ? "bg-gray-200" : "bg-white"} rounded-[4px] pl-[14px] pr-[14px] pt-[2px] pb-[2px] mb-2 mr-4`}
            style={{ minWidth: "90px" }}
          >
            <span className="text-sm font-medium" style={{ letterSpacing: "0.1em" }}>
              {isDeletedMode ? "완료" : "재료 삭제"}
            </span>
          </button>
        )}
        <button
          onClick={() => {
            if (isDeletedMode) {
              deleteAllIngredients();
            } else {
              navigate(`/ingredientList/`);
            }
          }}
          className={`border border-solid ${isDeletedMode ? "text-black" : "text-redPink"} rounded-[4px] pl-[14px] pr-[14px] pt-[2px] pb-[2px]`}
        >
          <span
            className={`${isDeletedMode ? "text-black" : "text-redPink"} w-full text-sm font-medium`}
            style={{ letterSpacing: "0.1em" }}
          >
            {isDeletedMode ? "모두 삭제" : "+ 재료 추가"}
          </span>
        </button>
      </div>
      <div className="mt-[60px] border w-full px-2 h-[3px] bg-gray-100"></div>
    </div>
  );
};

export default RefrigeratorItem;
