import Footer from "@components/footer/Footer";
import ButtonHeader from "@components/header/ButtonHeader";
import React, { useState } from "react";
import FirstStep from "../components/step/FirstStep";
import ThirdStep from "../components/step/ThirdStep";
import FourthStep from "../components/step/FourthStep";
import SecondStep from "../components/step/SecondStep";

const RecipeRegistrationPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const initialRecipeData: RecipeRegistrationDataType = {
    title: "",
    mainImage: "",
    category: "일상요리",
    story: "",
    ingredients: [],
    steps: [],
  };
  const [recipeData, setRecipeData] = useState<RecipeRegistrationDataType>(initialRecipeData);

  const handleBackButtonClick = () => {
    setStep((prev) => (prev === 1 ? prev : --prev));
  };

  const handleNextButtonClick = () => {
    setStep((prev) => ++prev);
  };

  const handleSubmitButtonClick = () => {
    console.log("등록 완료");
  };

  console.log(recipeData);

  return (
    <div>
      <ButtonHeader
        hasBackButton={step > 1 ? true : false}
        title={`레시피 작성 (${step}/4)`}
        buttonText={step < 4 ? "다음" : "완료"}
        handleBackBtnClick={handleBackButtonClick}
        handleButtonClick={step === 4 ? handleSubmitButtonClick : handleNextButtonClick}
      />
      <div className="flex flex-col p-3  gap-3">
        {step === 1 && <FirstStep recipeData={recipeData} setRecipeData={setRecipeData} />}
        {step === 2 && <SecondStep />}
        {step === 3 && <ThirdStep />}
        {step === 4 && <FourthStep />}
      </div>
      <Footer page="recipeRegistration" />
    </div>
  );
};

export default RecipeRegistrationPage;
