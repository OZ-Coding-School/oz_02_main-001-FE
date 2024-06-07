import ButtonHeader from "@components/header/ButtonHeader";
import React from "react";
import { useNavigate } from "react-router-dom";

const IngredientsListPage: React.FC = () => {
  const navigate = useNavigate();
  const handleBackBtnClick = (): void => {
    navigate(-1);
  };
  const handleBtnClick = (): void => {
    return;
  };
  return (
    <div>
      <ButtonHeader
        hasBackButton={true}
        handleBackBtnClick={handleBackBtnClick}
        handleButtonClick={handleBtnClick}
        title="재료 목록"
        buttonText="완료"
      />
      <p>IngredientsListPage</p>
    </div>
  );
};

export default IngredientsListPage;
