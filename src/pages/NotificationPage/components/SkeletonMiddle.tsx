import React from "react";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonMiddle: React.FC = () => {
  return (
    <>
      <div className={`bg-gray-400 h-4 w-full`}></div>
    </>
  );
};

export default SkeletonMiddle;
