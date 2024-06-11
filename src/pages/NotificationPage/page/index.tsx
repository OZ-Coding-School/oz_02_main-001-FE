import Header from "@components/header/Header";
import { useNavigate } from "react-router-dom";
import NotificationItem from "../components/NotificationItem";
import { NotificationType } from "src/types/notificationItemType";

import { apiRoutes } from "../../../api/apiRoutes";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../../api/axios";

const NotificationPage: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  const { data, isLoading, error } = useQuery<NotificationType[]>({
    queryKey: ["notifications"],
    queryFn: () => fetchData("GET", `${apiRoutes.alerts}/7`),
  });
  console.log(data);

  return (
    <div>
      <Header hasBackBtn={true} title="알림" hasBell={true} handleBackBtnClick={handleClick} />
      {data?.map((notice) => <NotificationItem key={notice.title} notice={notice} />)}
    </div>
  );
};

export default NotificationPage;
