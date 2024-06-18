import React, { useEffect } from "react";
import bi from "@assets/icons/bi.png";
import kakaoLogo from "@assets/icons/kakao.png";
import googleLogo from "@assets/icons/google.png";
import LoginButtons from "../components/LoginButtons";
import { apiRoutes } from "../../../api/apiRoutes";
import { useLocation } from "react-router-dom";

const LoginPage: React.FC = () => {
  const location = useLocation();
  const from = location?.state?.redirectedFrom?.pathname || "/";

  useEffect(() => {
    localStorage.setItem("redirectedFrom", from);
  }, [from]);

  const handleKakaoLoginClick = () => {
    const currentUrl = window.location.href;
    if (currentUrl.includes("localhost:5173")) {
      window.location.href = `https://ndd.life/api/v1${apiRoutes.kakaoLogin}&dev=1`;
    } else if (currentUrl.includes("ndd.life")) {
      window.location.href = `https://ndd.life/api/v1${apiRoutes.kakaoLogin}`;
    }
  };

  const handleGoogleLoginClick = (): void => {
    const currentUrl = window.location.href;
    if (currentUrl.includes("localhost:5173")) {
      window.location.href = `https://ndd.life/api/v1${apiRoutes.googleLogin}&dev=1`;
    } else if (currentUrl.includes("ndd.life")) {
      window.location.href = `https://ndd.life/api/v1${apiRoutes.googleLogin}`;
    }
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
          handleClick={handleKakaoLoginClick}
        />
        <LoginButtons
          imageUrl={googleLogo}
          bgColor="bg-gray-100"
          buttonText="구글 로그인"
          handleClick={handleGoogleLoginClick}
        />
      </div>
    </div>
  );
};

export default LoginPage;
