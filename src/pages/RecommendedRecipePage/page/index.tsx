import Header from "@components/header/Header";
import React from "react";
import { useNavigate } from "react-router-dom";
import RecommendedRecipeItem from "../components/RecommendedRecipeItem";
import DividingLine from "@components/dividingLine/DividingLine";

const data: RecommendedDataType = {
  ingredients: ["김치", "돼지고기"],
  recipes: [
    {
      recipeId: 10,
      nickname: "podo",
      includeIngredients: ["김치"],
      notIncludeIngredients: ["고추장", "간장"],
      title: "김치 계란 볶음밥",
      likes: 0,
      bookmark: 0,
      likeStatus: -1,
      bookmarkStatus: -1,
    },
    {
      recipeId: 11,
      nickname: "요리 고수",
      includeIngredients: ["김치", "돼지고기"],
      notIncludeIngredients: ["고추장", "간장", "돼지고기"],
      title: "너무너무 맛있는 돼지고기김치찌개 한국인이라면 먹어야 함 무조건",
      likes: 0,
      bookmark: 0,
      likeStatus: -1,
      bookmarkStatus: -1,
    },
    {
      recipeId: 12,
      nickname: "자취경력 30년차",
      includeIngredients: [
        "김치",
        "돼지고기",
        "김치",
        "돼지고기",
        "김치",
        "돼지고기",
        "김치",
        "돼지고기",
        "돼지고기",
        "김치",
        "돼지고기",
      ],
      notIncludeIngredients: [
        "고추장",
        "간장",
        "다진마늘",
        "돼지고기",
        "양파",
        "고추장",
        "간장",
        "다진마늘",
        "돼지고기",
        "양파",
      ],
      title: "돼지김치짜글이",
      likes: 0,
      bookmark: 0,
      likeStatus: -1,
      bookmarkStatus: -1,
    },
    {
      recipeId: 13,
      nickname: "팡이",
      includeIngredients: ["김치"],
      notIncludeIngredients: ["밀가루", "식용유"],
      title: "김치전",
      likes: 0,
      bookmark: 0,
      likeStatus: -1,
      bookmarkStatus: -1,
    },
  ],
};

const RecommendedRecipePage: React.FC = () => {
  const navigate = useNavigate();
  const handleRecipeClick = (recipeId: number) => {
    navigate(`/recipe/${recipeId}`);
  };
  return (
    <div>
      <Header hasBackBtn={true} title="추천 레시피" handleBackBtnClick={() => navigate(-1)} />
      <div>
        <div className="flex flex-col gap-2 p-3">
          <div className="font-[600]">선택한 재료</div>
          <ul className="flex gap-2">
            {data.ingredients.map((ingredient) => (
              <li>
                <span className="bg-softBlue text-midnightGray rounded-[5px] p-1">
                  {ingredient}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <DividingLine />
        <div className="flex flex-col gap-3 p-3">
          {data.recipes.map((recipe) => (
            <RecommendedRecipeItem
              recipe={recipe}
              key={recipe.recipeId}
              handleRecipeClick={handleRecipeClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedRecipePage;
