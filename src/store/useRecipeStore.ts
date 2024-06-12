import { create } from "zustand";

interface RecipeStore {
  recipeData: RecipeRegistrationDataType;
  setRecipeData: (newRecipeData: RecipeRegistrationDataType) => void;
}

export const useRecipeStore = create<RecipeStore>((set) => ({
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
}));
