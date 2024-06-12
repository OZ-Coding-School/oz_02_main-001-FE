import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { apiRoutes } from "../../../api/apiRoutes";
import { fetchData } from "../../../api/axios";

import { NotificationType } from "src/types/notificationItemType";
import SkeletonSentence from "./SkeletonSentence";
import SkeletonMiddle from "./SkeletonMiddle";
import SkeletonDate from "./SkeletonDate";

interface NotificationItemProps {
  notice: NotificationType;
}

const NotificationItem: React.FC<NotificationItemProps> = ({ notice }) => {
  const [isRead, setIsRead] = useState(notice.status);

  const navigate = useNavigate();
  console.log(isRead);

  const actionMessage = notice.type === "like" ? "좋아요를 눌렀습니다." : "댓글을 남겼습니다.";

  const handleClick = () => {
    setIsRead(0);
    navigate(`/recipe/${notice.recipeId}`);
  };

  useEffect(() => {
    setIsRead(notice.status);
  }, [notice.status]);

  const { isLoading } = useQuery<NotificationType[]>({
    queryKey: ["notifications"],
    queryFn: () => fetchData("GET", `${apiRoutes.alerts}/7`),
  });

  return (
    <div className="relative" onClick={handleClick} style={{ cursor: `pointer` }}>
      {notice.status === 1 && (
        <div className="absolute mt-1 right-[6px] h-[5px] w-[5px] bg-red-500 rounded-full"></div>
      )}
      <div className="pt-2 pl-4 pr-4">
        <div className="mt-3 leading-tight">
          {isLoading ? (
            <SkeletonSentence />
          ) : (
            <span className="text-[20px]">
              <strong>{notice.nickname}</strong>님이 {notice.title} 레시피에 {actionMessage}
            </span>
          )}
        </div>
        <div className="mt-2">
          {isLoading ? (
            <SkeletonMiddle />
          ) : (
            <span className="text-gray-400 text-[14px]">
              {notice.type === "like"
                ? "레시피에 좋아요가 얼마나 눌렸는지 확인하러 가볼까요?"
                : "어떤 레시피에 댓글을 남겼는지 확인하러 가볼까요?"}
            </span>
          )}
        </div>
        <div className="mt-2 mb-3">
          {isLoading ? (
            <SkeletonDate />
          ) : (
            <span className="text-gray-400 text-[12px]">{notice.createdAt}</span>
          )}
        </div>
      </div>
      <div className="border"></div>
    </div>
  );
};

export default NotificationItem;
