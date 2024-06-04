import React from "react";
import CommentItem from "./CommentItem";
import { IoArrowUpCircleOutline } from "react-icons/io5";

interface CommentSectionProps {
  comments: CommentType[];
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => {
  return (
    <div>
      <div className="flex flex-col">
        {comments.map((comment) => (
          <CommentItem comment={comment} />
        ))}
      </div>
      <div className="w-full h-[50px] px-2 py-1 relative">
        <input
          type="text"
          className="bg-white p-3 w-full h-full border border-cloudGray rounded-[5px] focus:outline-none "
          placeholder="댓글을 입력하세요."
        />
        <button className="flex justify-center items-center size-[40px] absolute right-2 top-[50%] translate-y-[-50%]">
          <IoArrowUpCircleOutline className="size-[24px] " />
        </button>
      </div>
    </div>
  );
};
export default CommentSection;
