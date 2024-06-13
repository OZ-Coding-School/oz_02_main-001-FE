import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonRecipeListLoader: React.FC = () => {
  return (
    <div className="flex items-center rounded-md pt-2 pl-3">
      <Skeleton width={350} height={100} />
    </div>
  );
};

export default SkeletonRecipeListLoader;
