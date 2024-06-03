import React from "react";
import bi from "@assets/bi.png";
import GoogleLoginButton from "./GoogleLoginButton";
import KakaoLoginButton from "./KakaoLoginButton";

const LoginPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-8 pt-[100px]">
      <div className="w-[350px] h-[350px]">
        <img src={bi} alt="BrandIcon" className="mx-auto"></img>
      </div>
      <div className="flex flex-col gap-5 mt-[75px]">
        <KakaoLoginButton />
        <GoogleLoginButton />
      </div>
    </div>
  );
};

export default LoginPage;
