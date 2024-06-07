import React from "react";

interface RoundedSmallButtonProps {
  handleClick: () => void;
  buttonText: string;
  disabled?: boolean;
  isClicked?: boolean;
}

// 다음 버튼일때는 disabled만 넘겨주면 되고
// 추가, 취소 버튼일때는 isClicked만 넘겨주면 됩니다.
// 필요하면 둘 다 넣으셔도 되구요.
const RoundedSmallButton: React.FC<RoundedSmallButtonProps> = ({
  handleClick,
  buttonText,
  disabled,
  isClicked,
}) => {
  return (
    <button
      className={`px-3 border rounded-[20px] ${disabled ? "bg-[#93939388] text-[#FFFFFF]" : isClicked ? "bg-blushPink text-redPink" : "bg-softPink text-redPink"} text-[12px] w-16 h-6`}
      disabled={disabled}
      onClick={handleClick}
    >
      {buttonText}
    </button>
  );
};

export default RoundedSmallButton;
