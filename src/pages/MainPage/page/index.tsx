import Footer from "@components/footer/Footer";
import MainHeader from "@components/header/MainHeader";
import React from "react";

const MainPage: React.FC = () => {
  return (
    <div>
      <MainHeader />
      <p>MainPage</p>
      <Footer page="main" />
    </div>
  );
};

export default MainPage;
