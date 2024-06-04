type IngredientType = {
  id: number;
  name: string;
  quantity: number;
  unit: string;
};

type StepType = {
  step: string;
  image: string;
};

type CommentType = {
  id: number;
  user_Id: number;
  user_Nickname: string;
  updatedAt: string;
  comment: string;
};

type UserType = {
  id: number;
  profileImage: string;
  nickname: string;
  date: string;
};

type RecipeDataType = {
  title: string;
  mainImage: string;
  category: string;
  story: string;
  bookmark: number;
  bookmarkStatus: number;
  like: number;
  likeStatus: number;
  user: UserType;
  ingredients: IngredientType[];
  steps: StepType[];
  comments: CommentType[];
};
