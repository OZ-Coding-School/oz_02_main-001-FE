import React from "react";
import { MdOutlineMoreHoriz } from "react-icons/md";

const MoreButton: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-[40px] h-[50px]">
      <MdOutlineMoreHoriz className="w-[24px] h-[24px]" />
    </div>
  );
};

export default MoreButton;
