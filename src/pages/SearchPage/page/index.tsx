import FilteringButtons from "@components/filtering/FilteringButtons";
import SearchHeader from "@components/header/SearchHeader";
import RecipeList from "@components/recipe/RecipeList";
import { RecipeType } from "src/types/recipeItemType";
import React from "react";
import recipeImg from "@assets/images/recipe.png";

export const data: RecipeType[] = [
  {
    id: 1,
    user: "1번째 냉장고",
    title: "오징어 볶음",
    image: recipeImg,
    like: 130,
    likeStatus: 1,
    book: 50,
    bookStatus: 1,
  },
  {
    id: 2,
    user: "2번째 냉장고",
    title: "토마토 볶음",
    image: recipeImg,
    like: 30,
    likeStatus: 1,
    book: 0,
    bookStatus: -1,
  },
  {
    id: 3,
    user: "3번째 냉장고",
    title: "제육볶음",
    image: recipeImg,
    like: 10,
    likeStatus: -1,
    book: 10,
    bookStatus: 1,
  },
];

const SearchPage: React.FC = () => {
  return (
    <div>
      <SearchHeader />
      <FilteringButtons />
      <RecipeList recipeData={data} />
    </div>
  );
};

export default SearchPage;
