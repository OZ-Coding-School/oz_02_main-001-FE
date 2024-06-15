import { create } from "zustand";
import { persist } from "zustand/middleware";

interface RecipeStore {
  recipeData: RecipeRegistrationDataType;
  setRecipeData: (newRecipeData: RecipeRegistrationDataType) => void;
}

const useRecipeStore = create<RecipeStore>(
  persist(
    (set) => ({
      recipeData: {
        title: "",
        category: -1,
        story: "",
        recipeIngredients: [
          {
            name: "",
            quantity: -1,
            unit: -1,
          },
        ],
        steps: [""],
      },
      setRecipeData: (newRecipeData) => set({ recipeData: newRecipeData }),
    }),
    {
      name: "recipe-storage",
    },
  ) as (set: (fn: (state: RecipeStore) => RecipeStore) => void) => RecipeStore,
);

const getStoredRecipeState = () => {
  // 로컬 스토리지의 문자열 형태의 데이터를 저장
  const storedDataString = localStorage.getItem("recipe-storage");
  // 문자열 형태의 데이터를 객체 형태로 변환
  const storedData = storedDataString && JSON.parse(storedDataString);

  if (storedData) {
    const storedRecipeData = storedData.state.recipeData;

    const recipeData = storedRecipeData;

    return { recipeData };
  } else {
    return {
      recipeData: {
        title: "",
        category: -1,
        story: "",
        recipeIngredients: [
          {
            name: "",
            quantity: -1,
            unit: -1,
          },
        ],
        steps: [""],
      },
    };
  }
};

export { useRecipeStore, getStoredRecipeState };
