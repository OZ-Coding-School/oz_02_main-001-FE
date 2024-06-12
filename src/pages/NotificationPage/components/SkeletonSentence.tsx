import React from "react";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonSentence: React.FC = () => {
  return (
    <>
      <div className={`bg-gray-400 h-5 w-full`}></div>
    </>
  );
};

export default SkeletonSentence;
