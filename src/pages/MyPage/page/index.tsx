import Footer from "@components/footer/Footer";
import AccountHeader from "@components/header/AccountHeader";
import React from "react";

const MyPage = () => {
  return (
    <div>
      <AccountHeader />
      <p>MyPage</p>
      <Footer page="account" />
    </div>
  );
};

export default MyPage;
