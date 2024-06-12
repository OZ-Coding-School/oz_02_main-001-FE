import React from "react";
import CommentItem from "./CommentItem";
import { IoArrowUpCircleOutline } from "react-icons/io5";

interface CommentSectionProps {
  comments: CommentType[];
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => {
  return (
    <div>
      <div className="flex flex-col min-h-[200px]">
        {comments.length === 0 ? (
          <div className="flex justify-center items-center w-full h-[200px] text-oliveGray">
            첫 댓글을 달아주세요!
          </div>
        ) : (
          comments.map((comment) => <CommentItem comment={comment} key={comment.id} />)
        )}
      </div>
      <div className="w-full p-2 relative ">
        <input
          type="text"
          className="bg-white p-3 w-full h-[50px] border border-cloudGray rounded-[5px] focus:outline-none "
          placeholder="댓글을 입력하세요."
        />
        <button className="flex justify-center items-center size-[40px] absolute right-2 top-[50%] translate-y-[-50%]">
          <IoArrowUpCircleOutline className="size-[24px] text-midnightGray" />
        </button>
      </div>
    </div>
  );
};
export default CommentSection;
