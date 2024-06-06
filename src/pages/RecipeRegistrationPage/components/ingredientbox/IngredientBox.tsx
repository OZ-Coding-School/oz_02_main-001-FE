import BigButton from "@components/buttons/BigButton";
import React from "react";

const IngredientBox: React.FC = () => {
  return (
    <div className="flex flex-col gap-1 flex-grow border border-softBlue rounded-[5px] pt-1">
      <div className="py-2 pl-3 ">가지</div>
      <div className="py-2 pl-3 ">가지</div>
      <div className="py-2 pl-3 ">가지</div>
      <div className="py-2 pl-3 ">가지</div>
      <div className="px-2 py-3">
        <BigButton buttonText="(으)로 입력하기" />
      </div>
    </div>
  );
};

export default IngredientBox;
