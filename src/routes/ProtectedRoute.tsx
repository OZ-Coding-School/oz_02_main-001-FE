import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute: React.FC = () => {
  // 'ndd_access' 쿠키의 값을 가져옴
  const nddAccess = Cookies.get("ndd_access");
  console.log(nddAccess);

  // 로그인 상태가 아니면 무조건 로그인 페이지로 리디렉션
  return nddAccess ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoute;
