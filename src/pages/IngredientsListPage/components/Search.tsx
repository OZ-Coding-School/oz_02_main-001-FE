import React from "react";
import { IoIosSearch } from "react-icons/io";

const Search: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center items-center pl-8 pr-8">
        <div className="flex w-[450px] sticky pt-4">
          <input
            type="text"
            placeholder="냉장고 속 재료를 입력하세요!"
            className="flex items-center w-full h-[38px] rounded-3xl bg-iceBlue text-[#64748B] focus:outline-none"
            style={{ paddingLeft: "60px" }}
          />
          <IoIosSearch
            className="w-[24px] h-[24px] absolute reft-5 top-[50%] translate-y-[-20%] text-midnightGray"
            style={{ left: "20px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
