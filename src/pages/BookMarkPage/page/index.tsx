import Footer from "@components/footer/Footer";
import Header from "@components/header/Header";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import { apiRoutes } from "../../../api/apiRoutes";
import { fetchData } from "../../../api/axios";
import SkeletonRecipeList from "@components/recipe/SkeletonRecipeList";
import RecipeList from "@components/recipe/RecipeList";

const BookMarkPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackBtnClick = (): void => {
    navigate(-1);
  };

  const fetchBook = async (): Promise<RecipeCategoryType> => {
    return await fetchData("GET", `${apiRoutes.recipeCatory}/book`);
  };

  const { data, isLoading, error } = useQuery<RecipeCategoryType>({
    queryKey: ["book"],
    queryFn: fetchBook,
  });
  if (error) {
    console.log(error);
  }
  console.log(data);

  return (
    <>
      <Header hasBackBtn={true} title="스크랩한 페이지" handleBackBtnClick={handleBackBtnClick} />
      {isLoading ? (
        <SkeletonRecipeList />
      ) : (
        <div className="min-h-[calc(100vh-105px)]">
          {data?.data && <RecipeList recipeData={data?.data} />}
        </div>
      )}

      <Footer page="bookmark" />
    </>
  );
};

export default BookMarkPage;
