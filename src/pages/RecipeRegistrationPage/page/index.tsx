import Footer from "@components/footer/Footer";
import ButtonHeader from "@components/header/ButtonHeader";
import React, { useState } from "react";
import FirstStep from "../components/step/FirstStep";
import ThirdStep from "../components/step/ThirdStep";
import FourthStep from "../components/step/FourthStep";
import SecondStep from "../components/step/SecondStep";
import { useRecipeStore } from "./../../../store/useRecipeStore";
import { useMutation } from "@tanstack/react-query";
import { fetchData } from "./../../../api/axios";
import { useNavigate } from "react-router-dom";
import { apiRoutes } from "./../../../api/apiRoutes";

const RecipeRegistrationPage: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<number>(1);
  const [isValid, setIsValid] = useState<boolean>(false);
  const { recipeData } = useRecipeStore();

  const submit = useMutation({
    mutationFn: () => fetchData("POST", apiRoutes.recipes, recipeData),
    onSuccess: (data) => {
      // navigate(`/recipe/${data.data.id}`);
      console.log("요청 성공");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  console.log(recipeData);

  const handleBack = () => {
    setStep((prev) => (prev === 1 ? prev : --prev));
  };

  const handleNext = () => {
    setStep((prev) => ++prev);
  };

  const handleSubmit = () => {
    submit.mutate();
  };

  return (
    <div>
      <ButtonHeader
        hasBackButton={step > 1}
        title={`레시피 작성 (${step}/4)`}
        buttonText={step < 4 ? "다음" : "완료"}
        disabled={!isValid}
        handleBackBtnClick={handleBack}
        handleButtonClick={step === 4 ? handleSubmit : handleNext}
      />
      <div className="flex flex-col px-3 pt-3 pb-[50px] gap-4 w-full min-h-[calc(100vh-105px)]">
        {step === 1 && <FirstStep setIsValid={setIsValid} />}
        {step === 2 && <SecondStep setIsValid={setIsValid} />}
        {step === 3 && <ThirdStep setIsValid={setIsValid} />}
        {step === 4 && <FourthStep />}
      </div>
      <Footer page="recipeRegistration" />
    </div>
  );
};

export default RecipeRegistrationPage;
