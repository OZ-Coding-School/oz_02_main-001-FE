import React from "react";
import Skeleton from "react-loading-skeleton";
import SkeletonImageLoader from "./SkeletonImageLoader";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoader: React.FC = () => {
  return (
    <div>
      <div>
        <Skeleton height={30} width={160} />
        <Skeleton height={20} width={140} />
      </div>
      <div className="flex flex-col gap-y-7">
        <div className="flex flex-col gap-y-7 p-4 ">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="flex flex-col gap-y-4">
              <Skeleton height={30} width={200} />
              <div className="flex animate-pulse gap-x-5">
                <SkeletonImageLoader />
                <div className="flex flex-col justify-between">
                  <Skeleton width={150} height={30} />
                  <Skeleton width={50} height={30} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-y-10">
          {[...Array(4)].map((_, index) => (
            <div key={index}>
              <div className="flex justify-between">
                <Skeleton height={20} width={100} />
                <Skeleton height={24} width={64} />
              </div>
              <Skeleton height={15} width={150} />
              <Skeleton height={200} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
