import React from "react";

interface CommentItemProps {
  comment: CommentType;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
  return (
    <div className="flex gap-2 border-t p-4">
      <img src={comment.profileImage} className="size-[30px] rounded-full" />
      <div>
        <div className="flex items-center gap-2">
          <span>{comment.userNickname}</span>
          <span className="text-[#000000]/50 text-[0.8rem]">{comment.updatedAt}</span>
        </div>
        <div>{comment.comment}</div>
      </div>
    </div>
  );
};

export default CommentItem;
