import React from "react";
import Label from "../Label";

const FourthStep: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <Label name="뚝딱 이야기" hasStart={false} />
      <textarea className="resize-none p-2 border border-[#000000]/20 rounded-[5px] flex-grow h-[300px] focus:outline-none" />
    </div>
  );
};

export default FourthStep;
