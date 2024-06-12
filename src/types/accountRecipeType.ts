type RecipesType = {
  id: number;
  recipeImage: string;
};

type AccountDataType = {
  image: string;
  nickname: string;
  cnt: number;
  recipes: RecipesType[];
};
