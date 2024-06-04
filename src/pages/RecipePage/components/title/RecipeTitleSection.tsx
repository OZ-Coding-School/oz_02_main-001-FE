import Scrap from "@components/recipe/Scrap";
import testUrl from "@assets/images/김치볶음밥.png";

import React from "react";

interface RecipeTitleSectionProps {
  title: string;
  date: string;
  bookmark: number;
  bookmarkStatus: number;
  userNickname: string;
}

const RecipeTitleSection: React.FC<RecipeTitleSectionProps> = ({
  title,
  date,
  bookmark,
  bookmarkStatus,
  userNickname,
}) => {
  return (
    <div
      className="grid gap-6 p-5 bg-white
    "
    >
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-[1.5rem]">{title}</span>
          <span className="text-[0.8rem] text-[#000000]/50">{date}</span>
        </div>
        <Scrap book={bookmark} bookStatus={bookmarkStatus} />
      </div>
      <div className="flex items-center gap-4">
        <img src={testUrl} className="w-[60px] h-[60px] rounded-full" />
        <span className="text-[1.1rem]">{userNickname}</span>
      </div>
    </div>
  );
};

export default RecipeTitleSection;
