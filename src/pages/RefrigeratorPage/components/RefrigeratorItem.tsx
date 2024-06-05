import BigButton from "@components/buttons/BigButton";
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
      <div className="flex items-center space-x-2 mt-6">
        <div className="bg-[#EBF6C1] rounded-xl w-8 h-8 flex justify-center items-center ml-4">
          <PiHamburger className="w-6 h-6" style={{ color: "#A2A38B" }} />
        </div>
        <span className="text-gray-400">{refrigerator.nickname}님의 냉장고</span>
      </div>
      <div className="mt-4 absolute right-6">
        <button
          onClick={handleClick}
          className="border border-solid border-redPink rounded-[4px] pl-4 pr-4 pt-[3px] pb-[3px]"
        >
          <span className="text-redPink">+ 재료 추가</span>
        </button>
      </div>
      <div className="mt-[70px] border w-full px-2 h-[3px] bg-gray-100"></div>
      <div className="relative pl-6 pr-6 mb-[50px] font-bold">
        <BigButton buttonText={"레시피 찾아보기"} />
      </div>
    </div>
  );
};

export default RefrigeratorItem;
