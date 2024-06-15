import Footer from "@components/footer/Footer";
import Header from "@components/header/Header";
import { useEffect, useState } from "react";
import RefrigeratorItem from "../components/RefrigeratorItem";
import BigButton from "@components/buttons/BigButton";
import { useNavigate } from "react-router";
import { TiDeleteOutline } from "react-icons/ti";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchData } from "../../../api/axios";
import { apiRoutes } from "../../../api/apiRoutes";
import Loading from "@components/loading/Loading";

const RefrigeratorPage: React.FC = () => {
  const navigate = useNavigate();
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [allIngredients, setAllIngredients] = useState<IngredientDataType[]>([]);
  const [deleteIngredientItemsList] = useState<UpdateIngredientType[]>([]);
  const queryClient = useQueryClient();

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
  useEffect(() => {
    if (data?.data.ingredients) {
      console.log(data.data.ingredients);
      setAllIngredients(data.data.ingredients);
    }
  }, [data]);

  // 레시피 찾아보기
  const handleFindRecipeClick = () => {
    navigate("/ingredientSelection", { state: { Ingredients: data?.data.ingredients } });
  };

  // 재료 삭제 버튼 눌렀을때나 완료 버튼 눌렀을때
  const toggleDeleteMode = (): void => {
    setIsDeleteMode(!isDeleteMode);
  };

  // 재료 하나하나 x버튼 눌렀을때 실행
  const handleDeleteIngredientItem = (id: number): void => {
    console.log("하나하나 삭제 시작");
    deleteIngredientItemsList.push({ id: id, status: 0 });
    console.log("삭제 재료(deleteIngredientItemsList): ", deleteIngredientItemsList);
    setAllIngredients(allIngredients.filter((ingredient) => ingredient.id !== id));
  };

  // 모두 삭제 눌렀을때
  const clearAllIngredients = (): void => {
    console.log("모두 삭제 클릭");
    allIngredients.map((ingredient) =>
      deleteIngredientItemsList.push({ id: ingredient.id, status: 0 }),
    );
    console.log("중복 제거전: ", deleteIngredientItemsList);
    deleteIngredientItemsList.filter(
      (item, index, self) => index === self.findIndex((t) => t.id === item.id),
    );
    console.log("중복 제거 후: ", deleteIngredientItemsList);
    setAllIngredients([]);
  };

  // 재료 삭제 및 추가하는
  const mutationPostIngredients = useMutation<PostFridgeType, Error, UpdateIngredientType[]>({
    mutationFn: (deleteIngredientItemsList: UpdateIngredientType[]) =>
      fetchData<PostFridgeType, UpdateIngredientType[]>(
        "POST",
        apiRoutes.upDateIngredients,
        deleteIngredientItemsList,
      ),
    onError: (error) => {
      console.log(error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["refrigerator"] });
      setIsDeleteMode(false);
    },
  });

  // 완료버튼 눌렀을때
  const handleSaveBtnClick = (): void => {
    mutationPostIngredients.mutate(deleteIngredientItemsList);
  };

  return (
    <div className="h-[calc(100vh-55px)] flex flex-col">
      <Header hasBell={true} />
      <div id="content" className="flex flex-col flex-grow overflow-hidden">
        {data?.data && (
          <>
            <RefrigeratorItem
              isExistIngredient={data.data.ingredients.length !== 0 ? true : false}
              nickname={data.data.nickname}
              isDeletedMode={isDeleteMode}
              handleDeleteClick={toggleDeleteMode}
              deleteAllIngredients={clearAllIngredients}
              handleSave={handleSaveBtnClick}
            />
          </>
        )}

        <div className="flex-grow overflow-auto scrollbar-hide">
          {isLoading ? (
            <>
              <div className="flex justify-center items-center h-full">
                <Loading />
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-4 p-4 pl-[22px] pr-[22px]">
                {allIngredients.map((ingredient) => (
                  <div
                    key={ingredient.id}
                    className="font-semibold p-[32px] h-10 bg-iceBlue rounded-xl flex justify-center items-center relative"
                  >
                    <span style={{ letterSpacing: "0.1em" }}>{ingredient.name}</span>
                    {isDeleteMode && (
                      <TiDeleteOutline
                        className="absolute top-[-14px] right-[-12px] pl-1 w-8 h-8 cursor-pointer"
                        onClick={() => handleDeleteIngredientItem(ingredient.id)}
                      />
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
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
