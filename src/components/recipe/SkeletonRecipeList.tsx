import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonRecipeList: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-3 p-4 w-full">
      <Skeleton count={4} borderRadius={"6px"} height={150} width={"100%"} />
    </div>
  );
};

export default SkeletonRecipeList;
