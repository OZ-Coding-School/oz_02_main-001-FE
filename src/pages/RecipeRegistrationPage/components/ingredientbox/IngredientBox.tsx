import BigButton from "@components/buttons/BigButton";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { apiRoutes } from "./../../../../api/apiRoutes";
import { fetchData } from "./../../../../api/axios";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

type data = {
  data: IngredientDataType[];
  message: string;
  status: number;
};

interface IngredientBoxProp {
  index: number;
  value: string;
  ingredients: RecipeIngredient[];
  setIngredients: React.Dispatch<React.SetStateAction<RecipeIngredient[]>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const IngredientBox: React.FC<IngredientBoxProp> = ({
  index,
  value,
  ingredients,
  setIngredients,
  setShowModal,
}) => {
  const { data, isError, error, isLoading } = useQuery<data>({
    queryKey: ["searchIngredient", value],
    queryFn: () => fetchData("GET", `${apiRoutes.ingredients}/recipe/${value}`),
    enabled: value !== "" || !!value.trim(),
  });

  if (isError) {
    console.log(error);
  } else {
    console.log(data);
  }

  const handleSubmit = () => {
    setShowModal(false);
  };

  const handleIngredientClick = (name: string) => {
    const updateData = ingredients.map((ingredient, i) => {
      if (index === i) {
        return { ...ingredient, name };
      } else {
        return ingredient;
      }
    });
    setIngredients(updateData);
    setShowModal(false);
  };

  return (
    <div className="absolute top-14 bg-white z-[10] w-full border border-softBlue rounded-[5px] pt-1">
      <div className="flex flex-col h-[260px] justify-between">
        <div className="overflow-auto">
          {isError || !value ? (
            <div className="py-2.5 px-3">재료명을 입력해주세요</div>
          ) : isLoading ? (
            <div className="flex flex-col gap-3 py-2.5 px-3">
              <Skeleton height={30} width={"50%"} />
              <Skeleton height={30} width={"50%"} />
            </div>
          ) : (
            <>
              {data && data.data.length === 0 ? (
                <div className="py-2.5 px-3">검색된 재료가 없습니다</div>
              ) : (
                data?.data.map((ingredient) => (
                  <div
                    className="py-2.5 px-3"
                    key={ingredient.id}
                    onClick={() => {
                      return handleIngredientClick(ingredient.name);
                    }}
                  >
                    {ingredient.name}
                  </div>
                ))
              )}
            </>
          )}
        </div>
        <div className="px-2 py-3">
          <BigButton buttonText={`${value}(으)로 입력하기`} handleClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default IngredientBox;
