import React, { useEffect, useState } from "react";
import IngredientInput from "../input/IngredientInput";
import SelectBox from "../selectbox/SelectBox";
import RectangularSmallButton from "@components/buttons/RectangularSmallButton";
import Label from "../Label";
import { FiMinusCircle } from "react-icons/fi";
import { useRecipeStore } from "@store/useRecipeStore";
import IngredientBox from "../ingredientbox/IngredientBox";

interface SecondStepProps {
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
}

const SecondStep: React.FC<SecondStepProps> = ({ setIsValid }) => {
  const units = [
    { id: 0, name: "개" },
    { id: 1, name: "컵" },
    { id: 2, name: "큰술" },
    { id: 3, name: "작은술" },
    { id: 4, name: "티스푼" },
    { id: 5, name: "ml" },
    { id: 6, name: "g" },
    { id: 7, name: "꼬집" },
  ];
  const initialIngredientData: RecipeIngredient = {
    name: "",
    quantity: -1,
    unit: -1,
  };
  const { recipeData, setRecipeData } = useRecipeStore();
  const [ingredients, setIngredients] = useState<RecipeIngredient[]>(recipeData.recipeIngredients);
  const [isDeleteButtonClick, setIsDeleteButtonClick] = useState<boolean>(false);
  const [ingredientInputIndex, setIngredientInputIndex] = useState<number | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  console.log(ingredients);
  const handleAddClick = () => {
    const addIngredients = [...ingredients, initialIngredientData];
    setIngredients(addIngredients);
  };

  const handleDeleteClick = () => {
    setShowModal(false);
    setIsDeleteButtonClick(true);
  };

  const handleCompleteClick = () => {
    setShowModal(false);
    setIsDeleteButtonClick(false);
  };

  const handleMinusClick = (index: number) => {
    const newIngredients = ingredients.filter((_, i) => {
      return index !== i;
    });
    setIngredients(newIngredients);
  };

  const handleChange = (index: number, field: string, value: string | number) => {
    const newIngredients = ingredients.map((ingredient, i) => {
      if (index === i) {
        if (field === "quantity" && typeof value === "string")
          return { ...ingredient, [field]: parseInt(value) };
        return { ...ingredient, [field]: value };
      } else {
        return ingredient;
      }
    });
    if (field === "name") {
      setShowModal(true);
    }
    setIngredients(newIngredients);
    setRecipeData({ ...recipeData, recipeIngredients: newIngredients });
  };

  useEffect(() => {
    if (ingredients.length === 1) {
      setIsDeleteButtonClick(false);
    }
    setRecipeData({ ...recipeData, recipeIngredients: ingredients });
  }, [ingredients]);

  useEffect(() => {
    const formValidate = () => {
      const isValid = recipeData.recipeIngredients.every((ingredient) => {
        return ingredient.name !== "" && ingredient.quantity > 0 && ingredient.unit !== -1;
      });
      setIsValid(isValid);
    };
    formValidate();
  }, [recipeData]);

  return (
    <div className="flex flex-col gap-4 pb-[150px]">
      <div className="flex justify-between items-center">
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
          <div key={index} className="flex gap-1">
            <div
              className={`relative flex flex-col gap-2 ${ingredients.length === 1 || !isDeleteButtonClick ? "w-full" : "w-[420px]"}`}
            >
              <div
                onClick={() => {
                  setIngredientInputIndex(index);
                }}
              >
                <IngredientInput
                  value={ingredient.name}
                  index={index}
                  field="name"
                  placeholder="재료명"
                  maxLength={20}
                  handleChange={handleChange}
                />
              </div>
              {ingredientInputIndex === index && showModal && (
                <IngredientBox
                  index={index}
                  value={ingredient.name}
                  ingredients={ingredients}
                  setShowModal={setShowModal}
                  setIngredients={setIngredients}
                />
              )}
              <div className="flex gap-2">
                <div className="w-[50%]">
                  <IngredientInput
                    value={ingredient.quantity < 0 ? "" : ingredient.quantity}
                    index={index}
                    field="quantity"
                    placeholder="수량"
                    maxLength={20}
                    handleChange={handleChange}
                  />
                </div>
                <div className="w-[50%]">
                  <SelectBox
                    index={index}
                    field="unit"
                    options={units}
                    value={ingredient.unit}
                    handleUnitChange={handleChange}
                  />
                </div>
              </div>
            </div>
            {ingredients.length !== 1 && isDeleteButtonClick && (
              <div
                className="flex justify-center items-center w-[50px] h-[108px]"
                onClick={() => handleMinusClick(index)}
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
    </div>
  );
};

export default SecondStep;
