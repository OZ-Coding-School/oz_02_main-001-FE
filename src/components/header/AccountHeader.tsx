import React from "react";
import { PiHeartStraightBold } from "react-icons/pi";
import { RiSettings3Line } from "react-icons/ri";
import { Link } from "react-router-dom";

/**
 * MyPage에서 사용되는 Header입니다.
 */
const AccountHeader: React.FC = () => {
  return (
    <div className="flex justify-end items-center h-[50px] sticky top-0 z-[10] bg-white border-b-[1px] cursor-pointer">
      <Link to="/liked" className="flex justify-center items-center w-[40px] h-[50px]">
        <PiHeartStraightBold className="w-[24px] h-[24px]" />
      </Link>
      <Link
        to="/setting"
        className="flex justify-center items-center w-[40px] h-[50px] cursor-pointer"
      >
        <RiSettings3Line className="w-[24px] h-[24px]" />
      </Link>
    </div>
  );
};

export default AccountHeader;
