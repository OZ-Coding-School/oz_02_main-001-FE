import React from "react";
import googleLogo from "@assets/icons/google.png";

interface GoogleLoginButtonProps {
  onClick: () => void;
}

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({ onClick }) => {
  return (
    <button
      className="bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded-[12px] flex items-center shadow-md w-[300px]"
      onClick={onClick}
    >
      <img src={googleLogo} alt="Google" className="w-6 h-6 ml-[75px]" />
      <span className="min-w-10 h-[40px] p-2 font-normal whitespace-nowrap">Google 로그인</span>
    </button>
  );
};

export default GoogleLoginButton;
