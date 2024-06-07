import React from "react";
import BestRecipeItem from "./BestRecipeItem";
import { MainPageDataType } from "src/types/mainPageDataType";

interface BestRecipeListProps {
  mainPageData: MainPageDataType;
}

const BestRecipeList: React.FC<BestRecipeListProps> = ({ mainPageData }) => {
  return (
    <>
      <div className="flex flex-col gap-y-5">
        <BestRecipeItem categoryData={mainPageData.best[0]} />
        <BestRecipeItem categoryData={mainPageData.bestBookmarked[0]} isBestBookmarked={true} />
      </div>
    </>
  );
};

export default BestRecipeList;
