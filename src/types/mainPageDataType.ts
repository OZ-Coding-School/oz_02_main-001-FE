export type MainPageDataType = {
  best: MainPageCategoryDataType[];
  bestBookmarked: MainPageCategoryDataType[];
  daily: MainPageCategoryDataType[];
  healthy: MainPageCategoryDataType[];
  desert: MainPageCategoryDataType[];
  midnightSnack: MainPageCategoryDataType[];
};
export type MainPageCategoryDataType = {
  userId: number;
  recipeId: number;
  userNickname: string;
  title: string;
  mainImage: string;
  likesStatus: number;
  likesCount: number;
  bookmarksStatus: number;
  bookmarksCount: number;
};
