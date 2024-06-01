import React from "react";
import { FaPlus } from "react-icons/fa6";

interface RectangularSmallButtonProps {
  handleClick: () => void;
  buttonText: string;
  disabled?: boolean;
}

// props로 버튼 텍스트만 피그마에 있는 그대로 넘겨주시면
// 스타일(아이콘 포함)은 텍스트별로 자동으로 맞춰집니다.
const RectangularSmallButton: React.FC<RectangularSmallButtonProps> = ({
  handleClick,
  buttonText,
  disabled,
}) => {
  return (
    <button
      className={`font-semibold text-sm border px-[10px] py-[6px] min-h-[32px] min-w-[79px] rounded-[6px] bg-[#FFFFFF] text-midnightGray border-cloudGray ${buttonText === "완료" ? "bg-gray-100" : buttonText === "재료 추가" && "text-redPink border-redPink"}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {buttonText === "재료 추가" ? (
        <div className="flex items-center justify-center gap-[5px]">
          <FaPlus />
          <span>{buttonText}</span>
        </div>
      ) : (
        <span>{buttonText}</span>
      )}
    </button>
  );
};

export default RectangularSmallButton;
