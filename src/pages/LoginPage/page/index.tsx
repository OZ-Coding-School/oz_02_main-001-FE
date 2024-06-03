import React, { useState } from "react";
import bi from "@assets/icons/bi.png";
import GoogleLoginButton from "../components/GoogleLoginButton";
import KakaoLoginButton from "../components/KakaoLoginButton";
import Modal from "./Modal";

const LoginPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLoginClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (name: string, gender: string, age: string) => {
    console.log("Submitted Info:", { name, gender, age });
  };

  return (
    <div className="flex flex-col items-center pt-[100px]">
      <div className="w-[350px] h-[350px]">
        <img src={bi} alt="BrandIcon" className="mx-auto"></img>
      </div>
      <div className="flex flex-col gap-4 mt-[75px]">
        <KakaoLoginButton onClick={handleLoginClick} />
        <GoogleLoginButton />
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleSubmit} />
    </div>
  );
};

export default LoginPage;
