import { create } from "zustand";

interface RecipeStore {
  recipeData: RecipeRegistrationDataType;
  setRecipeData: (newRecipeData: RecipeRegistrationDataType) => void;
}

export const useRecipeStore = create<RecipeStore>((set) => ({
  recipeData: {
    title: "",
    mainImage: "",
    category: "카테고리",
    story: "",
    ingredients: [
      {
        name: "",
        quantity: null,
        unit: "단위",
      },
    ],
    steps: [
      {
        step: "",
        image: "",
      },
    ],
  },
  setRecipeData: (newRecipeData) => set({ recipeData: newRecipeData }),
}));
