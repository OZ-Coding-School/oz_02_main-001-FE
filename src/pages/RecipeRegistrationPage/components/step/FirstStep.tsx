import React from "react";
import Label from "../Label";

const FirstStep: React.FC = () => {
  return (
    <>
      <Label name="레시피 이름" />
      <input
        type="text"
        className="border border-softBlue h-[50px] rounded-[5px] p-3 focus:outline-none"
        placeholder="최대 30글자까지 입력할 수 있어요."
      />

      <Label name="완성 사진" />
      <input type="file" />

      <Label name="카테고리" />
      <select className="w-[100px]">
        <option>일상요리</option>
        <option>건강요리</option>
        <option>야식</option>
        <option>디저트</option>
      </select>
    </>
  );
};

export default FirstStep;
