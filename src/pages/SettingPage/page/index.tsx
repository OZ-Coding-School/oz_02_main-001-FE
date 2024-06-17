import Header from "@components/header/Header";
import ProceedModal from "@components/modal/ProceedModal";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { apiRoutes } from "../../../api/apiRoutes";
import { fetchData } from "../../../api/axios";

const SettingPage: React.FC = () => {
  const navigate = useNavigate();
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalName, setModalName] = useState<string>("");
  const queryClient = useQueryClient();

  const handleBackBtnClick = (): void => {
    navigate(-1);
  };

  const handleModalOpen = (name: string): void => {
    setModalName(name);
    setIsModalOpen(true);
  };

  const { data, error } = useQuery<GetAlertStatusType>({
    queryKey: ["alertStatus"],
    queryFn: () => fetchData("GET", apiRoutes.alertEnable),
  });

  useEffect(() => {
    data?.data.status ? setIsToggled(true) : setIsToggled(false);
  }, [data]);

  //
  const putAlertStatus = async (): Promise<AlertType> => {
    const data = {
      enable: !isToggled,
    };
    return await fetchData("PUT", apiRoutes.alertEnable, data);
  };

  const mutationPutAlertStatus = useMutation<AlertType, void>({
    mutationFn: putAlertStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["updateAlert"],
      });
      setIsToggled(!isToggled);
    },
    onError: () => console.log(error),
  });

  const handleToggle = () => {
    mutationPutAlertStatus.mutate();
  };

  const handleCloseModal = (): void => {
    setIsModalOpen(false);
  };

  // 로그아웃 api 연동
  const fetchLogout = async () => {
    return await fetchData("POST", apiRoutes.userLogout);
  };

  const mutationLogout = useMutation({
    mutationFn: fetchLogout,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["login"],
      });
      setIsModalOpen(false);
      navigate("/login");
    },
  });

  const handleLogout = (): void => {
    mutationLogout.mutate();
  };

  // 회원 탈퇴 api 연동
  const fetchDeleteAccount = async () => {
    return await fetchData("POST", apiRoutes.userLogout);
  };

  const mutationDeleteAccount = useMutation({
    mutationFn: fetchDeleteAccount,
    onSuccess: () => {
      setIsModalOpen(false);
      navigate("/login");
    },
  });

  const handleDeleteAccount = (): void => {
    mutationDeleteAccount.mutate();
  };
  return (
    <>
      <Header hasBackBtn={true} title="설정" handleBackBtnClick={handleBackBtnClick} />
      <div className="flex flex-col p-4 gap-y-[14px]">
        <div className="flex flex-row items-center justify-between">
          <p className="text-[20px]">알림 설정</p>
          <button
            onClick={handleToggle}
            className={`inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300 focus:outline-none ${
              isToggled ? "bg-blue-600" : "bg-gray-300"
            }`}
          >
            <span
              className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300 ${
                isToggled ? "translate-x-[23px]" : "translate-x-1"
              }`}
            />
          </button>
        </div>
        <div className="text-[18px] text-gray-400 cursor-pointer">
          <span onClick={() => handleModalOpen("logout")}>로그아웃</span>
        </div>
        <div className="text-[18px] text-gray-400 cursor-pointer">
          <span onClick={() => handleModalOpen("delete")}>회원탈퇴</span>
        </div>
      </div>
      {isModalOpen && (
        <ProceedModal
          proceedQuestionText={
            modalName === "logout" ? "로그아웃 하시겠습니까?" : "회원탈퇴 하시겠습니까?"
          }
          handleLeftClick={modalName === "logout" ? handleLogout : handleDeleteAccount}
          handleRightClick={handleCloseModal}
        />
      )}
    </>
  );
};

export default SettingPage;
