import Footer from "@components/footer/Footer";
import Header from "@components/header/Header";
import React from "react";
import { RefrigeratorType } from "src/types/refrigeratorType";
import RefrigeratorItem from "../components/RefrigeratorItem";
import BigButton from "@components/buttons/BigButton";
import { useNavigate } from "react-router";

const RefrigeratorPage = () => {
  const navigate = useNavigate();
  const dummyData: RefrigeratorType[] = [
    {
      nickname: "50번째 냉장고",
      ingredients: [
        {
          id: 50,
          name: "가지",
        },
        {
          id: 52,
          name: "양파",
        },
      ],
    },
  ];

  const handleFindRecipeClick = () => {
    navigate(`/ingredientSelection`);
  };

  return (
    <div className="h-[calc(100vh-55px)] flex flex-col">
      {/* 높이가 있어야 flex-grow가 먹힘 */}
      <Header hasBell={true} />
      <div id="content" className="flex flex-col flex-grow">
        <RefrigeratorItem refrigerator={dummyData[0]} />
        <div className="grid grid-cols-2 gap-4 p-4 h-full pl-[22px] pr-[22px] grow max-h-[calc(100vh-55px-129px-96px-30px)] overflow-auto">
          {/* {dummyData[0].ingredients.map((ingredient) => (
            <div
              key={ingredient.id}
              className="font-semibold p-[24px] h-14 bg-gray-100 rounded-xl flex justify-center items-center"
            >
              <span>{ingredient.name}</span>
            </div>
          ))} 냉장고에 재료가 추가되어 있을 경우 보여지는 화면*/}
        </div>
        <div className="py-[24px] pl-[22px] pr-[22px] font-semibold">
          <BigButton buttonText={"레시피 찾아보기"} handleClick={handleFindRecipeClick} />
        </div>
      </div>
      <Footer page="refrigerator" />
    </div>
  );
};

export default RefrigeratorPage;
