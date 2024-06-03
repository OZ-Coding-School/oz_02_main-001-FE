import React from "react";
import kakaoLogo from "@assets/icons/kakao.png";

interface GoogleLoginButtonProps {
  onClick: () => void;
}

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({ onClick }) => {
  return (
    <button
      className="bg-[#FEE500] text-gray-800 py-2 px-4 rounded-[12px] flex items-center shadow-md w-[300px]"
      onClick={onClick}
    >
      <img src={kakaoLogo} alt="kakao" className="w-8 h-8 ml-[75px]" />
      <span className="min-w-10 h-[40px] p-2 font-normal whitespace-nowrap">카카오 로그인</span>
    </button>
  );
};

export default GoogleLoginButton;
