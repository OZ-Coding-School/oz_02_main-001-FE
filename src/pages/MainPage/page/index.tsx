import Footer from "@components/footer/Footer";
import MainHeader from "@components/header/MainHeader";
import Modal from "../components/Modal";
import React, { useEffect, useState } from "react";

const MainPage = () => {
  const [isMainPageModalOpen, setIsMainPageModalOpen] = useState(false);

  useEffect(() => {
    setIsMainPageModalOpen(true);
  }, []);

  const handleCloseModal = () => {
    setIsMainPageModalOpen(false);
  };

  const handleSubmitModal = (name: string, gender: string, age: string) => {
    setIsMainPageModalOpen(false);
  };

  return (
    <div>
      <MainHeader />
      <p>MainPage</p>
      <Modal isOpen={isMainPageModalOpen} onClose={handleCloseModal} onSubmit={handleSubmitModal} />
      <Footer page="main" />
    </div>
  );
};

export default MainPage;
