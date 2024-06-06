import Footer from "@components/footer/Footer";
import Header from "@components/header/Header";
import React from "react";
import { RefrigeratorType } from "src/types/refrigeratorType";
import RefrigeratorItem from "../components/RefrigeratorItem";
import BigButton from "@components/buttons/BigButton";

const RefrigeratorPage = () => {
  const dummyData: RefrigeratorType[] = [
    {
      nickname: "50번째 냉장고",
      ingredients: [
        {
          id: 50,
          name: "가지",
        },
      ],
    },
  ];
  return (
    <div className="h-[calc(100vh-55px)] flex flex-col">
      {/* 높이가 있어야 flex-grow가 먹힘 */}
      <Header hasBell={true} />
      <div id="content" className="flex flex-col flex-grow">
        <RefrigeratorItem refrigerator={dummyData[0]} />
        <div className="grid grid-cols-2 gap-4 p-4 h-full grow max-h-[calc(100vh-55px-129px-96px-30px)] overflow-auto">
          {/* 추가된 재료가 보여져야 하는 자리 */}
        </div>
        <div className="py-[24px] pl-[22px] pr-[22px] font-semibold">
          <BigButton buttonText={"레시피 찾아보기"} />
        </div>
      </div>
      <Footer page="refrigerator" />
    </div>
  );
};

export default RefrigeratorPage;
