import RecipeHeader from "@components/header/RecipeHeader";
import React, { useEffect } from "react";
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
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Loading from "@components/loading/Loading";

type Data = {
  data: RecipeDataType;
  message: string;
  status: number;
};

const RecipePage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { recipeId } = useParams();

  const fetchLogin = async (): Promise<FetchAlertsStatusType> => {
    return await fetchData("GET", apiRoutes.userLogin);
  };

  const { data: loginData } = useQuery<FetchAlertsStatusType, void>({
    queryFn: fetchLogin,
    queryKey: ["login"],
  });

  const handleClick = () => {
    if (loginData?.status !== 200) navigate("/login", { state: { redirectedFrom: location } });
  };

  const {
    data: recipeData,
    isLoading,
    isError,
  } = useQuery<Data>({
    queryKey: [`recipeData${recipeId}`],
    queryFn: () => fetchData("GET", `${apiRoutes.recipes}/${recipeId}`),
  });

  useEffect(() => {
    const handleDocumentClickCapture = () => {
      handleClick();
    };
    document.addEventListener("click", handleDocumentClickCapture, true);

    return () => {
      document.removeEventListener("click", handleDocumentClickCapture, true);
    };
  }, [loginData]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-[100vh]">
        <Loading />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center w-full h-[100vh]">
        해당 레시피를 찾지 못 했습니다.
      </div>
    );
  }

  return (
    <div onClick={handleClick}>
      {recipeData && (
        <>
          <RecipeHeader canUpdate={recipeData.data.canUpdate} />
          <LazyLoadImage
            src={recipeData.data.mainImage}
            alt="레시피 대표 이미지"
            width={"100%"}
            effect="blur"
            placeholderSrc={recipeData.data.mainImage}
          />
          <RecipeTitleSection
            user={recipeData.data.user}
            title={recipeData.data.title}
            bookmark={recipeData.data.book}
            bookmarkStatus={recipeData.data.bookStatus}
            canUpdate={recipeData.data.canUpdate}
          />
          <DividingLine />
          <div className="flex flex-col gap-5 p-6">
            <PreparedIngredients ingredients={recipeData.data.ingredients} />
            <RecipeSteps steps={recipeData.data.steps} />
            <RecipeStory story={recipeData.data.story} />
          </div>
          <DividingLine />
          <div className="flex gap-4 p-3">
            <Like
              queryKey={`recipeData${recipeId}`}
              recipe={parseInt(recipeId!)}
              like={recipeData.data.like}
              status={recipeData.data.likeStatus}
            />
            <CommentIcon commentNumber={recipeData.data.comments.length} />
          </div>
          <CommentSection comments={recipeData.data.comments} />
        </>
      )}
    </div>
  );
};

export default RecipePage;
