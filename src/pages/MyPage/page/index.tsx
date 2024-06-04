import Footer from "@components/footer/Footer";
import AccountHeader from "@components/header/AccountHeader";
import React, { useEffect, useState } from "react";
import recipeImg from "@assets/images/recipe.png";
import { AccountDataType } from "src/types/accountRecipeType";
import PostsList from "../components/PostsList";
import noProfile from "@assets/images/noProfile.png";
import ProfileSection from "../components/ProfileSection";

export const accountData: AccountDataType = {
  image: noProfile,
  nickname: "1012번째 냉장고",
  cnt: 17,
  recipes: [
    { id: 1, recipeImage: recipeImg },
    { id: 2, recipeImage: recipeImg },
    { id: 3, recipeImage: recipeImg },
    { id: 4, recipeImage: recipeImg },
    { id: 5, recipeImage: recipeImg },
    { id: 6, recipeImage: recipeImg },
    { id: 7, recipeImage: recipeImg },
    { id: 8, recipeImage: recipeImg },
    { id: 9, recipeImage: recipeImg },
    { id: 10, recipeImage: recipeImg },
    { id: 11, recipeImage: recipeImg },
    { id: 12, recipeImage: recipeImg },
    { id: 13, recipeImage: recipeImg },
    { id: 14, recipeImage: recipeImg },
    { id: 15, recipeImage: recipeImg },
    { id: 16, recipeImage: recipeImg },
    { id: 17, recipeImage: recipeImg },
  ],
};

const MyPage: React.FC = () => {
  const [userNickname, setUserNickname] = useState<string>("");

  useEffect(() => {
    // api get으로 데이터 받아올 예정
    setUserNickname(accountData.nickname);
  }, []);

  return (
    <div>
      <AccountHeader />
      <ProfileSection
        postsCount={accountData.cnt}
        name={userNickname}
        setUserNickname={setUserNickname}
        whoProfile="user"
      />
      <PostsList
        whoProfile="user"
        postsCount={accountData.cnt}
        linkTo="/recipeRegistration"
        buttonText="첫 레시피 등록하기"
        postsRecipeList={accountData.recipes}
      />

      <Footer page="account" />
    </div>
  );
};

export default MyPage;
