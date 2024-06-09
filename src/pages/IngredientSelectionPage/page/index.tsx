import React, { useState } from "react";
import Footer from "@components/footer/Footer";
import { useNavigate } from "react-router";
import BigButton from "@components/buttons/BigButton";
import IngredientSelectionItem from "../components/IngredientSelectionItem";
import { BsCheckCircle } from "react-icons/bs";
import Header from "@components/header/Header";

const IngredientSelectionPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedIngredients, setSelectedIngredients] = useState<number[]>([]);
  const ingredients = [
    { id: 50, name: "케찹" },
    { id: 51, name: "스팸" },
    { id: 52, name: "계란" },
    { id: 53, name: "찹쌀" },
    { id: 54, name: "소금" },
    { id: 55, name: "설탕" },
    { id: 56, name: "단무지" },
  ];

  const handleBackBtnClick = (): void => {
    navigate(-1);
  };

  const handleRecommendedlick = () => {
    navigate(`/recommendedList`);
  };

  const selectAllIngredients = () => {
    setSelectedIngredients(ingredients.map((ingredient) => ingredient.id));
  };

  const deselectAllIngredients = () => {
    setSelectedIngredients([]);
  };

  const toggleIngredientSelect = (id: number) => {
    setSelectedIngredients((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((ingredientId) => ingredientId !== id)
        : [...prevSelected, id],
    );
  };

  return (
    <div className="h-[calc(100vh-55px)] flex flex-col">
      <Header hasBackBtn={true} title="재료 선택" handleBackBtnClick={handleBackBtnClick} />
      <div className="border border-solid"></div>
      <div id="content" className="flex flex-col flex-grow overflow-hidden">
        <IngredientSelectionItem
          refrigerator={{
            nickname: "50번째 냉장고",
            ingredients,
          }}
          selectAllIngredients={selectAllIngredients}
          deselectAllIngredients={deselectAllIngredients}
          selectedIngredients={selectedIngredients}
        />
        <div className="flex-grow overflow-auto">
          <div className="grid grid-cols-2 gap-4 p-4 pl-[22px] pr-[22px]">
            {ingredients.map((ingredient) => (
              <div
                key={ingredient.id}
                onClick={() => toggleIngredientSelect(ingredient.id)}
                className={`cursor-pointer font-semibold p-[32px] h-10 rounded-xl flex justify-center items-center relative ${
                  selectedIngredients.includes(ingredient.id) ? "bg-softBlue" : "bg-iceBlue"
                }`}
              >
                <span style={{ letterSpacing: "0.1em" }}>{ingredient.name}</span>
                {selectedIngredients.includes(ingredient.id) && (
                  <BsCheckCircle className="absolute top-[-9px] right-[-9px] w-5 h-5 cursor-pointer" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-[18px] pl-[22px] pr-[22px] font-semibold">
        <BigButton buttonText={"재료 선택 완료"} handleClick={handleRecommendedlick} />
      </div>
      <footer className="mb-[-53px]">
        <Footer page={"refrigerator"} />
      </footer>
    </div>
  );
};

export default IngredientSelectionPage;
