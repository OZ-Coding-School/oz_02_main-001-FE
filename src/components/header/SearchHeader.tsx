import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import BackButton from "./BackButton";

interface SearchHeaderProps {
  keyWord: string;
  handleChange: (value: string) => void;
  handleDelete: () => void;
}

/**
 * SearchPage에서 사용되는 헤더입니다.
 * @returns
 */
const SearchHeader: React.FC<SearchHeaderProps> = ({ keyWord, handleChange, handleDelete }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className="flex items-center h-[50px] sticky top-0 border-b-[1px] bg-white z-[10]">
      <BackButton handleClick={handleClick} />
      <div className="flex w-[450px] cursor-pointer relative">
        <input
          type="text"
          className="flex items-center w-[98%] h-[38px] rounded-3xl bg-iceBlue text-[#64748B] pl-[20px] focus:outline-none"
          onChange={(e) => handleChange(e.target.value)}
          value={keyWord}
          placeholder="음식이나 재료 이름을 검색해주세요."
        />
        <AiOutlineCloseCircle
          className="w-[24px] h-[24px] absolute right-5 top-[50%] translate-y-[-50%] text-midnightGray"
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default SearchHeader;
