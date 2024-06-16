import Header from "@components/header/Header";
import React, { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RecommendedRecipeItem from "../components/RecommendedRecipeItem";
import DividingLine from "@components/dividingLine/DividingLine";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchData } from "./../../../api/axios";
import { apiRoutes } from "./../../../api/apiRoutes";
import SkeletonRecipeList from "@components/recipe/SkeletonRecipeList";

const RecommendedRecipePage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryClient = useQueryClient();
  const selectedIngredients: number[] = location.state?.selectedIngredients || [];
  const { data: recommendedRecipes } = useQuery<RecommendedDataType>({
    queryKey: ["recommendedRecipes"],
  });

  const { mutate, isPending } = useMutation<FetchRecommended>({
    mutationFn: () =>
      fetchData<FetchRecommended, PostRecommendedData>("POST", apiRoutes.recommendRecipe, {
        ingredients: selectedIngredients,
      }),
    onSuccess: (data) => {
      queryClient.setQueryData(["recommendedRecipes"], data?.data);
      queryClient.invalidateQueries({ queryKey: ["recommendedRecipes"] });
    },
    onError: () => alert("오류가 발생했습니다"),
  });

  const handleRecipeClick = (recipeId: number) => {
    navigate(`/recipe/${recipeId}`);
  };

  useEffect(() => {
    mutate();
  }, [mutate]);

  const sortedRecipes = useMemo(() => {
    if (recommendedRecipes) {
      return [...recommendedRecipes.recipes].sort(
        (a, b) => b.includeIngredients.length - a.includeIngredients.length,
      );
    }
    return [];
  }, [recommendedRecipes]);

  return (
    <div>
      <Header hasBackBtn={true} title="추천 레시피" handleBackBtnClick={() => navigate(-1)} />
      <div>
        <div className="flex flex-col gap-2 p-3">
          <div className="font-[600]">선택한 재료</div>
          <Swiper
            slidesPerView="auto"
            spaceBetween={10}
            freeMode={true}
            modules={[FreeMode]}
            className="w-full h-full"
          >
            {recommendedRecipes &&
              recommendedRecipes.ingredients.map((ingredient, index) => (
                <SwiperSlide key={index} className="flex justify-center items-center w-fit">
                  <span className="bg-softBlue text-midnightGray rounded-[5px] py-1 px-2">
                    {ingredient}
                  </span>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        <DividingLine />
        {isPending ? (
          <SkeletonRecipeList />
        ) : (
          <div className="flex flex-col gap-3 p-3">
            {sortedRecipes &&
              sortedRecipes.map((recipe) => (
                <RecommendedRecipeItem
                  recipe={recipe}
                  key={recipe.recipeId}
                  handleRecipeClick={handleRecipeClick}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecommendedRecipePage;
