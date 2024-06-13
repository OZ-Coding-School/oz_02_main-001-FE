import RectangularSmallButton from "@components/buttons/RectangularSmallButton";
import React, { useState } from "react";

interface FilteringButtonsProps {
  onSortChange: (sortType: string) => void;
}

const FilteringButtons: React.FC<FilteringButtonsProps> = ({ onSortChange }) => {
  const [activeButton, setActiveButton] = useState<string>("추천순");

  const handleClick = (buttonText: string) => {
    setActiveButton(buttonText);
    onSortChange(buttonText);
  };

  return (
    <div className="flex w-[300px] gap-2 px-3 pt-3">
      <RectangularSmallButton
        buttonText="추천순"
        handleClick={() => handleClick("추천순")}
        isActive={activeButton === "추천순"}
      />
      <RectangularSmallButton
        buttonText="인기순"
        handleClick={() => handleClick("인기순")}
        isActive={activeButton === "인기순"}
      />
      <RectangularSmallButton
        buttonText="최신순"
        handleClick={() => handleClick("최신순")}
        isActive={activeButton === "최신순"}
      />
    </div>
  );
};

export default FilteringButtons;
