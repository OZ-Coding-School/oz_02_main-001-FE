import Like from "@components/recipe/Like";
import React from "react";
import { useNavigate } from "react-router-dom";
import { MainPageCategoryDataType } from "src/types/mainPageDataType";

interface CategorySectionItemProps {
  data: MainPageCategoryDataType;
  index: number;
}

const CategorySectionItem: React.FC<CategorySectionItemProps> = ({ data, index }) => {
  const navigate = useNavigate();

  const handleRecipeItemClick = (): void => {
    navigate(`/recipe/${data.recipeId}`);
  };

  return (
    <>
      <div key={index} className="flex flex-col cursor-pointer" onClick={handleRecipeItemClick}>
        <img
          src={data.mainImage}
          className="w-[full] h-[full] mt-5 mb-3 border border-gray-200 rounded-[8px]"
        />

        <span className="text-[16px]">{data.title}</span>
        <div className="flex flex-row justify-between items-center">
          <span className="text-[12px] font-light">{data.userNickname}</span>
          <Like like={data.likesCount} likeStatus={data.likesStatus} />
        </div>
      </div>
    </>
  );
};

export default CategorySectionItem;
