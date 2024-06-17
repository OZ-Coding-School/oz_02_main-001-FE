import Header from "@components/header/Header";
import { useNavigate } from "react-router-dom";
import NotificationItem from "../components/NotificationItem";
import { apiRoutes } from "../../../api/apiRoutes";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchData } from "../../../api/axios";
import SkeletonNoticeLoader from "../skeleton/SkeletonNoticeLoader";

const NotificationPage: React.FC = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const handleClick = () => {
    navigate(-1);
  };

  const { data, isLoading, isError, error } = useQuery<DataType>({
    queryKey: ["notifications"],
    queryFn: () => fetchData("GET", apiRoutes.alerts),
  });

  const mutationAlert = useMutation<PostAlertsType, Error, number[]>({
    mutationFn: (id: number[]) =>
      fetchData<PostAlertsType, updateDataType>("POST", apiRoutes.alerts, {
        alerts: id,
      }),
    onSuccess: (data: PostAlertsType) => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
      console.log(data);
      if (data.data.length === 1) navigate(`/recipe/${data.data}`);
    },
  });

  const handleReadAlert = (id: number) => {
    console.log(id);
    mutationAlert.mutate([id]);
  };

  const handleBellClick = () => {
    let readItems: number[] = [];
    if (data) {
      data.data.forEach((notice) => {
        if (notice.status === true) {
          readItems = [...readItems, notice.id];
        }
      });
      mutationAlert.mutate(readItems);
    }
  };

  if (isError) {
    console.log(error);
  }

  return (
    <div>
      <Header
        hasBackBtn={true}
        title="알림"
        hasBell={true}
        handleBackBtnClick={handleClick}
        handleClick={handleBellClick}
      />
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
