import React from "react";

interface LabelProps {
  name: string;
}

const Label: React.FC<LabelProps> = ({ name }) => {
  return (
    <div className="flex gap-1">
      <span className="font-bold">{name}</span>
      <span className="text-redPink">*</span>
    </div>
  );
};

export default Label;
