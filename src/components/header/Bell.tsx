import React from "react";
import { PiBellBold, PiBellFill } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";
import { useLocation, useNavigate } from "react-router-dom";

interface BellProps {
  hasNotification: boolean;
}

/**
 * Bell 컴포넌트 입니다.
 * 알림이 있는지 여부를 판단하여 컴포넌트가 바뀝니다.(hasNotification)
 * 알림 페이지라면 컴포넌트 아이콘이 바뀝니다. (isNoticePage)
 * @param hasNotification 현재 알람이 있는지 여부
 * @returns
 */

const Bell: React.FC<BellProps> = ({ hasNotification }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/notice");
  };

  const isNoticePage = pathname === "/notice";

  return (
    <div
      className="flex justify-center items-center w-[50px] h-[50px] relative cursor-pointer"
      onClick={handleClick}
    >
      {isNoticePage ? (
        hasNotification ? (
          <PiBellFill className="w-[24px] h-[24px] text-redPink" />
        ) : (
          <PiBellBold className="w-[24px] h-[24px]" />
        )
      ) : (
        <>
          <PiBellBold className="w-[24px] h-[24px]" />
          {hasNotification && <GoDotFill className="absolute top-1 right-2 text-redPink w-6 h-6" />}
        </>
      )}
    </div>
  );
};

export default Bell;
