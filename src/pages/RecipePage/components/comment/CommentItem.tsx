import MoreButton from "@components/buttons/MoreButton";
import React from "react";
import { useNavigate } from "react-router-dom";

interface CommentItemProps {
  comment: CommentType;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
  const navigate = useNavigate();

  const handleShowProfile = (userId: number): void => {
    // 댓글이 사용자 본인의 댓글일때 프로필 페이지로 갈땐 id를 0으로 보내줘야함
    let profileId = 0;
    if (comment.canUpdate === 0) {
      profileId = userId;
    }
    navigate(`/profile/${profileId}`);
  };

  return (
    <div className="flex justify-between border-t p-4">
      <div className="flex gap-2">
        <img
          src={comment.profileImage}
          className="size-[30px] rounded-full cursor-pointer"
          onClick={() => handleShowProfile(comment.userId)}
        />
        <div>
          <div className="flex items-center gap-2">
            <span className="cursor-pointer" onClick={() => handleShowProfile(comment.userId)}>
              {comment.userNickname}
            </span>
            <span className="text-[#000000]/50 text-[0.8rem]">{comment.updatedAt}</span>
          </div>
          <div>{comment.comment}</div>
        </div>
      </div>
      {comment.canUpdate === 1 && (
        <div>
          <MoreButton />
        </div>
      )}
    </div>
  );
};

export default CommentItem;
