import React, { useState } from "react";
import Label from "../Label";
import { FaRegImages } from "react-icons/fa6";
import ProceedModal from "@components/modal/ProceedModal";
import Input from "../input/Input";
import SelectBox from "../selectbox/SelectBox";

interface FirstStepProps {
  recipeData: RecipeRegistrationDataType;
  setRecipeData: React.Dispatch<React.SetStateAction<RecipeRegistrationDataType>>;
}

const FirstStep: React.FC<FirstStepProps> = ({ recipeData, setRecipeData }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [image, setImage] = useState<string>(recipeData.mainImage);
  const categories = ["일상요리", "건강요리", "야식", "디저트"];

  const handleMainImageClick = () => {
    if (!image) {
      document.getElementById("fileInput")?.click();
    } else {
      setShowModal(true);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result as string);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleDeleteImage = (): void => {
    // api 데이터 업데이트 코드 추가 예정
    setImage("");
    setShowModal(false);
  };

  const handleCloseModal = (): void => {
    setShowModal(false);
  };

  return (
    <>
      <Label name="레시피 이름" />
      <Input placeholder="최대 30글자까지 입력할 수 있어요." maxLength={5} />
      <Label name="완성 사진" />
      <div className="size-[200px] cursor-pointer" onClick={handleMainImageClick}>
        {image ? (
          <img src={image} className="rounded-[5px] size-full" />
        ) : (
          <div className="flex flex-col gap-1 justify-center items-center size-full bg-softBlue rounded-[5px] ">
            <FaRegImages className="size-[40px]" />
            <span className="text-[#000000]/50 text-lg">(0/1)</span>
          </div>
        )}
      </div>
      <input type="file" id="fileInput" className="hidden" onChange={handleFileChange} />
      <Label name="카테고리" />
      <SelectBox options={categories} />
      {showModal && (
        <ProceedModal
          proceedQuestionText="이미지를 삭제 하시겠습니까?"
          handleLeftClick={handleDeleteImage}
          handleRightClick={handleCloseModal}
        />
      )}
    </>
  );
};

export default FirstStep;
