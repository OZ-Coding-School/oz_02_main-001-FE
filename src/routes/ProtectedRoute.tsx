import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { fetchData } from "../api/axios";
import { apiRoutes } from "../api/apiRoutes";
import { useQuery } from "@tanstack/react-query";

const ProtectedRoute: React.FC = () => {
  const fetchLogin = async (): Promise<FetchAlertsStatusType> => {
    return await fetchData("GET", apiRoutes.userLogin);
  };

  const { data, isFetched } = useQuery<FetchAlertsStatusType, void>({
    queryFn: fetchLogin,
    queryKey: ["login"],
  });
  if (!isFetched) {
    return null;
  }

  // 로그인 상태가 아니면 무조건 로그인 페이지로 리디렉션
  return data?.status === 200 ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoute;
