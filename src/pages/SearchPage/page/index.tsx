import FilteringButtons from "@components/filtering/FilteringButtons";
import SearchHeader from "@components/header/SearchHeader";
import RecipeList from "@components/recipe/RecipeList";
import React from "react";

const SearchPage: React.FC = () => {
  return (
    <div>
      <SearchHeader />
      <FilteringButtons />
      <RecipeList />
    </div>
  );
};

export default SearchPage;
