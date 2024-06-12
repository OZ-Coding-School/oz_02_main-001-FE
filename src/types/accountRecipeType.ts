type AccountFetchDataType = {
  status: number;
  message: string;
  data: AccountDataType;
};

type AccountDataType = {
  image: string;
  nickname: string;
  postCnt: number;
  recipes: RecipesType[];
};

type RecipesType = {
  id: number;
  recipeImage: string;
};
