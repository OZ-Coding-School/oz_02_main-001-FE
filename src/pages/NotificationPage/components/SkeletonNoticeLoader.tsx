import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonSentence from "./SkeletonSentence";
import SkeletonMiddle from "./SkeletonMiddle";
import SkeletonDate from "./SkeletonDate";

const SkeletonNoticeLoader: React.FC = () => {
  return (
    <div className="pt-4">
      <div className="flex flex-col gap-y-2">
        <SkeletonSentence />
        <SkeletonMiddle />
        <SkeletonDate />
      </div>
    </div>
  );
};

export default SkeletonNoticeLoader;
