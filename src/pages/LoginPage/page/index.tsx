import React, { useEffect } from "react";
import bi from "@assets/icons/bi.png";
import kakaoLogo from "@assets/icons/kakao.png";
import googleLogo from "@assets/icons/google.png";
import LoginButtons from "../components/LoginButtons";
import { apiRoutes } from "../../../api/apiRoutes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchData } from "../../../api/axios";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  useEffect(() => {
    // 로그아웃 기능 구현 전까지 일단 자동로그인 주석처리
    mutationLogin;
    console.log("로그인페이지 시작");
  }, []);

  const fetchLogin = async (): Promise<void> => {
    return await fetchData("GET", apiRoutes.userLogin);
  };

  const mutationLogin = useMutation<void, void>({
    mutationFn: fetchLogin,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["login"],
      });
      console.log("여기는 mutationLogin GET 부분 성공했을때");
      navigate("/");
    },
  });

  const handleKakaoLoginClick = () => {
    console.log("여기는 카카오톡 버튼 누르면 실행");
    const currentUrl = window.location.href;
    if (currentUrl.includes("localhost:5173")) {
      window.location.href = `https://ndd.life/api/v1${apiRoutes.kakaoLogin}&dev=1`;
    } else if (currentUrl.includes("ndd-project.vercel.app")) {
      window.location.href = `https://ndd.life/api/v1${apiRoutes.kakaoLogin}`;
    }
  };

  const handleGoogleLoginClick = (): void => {
    console.log("여기는 구글로그인 버튼 누르면 실행");
    const currentUrl = window.location.href;
    if (currentUrl.includes("localhost:5173")) {
      window.location.href = `https://ndd.life/api/v1${apiRoutes.googleLogin}&dev=1`;
    } else if (currentUrl.includes("ndd-project.vercel.app")) {
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
