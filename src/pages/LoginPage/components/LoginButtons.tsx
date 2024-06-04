import React from "react";
import classNames from "classnames";

interface ButtonsProps {
  imageUrl?: string;
  buttonText: string;
  bgColor: string;
  textColor?: string;
  handleClick: () => void;
}

const Buttons: React.FC<ButtonsProps> = ({
  imageUrl,
  buttonText,
  bgColor,
  textColor,
  handleClick,
}) => {
  const buttonClasses = classNames(
    bgColor,
    `text-${textColor}`,
    "py-2 px-4 rounded-[12px] flex items-center justify-center shadow-md w-[90%]",
  );

  return (
    <button className={buttonClasses} onClick={handleClick}>
      {imageUrl && ( // imageUrl이 있는 경우에만 작동
        <img className={`w-[24px] h-[24px]`} src={imageUrl} alt="Buttons"></img>
      )}
      <span className={`min-w-10 h-[40px] p-2 font-normal whitespace-nowrap`}>{buttonText}</span>
    </button>
  );
};

export default Buttons;
