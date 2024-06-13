import Header from "@components/header/Header";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AccountHeader from "@components/header/AccountHeader";
import Footer from "@components/footer/Footer";
import ProfileSection from "../components/ProfileSection";
import PostsList from "../components/PostsList";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../../api/axios";
import { apiRoutes } from "../../../api/apiRoutes";
import SkeletonProfileLoader from "../skeleton/SkeletonProfileLoader";

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  // api로 보낼때 쓰는 id
  const { userId } = useParams();
  const [userName, setUserName] = useState<string>("");
  const [scrollCount, setScrollCount] = useState<number>(0);

  const { data, error, isLoading } = useQuery<AccountFetchDataType>({
    queryKey: ["account"],
    queryFn: () =>
      fetchData<AccountFetchDataType>("GET", `${apiRoutes.userMypage}/${userId}/${scrollCount}`),
  });
  if (error) {
    console.log(error);
  }
  console.log(data);

  useEffect(() => {
    data?.data && setUserName(data.data.nickname);
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
            {isLoading ? (
              <SkeletonProfileLoader />
            ) : (
              <>
                {data?.data && (
                  <>
                    <ProfileSection
                      profileImage={data.data.image}
                      postsCount={data.data.postCnt}
                      name={userName}
                      setUserNickname={setUserName}
                      userId={userId}
                    />
                    <PostsList
                      whoProfile="user"
                      postsCount={data?.data.postCnt}
                      linkTo="/recipeRegistration"
                      buttonText="첫 레시피 등록하기"
                      postsRecipeList={data.data.recipes}
                    />
                  </>
                )}
              </>
            )}
          </div>
          <Footer page="account" />
        </>
      ) : (
        <>
          <Header hasBackBtn={true} handleBackBtnClick={handleBackBtnClick} />
          {isLoading ? (
            <SkeletonProfileLoader />
          ) : (
            <>
              {data?.data && (
                <>
                  <ProfileSection
                    profileImage={data.data.image}
                    postsCount={data.data.postCnt}
                    userId={userId}
                    name={userName}
                    setUserNickname={setUserName}
                  />
                  <PostsList
                    whoProfile="user"
                    postsCount={data.data.postCnt}
                    linkTo="/recipeRegistration"
                    buttonText="등록된 레시피가 없습니다."
                    postsRecipeList={data.data.recipes}
                  />
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default ProfilePage;
