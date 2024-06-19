import React, { useEffect, useState } from "react";
import ProceedModal from "@components/modal/ProceedModal";
import { FaRegImages } from "react-icons/fa6";
import { useMutation } from "@tanstack/react-query";
import { fetchData } from "../../../../api/axios";
import { apiRoutes } from "../../../../api/apiRoutes";
import { useImageStore } from "@store/useImageStore";
import { Storage } from "./../../../../utils/Storage";

interface StepImageUploadTypeProps {
  order: number;
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
}

const StepImageUploadType: React.FC<StepImageUploadTypeProps> = ({ order, setIsValid }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { stepImage, setStepImage } = useImageStore();
  const [image, setImage] = useState<string>(
    JSON.parse(Storage.get("image-storage")!).state.stepImage[order - 1].image || "",
  );

  useEffect(() => {
    setImage(JSON.parse(Storage.get("image-storage")!).state.stepImage[order - 1].image || "");
  }, [stepImage]);

  const {
    mutate: changeImage,
    isError,
    isPending,
  } = useMutation<FetchImage, Error, string>({
    mutationFn: (newImageUrl) => {
      console.log(stepImage[order - 1], image);
      return fetchData("POST", apiRoutes.updateImage, {
        ...stepImage[order - 1],
        image: newImageUrl,
      });
    },
    onSuccess: (data) => {
      setImage(data.data.image);
    },
    onError: (error) => {
      setImage("");
      console.log(error);
      alert("이미지 전송 실패");
    },
  });

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
        changeImage(newImageUrl);
        setIsValid(false);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
    event.target.value = "";
  };

  const handleDeleteImage = (): void => {
    setImage("");
    changeImage("");
    setShowModal(false);
  };

  const handleCloseModal = (): void => {
    setShowModal(false);
  };

  useEffect(() => {
    const updateStepImage = () => {
      const newData: ImageUploadType[] = stepImage.map((stepImage, i) => {
        if (order - 1 === i) {
          return { ...stepImage, image };
        } else {
          return stepImage;
        }
      });
      setStepImage(newData);
    };

    updateStepImage();
  }, [image]);

  return (
    <>
      <div
        className="w-full min-w-[full] aspect-square cursor-pointer"
        onClick={handleStepImageClick}
      >
        {isPending ? (
          <div className="flex flex-col gap-1 justify-center items-center w-full h-full bg-softBlue rounded-[5px]">
            Loading...
          </div>
        ) : image && !isError ? (
          <img src={image} className="rounded-[5px] size-full object-cover" />
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

export default StepImageUploadType;
