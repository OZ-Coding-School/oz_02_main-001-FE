import React from "react";
import { PiHeartStraightBold } from "react-icons/pi";
import { RiSettings3Line } from "react-icons/ri";

const AccountHeader: React.FC = () => {
  return (
    <div className="flex justify-end items-center h-[50px] relative border-b-[1px]">
      <div className="flex justify-center items-center w-[40px] h-[50px]">
        <PiHeartStraightBold className="w-[24px] h-[24px]" />
      </div>
      <div className="flex justify-center items-center w-[40px] h-[50px]">
        <RiSettings3Line className="w-[24px] h-[24px]" />
      </div>
    </div>
  );
};

export default AccountHeader;
