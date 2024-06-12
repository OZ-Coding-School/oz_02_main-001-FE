import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonNoticeLoader: React.FC = () => {
  return (
    <div className="pt-2 pl-4 pr-4">
      <div className="mt-3 leading-tight">
        <Skeleton height={15} />
      </div>
      <div className="mt-2 text-gray-400">
        <Skeleton width={350} height={15} />
      </div>
      <div className="mt-2 mb-3 text-gray-400">
        <Skeleton width={100} height={15} />
      </div>
      <div className="border"></div>
    </div>
  );
};

export default SkeletonNoticeLoader;
