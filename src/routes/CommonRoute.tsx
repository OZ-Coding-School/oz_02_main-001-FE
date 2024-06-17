import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { apiRoutes } from "../api/apiRoutes";
import { fetchData } from "../api/axios";

const CommonRoute: React.FC = () => {
  const fetchLogin = async (): Promise<void> => {
    return await fetchData("GET", apiRoutes.userLogin);
  };

  const { data, isFetched } = useQuery<void, void>({
    queryFn: fetchLogin,
    queryKey: ["login"],
  });
  if (!isFetched) {
    return null;
  }
  // 로그인 상태면 무조건 홈으로 리디렉션
  return data ? <Navigate to={"/"} /> : <Outlet />;
};

export default CommonRoute;
