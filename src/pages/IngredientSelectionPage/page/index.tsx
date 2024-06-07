import React, { useState } from "react";
import Footer from "@components/footer/Footer";
import { useNavigate } from "react-router";
import { BsCheckCircle } from "react-icons/bs";
import BackButton from "@components/header/BackButton";
import BigButton from "@components/buttons/BigButton";
import IngredientSelectionItem from "../components/IngredientSelectionItem";

const IngredientSelectionPage: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  const handleRecommendedlick = () => {
    navigate(`recommendedList`);
  };
  return (
    <div className="h-[calc(100vh-55px)] flex flex-col">
      <div className="flex items-center ">
        <BackButton handleClick={handleClick} />
        <span className="pl-[140px]">재료 선택</span>
      </div>
      <div className="border border-solid"></div>
      <div id="content" className="flex flex-col flex-grow overflow-hidden">
        <div></div>
      </div>
      <div className="py-[18px] pl-[22px] pr-[22px] font-semibold">
        <BigButton buttonText={"레시피 찾아보기"} handleClick={handleRecommendedlick} />
      </div>
      <footer className="mb-[-53px]">
        <Footer page={"refrigerator"} />
      </footer>
    </div>
  );
};

export default IngredientSelectionPage;
