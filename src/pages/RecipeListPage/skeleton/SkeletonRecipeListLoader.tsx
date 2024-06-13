import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonRecipeListLoader: React.FC = () => {
  return (
    <div className="flex items-center border border-[#D7D7D7] rounded-md p-2 gap-3">
      <div className="pl-4 w-[30%]"></div>
      <div className="flex flex-col justify-between" style={{ aspectRatio: "2/0.85" }}>
        <div className="flex flex-col pl-10">
          <Skeleton width={250} height={30} />
          <Skeleton className="" width={150} height={22} />
        </div>
      </div>
      <div className="flex justify-start pt-10 pr-[-400px]">
        <div className="flex items-start gap-2">
          <Skeleton width={50} height={30} />
          <Skeleton width={50} height={30} />
        </div>
      </div>
    </div>
  );
};

export default SkeletonRecipeListLoader;
