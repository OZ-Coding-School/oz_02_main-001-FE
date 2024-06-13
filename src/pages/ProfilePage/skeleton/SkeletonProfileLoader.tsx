import React from "react";
import SkeletonProfileSection from "./SkeletonProfileSection";
import SkeletonPostsList from "./SkeletonPostsList";

const SkeletonProfileLoader: React.FC = () => {
  return (
    <>
      <SkeletonProfileSection />
      <div className="grid grid-cols-3 gap-1 p-3">
        {[...Array(15)].map((_, index) => (
          <SkeletonPostsList key={index} />
        ))}
      </div>
    </>
  );
};

export default SkeletonProfileLoader;
