import React from "react";
import kakaoLogo from "@assets/kakao.png";

interface GoogleLoginButtonProps {
  onClick: () => void;
}

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({ onClick }) => {
  return (
    <button
      className="bg-[#FEE500] text-gray-800 py-2 px-4 rounded-[12px] flex items-center shadow-md"
      onClick={onClick}
    >
      <img src={kakaoLogo} alt="kakao" className="w-8 h-8 ml-[130px]" />
      <span className="w-auto h-[40px] p-2 font-normal pr-[110px]">카카오 로그인</span>
    </button>
  );
};

export default GoogleLoginButton;
