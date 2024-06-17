import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute: React.FC = () => {
  const currentLocation = useLocation();
  // 'ndd_access' 쿠키의 값을 가져옴
  const nddAccess = Cookies.get("ndd_access");
  console.log(nddAccess);

  // 로그인 상태가 아니면 무조건 로그인 페이지로 리디렉션
  return nddAccess ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} replace state={{ redirectedFrom: currentLocation }} />
  );
};

export default ProtectedRoute;
