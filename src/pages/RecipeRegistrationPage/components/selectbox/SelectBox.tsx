import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { selectUnits } from "./../../../../utils/selectUnits";
import { selectOption } from "src/types/selectBoxType";

interface SelectBoxProps {
  index?: number;
  field: string;
  options: selectOption[];
  value: number;
  handleCategoryChange?: (field: string, value: number) => void;
  handleUnitChange?: (index: number, field: string, value: number) => void;
}

const SelectBox: React.FC<SelectBoxProps> = ({
  index,
  field,
  value,
  options,
  handleCategoryChange,
  handleUnitChange,
}) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>(selectUnits(field, value));

  const handleCategoryClick = () => {
    setIsClicked((prev) => !prev);
  };

  const handleOptionClick = (option: selectOption) => {
    if (field === "category") {
      handleCategoryChange && handleCategoryChange(field, option.id);
    } else {
      handleUnitChange && handleUnitChange(index!, field, option.id);
    }
    setSelectedCategory(option.name);
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
        <ul className="flex flex-col gap-1 border w-full min-h-[80px] p-1 rounded-[5px] overflow-auto relative z-[5] bg-white border-softBlue">
          {options.map((option) => (
            <li key={option.id}>
              <button
                className=" flex justify-start items-center w-full h-[35px]"
                onClick={() => handleOptionClick(option)}
              >
                {option.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectBox;
