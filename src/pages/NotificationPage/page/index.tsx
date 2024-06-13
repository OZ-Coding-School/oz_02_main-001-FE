import Header from "@components/header/Header";
import { useNavigate } from "react-router-dom";
import NotificationItem from "../components/NotificationItem";
import { NotificationType } from "src/types/notificationItemType";
import { apiRoutes } from "../../../api/apiRoutes";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchData } from "../../../api/axios";
import SkeletonNoticeLoader from "../skeleton/SkeletonNoticeLoader";

type dataType = {
  data: NotificationType[];
  status: number;
  message: string;
};

const NotificationPage: React.FC = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleClick = () => {
    navigate(-1);
  };

  const { data, isLoading, isError, error } = useQuery<dataType>({
    queryKey: ["notifications"],
    queryFn: () => fetchData("GET", `${apiRoutes.alerts}`),
  });

  console.log(data);

  const mutationAlert = useMutation({
    mutationFn: (id: number) => {
      return fetchData("POST", apiRoutes.alerts, { alerts: [id] });
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
      navigate(`/recipe/${recipeId}`);
    },
  });

  const handleReadAlert = (id: number) => {
    mutationAlert.mutate(id);
  };

  if (isError) {
    console.log(error);
  }

  return (
    <div>
      <Header hasBackBtn={true} title="알림" hasBell={true} handleBackBtnClick={handleClick} />
      {isLoading ? (
        [...Array(4)].map((_, index) => <SkeletonNoticeLoader key={index} />)
      ) : (
        <div>
          {data &&
            data.data.map((notice) => (
              <NotificationItem
                key={notice.id}
                notice={notice}
                onClick={() => handleReadAlert(notice.id)}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default NotificationPage;
