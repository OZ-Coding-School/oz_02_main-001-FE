type RefrigeratorType = {
  nickname: string;
  ingredients: {
    id: number;
    name: string;
  }[];
};

type FetchGetRefrigeratorType = {
  status: number;
  message: string;
  data: RefrigeratorType;
};

type PostFridgeType = {
  status: number;
  message: string;
};
