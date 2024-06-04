import Header from "@components/header/Header";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PostsList from "../../../pages/MyPage/components/PostsList";
import ProfileSection from "../../../pages/MyPage/components/ProfileSection";
import { accountData } from "../../../pages/MyPage/page";

// interface ProfilePageProps {
//   userId?: number;
// }

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();

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
      <Header hasBackBtn={true} handleBackBtnClick={handleBackBtnClick} />
      <ProfileSection
        // userId={userId}
        postsCount={accountData.cnt}
        name={userNickname}
        setUserNickname={setUserNickname}
        whoProfile="notUser"
      />
      <PostsList
        whoProfile="user"
        postsCount={accountData.cnt}
        linkTo="/recipeRegistration"
        buttonText="등록된 레시피가 없습니다."
        postsRecipeList={accountData.recipes}
      />
    </>
  );
};

export default ProfilePage;
