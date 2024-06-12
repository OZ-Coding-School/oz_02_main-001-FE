import Scrap from "@components/recipe/Scrap";

import React from "react";
import { useParams } from "react-router-dom";

interface RecipeTitleSectionProps {
  title: string;
  date: string;
  bookmark: number;
  bookmarkStatus: number;
  userNickname: string;
  userProfileImage: string;
}

const RecipeTitleSection: React.FC<RecipeTitleSectionProps> = ({
  title,
  date,
  bookmark,
  bookmarkStatus,
  userNickname,
  userProfileImage,
}) => {
  const { recipeId } = useParams();
  return (
    <div
      className="grid gap-6 p-6 bg-white
    "
    >
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-[1.5rem]">{title}</span>
          <span className="text-[0.8rem] text-[#000000]/50">{date}</span>
        </div>
        <div className="pt-[0.3rem]">
          <Scrap recipe={parseInt(recipeId!)} book={bookmark} status={bookmarkStatus} />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <img
          src={userProfileImage}
          alt="프로필 이미지"
          className="w-[60px] h-[60px] rounded-full"
        />
        <span className="text-[1.1rem]">{userNickname}</span>
      </div>
    </div>
  );
};

export default RecipeTitleSection;
