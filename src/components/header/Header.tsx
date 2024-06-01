import React from "react";
import Bell from "./Bell";
import BackButton from "./BackButton";

interface HeaderProps {
  hasBackBtn?: boolean;
  title?: string;
  hasBell?: boolean;
  hasButton?: boolean;
  handleBackBtnClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  hasBackBtn,
  title,
  hasBell,
  hasButton,
  handleBackBtnClick,
}) => {
  return (
    <div className="flex justify-center items-center h-[50px] relative border-b-[1px]">
      {hasBackBtn && (
        <div className="absolute left-0">
          <BackButton handleClick={handleBackBtnClick!} />
        </div>
      )}
      {title && (
        <div className="flex justify-center items-center h-[50px]  ">
          <span className="text-[1.2rem] font-bold">{title}</span>
        </div>
      )}
      {hasBell && (
        <div className="absolute right-0">
          <Bell hasNotification={true} />
        </div>
      )}
      {hasButton && (
        <div className="absolute right-0">
          <div className="flex justify-center items-center w-[50px] h-[50px] relative cursor-pointer">
            <button>다음</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
