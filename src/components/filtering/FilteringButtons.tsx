import RectangularSmallButton from "@components/buttons/RectangularSmallButton";
import React from "react";

const FilteringButtons = () => {
  const handleClick = () => {};
  return (
    <div className="flex gap-2 p-4">
      <RectangularSmallButton buttonText="추천순" handleClick={handleClick} />
      <RectangularSmallButton buttonText="인기순" />
      <RectangularSmallButton buttonText="최신순" />
    </div>
  );
};

export default FilteringButtons;
