import Header from "@components/header/Header";
import React from "react";
import { useNavigate } from "react-router-dom";
import NotificationItem from "../components/NotificationItem";
import { NotificationType } from "src/types/notificationItemType";

const NotificationPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  const dummyData: NotificationType[] = [
    {
      id: 1,
      user: "24번째 냉장고",
      title: "토마토 달걀볶음",
      like: "좋아요를 눌렀어요!",
      reply: "댓글을 남겼어요!",
      isRead: false,
    },
    {
      id: 2,
      user: "2번째 냉장고",
      title: "오징어 김밥",
      like: "좋아요를 눌렀어요!",
      reply: "댓글을 남겼어요!",
      isRead: false,
    },
    {
      id: 3,
      user: "24번째 냉장고",
      title: "핫초코 라면",
      like: "좋아요를 눌렀어요",
      reply: "댓글을 남겼어요",
      isRead: false,
    },
    {
      id: 4,
      user: "206번째 냉장고",
      title: "로제 파스타",
      like: "좋아요를 눌렀어요",
      reply: "댓글을 남겼어요",
      isRead: true,
    },
  ];

  return (
    <div>
      <Header hasBackBtn={true} title="알림" hasBell={true} handleBackBtnClick={handleClick} />
      {dummyData.map((notice) => (
        <NotificationItem key={notice.id} notice={notice} />
      ))}
    </div>
  );
};

export default NotificationPage;
