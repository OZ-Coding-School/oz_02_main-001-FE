import { AccountDataType } from "src/types/accountRecipeType";
import noProfile from "@assets/images/noProfile.png";
import recipeImg from "@assets/images/recipe.png";
import kimchi from "@assets/images/김치볶음밥.png";

export const accountData: AccountDataType = {
  image: noProfile,
  nickname: "1012번째 냉장고",
  cnt: 17,
  recipes: [
    { id: 1, recipeImage: recipeImg },
    { id: 2, recipeImage: recipeImg },
    { id: 3, recipeImage: recipeImg },
    { id: 4, recipeImage: recipeImg },
    { id: 5, recipeImage: recipeImg },
    { id: 6, recipeImage: recipeImg },
    { id: 7, recipeImage: recipeImg },
    { id: 8, recipeImage: recipeImg },
    { id: 9, recipeImage: recipeImg },
    { id: 10, recipeImage: recipeImg },
    { id: 11, recipeImage: recipeImg },
    { id: 12, recipeImage: recipeImg },
    { id: 13, recipeImage: recipeImg },
    { id: 14, recipeImage: recipeImg },
    { id: 15, recipeImage: recipeImg },
    { id: 16, recipeImage: recipeImg },
    { id: 17, recipeImage: recipeImg },
  ],
};

export const accountData2: AccountDataType = {
  image: noProfile,
  nickname: "1012번째 냉장고",
  cnt: 7,
  recipes: [
    { id: 1, recipeImage: kimchi },
    { id: 2, recipeImage: kimchi },
    { id: 3, recipeImage: kimchi },
    { id: 4, recipeImage: kimchi },
    { id: 5, recipeImage: kimchi },
    { id: 6, recipeImage: kimchi },
    { id: 7, recipeImage: kimchi },
  ],
};
