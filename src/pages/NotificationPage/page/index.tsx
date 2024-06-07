import Header from "@components/header/Header";
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
      nickname: "2400번째 냉장고",
      title: "스페셜 토마토 간장 달걀볶음 마라탕",
      type: "like",
      status: 1,
      date: "2024-06-04",
    },
    {
      nickname: "300000번째 냉장고",
      title: "북극해 크릴 통새우 마요 누드김밥",
      type: "comment",
      status: 1,
      date: "2024-06-04",
    },
    {
      nickname: "24번째 냉장고",
      title: "핫초코 라면",
      type: "comment",
      status: 1,
      date: "2024-06-04",
    },
    {
      nickname: "206번째 냉장고",
      title: "로제 파스타",
      type: "like",
      status: 0,
      date: "2024-06-05",
    },
  ];

  return (
    <div>
      <Header hasBackBtn={true} title="알림" hasBell={true} handleBackBtnClick={handleClick} />
      {dummyData.map((notice) => (
        <NotificationItem key={notice.title} notice={notice} />
      ))}
    </div>
  );
};

export default NotificationPage;
