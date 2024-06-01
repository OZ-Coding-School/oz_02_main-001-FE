import Footer from "@components/footer/Footer";
import Header from "@components/header/Header";
import React from "react";

const RefrigeratorPage = () => {
  return (
    <div>
      <Header hasBell={true} />
      <p>RefrigeratorPage</p>
      <Footer page="refrigerator" />
    </div>
  );
};

export default RefrigeratorPage;
