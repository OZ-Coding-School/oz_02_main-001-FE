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

  // 서버에서 재료 데이터를 받아온다
  const { data: ingredients } = useQuery<PostIngredientsResponseType>({
    queryKey: ["ingredients", searchKeyword],
    queryFn: async () => {
      const endpoint = searchKeyword
        ? `${apiRoutes.ingredients}/fridge/${searchKeyword}`
        : `${apiRoutes.ingredients}/fridge`;
      const response = await fetchData<PostIngredientsResponseType>("GET", endpoint);
      return response;
    },
  });

  // 서버에 요청하여 재료 추가 및 취소한다.
  const mutationIngrdient = useMutation<UpdateIngredientType, unknown, number[]>({
    mutationFn: (id: number[]) => {
      const requestBody: PostIngredientsRequestType = { refrigerator: id };
      return fetchData<UpdateIngredientType, PostIngredientsRequestType>(
        "POST",
        apiRoutes.upDateIngredients,
        requestBody,
      );
      // upDateIngredients: "/fridges/ingredients",
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["ingredients"] }); // 재료목록 쿼리 무효화
      queryClient.invalidateQueries({ queryKey: ["refrigerator"] }); // 냉장고 쿼리 무효화 즉 최신 상태로의 업데이트
      console.log(data);
    },
  });

  const handleBackBtnClick = (): void => {
    navigate(-1);
  };

  // 완료 버튼
  const handleBtnClick = (): void => {
    const selectedIngredientList = Object.keys(selectedIngredients)
      .map((id) => {
        return ingredients?.data.find((ingredient) => ingredient.id === parseInt(id));
      })
      // 선택된 재료 리스트 생성
      .filter(Boolean) as IngredientDataType[]; // 유효한 재료만 필터링해준다.

    // 선택된 재료의 ID 리스트를 추출
    const selectedIngredientIds = Object.keys(selectedIngredients).map((id) => parseInt(id));

    // 선택된 재료의 ID 리스트를 서버에 전송
    mutationIngrdient.mutate(selectedIngredientIds);

    // 선택된 재료의 ID 리스트를 navigate 함수의 state 속성에 전달.
    navigate("/refrigerator", {
      state: { selectedIngredients: selectedIngredientList, selectedIngredientIds },
    });
  };

  // 검색 클릭
  const handleSearchClick = () => {
    setIsSearchClicked(true);
  };

  // 검색 키워드 변경
  const handleSearchKeywordChange = (keyword: string) => {
    setSearchKeyword(keyword);
  };

  // 버튼 상태 토글
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

  // 이름순으로 재료 목록 출력
  const sortedIngredients =
    ingredients?.data.sort((a, b) => a.name.localeCompare(b.name, "ko")) || [];
  // 검색 키워드에 따른 필터링
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
