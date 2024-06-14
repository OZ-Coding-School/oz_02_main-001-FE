import Footer from "@components/footer/Footer";
import Header from "@components/header/Header";
import { useState } from "react";
import RefrigeratorItem from "../components/RefrigeratorItem";
import BigButton from "@components/buttons/BigButton";
import { useLocation, useNavigate } from "react-router";
import { TiDeleteOutline } from "react-icons/ti";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../../api/axios";
import { apiRoutes } from "../../../api/apiRoutes";

const RefrigeratorPage: React.FC = () => {
  const location = useLocation();
  const selectedIngredients: IngredientDataType[] = location.state?.selectedIngredients || [];
  const navigate = useNavigate();
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [ingredients, setIngredients] = useState<IngredientDataType[]>([]);

  const getFridge = async (): Promise<FetchGetRefrigeratorType> => {
    return await fetchData("GET", apiRoutes.refrigerator);
  };

  const { data, isLoading, error, refetch } = useQuery<FetchGetRefrigeratorType>({
    queryKey: ["refrigerator"],
    queryFn: getFridge,
  });
  if (error) {
    console.log(error);
  }
  console.log(data);

  const handleFindRecipeClick = () => {
    navigate("/ingredientSelection", { state: { selectedIngredients: ingredients } });
  };

  const toggleDeleteMode = () => {
    setIsDeleteMode(!isDeleteMode);
  };

  const deleteIngredient = (id: number) => {
    const updatedIngredients = ingredients.filter((ingredient) => ingredient.id !== id);
    setIngredients(updatedIngredients);
    if (updatedIngredients.length === 0) {
      setIsDeleteMode(false);
    }
  };

  const clearAllIngredients = () => {
    setIngredients([]);
    setIsDeleteMode(false);
  };

  return (
    <div className="h-[calc(100vh-55px)] flex flex-col">
      <Header hasBell={true} />
      <div id="content" className="flex flex-col flex-grow overflow-hidden">
        <RefrigeratorItem
          refrigerator={{ nickname: "50번째 냉장고", ingredients }}
          ingredients={ingredients}
          isDeletedMode={isDeleteMode}
          handleDeleteClick={toggleDeleteMode}
          deleteAllIngredients={clearAllIngredients}
        />
        <div className="flex-grow overflow-auto scrollbar-hide">
          <div className="grid grid-cols-2 gap-4 p-4 pl-[22px] pr-[22px]">
            {ingredients.map((ingredient) => (
              <div
                key={ingredient.id}
                className="font-semibold p-[32px] h-10 bg-iceBlue rounded-xl flex justify-center items-center relative"
              >
                <span style={{ letterSpacing: "0.1em" }}>{ingredient.name}</span>
                {isDeleteMode && (
                  <TiDeleteOutline
                    className="absolute top-[-14px] right-[-12px] pl-1 w-8 h-8 cursor-pointer"
                    onClick={() => deleteIngredient(ingredient.id)}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="py-[18px] pl-[22px] pr-[22px] font-semibold">
          <BigButton buttonText={"레시피 찾아보기"} handleClick={handleFindRecipeClick} />
        </div>
      </div>
      <footer className="mb-[-53px]">
        <Footer page="refrigerator" />
      </footer>
    </div>
  );
};

export default RefrigeratorPage;
