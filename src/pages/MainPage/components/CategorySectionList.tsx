import RoundedSmallButton from "@components/buttons/RoundedSmallButton";
import React from "react";
import { useNavigate } from "react-router-dom";
import CategorySectionItem from "./CategorySectionItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

interface CategorySectionListProps {
  mainPageData: MainPageDataType;
  categoryName: string;
  category: string;
  categoryDescription: string;
}

const CategorySectionList: React.FC<CategorySectionListProps> = ({
  mainPageData,
  categoryName,
  category,
  categoryDescription,
}) => {
  const navigate = useNavigate();
  const handleMoreBtnClick = (): void => {
    navigate(`/recipeList/${categoryName}`);
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-between">
          <span className="text-[20px] font-semibold">{category}</span>
          <RoundedSmallButton buttonText="더보기" handleClick={handleMoreBtnClick} />
        </div>
        <p className="text-[14px] text-gray-400">{categoryDescription}</p>
        <Swiper
          slidesPerView={1.6}
          spaceBetween={20}
          freeMode={true}
          modules={[FreeMode]}
          className="w-full h-full"
        >
          {mainPageData.daily.map((data, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <CategorySectionItem data={data} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default CategorySectionList;
