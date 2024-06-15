type IngredientDataType = {
  id: number;
  name: string;
  image?: string | null; // 백엔드에서 null로도 처리가능하도록 했다고 답변 받음
};

type UpdateIngredientType = {
  id: number;
  status: number;
};
