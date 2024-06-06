import React, { useState } from "react";
import Label from "../Label";
import StepBadge from "@components/badge/StepBadge";
import ImageUpload from "../imageUpload/ImageUpload";

const ThirdStep: React.FC = () => {
  const initialStepData = {
    step: "",
    image: "",
  };
  const [steps, setSteps] = useState<StepType[]>([initialStepData]);
  return (
    <div>
      <Label name="요리  순서" />
      {steps.map((step, index) => (
        <div>
          <StepBadge step={index + 1} />
          <div className="size-[100px]">
            <ImageUpload recipeDataImage={step.image} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThirdStep;
