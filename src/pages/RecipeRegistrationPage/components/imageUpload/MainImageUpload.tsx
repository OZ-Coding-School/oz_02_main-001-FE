import React, { useEffect, useState } from "react";
import ProceedModal from "@components/modal/ProceedModal";
import { FaRegImages } from "react-icons/fa6";
import { useMutation } from "@tanstack/react-query";
import { apiRoutes } from "./../../../../api/apiRoutes";
import { useImageStore } from "@store/useImageStore";
import { fetchData } from "./../../../../api/axios";

interface MainImageUploadProp {
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainImageUpload: React.FC<MainImageUploadProp> = ({ setIsValid }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { mainImage, setMainImage } = useImageStore();

  const {
    mutate: changeImage,
    isError,
    isPending,
  } = useMutation({
    mutationFn: () => fetchData("POST", apiRoutes.updateImage, mainImage),
    onError: () => {
      setMainImage({ ...mainImage, image: "" });
      alert("이미지 업로드 실패");
    },
  });

  useEffect(() => {
    if (isPending) {
      setIsValid(false);
    }
  }, [isPending]);

  const handleMainImageClick = () => {
    if (!mainImage.image) {
      document.getElementById("fileInput")?.click();
    } else {
      setShowModal(true);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newImageUrl = e.target?.result as string;
        setMainImage({ ...mainImage, image: newImageUrl });
        changeImage();
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleDeleteImage = (): void => {
    setMainImage({ ...mainImage, image: "" });
    setShowModal(false);
  };

  const handleCloseModal = (): void => {
    setShowModal(false);
  };

  return (
    <>
      <div className="size-full cursor-pointer" onClick={handleMainImageClick}>
        {mainImage.image && !isError ? (
          <img src={mainImage.image} className="rounded-[5px] size-full object-cover" />
        ) : (
          <div className="flex flex-col gap-1 justify-center items-center size-full bg-softBlue rounded-[5px] ">
            <FaRegImages className="size-[25%]" />
            <span className="text-[#000000]/50 text-lg">(0/1)</span>
          </div>
        )}
      </div>
      <input type="file" id="fileInput" className="hidden" onChange={handleFileChange} />
      {showModal && (
        <ProceedModal
          proceedQuestionText="이미지를 삭제 하시겠습니까?"
          handleLeftClick={handleDeleteImage}
          handleRightClick={handleCloseModal}
        />
      )}
    </>
  );
};

export default MainImageUpload;
