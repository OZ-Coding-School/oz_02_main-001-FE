import ButtonHeader from "@components/header/ButtonHeader";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "@components/footer/Footer";
import Search from "../components/Search";
import IngredientsListItem from "../components/IngredientsListItem";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchData } from "../../../api/axios";
import { apiRoutes } from "../../../api/apiRoutes";

const IngredientsListPage: React.FC = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [isSearchClicked, setIsSearchClicked] = useState(true);
  const [buttonStates, setButtonStates] = useState<{ [key: number]: boolean }>({});
  const [selectedIngredients, setSelectedIngredients] = useState<{ [key: number]: boolean }>({});
  const [searchKeyword, setSearchKeyword] = useState("");

  const { data: ingredients } = useQuery<IngredientListDataType>({
    queryKey: ["ingredients", searchKeyword],
    queryFn: () => {
      const endpoint = searchKeyword
        ? `${apiRoutes.ingredients}/fridge/${searchKeyword}`
        : `${apiRoutes.ingredients}/fridge`;
      return fetchData<IngredientListDataType>("GET", endpoint);
    },
  });

  const mutationIngrdient = useMutation<PostRefrigeratorType>({
    mutationFn: (id: number) =>
      fetchData<PostRefrigeratorType>("POST", apiRoutes.refrigerator, {
        refrigerator: id,
      }),
    onSuccess: (_data: PostRefrigeratorType) => {
      queryClient.invalidateQueries({ queryKey: ["refrigerator"] });
    },
  });

  const handleBackBtnClick = (): void => {
    navigate(-1);
  };

  const handleBtnClick = (): void => {
    const selectedIngredientList = Object.keys(selectedIngredients)
      .map((id) => {
        return ingredients?.data.find((ingredient) => ingredient.id === parseInt(id));
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

  const sortedIngredients =
    ingredients?.data.sort((a, b) => a.name.localeCompare(b.name, "ko")) || [];
  const filteredIngredients = searchKeyword
    ? sortedIngredients.filter((ingredient) => ingredient.name.includes(searchKeyword))
    : sortedIngredients;

  return (
    <div className="flex flex-col h-screen">
      <ButtonHeader
        hasBackButton={true}
        handleBackBtnClick={handleBackBtnClick}
        handleButtonClick={handleBtnClick}
        title="재료 목록"
        buttonText="완료"
      />
      <div className="sticky top-0 z-10" onClick={handleSearchClick}>
        <Search onSearchKeywordChange={handleSearchKeywordChange} />
      </div>
      <div className="overflow-auto flex-grow">
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
      <footer className="sticky bottom-0 w-full">
        <Footer page="refrigerator" />
      </footer>
    </div>
  );
};

export default IngredientsListPage;
