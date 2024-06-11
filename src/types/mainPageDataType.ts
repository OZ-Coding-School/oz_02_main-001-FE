type MainPageDataType = {
  detailStatus: number;
  best: MainPageCategoryDataType[];
  bestBookmarked: MainPageCategoryDataType[];
  daily: MainPageCategoryDataType[];
  healthy: MainPageCategoryDataType[];
  desert: MainPageCategoryDataType[];
  midnightSnack: MainPageCategoryDataType[];
};
type MainPageCategoryDataType = {
  recipeId: number;
  user: {
    nickname: string;
    id: number;
  };
  title: string;
  mainImage: string;
  likeStatus: number;
  likesCount: number;
  bookmarkStatus: number;
  bookmarksCount: number;
};

type UserDetailType = {
  age: number;
  gender: boolean;
  alert: boolean;
};
