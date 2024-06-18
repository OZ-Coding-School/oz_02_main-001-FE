import React from "react";
import BadgeTitle from "../title/BadgeTitle";
import StepBadge from "@components/badge/StepBadge";

interface RecipeStepsProps {
  steps: StepType[];
}

const RecipeSteps: React.FC<RecipeStepsProps> = ({ steps }) => {
  return (
    <div className="grid gap-5">
      <BadgeTitle type="step" title="조리 순서" />
      {steps.map((step, index) => (
        <div className="flex flex-col gap-2" key={index}>
          <StepBadge step={index + 1} />
          <div className="flex w-full min-h-[110px] gap-3">
            <div className={`${step.image ? "w-[75%]" : ""}`}>{step.step}</div>
            <div>
              {step.image && (
                <img
                  fetchPriority="low"
                  decoding="async"
                  loading="lazy"
                  src={step.image}
                  alt={`스텝${index + 1} 이미지`}
                  className="w-[110px] h-[110px] rounded-[10px] object-fit-cover"
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeSteps;
