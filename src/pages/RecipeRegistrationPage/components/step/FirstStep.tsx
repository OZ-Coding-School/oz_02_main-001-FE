import React, { useEffect } from "react";
import Label from "../Label";
import Input from "../input/TitleInput";
import SelectBox from "../selectbox/SelectBox";
import { selectOption } from "src/types/selectBoxType";
import { useImageStore } from "@store/useImageStore";
import MainImageUpload from "../imageUpload/MainImageUpload";
import { useRecipeStore } from "@store/useRecipeStore";

interface FirstStepProps {
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
}

const FirstStep: React.FC<FirstStepProps> = ({ setIsValid }) => {
  const categories: selectOption[] = [
    { id: 1, name: "일상요리" },
    { id: 2, name: "건강요리" },
    { id: 3, name: "디저트" },
    { id: 4, name: "야식" },
  ];
  const { recipeData, setRecipeData } = useRecipeStore();
  const { mainImage } = useImageStore();

  const handleChange = (field: string, value: string | number) => {
    setRecipeData({ ...recipeData, [field]: value });
  };

  useEffect(() => {
    const formValidate = () => {
      recipeData.category !== -1 && recipeData.title !== "" && mainImage.image !== ""
        ? setIsValid(true)
        : setIsValid(false);
    };
    formValidate();
  }, [recipeData, mainImage]);

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
        <MainImageUpload setIsValid={setIsValid} />
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
