import Footer from "@components/footer/Footer";
import MainHeader from "@components/header/MainHeader";
import Modal from "../components/Modal";
import React, { useEffect, useState } from "react";

const mainPageData = {};

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
