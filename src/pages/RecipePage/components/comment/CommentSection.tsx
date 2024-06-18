import React, { useState } from "react";
import CommentItem from "./CommentItem";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchData } from "./../../../../api/axios";
import { apiRoutes } from "./../../../../api/apiRoutes";

type Comment = {
  recipe: number;
  comment: string;
};

interface CommentSectionProps {
  comments: CommentType[];
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => {
  const queryClient = useQueryClient();
  const { recipeId } = useParams();
  const [comment, setComment] = useState<Comment>({
    recipe: parseInt(recipeId!),
    comment: "",
  });

  const handleChange = (value: string) => {
    setComment((prev) => ({ ...prev, comment: value }));
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    commentUpload.mutate();
  };

  const commentUpload = useMutation({
    mutationFn: () => fetchData("POST", apiRoutes.comments, comment),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`recipeData${recipeId}`] });
      setComment((prev) => ({ ...prev, comment: "" }));
    },
    onError: (error) => console.log(error),
  });

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
      <form>
        <div className="w-full p-2">
          <div className="flex justify-between items-center border border-cloudGray rounded-[5px] overflow-hidden">
            <input
              type="text"
              className="bg-white p-3 w-[95%] h-[50px] focus:outline-none "
              placeholder="댓글을 입력하세요."
              value={comment.comment}
              onChange={(e) => handleChange(e.target.value)}
            />
            <button
              className="flex justify-center items-center size-[40px] "
              onClick={handleButtonClick}
            >
              <IoArrowUpCircleOutline className="size-[24px] text-midnightGray" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default CommentSection;
