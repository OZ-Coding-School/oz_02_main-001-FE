import BigButton from "@components/buttons/BigButton";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { apiRoutes } from "./../../../../api/apiRoutes";
import { fetchData } from "./../../../../api/axios";
import { IngredientDataType } from "src/types/ingredientType";

type data = {
  data: IngredientDataType[];
  message: string;
  status: number;
};

interface IngredientBoxProp {
  value: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const IngredientBox: React.FC<IngredientBoxProp> = ({ value, setShowModal }) => {
  const { data, error, isLoading } = useQuery<data>({
    queryKey: ["searchIngredient"],
    queryFn: () => fetchData("GET", `${apiRoutes.ingredients}/recipe/${value}`),
  });

  const handleSubmit = () => {
    setShowModal(false);
  };

  return (
    <div className="absolute top-14 bg-white z-[10] w-full border border-softBlue rounded-[5px] pt-1">
      <div className="flex flex-col h-[260px] justify-between">
        <div className="overflow-auto">
          {data && data.data.length === 0 ? (
            <div className="py-2.5 px-3">검색된 재료가 없습니다</div>
          ) : (
            data?.data.map((ingredient) => (
              <div className="py-2.5 px-3" key={ingredient.id}>
                {ingredient.name}
              </div>
            ))
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
