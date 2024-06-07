import React from "react";

interface IngredientInputProps {
  field: string;
  placeholder: string;
  value: string | number;
  maxLength: number;
  index: number;
  handleChange: (index: number, field: string, value: string) => void;
}

const IngredientInput: React.FC<IngredientInputProps> = ({
  field,
  placeholder,
  value,
  maxLength,
  index,
  handleChange,
}) => {
  return (
    <input
      type="text"
      className="border w-full h-[50px] rounded-[5px] p-3 border-softBlue focus:outline-none focus:bg-iceBlue"
      placeholder={placeholder}
      maxLength={maxLength}
      value={value}
      onChange={(e) => handleChange(index, field, e.target.value)}
    />
  );
};

export default IngredientInput;
