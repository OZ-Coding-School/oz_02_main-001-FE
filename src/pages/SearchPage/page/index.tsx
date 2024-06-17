import FilteringButtons from "@components/filtering/FilteringButtons";
import SearchHeader from "@components/header/SearchHeader";
import RecipeList from "@components/recipe/RecipeList";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import { fetchData } from "./../../../api/axios";
import { apiRoutes } from "./../../../api/apiRoutes";
import SkeletonRecipeList from "@components/recipe/SkeletonRecipeList";

const SearchPage: React.FC = () => {
  const [keyWord, setKeyWord] = useState<string>("");
  const [debouncedKeyWord, setDebouncedKeyWord] = useState<string>("");
  const [sortType, setSortType] = useState<string>("추천순");
  const [sortedRecipes, setSortedRecipes] = useState<RecipeType[]>([]);

  const queryClient = useQueryClient();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (value: string) => {
    setKeyWord(value);
  };

  const handleDelete = () => {
    setKeyWord("");
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedKeyWord(keyWord);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [keyWord]);

  const { data, isSuccess, isError, isLoading } = useQuery<FetchSearchData>({
    queryKey: [`searchRecipe${debouncedKeyWord}`],
    queryFn: () => fetchData("GET", `${apiRoutes.recipeSearch}/${debouncedKeyWord}`),
    enabled: debouncedKeyWord !== "",
    retry: 1,
  });

  useEffect(() => {
    if (debouncedKeyWord === "") {
      queryClient.invalidateQueries({ queryKey: [`searchRecipe${debouncedKeyWord}`] });
      setSortedRecipes([]);
    }
  }, [debouncedKeyWord, queryClient]);

  useEffect(() => {
    if (isSuccess && data) {
      const newSortedRecipes = [...data.data].sort((a, b) => {
        if (sortType === "인기순") {
          if (b.like === a.like) {
            return b.id - a.id; //좋아요 수가 같다면 id가 낮은게 밑으로 정렬되도록(id 최신순)
          }
          return b.like - a.like;
        } else if (sortType === "최신순") {
          return b.id - a.id; //좋아요 수가 같다면 id가 낮을수록 빨리 등록됨
        }
        return 0;
      });
      setSortedRecipes(newSortedRecipes);
    }
  }, [isSuccess, data, sortType]);

  const handleSortChange = (sortType: string) => {
    setSortType(sortType);
  };

  return (
    <div>
      <SearchHeader
        keyWord={keyWord}
        handleChange={handleChange}
        handleDelete={handleDelete}
        inputRef={inputRef}
      />
      <FilteringButtons sortType={sortType} handleClick={handleSortChange} />
      {debouncedKeyWord === "" && (
        <div className="w-full h-[calc(100vh-95px)] flex justify-center items-center">
          검색어를 입력해주세요
        </div>
      )}
      {debouncedKeyWord !== "" && (
        <>
          {isLoading ? (
            <SkeletonRecipeList />
          ) : isError ? (
            <div className="w-full h-[calc(100vh-95px)] flex justify-center items-center">
              검색 결과가 없습니다
            </div>
          ) : (
            <RecipeList queryKey={`searchRecipe${keyWord}`} recipeData={sortedRecipes} />
          )}
        </>
      )}
    </div>
  );
};

export default SearchPage;
