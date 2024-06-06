import React from "react";

interface InputProps {
  placeholder: string;
  value?: string;
  maxLength: number;
  handleChange: (field: string, value: string) => void; // handleChange 함수 추가
}

const TitleInput: React.FC<InputProps> = ({ placeholder, value, maxLength, handleChange }) => {
  return (
    <input
      type="text"
      className="border w-full h-[50px] rounded-[5px] p-3 border-softBlue focus:outline-none focus:bg-iceBlue"
      placeholder={placeholder}
      value={value}
      maxLength={maxLength}
      onChange={(e) => handleChange("title", e.target.value)}
    />
  );
};

export default TitleInput;
