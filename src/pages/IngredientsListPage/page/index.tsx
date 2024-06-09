import ButtonHeader from "@components/header/ButtonHeader";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "@components/footer/Footer";
import Search from "../components/Search";
import IngredientsListItem from "../components/IngredientsListItem"; // 추가된 부분
import { IngredientDataType } from "src/types/ingredientType";

const IngredientsListPage: React.FC = () => {
  const navigate = useNavigate();
  const [isSearchClicked, setIsSearchClicked] = useState(true);
  const [buttonStates, setButtonStates] = useState<{ [key: number]: boolean }>({});
  const [selectedIngredients, setSelectedIngredients] = useState<{ [key: number]: boolean }>({});
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleBackBtnClick = (): void => {
    navigate(-1);
  };

  const handleBtnClick = (): void => {
    const selectedIngredientList = Object.keys(selectedIngredients)
      .map((id) => {
        return ingredients.find((ingredient) => ingredient.id === parseInt(id));
      })
      .filter(Boolean);
    navigate("/refrigerator", { state: { selectedIngredients: selectedIngredientList } });
  };

  const handleSearchClick = () => {
    setIsSearchClicked(true);
  };

  const handleSearchKeywordChange = (keyword: string) => {
    setSearchKeyword(keyword);
  };

  const toggleButtonState = (id: number) => {
    setButtonStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
    if (selectedIngredients[id]) {
      const updatedSelected = { ...selectedIngredients };
      delete updatedSelected[id];
      setSelectedIngredients(updatedSelected);
    } else {
      setSelectedIngredients((prevState) => ({
        ...prevState,
        [id]: true,
      }));
    }
  };

  const ingredients: IngredientDataType[] = [
    { id: 1, name: "가다랑어포", image: null },
    { id: 2, name: "가래떡", image: null },
    { id: 3, name: "가자미", image: null },
    { id: 4, name: "가지", image: null },
    { id: 5, name: "갈치", image: null },
    { id: 6, name: "감", image: null },
    { id: 7, name: "감자", image: null },
    { id: 8, name: "꿀", image: null },
    { id: 9, name: "소금", image: null },
    { id: 10, name: "후추", image: null },
    { id: 11, name: "참치", image: null },
    { id: 12, name: "쌀", image: null },
    { id: 13, name: "밀가루", image: null },
    { id: 14, name: "고구마", image: null },
    { id: 15, name: "설탕", image: null },
    { id: 16, name: "고등어", image: null },
  ];

  const sortedIngredients = ingredients.sort((a, b) => a.name.localeCompare(b.name, "ko"));
  const filteredIngredients = searchKeyword
    ? sortedIngredients.filter((ingredient) => ingredient.name.includes(searchKeyword))
    : sortedIngredients;

  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="overflow-auto pb-20">
        <ButtonHeader
          hasBackButton={true}
          handleBackBtnClick={handleBackBtnClick}
          handleButtonClick={handleBtnClick}
          title="재료 목록"
          buttonText="완료"
        />
        <div onClick={handleSearchClick}>
          <Search onSearchKeywordChange={handleSearchKeywordChange} />
        </div>
        {isSearchClicked && (
          <div className="pt-2">
            {filteredIngredients.map((ingredient) => (
              <IngredientsListItem
                key={ingredient.id}
                ingredient={ingredient}
                buttonState={!!buttonStates[ingredient.id]}
                toggleButtonState={toggleButtonState}
              />
            ))}
          </div>
        )}
      </div>
      <footer className="fixed bottom-0 w-full">
        <Footer page="refrigerator" />
      </footer>
    </div>
  );
};

export default IngredientsListPage;
