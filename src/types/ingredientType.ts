type IngredientDataType = {
  id: number;
  name: string;
  image: string | null;
};

type IngredientListDataType = {
  data: IngredientDataType[];
  status: number;
  message: string;
};
