import { create } from "zustand";

interface IngredientStore {
  refrigeratorIngredients: number[];
  setRefrigeratorIngredients: (newData: IngredientDataType[]) => void; // newData의 타입을 { id: number }[]으로 지정
}

export const useIngredientStore = create<IngredientStore>((set) => ({
  refrigeratorIngredients: [],
  setRefrigeratorIngredients: (newData) => {
    const ids = newData.map((item) => item.id); // newData에서 id 값만 추출하여 배열에 저장
    set({ refrigeratorIngredients: ids }); // refrigeratorIngredients 배열을 추출한 id 배열로 업데이트
  },
}));
