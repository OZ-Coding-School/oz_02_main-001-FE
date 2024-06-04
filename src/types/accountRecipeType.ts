export type RecipesType = {
  id: number;
  recipeImage: string;
};

export type AccountDataType = {
  image: string;
  nickname: string;
  cnt: number;
  recipes: RecipesType[];
};
