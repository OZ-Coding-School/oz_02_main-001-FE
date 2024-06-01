import Header from "@components/header/Header";
import React from "react";
import { useNavigate } from "react-router-dom";

const NotificationPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <div>
      <Header hasBackBtn={true} title="알림" hasBell={true} handleBackBtnClick={handleClick} />
      <p>NotificationPage</p>
    </div>
  );
};

export default NotificationPage;
