import Scrap from "@components/recipe/Scrap";
import noProfile from "@assets/images/noProfile.png";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

interface RecipeTitleSectionProps {
  title: string;
  bookmark: number;
  bookmarkStatus: number;
  user: UserType;
  canUpdate: number | undefined;
}

const RecipeTitleSection: React.FC<RecipeTitleSectionProps> = ({
  title,
  user,
  bookmark,
  bookmarkStatus,
  canUpdate,
}) => {
  const { recipeId } = useParams();
  const navigate = useNavigate();

  const handleShowProfile = (userId: number): void => {
    // 댓글이 사용자 본인의 댓글일때 프로필 페이지로 갈땐 id를 0으로 보내줘야함
    let profileId = 0;
    if (canUpdate === 0) {
      profileId = userId;
    }
    navigate(`/profile/${profileId}`);
  };

  return (
    <div className="grid gap-6 p-6 bg-white">
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-[1.5rem]">{title}</span>
          <span className="text-[0.8rem] text-[#000000]/50">{user.date.slice(0, 10)}</span>
        </div>
        <div className="pt-[0.3rem]">
          <Scrap
            queryKey={`recipeData${recipeId}`}
            recipe={parseInt(recipeId!)}
            book={bookmark}
            status={bookmarkStatus}
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <img
          src={user.profileImage || noProfile}
          alt="프로필 이미지"
          className="w-[60px] h-[60px] rounded-full cursor-pointer"
          onClick={() => handleShowProfile(user.id)}
        />
        <span className="text-[1.1rem] cursor-pointer" onClick={() => handleShowProfile(user.id)}>
          {user.nickname}
        </span>
      </div>
    </div>
  );
};

export default RecipeTitleSection;
