import Footer from "@components/footer/Footer";
import MainHeader from "@components/header/MainHeader";
import Modal from "../components/Modal";
import React, { useEffect, useState } from "react";
import BestRecipeList from "../components/BestRecipeList";
import { mainPageData } from "../data/mainPageData";
import CategorySectionList from "../components/CategorySectionList";

const MainPage: React.FC = () => {
  const [isMainPageModalOpen, setIsMainPageModalOpen] = useState(false);

  useEffect(() => {
    // api에서 데이터 받아와야함
    setIsMainPageModalOpen(false);
  }, []);

  const handleCloseModal = () => {
    setIsMainPageModalOpen(false);
  };

  const handleSubmitModal = (name: string, gender: string, age: number, pushContent: boolean) => {
    // api로 넘겨야함
    console.log(name, gender, age, pushContent);
    setIsMainPageModalOpen(false);
  };

  return (
    <div>
      <MainHeader />
      <div className="pt-5 pb-3 px-7 flex flex-col gap-y-[20px]">
        <div>
          <div>
            <p className="text-[20px] font-semibold">🏆 금주의 레시피 🏆 </p>
            <p className="text-[14px] text-gray-400">냉뚝이 어워즈 인기 레시피 !</p>
          </div>
          <BestRecipeList mainPageData={mainPageData} />
        </div>

        <div className="flex flex-col gap-y-10">
          <CategorySectionList
            mainPageData={mainPageData}
            categoryName="daily"
            category="일상요리"
            categoryDescription="everyday cooking recipes"
          />
          <CategorySectionList
            mainPageData={mainPageData}
            categoryName="healthy"
            category="건강식"
            categoryDescription="healthy cooking recipes"
          />
          <CategorySectionList
            mainPageData={mainPageData}
            categoryName="midnight"
            category="야식"
            categoryDescription="dessert cooking recipes"
          />
          <CategorySectionList
            mainPageData={mainPageData}
            categoryName="desert"
            category="디저트"
            categoryDescription="midnight food recipes"
          />
        </div>
      </div>
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
