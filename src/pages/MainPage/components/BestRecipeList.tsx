import React from "react";
import BestRecipeItem from "./BestRecipeItem";
import BestBookmarkedRecipeItem from "./BestBookmarkedRecipeItem";

interface BestRecipeListProps {
  mainPageData: MainDataDataType;
}

const BestRecipeList: React.FC<BestRecipeListProps> = ({ mainPageData }) => {
  return (
    <>
      <div className="flex flex-col gap-y-5 p-4">
        <BestRecipeItem bestRecipeData={mainPageData.best[0]} />
        <BestBookmarkedRecipeItem bestBookmarkedData={mainPageData.bestBookmarked[0]} />
      </div>
    </>
  );
};

export default BestRecipeList;
