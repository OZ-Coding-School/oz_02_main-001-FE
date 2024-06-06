import React from "react";
import { PiHamburger } from "react-icons/pi";
import { useNavigate } from "react-router";
import { RefrigeratorType } from "src/types/refrigeratorType";

interface RefrigeratorItemProps {
  refrigerator: RefrigeratorType;
}

const RefrigeratorItem: React.FC<RefrigeratorItemProps> = ({ refrigerator }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/ingredientList/`);
  };

  return (
    <div>
      <div className="flex items-center space-x-2 mt-4">
        <div className="bg-[#EBF6C1] rounded-lg w-8 h-8 flex justify-center items-center ml-6">
          <PiHamburger className="w-6 h-6" style={{ color: "#A2A38B" }} />
        </div>
        <span className="text-gray-400">{refrigerator.nickname}님의 냉장고</span>
      </div>
      <div className="mt-4 absolute right-[22px]">
        <button
          onClick={handleClick}
          className="border border-solid border-redPink rounded-[4px] pl-[14px] pr-[14px] pt-[2px] pb-[2px]"
        >
          <span
            className="text-redPink w-full text-sm font-medium"
            style={{ letterSpacing: "0.1em" }}
          >
            + 재료 추가
          </span>
        </button>
      </div>
      <div className="mt-[60px] border w-full px-2 h-[3px] bg-gray-100"></div>
    </div>
  );
};

export default RefrigeratorItem;
