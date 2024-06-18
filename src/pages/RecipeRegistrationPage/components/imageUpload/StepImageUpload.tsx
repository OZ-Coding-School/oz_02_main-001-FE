import React, { useState } from "react";
import ProceedModal from "@components/modal/ProceedModal";
import { FaRegImages } from "react-icons/fa6";
import { useMutation } from "@tanstack/react-query";
import { fetchData } from "../../../../api/axios";
import { apiRoutes } from "../../../../api/apiRoutes";
import { useImageStore } from "@store/useImageStore";

interface StepImageUploadProps {
  order: number;
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
}

const StepImageUpload: React.FC<StepImageUploadProps> = ({ order, setIsValid }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { stepImage, setStepImage } = useImageStore();

  const changeImage = useMutation({
    mutationFn: () => {
      return fetchData("POST", apiRoutes.updateImage, stepImage[order - 1]);
    },
    onError: (error) => {
      deleteImage();
      console.log(error);
      alert("이미지 전송 실패");
    },
  });

  const updateImage = (newImageUrl: string) => {
    const newData: imageUpload[] = stepImage.map((image, i) => {
      if (order - 1 === i) {
        return { ...image, image: newImageUrl };
      } else {
        return image;
      }
    });
    setStepImage(newData);
  };

  const deleteImage = () => {
    const newData: imageUpload[] = stepImage.map((image, i) => {
      if (order - 1 === i) {
        return { ...image, image: "" };
      } else {
        return image;
      }
    });
    setStepImage(newData);
  };

  const handleStepImageClick = () => {
    if (!stepImage[order - 1].image) {
      document.getElementById(`fileInput${order}`)?.click();
    } else {
      setShowModal(true);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newImageUrl = e.target?.result as string;
        updateImage(newImageUrl);
        setIsValid(false);
        changeImage.mutate();
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleDeleteImage = (): void => {
    deleteImage();
    changeImage.mutate();
    setShowModal(false);
  };

  const handleCloseModal = (): void => {
    setShowModal(false);
  };

  return (
    <>
      <div
        className="w-full min-w-[full] aspect-square cursor-pointer"
        onClick={handleStepImageClick}
      >
        {stepImage[order - 1].image ? (
          <img src={stepImage[order - 1].image} className="rounded-[5px] size-full object-cover" />
        ) : (
          <div className="flex flex-col gap-1 justify-center items-center size-full bg-softBlue rounded-[5px] ">
            <FaRegImages className="size-[25%]" />
            <span className="text-[#000000]/50 text-lg">(0/1)</span>
          </div>
        )}
      </div>
      <input type="file" id={`fileInput${order}`} className="hidden" onChange={handleFileChange} />
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

export default StepImageUpload;
