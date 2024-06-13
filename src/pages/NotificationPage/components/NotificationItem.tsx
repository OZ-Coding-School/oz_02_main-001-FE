import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { NotificationType } from "src/types/notificationItemType";

interface NotificationItemProps {
  notice: NotificationType;
  onClick: () => void;
}

const NotificationItem: React.FC<NotificationItemProps> = ({ notice }) => {
  const [isRead, setIsRead] = useState(notice.status);

  const navigate = useNavigate();
  console.log(isRead);

  console.log(notice);

  const actionMessage = notice.type === "like" ? "좋아요를 눌렀습니다." : "댓글을 남겼습니다.";

  const handleClick = () => {
    setIsRead(0);
    navigate(`/recipe/${notice.recipeId}`);
  };

  useEffect(() => {
    setIsRead(notice.status);
  }, [notice.status]);

  return (
    <div className="relative" onClick={handleClick} style={{ cursor: `pointer` }}>
      {notice.status === 1 && (
        <div className="absolute mt-1 right-[6px] h-[5px] w-[5px] bg-red-500 rounded-full"></div>
      )}
      <div className="pt-2 pl-4 pr-4">
        <div className="mt-3 leading-tight text-[18px]">
          <strong>{notice.nickname}</strong>님이 {notice.title} 레시피에 {actionMessage}
        </div>
        <div className="mt-2 text-gray-400 text-[14px]">
          {notice.type === "like"
            ? "레시피에 좋아요가 얼마나 눌렸는지 확인하러 가볼까요?"
            : "어떤 레시피에 댓글을 남겼는지 확인하러 가볼까요?"}
        </div>
        <div className="mt-2 mb-3 text-gray-400 text-[12px]">{notice.createdAt}</div>
      </div>
      <div className="border"></div>
    </div>
  );
};

export default NotificationItem;
