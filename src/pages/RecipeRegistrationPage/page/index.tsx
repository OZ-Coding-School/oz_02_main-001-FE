import Footer from "@components/footer/Footer";
import ButtonHeader from "@components/header/ButtonHeader";
import React from "react";

const RecipeRegistrationPage = () => {
  return (
    <div>
      <ButtonHeader title="레시피 작성 (1/4)" buttonText="다음" />
      <p>RecipeRegistrationPage</p>
      <Footer page="recipeRegistration" />
    </div>
  );
};

export default RecipeRegistrationPage;
