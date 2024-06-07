import React from "react";
import { IoIosArrowBack } from "react-icons/io";

interface BackButtonProps {
  handleClick: () => void;
}
/**
 * BackButton 컴포넌트입니다.
 * @param handleClick BackButton을 클릭 했을 때 어디로 이동할 지
 * @returns
 */
const BackButton: React.FC<BackButtonProps> = ({ handleClick }) => {
  return (
    <div
      className="flex justify-center items-center w-[50px] h-[50px] cursor-pointer"
      onClick={handleClick}
    >
      <IoIosArrowBack className="w-[24px] h-[24px]" />
    </div>
  );
};

export default BackButton;
