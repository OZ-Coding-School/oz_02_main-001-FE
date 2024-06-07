import gimchi from "@assets/images/김치볶음밥.png";
import recipeImg from "@assets/images/recipe.png";
import { MainPageDataType } from "src/types/mainPageDataType";

export const mainPageData: MainPageDataType = {
  detailStatus: 1,
  best: [
    {
      recipeId: 1,
      user: {
        id: 0,
        nickname: "101번째 냉장고",
      },
      title: "김치볶음밥",
      mainImage: gimchi,
      likeStatus: 1,
      likesCount: 100,
      bookmarkStatus: 0,
      bookmarksCount: 67,
    },
  ],
  bestBookmarked: [
    {
      user: {
        id: 1,
        nickname: "2000번째 냉장고",
      },
      recipeId: 2,
      title: "마라탕 마라샹궈 짬뽕 짜장면 라면 피자 햄버거 훠궈 수박 파인애플",
      mainImage: recipeImg,
      likeStatus: 0,
      likesCount: 79,
      bookmarkStatus: 1,
      bookmarksCount: 67,
    },
  ],
  daily: [
    {
      user: {
        id: 0,
        nickname: "101번째 냉장고",
      },
      recipeId: 1,
      title: "김치볶음밥",
      mainImage: gimchi,
      likeStatus: 1,
      likesCount: 100,
      bookmarkStatus: 0,
      bookmarksCount: 67,
    },
    {
      user: {
        id: 4,
        nickname: "155번째 냉장고",
      },
      recipeId: 5,
      title: "맛있는 음식",
      mainImage: recipeImg,
      likeStatus: 0,
      likesCount: 99,
      bookmarkStatus: 0,
      bookmarksCount: 67,
    },
    {
      user: {
        id: 2,
        nickname: "24번째 냉장고",
      },
      recipeId: 6,
      title: "둘이서 먹다 하나가 죽어도 모를 음식",
      mainImage: recipeImg,
      likeStatus: 0,
      likesCount: 79,
      bookmarkStatus: 0,
      bookmarksCount: 67,
    },
  ],
  healthy: [
    {
      user: {
        id: 0,
        nickname: "101번째 냉장고",
      },
      recipeId: 1,
      title: "김치볶음밥",
      mainImage: gimchi,
      likeStatus: 1,
      likesCount: 100,
      bookmarkStatus: 0,
      bookmarksCount: 67,
    },
    {
      user: {
        id: 4,
        nickname: "155번째 냉장고",
      },
      recipeId: 5,
      title: "맛있는 음식",
      mainImage: recipeImg,
      likeStatus: 0,
      likesCount: 99,
      bookmarkStatus: 0,
      bookmarksCount: 67,
    },
    {
      user: {
        id: 2,
        nickname: "24번째 냉장고",
      },
      recipeId: 6,
      title: "둘이서 먹다 하나가 죽어도 모를 음식",
      mainImage: recipeImg,
      likeStatus: 0,
      likesCount: 79,
      bookmarkStatus: 0,
      bookmarksCount: 67,
    },
  ],
  desert: [
    {
      user: {
        id: 0,
        nickname: "101번째 냉장고",
      },
      recipeId: 1,
      title: "김치볶음밥",
      mainImage: gimchi,
      likeStatus: 1,
      likesCount: 100,
      bookmarkStatus: 0,
      bookmarksCount: 67,
    },
    {
      user: {
        id: 4,
        nickname: "155번째 냉장고",
      },
      recipeId: 5,
      title: "맛있는 음식",
      mainImage: recipeImg,
      likeStatus: 0,
      likesCount: 99,
      bookmarkStatus: 0,
      bookmarksCount: 67,
    },
    {
      user: {
        id: 2,
        nickname: "24번째 냉장고",
      },
      recipeId: 6,
      title: "둘이서 먹다 하나가 죽어도 모를 음식",
      mainImage: recipeImg,
      likeStatus: 0,
      likesCount: 79,
      bookmarkStatus: 0,
      bookmarksCount: 67,
    },
  ],
  midnightSnack: [
    {
      user: {
        id: 0,
        nickname: "101번째 냉장고",
      },
      recipeId: 1,
      title: "김치볶음밥",
      mainImage: gimchi,
      likeStatus: 1,
      likesCount: 100,
      bookmarkStatus: 0,
      bookmarksCount: 67,
    },
    {
      user: {
        id: 4,
        nickname: "155번째 냉장고",
      },
      recipeId: 5,
      title: "맛있는 음식",
      mainImage: recipeImg,
      likeStatus: 0,
      likesCount: 99,
      bookmarkStatus: 0,
      bookmarksCount: 67,
    },
    {
      user: {
        id: 2,
        nickname: "24번째 냉장고",
      },
      recipeId: 6,
      title: "둘이서 먹다 하나가 죽어도 모를 음식",
      mainImage: recipeImg,
      likeStatus: 0,
      likesCount: 79,
      bookmarkStatus: 0,
      bookmarksCount: 67,
    },
  ],
};
