import FilteringButtons from "@components/filtering/FilteringButtons";
import Header from "@components/header/Header";
import RecipeList from "@components/recipe/RecipeList";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchData } from "../../../api/axios";
import { useQuery } from "@tanstack/react-query";
import { apiRoutes } from "../../../api/apiRoutes";
import SkeletonRecipeListLoader from "../skeleton/SkeletonRecipeListLoader";

interface RecipeTypeProps {
  recipeData: RecipeType[];
}

const RecipeListPage: React.FC<RecipeTypeProps> = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const handleBackBtnClick = () => {
    navigate(-1);
  };

  const { data, isLoading } = useQuery<RecipeType[]>({
    queryKey: ["recipeCategory"],
    queryFn: () => fetchData("GET", apiRoutes.recipeCategory),
  });
  console.log(data);

  let title = "";
  if (categoryId === "daily") {
    title = "일상요리";
  } else if (categoryId === "healthy") {
    title = "건강요리";
  } else if (categoryId === "midnightSnack") {
    title = "야식";
  } else if (categoryId === "desert") {
    title = "디저트";
  }

  return (
    <div>
      <Header hasBackBtn={true} title={title} handleBackBtnClick={handleBackBtnClick} />
      <FilteringButtons />
      {isLoading ? (
        [...Array(4)].map((_, index) => <SkeletonRecipeListLoader key={index} />)
      ) : (
        <RecipeList recipeData={data || []} />
      )}
    </div>
  );
};

export default RecipeListPage;
