import React from "react";

interface InputProps {
  placeholder: string;
  maxLength: number;
}

const Input: React.FC<InputProps> = ({ placeholder, maxLength }) => {
  return (
    <input
      type="text"
      className="border h-[50px] rounded-[5px] p-3 focus:outline-none"
      placeholder={placeholder}
      maxLength={maxLength}
    />
  );
};

export default Input;
