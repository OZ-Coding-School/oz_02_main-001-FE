import Footer from "@components/footer/Footer";
import MainHeader from "@components/header/MainHeader";
import RecipeItems from "@components/reciepItem/RecipeItem";
import React from "react";

const MainPage = () => {
  return (
    <div>
      <MainHeader />
      <p>MainPage</p>
      <Footer page="main" />
    </div>
  );
};

export default MainPage;
