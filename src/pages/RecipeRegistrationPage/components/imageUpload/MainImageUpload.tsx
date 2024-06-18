import React, { useEffect, useState } from "react";
import ProceedModal from "@components/modal/ProceedModal";
import { FaRegImages } from "react-icons/fa6";
import { useMutation } from "@tanstack/react-query";
import { apiRoutes } from "./../../../../api/apiRoutes";
import { fetchData } from "./../../../../api/axios";
import { Storage } from "./../../../../utils/Storage";
import { useImageStore } from "@store/useImageStore";

interface MainImageUploadProp {
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainImageUpload: React.FC<MainImageUploadProp> = ({ setIsValid }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { mainImage, setMainImage } = useImageStore();
  const [image, setImage] = useState<string>(
    JSON.parse(Storage.get("image-storage")!).state.mainImage.image || "",
  );

  const {
    mutate: changeImage,
    isError,
    isPending,
  } = useMutation<FetchImage, Error, string>({
    mutationFn: (newImageUrl) =>
      fetchData<FetchImage, ImageUploadType>("POST", apiRoutes.updateImage, {
        ...mainImage,
        image: newImageUrl,
      }),
    onSuccess: (data) => {
      setImage(data.data.image);
    },
    onError: () => {
      setImage("");
      alert("이미지 업로드 실패");
    },
  });

  useEffect(() => {
    if (isPending) {
      setIsValid(false);
    }
  }, [isPending]);

  const handleMainImageClick = () => {
    if (!image) {
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
        changeImage(newImageUrl);
      };
      reader.readAsDataURL(event.target.files[0]);
    }

    event.target.value = "";
  };

  const handleDeleteImage = (): void => {
    setImage("");
    setShowModal(false);
  };

  const handleCloseModal = (): void => {
    setShowModal(false);
  };

  useEffect(() => {
    setMainImage({ ...mainImage, image });
  }, [image]);

  return (
    <>
      <div className="size-full cursor-pointer" onClick={handleMainImageClick}>
        {isPending ? (
          <div className="flex flex-col gap-1 justify-center items-center w-full h-full bg-softBlue rounded-[5px]">
            Loading...
          </div>
        ) : image && !isError ? (
          <img src={image} className="rounded-[5px] w-full h-full object-cover" />
        ) : (
          <div className="flex flex-col gap-1 justify-center items-center w-full h-full bg-softBlue rounded-[5px]">
            <FaRegImages className="w-1/4 h-1/4" />
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
