import React from "react";
import bi from "@assets/icons/bi.png";
import GoogleLoginButton from "../components/GoogleLoginButton";
import KakaoLoginButton from "../components/KakaoLoginButton";

const LoginPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-[100px]">
      <div className="w-[350px] h-[350px]">
        <img src={bi} alt="BrandIcon" className="mx-auto"></img>
      </div>
      <div className="flex flex-col gap-4 mt-[75px]">
        <KakaoLoginButton />
        <GoogleLoginButton />
      </div>
    </div>
  );
};

export default LoginPage;
