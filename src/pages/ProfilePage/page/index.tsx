import Header from "@components/header/Header";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AccountHeader from "@components/header/AccountHeader";
import Footer from "@components/footer/Footer";
import { accountData, accountData2 } from "../data/dummyData";
import ProfileSection from "../components/ProfileSection";
import PostsList from "../components/PostsList";

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  // api로 보낼때 쓰는 id
  const { userId } = useParams();
  const [userNickname, setUserNickname] = useState<string>("");

  useEffect(() => {
    // api get으로 데이터 받아올 예정
    setUserNickname(accountData.nickname);
  }, []);

  const handleBackBtnClick = (): void => {
    navigate(-1);
  };

  return (
    <>
      {userId === "0" ? (
        <>
          <AccountHeader />
          <ProfileSection
            postsCount={accountData.cnt}
            name={userNickname}
            setUserNickname={setUserNickname}
            userId={userId}
          />
          <PostsList
            whoProfile="user"
            postsCount={accountData.cnt}
            linkTo="/recipeRegistration"
            buttonText="첫 레시피 등록하기"
            postsRecipeList={accountData.recipes}
          />
          <Footer page="account" />
        </>
      ) : (
        <>
          <Header hasBackBtn={true} handleBackBtnClick={handleBackBtnClick} />
          <ProfileSection
            postsCount={accountData2.cnt}
            userId={userId}
            name={userNickname}
            setUserNickname={setUserNickname}
          />
          <PostsList
            whoProfile="user"
            postsCount={accountData2.cnt}
            linkTo="/recipeRegistration"
            buttonText="등록된 레시피가 없습니다."
            postsRecipeList={accountData2.recipes}
          />
        </>
      )}
    </>
  );
};

export default ProfilePage;
