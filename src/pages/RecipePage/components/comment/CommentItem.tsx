import MoreButton from "@components/buttons/MoreButton";
import RectangularSmallButton from "@components/buttons/RectangularSmallButton";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiRoutes } from "./../../../../api/apiRoutes";
import { fetchData } from "./../../../../api/axios";
import Loading from "@components/loading/Loading";

interface CommentItemProps {
  comment: CommentType;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { recipeId } = useParams();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [commentData, setCommentData] = useState<string>(comment.comment);

  const {
    mutate: editMutate,
    isPending,
    isError,
  } = useMutation({
    mutationFn: () => {
      const UpdateData = {
        id: comment.id,
        recipe: parseInt(recipeId!),
        comment: commentData,
      };
      return fetchData("PUT", apiRoutes.comments, UpdateData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recipeData"] });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const { mutate: DeleteMutate } = useMutation({
    mutationFn: () => {
      return fetchData("DELETE", `${apiRoutes.comments}/${comment.id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recipeData"] });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleShowProfile = (userId: number): void => {
    // 댓글이 사용자 본인의 댓글일때 프로필 페이지로 갈땐 id를 0으로 보내줘야함
    let profileId = 0;
    if (comment.canUpdate === 0) {
      profileId = userId;
    }
    navigate(`/profile/${profileId}`);
  };

  const handleChange = (value: string) => {
    setCommentData(value);
  };

  const handleEditModal = () => {
    setIsUpdate(true);
    setIsModalOpen(false);
  };

  const handleUpdateClick = () => {
    editMutate();
    setIsUpdate(false);
  };

  const handleDeleteModal = () => {
    DeleteMutate();
    setIsUpdate(false);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [isUpdate, commentData]);

  return (
    <div className="flex justify-between border-t p-4">
      <div className="flex gap-2 w-full">
        <img
          src={comment.profileImage}
          className="size-[30px] rounded-full cursor-pointer"
          onClick={() => handleShowProfile(comment.userId)}
        />
        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center gap-2">
            <span className="cursor-pointer" onClick={() => handleShowProfile(comment.userId)}>
              {comment.userNickname}
            </span>
            <span className="text-[#000000]/50 text-[0.8rem]">{`${comment.updatedAt.slice(0, 10)} ${comment.updatedAt.slice(11, 16)}`}</span>
          </div>
          {isUpdate ? (
            <textarea
              ref={textareaRef}
              onChange={(e) => handleChange(e.target.value)}
              value={commentData}
              maxLength={100}
              className={`w-[95%] overflow-hidden p-1 rounded-[5px] resize-none border border-[#000000]/50 focus:outline-none`}
            />
          ) : isPending ? (
            <Loading />
          ) : isError ? (
            <div className="text-redPink">댓글 수정중에 오류가 발생하였습니다</div>
          ) : (
            <div>{commentData}</div>
          )}
        </div>
      </div>
      {comment.canUpdate === 1 &&
        (isUpdate ? (
          <div>
            <RectangularSmallButton handleClick={handleUpdateClick} buttonText={"완료"} />
          </div>
        ) : (
          <div>
            <MoreButton
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              handleEditModal={handleEditModal}
              handleDeleteModal={handleDeleteModal}
            />
          </div>
        ))}
    </div>
  );
};

export default CommentItem;
