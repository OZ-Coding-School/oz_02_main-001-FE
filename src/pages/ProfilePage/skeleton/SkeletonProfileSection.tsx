import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonProfileSection: React.FC = () => {
  return (
    <>
      <div className="flex ml-[6%] mr-[2%] items-center pt-10 mb-16">
        <div className="flex gap-[20px] ">
          <Skeleton borderRadius={"50%"} width={90} height={90} />
          <div className="flex flex-col justify-center gap-y-1">
            <Skeleton width={150} height={20} />
            <Skeleton width={80} height={20} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SkeletonProfileSection;
