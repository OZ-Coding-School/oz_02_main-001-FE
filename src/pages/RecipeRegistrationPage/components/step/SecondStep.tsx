import React, { useState } from "react";
import Input from "../input/Input";
import SelectBox from "../selectbox/SelectBox";
import RectangularSmallButton from "@components/buttons/RectangularSmallButton";
import Label from "../Label";
import { FiMinusCircle } from "react-icons/fi";

const SecondStep: React.FC = () => {
  const units = ["개", "컵", "큰술", "작은술", "티스푼", "ml", "g", "꼬집"];
  const initialIngredientData = {
    name: "",
    quantity: 0,
    unit: "",
  };
  const [ingredients, setIngredients] = useState<IngredientType[]>([initialIngredientData]);
  const [isDeleteButtonClick, setIsDeleteButtonClick] = useState<boolean>(false);

  const handleAddClick = () => {
    setIngredients((prev) => [...prev, initialIngredientData]);
  };

  const handleDeleteClick = () => {
    setIsDeleteButtonClick(true);
  };

  const handleMinusClick = () => {};

  const handleCompleteClick = () => {
    setIsDeleteButtonClick(false);
  };

  return (
    <>
      <div className="flex justify-between items-center ">
        <Label name="요리 재료" />
        {ingredients.length !== 1 &&
          (isDeleteButtonClick ? (
            <div className="w-[100px]">
              <RectangularSmallButton buttonText="완료" handleClick={handleCompleteClick} />
            </div>
          ) : (
            <div className="w-[100px]">
              <RectangularSmallButton buttonText="재료 삭제" handleClick={handleDeleteClick} />
            </div>
          ))}
      </div>
      <div className="flex flex-col gap-6">
        {ingredients.map((ingredient, index) => (
          <div className="flex gap-1 ">
            <div
              key={index}
              className={`flex flex-col gap-2 ${!isDeleteButtonClick ? "w-full" : "w-[420px]"}`}
            >
              <Input placeholder="재료명" maxLength={10} />
              <div className="flex gap-2">
                <div className="w-[50%]">
                  <Input placeholder="수량" maxLength={20} />
                </div>
                <div className="w-[50%]">
                  <SelectBox options={units} placeholder="단위" />
                </div>
              </div>
            </div>
            {isDeleteButtonClick && (
              <div
                className="flex justify-center items-center w-[50px] h-[108px]"
                onClick={handleMinusClick}
              >
                <FiMinusCircle className="size-[24px]" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="w-[100px]">
        <RectangularSmallButton buttonText="재료 추가" handleClick={handleAddClick} />
      </div>
    </>
  );
};

export default SecondStep;
