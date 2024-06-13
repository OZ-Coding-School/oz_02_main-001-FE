import Header from "@components/header/Header";
import { useNavigate } from "react-router-dom";
import NotificationItem from "../components/NotificationItem";
import { NotificationType } from "src/types/notificationItemType";
import { apiRoutes } from "../../../api/apiRoutes";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../../api/axios";
import SkeletonNoticeLoader from "../skeleton/SkeletonNoticeLoader";

const NotificationPage: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  const { data, isLoading, isError, error } = useQuery<NotificationType[]>({
    queryKey: ["notifications"],
    queryFn: () => fetchData("GET", `${apiRoutes.alerts}`),
  });
  console.log(data);

  if (isError) {
    console.log(error);
  }

  return (
    <div>
      <Header hasBackBtn={true} title="알림" hasBell={true} handleBackBtnClick={handleClick} />
      {isLoading ? (
        [...Array(4)].map((_, index) => <SkeletonNoticeLoader key={index} />)
      ) : (
        <div>{data?.map((notice) => <NotificationItem key={notice.title} notice={notice} />)}</div>
      )}
    </div>
  );
};

export default NotificationPage;
