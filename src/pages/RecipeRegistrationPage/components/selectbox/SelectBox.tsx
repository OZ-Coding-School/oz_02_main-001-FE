import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

interface SelectBoxProps {
  placeholder: string;
  options: string[];
}

const SelectBox: React.FC<SelectBoxProps> = ({ placeholder, options }) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>(placeholder);

  const handleCategoryClick = () => {
    setIsClicked((prev) => !prev);
  };

  const handleOptionClick = (option: string) => {
    setSelectedCategory(option);
    setIsClicked(false);
  };

  return (
    <div className="flex flex-col gap-1 w-full h-[50px]">
      <div className="relative z-0">
        <button
          className="flex justify-start items-center w-full h-[50px]
        px-2 rounded-[5px] border border-softBlue focus:outline-none"
          onClick={handleCategoryClick}
        >
          {selectedCategory}
          <div className="absolute right-1">
            {isClicked ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </div>
        </button>
      </div>

      {isClicked && (
        <ul className="flex flex-col gap-1 border w-full min-h-[110px] p-1 rounded-[5px] overflow-auto relative z-[5] bg-white ">
          {options.map((option, index) => (
            <li key={option + index}>
              <button
                className=" flex justify-start items-center w-full h-[35px]"
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
