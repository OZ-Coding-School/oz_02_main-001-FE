type RecipeType = {
  id: number;
  user: string;
  title: string;
  mainImage: string;
  like: number;
  likeStatus: number;
  book: number;
  bookStatus: number;
};

type RecipeCategoryType = {
  status: number;
  message: string;
  data: RecipeType[];
};
