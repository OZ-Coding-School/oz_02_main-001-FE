import React, { useState } from "react";
import Label from "../Label";
import Input from "../input/Input";
import SelectBox from "../selectbox/SelectBox";
import ImageUpload from "../imageUpload/ImageUpload";

interface FirstStepProps {
  recipeData: RecipeRegistrationDataType;
  setRecipeData: React.Dispatch<React.SetStateAction<RecipeRegistrationDataType>>;
}

const FirstStep: React.FC<FirstStepProps> = ({ recipeData, setRecipeData }) => {
  const categories = ["일상요리", "건강요리", "야식", "디저트"];

  return (
    <>
      <Label name="레시피 이름" />
      <Input placeholder="최대 30글자까지 입력할 수 있어요." maxLength={5} />
      <Label name="완성 사진" />
      <div className="size-[180px]">
        <ImageUpload recipeDataImage={recipeData.mainImage} />
      </div>

      <Label name="카테고리" />
      <div className="w-[100px]">
        <SelectBox options={categories} placeholder="카테고리" />
      </div>
    </>
  );
};

export default FirstStep;
