import Footer from "@components/footer/Footer";
import Header from "@components/header/Header";
import React from "react";
import { RefrigeratorType } from "src/types/refrigeratorType";
import RefrigeratorItem from "../components/RefrigeratorItem";

const RefrigeratorPage = () => {
  const dummyData: RefrigeratorType[] = [
    {
      nickname: "50번째 냉장고",
      ingredients: [
        {
          id: 50,
          name: "가지",
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col flex-grow">
      <Header hasBell={true} />
      <div id="content" className="flex-grow">
        <RefrigeratorItem refrigerator={dummyData[0]} />
      </div>
      <Footer page="refrigerator" />
    </div>
  );
};

export default RefrigeratorPage;
