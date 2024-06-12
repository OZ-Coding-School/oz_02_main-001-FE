import RecipeHeader from "@components/header/RecipeHeader";
import React from "react";
import testUrl from "@assets/images/김치볶음밥.png";
import RecipeTitleSection from "../components/title/RecipeTitleSection";
import PreparedIngredients from "../components/ingredient/PreparedIngredients";
import RecipeSteps from "../components/step/RecipeSteps";
import RecipeStory from "../components/stroy/RecipeStory";
import DividingLine from "../../../components/dividingLine/DividingLine";
import Like from "@components/recipe/Like";
import CommentIcon from "../components/comment/CommentIcon";
import CommentSection from "../components/comment/CommentSection";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./../../../api/axios";
import { apiRoutes } from "./../../../api/apiRoutes";
import { useParams } from "react-router-dom";

const initialRecipeData: RecipeDataType = {
  canUpdate: 1,
  title: "",
  mainImage: "",
  category: "",
  story: "",
  bookmark: 0,
  bookmarkStatus: -1,
  like: 0,
  likeStatus: -1,
  user: {
    id: -1,
    profileImage: "",
    nickname: "",
    date: "",
  },
  ingredients: [
    {
      name: "",
      quantity: 0,
      unit: -1,
    },
  ],
  steps: [
    {
      step: "",
      image: "",
    },
  ],
  comments: [
    {
      id: -1,
      userId: -1,
      userNickname: "",
      canUpdate: 0,
      profileImage: "",
      updatedAt: "",
      comment: "",
    },
  ],
};

const RecipePage: React.FC = () => {
  const { recipeId } = useParams();
  const {
    data: recipeData = initialRecipeData,
    isLoading,
    error,
  } = useQuery<RecipeDataType>({
    queryKey: ["recipeData"],
    queryFn: () => fetchData("GET", `${apiRoutes.recipes}/${recipeId}`),
  });
  console.log(recipeData);

  return (
    <div>
      <RecipeHeader canUpdate={recipeData?.canUpdate} />
      <img src={testUrl} className="w-[100%] h-auto" />
      <RecipeTitleSection
        title={recipeData?.title}
        date={recipeData?.user.date}
        bookmark={recipeData?.bookmark}
        bookmarkStatus={recipeData?.bookmarkStatus}
        userNickname={recipeData?.user.nickname}
      />
      <DividingLine />
      <div className="flex flex-col gap-5 p-6">
        <PreparedIngredients ingredients={recipeData?.ingredients} />
        <RecipeSteps steps={recipeData?.steps} />
        <RecipeStory story={recipeData?.story} />
      </div>
      <DividingLine />
      <div className="flex gap-4 p-3">
        <Like like={recipeData?.like} likeStatus={recipeData?.likeStatus} />
        <CommentIcon commentNumber={recipeData?.comments.length} />
      </div>
      <CommentSection comments={recipeData?.comments} />
    </div>
  );
};

export default RecipePage;
