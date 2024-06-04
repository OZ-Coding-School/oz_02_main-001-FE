import Header from "@components/header/Header";
import ProceedModal from "@components/modal/ProceedModal";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const SettingPage: React.FC = () => {
  const navigate = useNavigate();
  // 토글상태는 useEffect로 받아와야함
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalName, setModalName] = useState<string>("");

  const handleBackBtnClick = (): void => {
    navigate(-1);
  };

  const handleModalOpen = (name: string): void => {
    setModalName(name);
    setIsModalOpen(true);
  };

  const handleToggle = () => {
    setIsToggled(!isToggled);
    if (isToggled) {
      // 알림 설정 on일때 실행되는 함수
      return;
    }
    // 알림 설정 off일때 실행되는 함수
  };

  const handleCloseModal = (): void => {
    setIsModalOpen(false);
  };

  const handleLogout = (): void => {
    // api 로그아웃 연동
    setIsModalOpen(false);
    navigate("/login");
  };

  const handleDeleteAccount = (): void => {
    // api 계정삭제 연동
    setIsModalOpen(false);
    navigate("/login");
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
