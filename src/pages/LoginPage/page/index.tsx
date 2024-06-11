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

  // useEffect(() => {
  //   mutationLogin.mutate();
  // }, []);

  // const fetchLogin = async (): Promise<void> => {
  //   return await fetchData("GET", apiRoutes.userLogin);
  // };

  // const mutationLogin = useMutation<void, void>({
  //   mutationFn: fetchLogin,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({
  //       queryKey: ["login"],
  //     });
  //     navigate("/");
  //   },
  // });

  const handleKakaoLoginClick = () => {
    window.location.href = `http://ndd.kro.kr/api/v1${apiRoutes.kakaoLogin}&dev=1`;
  };

  const handleGoogleLoginClick = (): void => {
    window.location.href = `http://ndd.kro.kr/api/v1${apiRoutes.googleLogin}&dev=0`;
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
