import React, { useEffect, useState } from "react";

interface NotificationItemProps {
  notice: NotificationType;
  onClick: () => void;
}

const NotificationItem: React.FC<NotificationItemProps> = ({ notice, onClick }) => {
  const [isRead, setIsRead] = useState(notice.status);
  const actionMessage = notice.type === 1 ? "좋아요를 눌렀습니다." : "댓글을 남겼습니다.";

  const noticeMessage = (type: number): NoticeMessage => {
    let noticeItem: NoticeMessage = {
      noticeMessage: "",
      actionMessage: "",
    };
    switch (type) {
      case 1:
        noticeItem.noticeMessage = "레시피에 좋아요가 얼마나 눌렸는지 확인하러 가볼까요?";
        noticeItem.actionMessage = "좋아요를 눌렀습니다.";
        break;
      case 2:
        noticeItem.noticeMessage = "어떤 레시피에 댓글을 남겼는지 확인하러 가볼까요?";
        noticeItem.actionMessage = "댓글을 남겼습니다.";
        break;
      case 3:
        noticeItem.noticeMessage = "레시피가 얼마나 스크랩 되었는지 확인하러 가볼까요?";
        noticeItem.actionMessage = "스크랩을 눌렀습니다.";
        break;
    }

    return noticeItem;
  };

  useEffect(() => {
    setIsRead(notice.status);
  }, [notice.status]);

  const formatDate = (dateString: string) => {
    return `${dateString.slice(0, 10)} ${dateString.slice(11, 16)}`;
  };

  return (
    <div className="relative" onClick={onClick} style={{ cursor: `pointer` }}>
      {isRead && (
        <div className="absolute mt-1 right-[6px] h-[5px] w-[5px] bg-red-500 rounded-full"></div>
      )}
      <div className="pt-2 pl-4 pr-4">
        <div className="mt-3 leading-tight text-[16px]">
          <strong>{notice.nickname}</strong>님이 {notice.title} 레시피에{" "}
          {noticeMessage(notice.type).actionMessage}
        </div>
        <div className="mt-2 text-gray-400 text-[14px]">
          {noticeMessage(notice.type).noticeMessage}
        </div>
        <div className="mt-2 mb-3 text-gray-400 text-[12px]">{formatDate(notice.createdAt)}</div>
      </div>
      <div className="border"></div>
    </div>
  );
};

export default NotificationItem;
