import React from "react";
import { IoIosSearch } from "react-icons/io";
import Bell from "./Bell";
import { useNavigate } from "react-router-dom";

/**
 * MainPage에서 사용되는 헤더입니다.
 * @returns
 */
const MainHeader: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/search");
  };
  return (
    <div className="flex justify-center items-center h-[50px] sticky top-0 bg-white z-[10] border-b-[1px]">
      <div className="flex justify-end w-[450px] cursor-pointer" onClick={handleClick}>
        <div className="flex items-center w-[98%] h-[35px] pl-2 rounded-3xl bg-iceBlue text-[#64748B] ">
          <IoIosSearch className="w-[24px] h-[24px] mr-2" />
          <span>Search</span>
        </div>
      </div>
      <Bell hasNotification={true} />
    </div>
  );
};

export default MainHeader;
