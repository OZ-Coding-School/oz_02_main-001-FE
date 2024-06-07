import Footer from "@components/footer/Footer";
import ButtonHeader from "@components/header/ButtonHeader";
import React, { useState } from "react";
import FirstStep from "../components/step/FirstStep";
import ThirdStep from "../components/step/ThirdStep";
import FourthStep from "../components/step/FourthStep";
import SecondStep from "../components/step/SecondStep";
import { useRecipeStore } from "@store/useRecipeStore";

const RecipeRegistrationPage: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [isValid, setIsValid] = useState<boolean>(false);
  // const { recipeData, setRecipeData } = useRecipeStore();

  const handleBackButtonClick = () => {
    setStep((prev) => (prev === 1 ? prev : --prev));
  };

  const handleNextButtonClick = () => {
    setStep((prev) => ++prev);
  };

  const handleSubmitButtonClick = () => {
    console.log("등록 완료");
  };

  return (
    <div>
      <ButtonHeader
        hasBackButton={step > 1}
        title={`레시피 작성 (${step}/4)`}
        buttonText={step < 4 ? "다음" : "완료"}
        disabled={!isValid}
        handleBackBtnClick={handleBackButtonClick}
        handleButtonClick={step === 4 ? handleSubmitButtonClick : handleNextButtonClick}
      />
      <div className="flex flex-col px-3 pt-3 pb-[50px] gap-4 w-full min-h-[calc(100vh-105px)]">
        {step === 1 && <FirstStep setIsValid={setIsValid} />}
        {step === 2 && <SecondStep setIsValid={setIsValid} />}
        {step === 3 && <ThirdStep />}
        {step === 4 && <FourthStep />}
      </div>
      <Footer page="recipeRegistration" />
    </div>
  );
};

export default RecipeRegistrationPage;
