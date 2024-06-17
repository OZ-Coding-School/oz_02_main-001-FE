import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const CommonRoute: React.FC = () => {
  // 'ndd_access' 쿠키의 값을 가져옴
  const nddAccess = Cookies.get("ndd_access");
  console.log("이건 CommonRoute 관련", nddAccess);

  // 로그인 상태면 무조건 홈으로 리디렉션
  return nddAccess ? <Navigate to={"/"} /> : <Outlet />;
};

export default CommonRoute;
