import React from "react";
import Bell from "./Bell";
import BackButton from "./BackButton";

interface HeaderProps {
  hasBackBtn?: boolean;
  title?: string;
  hasBell?: boolean;
  handleBackBtnClick?: () => void;
}

/**
 * Bookmark, IngredientSelection,
 * Liked, Notification, Profile, Recommended 페이지에서 사용되는 헤더입니다.
 * @param hasBackBtn BackButton 유무
 * @param title 타이틀이 없으면 작성 X
 * @param hasBell Bell 유무
 * @param handleBackBtnClick BackButton 이벤트 핸들러
 * @returns
 */

const Header: React.FC<HeaderProps> = ({ hasBackBtn, title, hasBell, handleBackBtnClick }) => {
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
    </div>
  );
};

export default Header;
