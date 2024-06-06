import React from "react";

interface LabelProps {
  name: string;
  hasStart?: boolean;
}

const Label: React.FC<LabelProps> = ({ name, hasStart = true }) => {
  return (
    <div className="flex gap-1">
      <span className="font-bold text-[1.1rem]">{name}</span>
      {hasStart && <span className="text-redPink">*</span>}
    </div>
  );
};

export default Label;
