import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import ButtonHeader from "@components/header/ButtonHeader";
import Footer from "@components/footer/Footer";
import Search from "../components/Search";
import IngredientsListItem from "../components/IngredientsListItem";
import { fetchData } from "../../../api/axios";
import { apiRoutes } from "../../../api/apiRoutes";

const IngredientsListPage: React.FC = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [searchKeyword, setSearchKeyword] = useState("");
  const [debouncedKeyWord, setDebouncedKeyWord] = useState<string>("");
  const [selectedIngredients, setSelectedIngredients] = useState<UpdateIngredientType[]>([]);
  const [selectedIngredientIds, setSelectedIngredientIds] = useState<number[]>([]);

  useEffect(() => {
    const storedIds = localStorage.getItem("selectedIngredientIds");
    if (storedIds) {
      setSelectedIngredientIds(JSON.parse(storedIds));
    }
  }, [searchKeyword]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedKeyWord(searchKeyword);
    }, 500);

    return () => {
      clearTimeout(handler)
    }
  })

  // 서버에서 재료 데이터를 받아온다
  const { data: ingredients } = useQuery<IngredientsResponseType>({
    queryKey: ["ingredients", debouncedKeyWord],
    queryFn: async () => {
      const endpoint = debouncedKeyWord
        ? `${apiRoutes.ingredients}/fridge/${debouncedKeyWord}`
        : `${apiRoutes.ingredients}/fridge`;
      return await fetchData<IngredientsResponseType>("GET", endpoint);
    },
  });

  // 재료 추가 or 취소
  const { mutate } = useMutation({
    mutationFn: () => fetchData("POST", apiRoutes.upDateIngredients, selectedIngredients),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["refrigerator"] });
      navigate("/refrigerator");
    },
    onError: (error) => console.log(error),
  });

  const handleBackBtnClick = (): void => {
    navigate(-1);
  };

  const handleSubmit = () => {
    mutate();
  };

  const handleToggleChange = (id: number, status: number): void => {
    const itemExists = selectedIngredients.some((item) => item.id === id);

    let newData;
    if (itemExists) {
      newData = selectedIngredients.map((item) => {
        if (item.id === id) {
          return { ...item, status };
        }
        return item;
      });
    } else {
      newData = [...selectedIngredients, { id, status }];
    }

    setSelectedIngredients(newData);

    let updatedIds;
    if (status === 1) {
      updatedIds = [...selectedIngredientIds, id];
    } else {
      updatedIds = selectedIngredientIds.filter((storedId) => storedId !== id);
    }

    const uniqueIdsForStorage = Array.from(new Set(updatedIds));

    localStorage.setItem("selectedIngredientIds", JSON.stringify(uniqueIdsForStorage));
    setSelectedIngredientIds(uniqueIdsForStorage);
  };

  const handleSearchKeywordChange = (keyword: string) => {
    setSearchKeyword(keyword);
  };

  // 이름순으로 재료 목록 출력
  const sortedIngredients =
    ingredients?.data.sort((a, b) => a.name.localeCompare(b.name, "ko")) || [];

  return (
    <div className="flex flex-col h-screen">
      <ButtonHeader
        hasBackButton={true}
        handleBackBtnClick={handleBackBtnClick}
        handleButtonClick={handleSubmit}
        title="재료 목록"
        buttonText="완료"
      />
      <div className="sticky top-0 z-10">
        <Search onSearchKeywordChange={handleSearchKeywordChange} />
      </div>
      <div className="overflow-auto flex-grow">
        <div className="pt-2">
          {sortedIngredients.map((ingredient) => (
            <IngredientsListItem
              key={ingredient.id}
              ingredient={ingredient}
              handleToggleChange={handleToggleChange}
              selectedIngredientIds={selectedIngredientIds}
            />
          ))}
        </div>
      </div>
      <footer className="sticky bottom-0 w-full">
        <Footer page="refrigerator" />
      </footer>
    </div>
  );
};

export default IngredientsListPage;
