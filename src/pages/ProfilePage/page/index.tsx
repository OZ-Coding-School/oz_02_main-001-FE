import Header from "@components/header/Header";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AccountHeader from "@components/header/AccountHeader";
import Footer from "@components/footer/Footer";
import { accountData, accountData2 } from "../data/dummyData";
import ProfileSection from "../components/ProfileSection";
import PostsList from "../components/PostsList";
import { useQuery } from "@tanstack/react-query";
import { AccountDataType } from "../../../types/accountRecipeType";
import { fetchData } from "../../../api/axios";
import { apiRoutes } from "../../../api/apiRoutes";

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  // api로 보낼때 쓰는 id
  const { userId } = useParams();
  const [userNickname, setUserNickname] = useState<string>("");

  const { data, error, isLoading } = useQuery<AccountDataType>({
    queryKey: ["account"],
    queryFn: () => fetchData<AccountDataType>("GET", `${apiRoutes.userMypage}/${userId}`),
  });

  useEffect(() => {
    console.log(data);
    setUserNickname(accountData.nickname);
  }, [data]);

  const handleBackBtnClick = (): void => {
    navigate(-1);
  };

  return (
    <>
      {userId === "0" ? (
        <>
          <AccountHeader />
          <div className="min-h-[calc(100vh-105px)]">
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
          </div>
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
