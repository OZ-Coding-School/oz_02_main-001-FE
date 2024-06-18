import React, { useEffect, useState } from "react";
import Footer from "@components/footer/Footer";
import MainHeader from "@components/header/MainHeader";
import Modal from "../components/Modal";
import BestRecipeList from "../components/BestRecipeList";
import CategorySectionList from "../components/CategorySectionList";
import { fetchData } from "../../../api/axios";
import { apiRoutes } from "../../../api/apiRoutes";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import SkeletonLoader from "../skeleton/SkeletonLoader";
import { useNavigate } from "react-router-dom";

const MainPage: React.FC = () => {
  const [isMainPageModalOpen, setIsMainPageModalOpen] = useState(false);
  const [userDetail, setUserDetail] = useState<UserDetailType>();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data, error, isLoading } = useQuery<MainPageDataType>({
    queryKey: ["main"],
    queryFn: () => fetchData("GET", apiRoutes.main),
  });
  if (error) {
    console.log(error);
  }

  useEffect(() => {
    if (data?.data.detailStatus === -1) {
      setIsMainPageModalOpen(true);
    }
  }, [data]);

  const handleCloseModal = () => {
    setIsMainPageModalOpen(false);
  };

  const fetchDetail = async (): Promise<UserDetailType> => {
    return await fetchData("POST", apiRoutes.userDetail, userDetail);
  };

  const mutationDetail = useMutation<UserDetailType>({
    mutationFn: fetchDetail,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["detail"],
      });
      setIsMainPageModalOpen(false);
    },
    onError: () => {
      console.log(error);
    },
  });

  useEffect(() => {
    const redirectedURL = localStorage.getItem("redirectedFrom");
    if (redirectedURL) {
      localStorage.setItem("redirectedFrom", "");
      navigate(redirectedURL.slice(1));
    }
  }, []);

  const handleSubmitModal = (gender: string, age: number, alertStatus: boolean) => {
    // api로 넘겨야함
    let genderNumber = false;
    if (gender === "여자") {
      genderNumber = true;
    }
    setUserDetail({
      age: age,
      gender: genderNumber,
      alert: alertStatus,
    });
    mutationDetail.mutate();
  };

  return (
    <div>
      <MainHeader />
      <div className="min-h-[calc(100vh-105px)]">
        <div className="py-5 px-7 flex flex-col gap-y-[20px]">
          {isLoading ? (
            <SkeletonLoader />
          ) : (
            <>
              {data?.data && (
                <>
                  <div>
                    <div>
                      <p className="text-[20px] font-semibold">🏆 금주의 레시피 🏆 </p>
                      <p className="text-[14px] text-gray-400">냉뚝이 어워즈 인기 레시피 !</p>
                    </div>
                    <BestRecipeList mainPageData={data?.data} />
                  </div>

                  <div className="flex flex-col gap-y-10">
                    <CategorySectionList
                      mainPageData={data.data.daily}
                      categoryName="daily"
                      category="일상요리"
                      categoryDescription="everyday cooking recipes"
                    />
                    <CategorySectionList
                      mainPageData={data.data.healthy}
                      categoryName="healthy"
                      category="건강요리"
                      categoryDescription="healthy cooking recipes"
                    />
                    <CategorySectionList
                      mainPageData={data.data.midnightSnack}
                      categoryName="midnight"
                      category="야식"
                      categoryDescription="dessert cooking recipes"
                    />
                    <CategorySectionList
                      mainPageData={data.data.desert}
                      categoryName="desert"
                      category="디저트"
                      categoryDescription="midnight food recipes"
                    />
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
      <Modal
        isOpen={isMainPageModalOpen}
        handleCloseModal={handleCloseModal}
        onSubmit={handleSubmitModal}
      />
      <Footer page="main" />
    </div>
  );
};

export default MainPage;
