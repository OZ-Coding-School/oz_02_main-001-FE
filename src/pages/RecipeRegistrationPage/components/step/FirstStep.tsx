import React, { useEffect, useState } from "react";
import Label from "../Label";
import Input from "../input/TitleInput";
import SelectBox from "../selectbox/SelectBox";
import ImageUpload from "../imageUpload/ImageUpload";
import { useRecipeStore } from "@store/useRecipeStore";

interface FirstStepProps {
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
}

const FirstStep: React.FC<FirstStepProps> = ({ setIsValid }) => {
  const categories = ["일상요리", "건강요리", "야식", "디저트"];
  const { recipeData, setRecipeData } = useRecipeStore();

  const handleChange = (field: string, value: string) => {
    setRecipeData({ ...recipeData, [field]: value });
  };

  useEffect(() => {
    const formValidate = () => {
      recipeData.category !== "카테고리" && recipeData.mainImage !== "" && recipeData.title !== ""
        ? setIsValid(true)
        : setIsValid(false);
    };
    formValidate();
  }, [recipeData]);

  return (
    <>
      <Label name="레시피 이름" />
      <Input
        placeholder="최대 30글자까지 입력할 수 있어요."
        maxLength={30}
        value={recipeData.title}
        handleChange={handleChange}
      />
      <Label name="완성 사진" />
      <div className="size-[180px]">
        <ImageUpload value={recipeData.mainImage} handleChange={handleChange} />
      </div>
      <Label name="카테고리" />
      <div className="w-[100px]">
        <SelectBox
          value={recipeData.category}
          field="category"
          options={categories}
          handleCategoryChange={handleChange}
        />
      </div>
    </>
  );
};

export default FirstStep;
