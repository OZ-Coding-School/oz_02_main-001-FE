import Footer from "@components/footer/Footer";
import Header from "@components/header/Header";
import React from "react";

const RecipeRegistrationPage = () => {
  return (
    <div>
      <Header hasBackBtn={true} title="레시피 작성 (1/4)" hasButton={true} />
      <p>RecipeRegistrationPage</p>
      <Footer page="recipeRegistration" />
    </div>
  );
};

export default RecipeRegistrationPage;
