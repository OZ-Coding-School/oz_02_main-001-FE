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
      profileImage:
        "data:image/jpeg;base64,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",
      updatedAt: "2024-06-03T14:19:38.146882",
      comment: "맛읶습니다 ^^",
    },
    {
      id: 2,
      userId: 2,
      userNickname: "podo",
      canUpdate: 0,
      profileImage:
        "data:image/jpeg;base64,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",
      updatedAt: "2024-06-03T14:19:47.691939",
      comment: "굳굳 ^^",
    },
    {
      id: 3,
      userId: 3,
      userNickname: "냉장고",
      canUpdate: 0,
      profileImage:
        "data:image/jpeg;base64,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",
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
      profileImage:
        "data:image/jpeg;base64,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",
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
