import React from "react";
import { BiCommentDetail } from "react-icons/bi";

interface CommentIconProps {
  commentNumber: number;
}

const CommentIcon: React.FC<CommentIconProps> = ({ commentNumber }) => {
  return (
    <div className="flex gap-2">
      <BiCommentDetail className="size-[24px]" />
      <span className="text-[#000000]/50">{commentNumber}</span>
    </div>
  );
};

export default CommentIcon;
