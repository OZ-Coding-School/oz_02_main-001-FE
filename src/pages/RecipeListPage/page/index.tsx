import FilteringButtons from "@components/filtering/FilteringButtons";
import Header from "@components/header/Header";
import RecipeList from "@components/recipe/RecipeList";
import React from "react";
import { data } from "../../SearchPage/page";
import { useNavigate, useParams } from "react-router-dom";

const RecipeListPage: React.FC = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const handleBackBtnClick = () => {
    navigate(-1);
  };

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
      <RecipeList recipeData={data} />
    </div>
  );
};

export default RecipeListPage;
