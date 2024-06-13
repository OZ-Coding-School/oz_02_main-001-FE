type AccountFetchDataType = {
  status: number;
  message: string;
  data: AccountDataType;
};

type AccountDataType = {
  image: string;
  nickname: string;
  totalRecipesCount: number;
  recipes: RecipesType[];
};

type RecipesType = {
  id: number;
  recipeImage: string;
};
