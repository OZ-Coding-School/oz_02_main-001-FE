import Footer from "@components/footer/Footer";
import Header from "@components/header/Header";
import React from "react";

const BookMarkPage = () => {
  return (
    <div>
      <Header hasBackBtn={true} title="스크랩한 레시피" />
      <p>BookMarkPage</p>
      <Footer page="bookmark" />
    </div>
  );
};

export default BookMarkPage;
