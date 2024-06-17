import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

const CommonRoute: React.FC = () => {
  const currentLocation = useLocation();
  // 'ndd_access' 쿠키의 값을 가져옴
  const nddAccess = Cookies.get("ndd_access");
  console.log(nddAccess);

  // 로그인 상태면 무조건 홈으로 리디렉션
  return nddAccess ? (
    <Navigate to={"/"} replace state={{ redirectedFrom: currentLocation }} />
  ) : (
    <Outlet />
  );
};

export default CommonRoute;
