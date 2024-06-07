import React, { useState } from "react";
import Label from "../Label";
import StepBadge from "@components/badge/StepBadge";
import ImageUpload from "../imageUpload/ImageUpload";
import RectangularSmallButton from "@components/buttons/RectangularSmallButton";
import { FiMinusCircle } from "react-icons/fi";

const ThirdStep: React.FC = () => {
  const initialStepData = {
    step: "",
    image: "",
  };
  const [steps, setSteps] = useState<StepType[]>([initialStepData]);
  const handleAddClick = () => {
    setSteps((prev) => [...prev, initialStepData]);
  };

  const handleChange = (): void => {
    return;
  };

  return (
    <>
      <Label name="요리  순서" />
      <div className="flex flex-col gap-6">
        {steps.map((step, index) => (
          <div className="grid gap-3 w-full">
            <div className="flex justify-between">
              <StepBadge step={index + 1} />
              {steps.length > 1 && <FiMinusCircle className="size-[24px] text-[#000000]/40" />}
            </div>
            <div className="flex gap-2">
              <div className="size-[100px]">
                <ImageUpload value={step.image} handleChange={handleChange} />
              </div>
              <textarea className="resize-none p-2 border border-[#000000]/20 rounded-[5px] flex-grow focus:outline-none" />
            </div>
          </div>
        ))}
      </div>

      <div className="w-[100px]">
        <RectangularSmallButton buttonText="Step 추가" handleClick={handleAddClick} />
      </div>
    </>
  );
};

export default ThirdStep;
