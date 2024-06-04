import React from "react";
import BadgeTitle from "../title/BadgeTitle";

interface RecipeStepsProps {
  steps: StepType[];
}

const RecipeSteps: React.FC<RecipeStepsProps> = ({ steps }) => {
  return (
    <div className="grid gap-5">
      <BadgeTitle type="step" title="조리 순서" />
      {steps.map((step, index) => (
        <div className="flex flex-col gap-2">
          <div className="flex items-center bg-lightBeige w-fit px-3 py-[0.1rem] rounded-[5px]">
            <span className="text-oliveGray text-[0.8rem]">step {index + 1}</span>
          </div>
          <div className="flex  w-full gap-3">
            <div className={`${step.image ? "w-[75%]" : ""}`}>{step.step}</div>
            <div>
              {step.image && (
                <img src={step.image} className="w-[110px] h-[110px] rounded-[10px]" />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeSteps;
