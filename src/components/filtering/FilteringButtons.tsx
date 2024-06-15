import RectangularSmallButton from "@components/buttons/RectangularSmallButton";
import React from "react";

interface FilteringButtonsProps {
  sortType: string;
  handleClick: (sortType: string) => void;
}

const FilteringButtons: React.FC<FilteringButtonsProps> = ({ sortType, handleClick }) => {
  return (
    <div className="flex w-[300px] gap-2 px-3 pt-3">
      <RectangularSmallButton
        buttonText="추천순"
        handleClick={() => handleClick("추천순")}
        isActive={sortType === "추천순"}
      />
      <RectangularSmallButton
        buttonText="인기순"
        handleClick={() => handleClick("인기순")}
        isActive={sortType === "인기순"}
      />
      <RectangularSmallButton
        buttonText="최신순"
        handleClick={() => handleClick("최신순")}
        isActive={sortType === "최신순"}
      />
    </div>
  );
};

export default FilteringButtons;
