import RecipeHeader from "@components/header/RecipeHeader";
import React from "react";
import testUrl from "@assets/images/김치볶음밥.png";
import RecipeTitleSection from "../components/title/RecipeTitleSection";
import PreparedIngredients from "../components/ingredient/PreparedIngredients";
import RecipeSteps from "../components/step/RecipeSteps";
import RecipeStory from "../components/stroy/RecipeStory";
import DividingLine from "../components/DividingLine";
import Like from "@components/recipe/Like";
import CommentIcon from "../components/comment/CommentIcon";
import CommentSection from "../components/comment/CommentSection";

import mmainImage from "@assets/images/김치볶음밥.png";
import cookImage from "@assets/images/cookImage.jpg";
import basicProfileImage from "@assets/images/basicProfile.jpg";
import { useParams } from "react-router-dom";

const RecipeData: RecipeDataType = {
  canUpdate: 1,
  title: "고추장 계란 볶음밥",
  mainImage: mmainImage,
  category: "일상요리",
  story: "",
  bookmark: 1,
  bookmarkStatus: 1,
  like: 3,
  likeStatus: -1,
  user: {
    id: 1,
    profileImage: mmainImage,
    nickname: "podo",
    date: "2024-06-03T15:08:27.445914",
  },
  ingredients: [
    {
      id: 45,
      name: "고추장",
      quantity: 1,
      unit: "큰술",
    },
    {
      id: 46,
      name: "양조 간장",
      quantity: 2,
      unit: "큰술",
    },
    {
      id: 47,
      name: "쌀",
      quantity: 200,
      unit: "g",
    },
    {
      id: 71,
      name: "계란",
      quantity: 1,
      unit: "개",
    },
    {
      id: 64,
      name: "식용유",
      quantity: 10,
      unit: "g",
    },
    {
      id: 50,
      name: "정성",
      quantity: 200,
      unit: "g",
    },
    {
      id: 49,
      name: "사랑",
      quantity: 200,
      unit: "g",
    },
  ],
  steps: [
    {
      step: "양배추는 한입크기로 썰어 전자레인지용 찜기에 넣고 5-6분 정보 찐다음 차게 식혀요",
      image: "",
    },
    {
      step: `두부는 전자레인지에 1분간 익힌 후 칼등으로 으깨주고, 
      명란은 칼등으로 속만 긁어 내 그릇에 담아요. 여기에 다진마늘 1, 참기름 1.5, 알룰로스 1.5 섞어 쌈 소스를 만들어요
      `,
      image: cookImage,
    },
    {
      step: "차돌박이 양념용으로 간장 1, 참치액 1, 맛술 1, 참기름 0.5, 후추를 섞어 준비합니다.",
      image: cookImage,
    },
    {
      step: "팬에 차돌박이를 올린 후 소스를 발라주면서 재빨리 구워요.",
      image: cookImage,
    },
    {
      step: "그릇에 양배추와 차돌박이를 담고 명란두부 소스를 곁들이면 완성입니다.",
      image: cookImage,
    },
  ],
  comments: [
    {
      id: 1,
      userId: 1,
      userNickname: "23번째 냉장고",
      canUpdate: 0,
      profileImage: basicProfileImage,
      updatedAt: "2024-06-03T14:19:38.146882",
      comment: "맛읶습니다 ^^",
    },
    {
      id: 2,
      userId: 2,
      userNickname: "podo",
      canUpdate: 0,
      profileImage: basicProfileImage,
      updatedAt: "2024-06-03T14:19:47.691939",
      comment: "굳굳 ^^",
    },
    {
      id: 3,
      userId: 3,
      userNickname: "냉장고",
      canUpdate: 0,
      profileImage: basicProfileImage,
      updatedAt: "2024-06-03T14:19:47.691939",
      comment: `만들어봐야지 만들어봐야지 만들어봐야지만들어봐야지만들어봐야지만들어봐야지
      만들어봐야지 만들어봐야지`,
    },
    {
      id: 4,
      userId: 4,
      userNickname: "팡이",
      canUpdate: 1,
      updatedAt: "2024-06-03T14:19:47.691939",
      profileImage: basicProfileImage,
      comment: "우왕 맛있겠당",
    },
  ],
};

const RecipePage: React.FC = () => {
  return (
    <div>
      <RecipeHeader canUpdate={RecipeData.canUpdate} />
      <img src={testUrl} className="w-[100%] h-auto" />
      <RecipeTitleSection
        title={RecipeData.title}
        date={RecipeData.user.date}
        bookmark={RecipeData.bookmark}
        bookmarkStatus={RecipeData.bookmarkStatus}
        userNickname={RecipeData.user.nickname}
      />
      <DividingLine />
      <div className="flex flex-col gap-5 p-6">
        <PreparedIngredients ingredients={RecipeData.ingredients} />
        <RecipeSteps steps={RecipeData.steps} />
        <RecipeStory story={RecipeData.story} />
      </div>
      <DividingLine />
      <div className="flex gap-4 p-3">
        <Like like={RecipeData.like} likeStatus={RecipeData.likeStatus} />
        <CommentIcon commentNumber={RecipeData.comments.length} />
      </div>
      <CommentSection comments={RecipeData.comments} />
    </div>
  );
};

export default RecipePage;
