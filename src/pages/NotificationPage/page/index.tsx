import Header from "@components/header/Header";
import { useNavigate } from "react-router-dom";
import NotificationItem from "../components/NotificationItem";
import { NotificationType } from "src/types/notificationItemType";

import { apiRoutes } from "../../../api/apiRoutes";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../../api/axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const NotificationPage: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  const { data, isLoading, error } = useQuery<NotificationType[]>({
    queryKey: ["notifications"],
    queryFn: () => fetchData("GET", `${apiRoutes.alerts}/7`),
    onError: () => console.log(error),
  });

  return (
    <div>
      <Header hasBackBtn={true} title="알림" hasBell={true} handleBackBtnClick={handleClick} />
      <div>
        {isLoading ? (
          <div>
            <Skeleton height={30} width={200} />
            <Skeleton count={2} height={100} className="my-4 pt-4" />
          </div>
        ) : (
          data?.map((notice) => <NotificationItem key={notice.title} notice={notice} />)
        )}
      </div>
    </div>
  );
};

export default NotificationPage;
