import React from "react";
import bi from "@assets/icons/bi.png";
import kakaoLogo from "@assets/icons/kakao.png";
import googleLogo from "@assets/icons/google.png";
import LoginButtons from "../components/LoginButtons";
import { useNavigate } from "react-router";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/");
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <div className="flex flex-col h-[100vh] items-center justify-center gap-5">
      <div className="w-[350px] h-[350px]">
        <img src={bi} alt="BrandIcon" className="mx-auto"></img>
      </div>
      <div className="flex flex-col items-center gap-4 w-full">
        <LoginButtons
          imageUrl={kakaoLogo}
          bgColor="bg-[#FEE500]"
          buttonText="카카오 로그인"
          handleClick={handleLoginClick}
        />
        <LoginButtons
          imageUrl={googleLogo}
          bgColor="bg-gray-100"
          buttonText="구글 로그인"
          handleClick={handleLoginClick}
        />
        <LoginButtons
          bgColor="bg-redPink"
          textColor="white"
          buttonText="회원 가입"
          handleClick={handleSignupClick}
        />
      </div>
    </div>
  );
};

export default LoginPage;
