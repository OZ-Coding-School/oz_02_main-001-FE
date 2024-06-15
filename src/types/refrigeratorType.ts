type RefrigeratorType = {
  nickname: string;
  ingredients: {
    id: number;
    name: string;
  }[];
};
type PostRefrigeratorType = {
  id: number,
  status: number,
};