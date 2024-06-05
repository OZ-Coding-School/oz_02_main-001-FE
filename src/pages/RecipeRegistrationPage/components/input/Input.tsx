import React from "react";

interface InputProps {
  placeholder: string;
  value?: string;
  maxLength: number;
}

const Input: React.FC<InputProps> = ({ placeholder, value, maxLength }) => {
  return (
    <input
      type="text"
      className="border w-full h-[50px] rounded-[5px] p-3 border-softBlue focus:outline-none"
      placeholder={placeholder}
      maxLength={maxLength}
    />
  );
};

export default Input;
