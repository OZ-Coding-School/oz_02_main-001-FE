import React from "react";
import googleLogo from "@assets/google.png";

interface GoogleLoginButtonProps {
  onClick: () => void;
}

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({ onClick }) => {
  return (
    <button
      className="bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded-[12px] flex items-center shadow-md"
      onClick={onClick}
    >
      <img src={googleLogo} alt="Google" className="w-6 h-6 ml-[130px]" />
      <span className="w-auto h-[40px] p-2 font-normal pr-[110px]">Google 로그인</span>
    </button>
  );
};

export default GoogleLoginButton;
