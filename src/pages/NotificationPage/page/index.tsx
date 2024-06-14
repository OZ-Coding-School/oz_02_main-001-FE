import Header from "@components/header/Header";
import { useNavigate } from "react-router-dom";
import NotificationItem from "../components/NotificationItem";
import { apiRoutes } from "../../../api/apiRoutes";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchData } from "../../../api/axios";
import SkeletonNoticeLoader from "../skeleton/SkeletonNoticeLoader";
import { useState } from "react";

const NotificationPage: React.FC = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [readAlert, setReadAlert] = useState<Set<number>>(new Set());

  const handleClick = () => {
    navigate(-1);
  };

  const { data, isLoading, isError, error } = useQuery<NotificationType>({
    queryKey: ["notifications"],
    queryFn: () => fetchData("GET", apiRoutes.alerts),
  });

  console.log(data);

  const fetchAlerts = async (id: number): Promise<PostAlertsType> => {
    return await fetchData<PostAlertsType>("POST", apiRoutes.alerts, {
      alerts: [id],
    });
  };

  const mutationAlert = useMutation<PostAlertsType>({
    mutationFn: (id) => {return fetchData<PostAlertsType>("POST", apiRoutes.alerts, {
      alerts: [id],
    })},
    onSuccess: (data: PostAlertsType) => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
      if (data) {
        navigate(`/recipe/${data.data}`);
      }
    },
  });

  // 알림 읽음 상태를 업데이트하는 부분입니다.
  // 특정 조건에 따라 페이지를 이동시키게 함
  // variables: 변이를 실행할 때 사용된 변수들을 나타내며, 여기서 id와 recipeId가 포함될 수 있고
  // variables.recipeId가 존재하는 경우 특정 페이지로 네비게이션함
  // 성공시 쿼리를 무효화하여 최신 데이터를 갖고 오게 함
  const handleReadAlert = (id: number) => {
    if (data) {
      const clickedAlert = data.data.find((notice) => notice.id === id);
      if (clickedAlert) {
        mutationAlert.mutate({
          id: clickedAlert.id,
          recipeId: clickedAlert.recipeId,
        });
      }
    }
  };
  // 특정 알림을 클릭했을 때 클릭한 알림의 ID를 찾아 mutationAlert을 통해 읽음 상태를 업데이트함.

  const handleBellClick = () => {
    if (data) {
      data.data.forEach((notice) => {
        if (!readAlert.has(notice.id)) {
          const shouldNavigate = data.data.length === 1;
          mutationAlert.mutate({
            id: notice.id,
            recipeId: shouldNavigate ? notice.recipeId : undefined,
          });
          setReadAlert((prev) => new Set(prev).add(notice.id));
        }
      });
    }
  };
  // 사용자가 벨 아이콘을 클릭했을 때 모든 알림을 읽음 상태로 업데이트하고, readAlert 상태에 추가합니다.
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
