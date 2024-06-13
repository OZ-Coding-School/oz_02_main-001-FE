import ProceedModal from "@components/modal/ProceedModal";
import React, { useState, useEffect, useRef } from "react";
import { MdOutlineMoreHoriz } from "react-icons/md";

interface MoreButtonProps {
  handleEditModal: () => void;
  handleDeleteModal: () => void;
}

/**
 * 메세지 수정 or 삭제 관련하여 선택할 수 있는 더보기 버튼입니다.
 * 레시피 페이지와 댓글에서 사용되기 때문에 buttons로 분류하였습니다.
 * @returns
 */
const MoreButton: React.FC<MoreButtonProps> = ({ handleEditModal, handleDeleteModal }) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalName, setModalName] = useState<string>("");
  const moreButtonRef = useRef<HTMLDivElement>(null);

  const handleMoreButtonClick = () => {
    setIsClicked((prev) => !prev);
  };

  const handleModalOpen = (name: string): void => {
    setIsClicked(false);
    setModalName(name);
    setIsModalOpen(true);
  };

  const handleCloseModal = (): void => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreButtonRef.current && !moreButtonRef.current.contains(event.target as Node)) {
        setIsClicked(false);
      }
    };

    if (isClicked) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isClicked]);

  return (
    <div className="relative" ref={moreButtonRef}>
      <div className="flex justify-center w-[40px] cursor-pointer" onClick={handleMoreButtonClick}>
        <MdOutlineMoreHoriz className="w-[24px] h-[24px]" />
      </div>
      {isClicked && (
        <div className="flex flex-col items-center justify-center w-[150px] h-[80px] bg-white absolute right-1 top-7 border rounded-[8px] p-1 cursor-pointer z-10">
          <span
            className="text-center w-full border-b pb-2"
            onClick={() => handleModalOpen("edit")}
          >
            수정 하기
          </span>
          <span className="text-center w-full pt-2" onClick={() => handleModalOpen("delete")}>
            삭제 하기
          </span>
        </div>
      )}
      {isModalOpen && (
        <ProceedModal
          proceedQuestionText={modalName === "edit" ? "수정 하시겠습니까?" : "삭제 하시겠습니까?"}
          handleLeftClick={modalName === "edit" ? handleEditModal : handleDeleteModal}
          handleRightClick={handleCloseModal}
        />
      )}
    </div>
  );
};

export default MoreButton;
