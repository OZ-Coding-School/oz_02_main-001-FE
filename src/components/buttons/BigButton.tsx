import React from "react";
import { FaPlus } from "react-icons/fa6";

interface BigButtonProps {
  handleClick: () => void;
  buttonText: string;
  disabled?: boolean;
}

// props로 버튼 텍스트만 피그마에 있는 그대로 넘겨주시면
// 스타일(아이콘 포함)은 텍스트별로 자동으로 맞춰집니다.
const BigButton: React.FC<BigButtonProps> = ({ handleClick, buttonText, disabled }) => {
  return (
    <button
      className={`${buttonText === "첫 레시피 등록하기" ? "w-[60%]" : "w-[90%]"}  h-[48px] rounded-[6px] text-[16px] text-center ${buttonText === "재료 더 보기" ? "text-midnightGray bg-iceBlue" : "text-redPink bg-softPink"} `}
      onClick={handleClick}
      disabled={disabled}
    >
      {buttonText === "첫 레시피 등록하기" ? (
        <div className="flex items-center justify-center gap-[20px]">
          <FaPlus />
          <span>{buttonText}</span>
        </div>
      ) : (
        <span>{buttonText}</span>
      )}
    </button>
  );
};

export default BigButton;
