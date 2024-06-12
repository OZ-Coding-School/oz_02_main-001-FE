type MainPageDataType = {
  status: number;
  message: string;
  data: MainDataDataType;
};

type MainDataDataType = {
  detailStatus: number;
  best: BestRecipeType[];
  bestBookmarked: BestBookmarkedRecipeType[];
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

type BestRecipeType = {
  likeStatus: number;
  likesCount: number;
  mainImage: string;
  recipeId: number;
  title: string;
  user: {
    nickname: string;
    id: number;
  };
};

type BestBookmarkedRecipeType = {
  bookmarkStatus: number;
  bookmarksCount: number;
  mainImage: string;
  recipeId: number;
  title: string;
  user: {
    nickname: string;
    id: number;
  };
};

type UserDetailType = {
  age: number;
  gender: boolean;
  alert: boolean;
};
