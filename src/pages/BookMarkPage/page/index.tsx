import Footer from "@components/footer/Footer";
import Header from "@components/header/Header";
import RecipeList from "@components/recipe/RecipeList";
import React from "react";
import { useNavigate } from "react-router-dom";
import { data } from "../../../pages/SearchPage/page";

const BookMarkPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackBtnClick = (): void => {
    navigate(-1);
  };

  return (
    <>
      <Header hasBackBtn={true} title="스크랩한 페이지" handleBackBtnClick={handleBackBtnClick} />
      <div>
        <RecipeList recipeData={data} />
      </div>
      <Footer page="bookmark" />
    </>
  );
};

export default BookMarkPage;
