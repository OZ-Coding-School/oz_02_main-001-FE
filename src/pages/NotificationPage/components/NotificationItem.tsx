import React from "react";
import { NotificationType } from "src/types/notificationItemType";

interface NotificationItemProps {
  notice: NotificationType;
}

const NotificationItem: React.FC<NotificationItemProps> = ({ notice }) => {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, "0")}.${String(today.getDate()).padStart(2, "0")}`;

  const actionTypes = [
    { type: "like", message: notice.like },
    { type: "reply", message: notice.reply },
  ];

  const action = actionTypes[Math.floor(Math.random() * actionTypes.length)];

  const actionMessageMap = {
    like: "레시피에 좋아요가 얼마나 눌렸는지 확인하러 가볼까요?",
    reply: "어떤 레시피에 댓글을 남겼는지 확인하러 가볼까요?",
  };

  return (
    <div className="w-full relative">
      {!notice.isRead && (
        <div className="absolute mt-2 right-[6px] h-[5px] w-[5px] bg-red-500 rounded-full"></div>
      )}
      <div className="pt-3">
        <span className="ml-4 text-sm">
          <strong>{notice.user}</strong>님이 {notice.title} 레시피에 {action.message}
        </span>
      </div>
      <div className="ml-4 mt-2">
        <span className="text-gray-400 text-sm">{actionMessageMap[action.type]}</span>
      </div>
      <div className="ml-4 mt-4 mb-3">
        <span className="text-gray-400 text-xs">{formattedDate}</span>
      </div>
      <div className="border"></div>
    </div>
  );
};

export default NotificationItem;
