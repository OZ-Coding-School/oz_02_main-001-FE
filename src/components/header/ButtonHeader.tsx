import React from "react";
import BackButton from "./BackButton";
import RoundedSmallButton from "@components/buttons/RoundedSmallButton";

interface ButtonHeaderProps {
  title: string;
  buttonText: string;
  handleBackBtnClick: () => void;
  handleButtonClick: () => void;
}

/**
 * IngredientsList,RecipeRegistration 페이지에서 사용되는 헤더
 * 헤더 오른쪽에 버튼이 있는 경우
 * @param title 타이틀
 * @param buttonText 버튼에 들어갈 text
 * @param handleBackBtnClick
 * @param handleButtonClick 버튼 클릭 시 이벤트 핸들러
 * @returns
 */

const ButtonHeader: React.FC<ButtonHeaderProps> = ({
  title,
  buttonText,
  handleBackBtnClick,
  handleButtonClick,
}) => {
  return (
    <div className="flex justify-between items-center h-[50px] relative border-b-[1px]">
      <BackButton handleClick={handleBackBtnClick!} />
      <div className="flex justify-center items-center h-[50px]  ">
        <span className="text-[1.2rem] font-bold">{title}</span>
      </div>
      <div className="flex justify-center items-center w-[65px] h-[50px] mr-3 relative ">
        <RoundedSmallButton buttonText={buttonText} handleClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default ButtonHeader;
