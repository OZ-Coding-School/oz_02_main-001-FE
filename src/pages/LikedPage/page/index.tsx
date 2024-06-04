import Header from "@components/header/Header";
import RecipeList from "@components/recipe/RecipeList";
import React from "react";
import { useNavigate } from "react-router";
import { data } from "../../SearchPage/page/index";

const LikedPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackBtnClick = (): void => {
    navigate(-1);
  };

  return (
    <>
      <Header hasBackBtn={true} title="좋아요한 레시피" handleBackBtnClick={handleBackBtnClick} />
      <div>
        <RecipeList recipeData={data} />
      </div>
    </>
  );
};

export default LikedPage;
