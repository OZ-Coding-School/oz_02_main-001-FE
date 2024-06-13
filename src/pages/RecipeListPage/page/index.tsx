import FilteringButtons from "@components/filtering/FilteringButtons";
import Header from "@components/header/Header";
import RecipeList from "@components/recipe/RecipeList";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchData } from "../../../api/axios";
import { useQuery } from "@tanstack/react-query";
import { apiRoutes } from "../../../api/apiRoutes";
import SkeletonRecipeListLoader from "../skeleton/SkeletonRecipeListLoader";

const RecipeListPage: React.FC = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const handleBackBtnClick = () => {
    navigate(-1);
  };
  const [sortType, setSortType] = useState<string>("추천순"); //추천순이 기준점이 되도록
  const [recipes, setRecipes] = useState<RecipeType[]>([]);

  const { data, isLoading } = useQuery<RecipeCategoryType>({
    queryKey: ["recipeCategory"],
    queryFn: () => fetchData("GET", `${apiRoutes.recipeCategory}/${categoryId}`),
  });
  console.log(data);

  useEffect(() => {
    if (data?.data) {
      setRecipes(data.data);
    }
  }, [data]);

  const handleSortChange = (sortType: string) => {
    setSortType(sortType);
  };

  const sortedRecipes = [...recipes].sort((a, b) => {
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

  let title = "";
  if (categoryId === "daily") {
    title = "일상요리";
  } else if (categoryId === "healthy") {
    title = "건강요리";
  } else if (categoryId === "midnight") {
    title = "야식";
  } else if (categoryId === "desert") {
    title = "디저트";
  }

  return (
    <div>
      <Header hasBackBtn={true} title={title} handleBackBtnClick={handleBackBtnClick} />
      <FilteringButtons onSortChange={handleSortChange} />
      {isLoading ? (
        [...Array(4)].map((_, index) => <SkeletonRecipeListLoader key={index} />)
      ) : (
        <RecipeList recipeData={sortedRecipes} queryKey={"recipeCategory"} />
      )}
    </div>
  );
};

export default RecipeListPage;
