import React from "react";
import classNames from "classnames";

interface ButtonsProps {
  imageUrl?: string;
  buttonText: string;
  bgColor: string;
  textColor: string;
  logoSize?: number;
  onClick: () => void;
}

const Buttons: React.FC<ButtonsProps> = ({
  imageUrl,
  buttonText,
  bgColor,
  textColor,
  logoSize = 8,
  onClick,
}) => {
  const buttonClasses = classNames(
    bgColor,
    `text-${textColor}`,
    "py-2 px-4 rounded-[12px] flex items-center justify-center shadow-md w-[90%]",
  );

  return (
    <button className={buttonClasses} onClick={onClick}>
      {imageUrl && ( // imageUrl이 있는 경우에만 작동
        <img
          className={`w-${logoSize} h-${logoSize}`}
          style={{ minWidth: `${logoSize * 4}px`, minHeight: `${logoSize * 4}px` }}
          src={imageUrl}
          alt="Buttons"
        ></img>
      )}
      <span className={`min-w-10 h-[40px] p-2 font-normal whitespace-nowrap`}>{buttonText}</span>
    </button>
  );
};

export default Buttons;
