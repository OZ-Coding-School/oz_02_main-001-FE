import React from "react";
import { IoIosArrowBack } from "react-icons/io";

interface BackButtonProps {
  handleClick: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ handleClick }) => {
  return (
    <div className="flex justify-center items-center w-[50px] h-[50px]" onClick={handleClick}>
      <IoIosArrowBack className="w-[24px] h-[24px]" />
    </div>
  );
};

export default BackButton;
