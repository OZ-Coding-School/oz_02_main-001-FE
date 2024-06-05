import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

interface SelectBoxProps {
  options: string[];
}

const SelectBox: React.FC<SelectBoxProps> = ({ options }) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("카테고리");

  const handleCategoryClick = () => {
    setIsClicked((prev) => !prev);
  };

  const handleOptionClick = (option: string) => {
    setSelectedCategory(option);
    setIsClicked(false);
  };

  return (
    <div className="flex flex-col gap-1 w-[100px]">
      <button
        className="flex justify-start items-center w-full 
        p-1  relative rounded-[5px] bg-[#000000]/5 focus:outline-none"
        onClick={handleCategoryClick}
      >
        {selectedCategory}
        <div
          className="absolute right-1
        "
        >
          {isClicked ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        </div>
      </button>
      {isClicked && (
        <ul className="flex flex-col gap-1 border w-full p-1 rounded-[5px]">
          {options.map((option) => (
            <li>
              <button
                className=" flex justify-start w-full"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectBox;
