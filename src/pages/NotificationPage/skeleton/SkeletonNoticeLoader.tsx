import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonNoticeLoader: React.FC = () => {
  return (
    <div>
      <Skeleton width={150} height={15} />
      <Skeleton width={120} height={15} />
      <Skeleton width={50} height={15} />
    </div>
  );
};

export default SkeletonNoticeLoader;
