type RecommendedRecipeType = {
  recipeId: number;
  nickname: string;
  includeIngredients: string[];
  notIncludeIngredients: string[];
  title: string;
  likes: number;
  bookmark: number;
  likeStatus: number;
  bookmarkStatus: number;
};

type RecommendedDataType = {
  ingredients: string[];
  recipes: RecommendedRecipeType[];
};

type FetchRecommended = {
  message: string;
  status: number;
  data: RecommendedDataType;
};

type PostRecommendedData = {
  ingredients: number[];
};
