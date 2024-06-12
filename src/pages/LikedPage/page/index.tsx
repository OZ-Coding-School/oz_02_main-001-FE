import Header from "@components/header/Header";
import React from "react";
import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../../api/axios";
import { apiRoutes } from "../../../api/apiRoutes";
import SkeletonRecipeList from "@components/recipe/SkeletonRecipeList";
import RecipeList from "@components/recipe/RecipeList";

const LikedPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackBtnClick = (): void => {
    navigate(-1);
  };

  const fetchLiked = async (): Promise<RecipeCategoryType> => {
    return await fetchData("GET", `${apiRoutes.recipeCategory}/like`);
  };

  const { data, isLoading, error } = useQuery<RecipeCategoryType>({
    queryKey: ["liked"],
    queryFn: fetchLiked,
  });
  if (error) {
    console.log(error);
  }

  return (
    <>
      <Header hasBackBtn={true} title="좋아요한 레시피" handleBackBtnClick={handleBackBtnClick} />
      {isLoading ? <SkeletonRecipeList /> : data?.data && <RecipeList recipeData={data?.data} />}
    </>
  );
};

export default LikedPage;
