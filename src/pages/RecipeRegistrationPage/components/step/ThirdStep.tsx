import React, { useState, useEffect } from "react";
import Label from "../Label";
import StepBadge from "@components/badge/StepBadge";
import RectangularSmallButton from "@components/buttons/RectangularSmallButton";
import { FiMinusCircle } from "react-icons/fi";
import { useRecipeStore } from "@store/useRecipeStore";
import StepImageUpload from "../imageUpload/StepImageUpload";
import { useImageStore } from "@store/useImageStore";
import { useMutation } from "@tanstack/react-query";
import { fetchData } from "./../../../../api/axios";
import { apiRoutes } from "./../../../../api/apiRoutes";

interface ThirdStepProps {
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThirdStep: React.FC<ThirdStepProps> = ({ setIsValid }) => {
  const { recipeData, setRecipeData } = useRecipeStore();
  const [steps, setSteps] = useState<string[]>(recipeData.steps);
  const { stepImage, setStepImage } = useImageStore();

  const initialValue = {
    action: "write",
    type: "step",
    order: stepImage.length + 1,
    image: "",
  };

  const { mutate } = useMutation<undefined, undefined, number>({
    mutationFn: (id) => fetchData("DELETE", `${apiRoutes.deleteStepImage}/${id}`),
    onError: (error) => console.log(error),
  });

  const handleAddClick = () => {
    setSteps((prev) => [...prev, ""]);
    setStepImage([...stepImage, initialValue]);
  };

  const handleChange = (index: number, value: string) => {
    const newSteps = steps.map((step, i) => (i === index ? value : step));
    setSteps(newSteps);
  };

  const handleRemoveClick = (index: number) => {
    const newSteps = steps.filter((_, i) => i !== index);
    const deleteImage = stepImage.filter((_, i) => i !== index);
    const newImage = deleteImage.map((image, index) => {
      return { ...image, order: index + 1 };
    });
    setSteps(newSteps);
    setStepImage(newImage);
    mutate(index + 1);
  };

  useEffect(() => {
    setRecipeData({ ...recipeData, steps });
  }, [steps]);

  useEffect(() => {
    const formValidate = () => {
      const hasEmptyValue = recipeData.steps.some((element) => element === "");
      hasEmptyValue ? setIsValid(false) : setIsValid(true);
    };
    formValidate();
  }, [recipeData, stepImage]);

  return (
    <>
      <div className="flex items-center gap-2">
        <Label name="요리 순서" />
        <span className="rounded-[5px]  text-oliveGray text-[0.8rem]">
          ( 사진은 필수가 아닙니다 )
        </span>
      </div>

      <div className="flex flex-col gap-6">
        {steps.map((step, index) => (
          <div className="grid gap-3 w-full" key={index}>
            <div className="flex justify-between">
              <StepBadge step={index + 1} />
              {steps.length > 1 && (
                <FiMinusCircle
                  className="size-[24px] text-[#000000]/40 cursor-pointer"
                  onClick={() => handleRemoveClick(index)}
                />
              )}
            </div>
            <div className="flex gap-2">
              <div className="w-[30%] aspect-square">
                <StepImageUpload order={index + 1} setIsValid={setIsValid} />
              </div>
              <textarea
                className="resize-none p-2 border border-[#000000]/20 rounded-[5px] flex-grow focus:outline-none w-[70%]"
                value={step}
                onChange={(e) => handleChange(index, e.target.value)}
              />
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
