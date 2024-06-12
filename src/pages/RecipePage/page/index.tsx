import RecipeHeader from "@components/header/RecipeHeader";
import React from "react";
import testUrl from "@assets/images/recipe.png";
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

type data = {
  data: RecipeDataType;
  message: string;
  status: number;
};

const RecipePage: React.FC = () => {
  const { recipeId } = useParams();
  const {
    data: recipeData,
    isLoading,
    isError,
    error,
  } = useQuery<data>({
    queryKey: ["recipeData"],
    queryFn: () => fetchData("GET", `${apiRoutes.recipes}/${recipeId}`),
  });

  if (isError) {
    console.log(error);
  } else {
    console.log(recipeData);
  }

  return (
    <div>
      {isLoading ? (
        <div>로딩중</div>
      ) : (
        recipeData && (
          <>
            <RecipeHeader canUpdate={recipeData.data.canUpdate} />
            <img
              src={recipeData.data.mainImage}
              alt="레시피 대표 이미지"
              className="w-[100%] h-auto"
            />
            <RecipeTitleSection
              title={recipeData.data.title}
              date={recipeData.data.user.date}
              bookmark={recipeData.data.bookmark}
              bookmarkStatus={recipeData.data.bookmarkStatus}
              userNickname={recipeData.data.user.nickname}
              userProfileImage={recipeData.data.user.profileImage}
            />
            <DividingLine />
            <div className="flex flex-col gap-5 p-6">
              <PreparedIngredients ingredients={recipeData.data.ingredients} />
              <RecipeSteps steps={recipeData.data.steps} />
              <RecipeStory story={recipeData.data.story} />
            </div>
            <DividingLine />
            <div className="flex gap-4 p-3">
              <Like like={recipeData.data.like} likeStatus={recipeData.data.likeStatus} />
              <CommentIcon commentNumber={recipeData.data.comments.length} />
            </div>
            <CommentSection comments={recipeData.data.comments} />
          </>
        )
      )}
    </div>
  );
};

export default RecipePage;
