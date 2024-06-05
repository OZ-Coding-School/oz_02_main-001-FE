import Footer from "@components/footer/Footer";
import MainHeader from "@components/header/MainHeader";
import Modal from "../components/Modal";
import React, { useEffect, useState } from "react";
import gimchi from "@assets/images/김치볶음밥.png";
import recipeImg from "@assets/images/recipe.png";

const mainPageData = {
  best: [
    {
      userNickname: "101번째 냉장고",
      title: "김치볶음밥",
      image: gimchi,
      like: 100,
    },
    {
      userNickname: "2000번째 냉장고",
      title: "둘이서 먹다 하나가 죽어도 모를 음식",
      image: recipeImg,
      scrap: 67,
    },
  ],
  daily: [],
};

const MainPage: React.FC = () => {
  const [isMainPageModalOpen, setIsMainPageModalOpen] = useState(false);

  useEffect(() => {
    // api에서 데이터 받아와야함
    setIsMainPageModalOpen(true);
  }, []);

  const handleCloseModal = () => {
    setIsMainPageModalOpen(false);
  };

  const handleSubmitModal = (name: string, gender: string, age: number, pushContent: boolean) => {
    // api로 넘겨야함
    setIsMainPageModalOpen(false);
  };

  return (
    <div>
      <MainHeader />
      <p>MainPage</p>
      <Modal
        isOpen={isMainPageModalOpen}
        handleCloseModal={handleCloseModal}
        onSubmit={handleSubmitModal}
      />
      <Footer page="main" />
    </div>
  );
};

export default MainPage;
