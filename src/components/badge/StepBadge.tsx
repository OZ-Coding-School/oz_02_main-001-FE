import React from "react";

interface StepBadgeProps {
  step: number;
}

const StepBadge: React.FC<StepBadgeProps> = ({ step }) => {
  return (
    <div className="flex items-center bg-lightBeige w-fit px-3 py-[0.1rem] rounded-[5px] max-h-[30px]">
      <span className="text-oliveGray text-[0.8rem]">step {step}</span>
    </div>
  );
};

export default StepBadge;
