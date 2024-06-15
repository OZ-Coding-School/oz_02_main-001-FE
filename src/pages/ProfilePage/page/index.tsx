import Header from "@components/header/Header";
import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AccountHeader from "@components/header/AccountHeader";
import Footer from "@components/footer/Footer";
import ProfileSection from "../components/ProfileSection";
import PostsList from "../components/PostsList";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchData } from "../../../api/axios";
import { apiRoutes } from "../../../api/apiRoutes";
import SkeletonProfileLoader from "../skeleton/SkeletonProfileLoader";
import noProfile from "@assets/images/noProfile.png";

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const observerRef = useRef<HTMLDivElement | null>(null);

  // 무한 스크롤 관련 코드 ~
  const fetchAccountData = async (pageParam: number = 0): Promise<AccountFetchDataType> => {
    return await fetchData("GET", `${apiRoutes.userMypage}/${userId}/${pageParam}`);
  };

  const { data, error, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery<AccountFetchDataType, Error>({
      queryKey: ["account", userId],
      queryFn: ({ pageParam = 0 }) => fetchAccountData(pageParam as number),
      getNextPageParam: (lastPage, allPages) => {
        const totalPages = Math.ceil(lastPage.data.totalRecipesCount / 15);
        const nextPage = allPages.length;
        return nextPage < totalPages ? nextPage : undefined;
      },
      initialPageParam: 0,
    });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 },
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [fetchNextPage, hasNextPage]);
  // ~ 여기까지 무한 스크롤

  const handleBackBtnClick = (): void => {
    navigate(-1);
  };

  if (isLoading) {
    return <SkeletonProfileLoader />;
  }

  if (error) {
    console.log(error);
    return null;
  }

  if (!data) {
    return null;
  }

  const allPosts = data.pages.flatMap((page) => page.data.recipes) || [];

  return (
    <>
      {userId === "0" ? (
        <>
          <AccountHeader />
          <div className="min-h-[calc(100vh-105px)]">
            <ProfileSection
              profileImage={data.pages[0].data.image === "" ? noProfile : data.pages[0].data.image}
              postsCount={data.pages[0].data.totalRecipesCount}
              name={data.pages[0].data.nickname}
              userId={userId}
            />
            <PostsList
              whoProfile="user"
              postsCount={data.pages[0].data.totalRecipesCount}
              linkTo="/recipeRegistration"
              buttonText="첫 레시피 등록하기"
              postsRecipeList={allPosts}
            />
            <div ref={observerRef}></div>
            {isFetchingNextPage && <p>Loading more...</p>}
          </div>
          <Footer page="account" />
        </>
      ) : (
        <>
          <Header hasBackBtn={true} handleBackBtnClick={handleBackBtnClick} />
          <ProfileSection
            profileImage={data.pages[0].data.image}
            postsCount={data.pages[0].data.totalRecipesCount}
            userId={userId}
            name={data.pages[0].data.nickname}
          />
          <PostsList
            whoProfile="user"
            postsCount={data.pages[0].data.totalRecipesCount}
            linkTo="/recipeRegistration"
            buttonText="등록된 레시피가 없습니다."
            postsRecipeList={allPosts}
          />
          <div ref={observerRef}></div>
          {isFetchingNextPage && <p>Loading more...</p>}
        </>
      )}
    </>
  );
};

export default ProfilePage;
