import { FaRegImages } from "react-icons/fa6";
import React, { useState } from "react";
import ProceedModal from "@components/modal/ProceedModal";

interface ImageUploadProps {
  recipeDataImage: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ recipeDataImage }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [image, setImage] = useState<string>(recipeDataImage);

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
        setImage(e.target?.result as string);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleDeleteImage = (): void => {
    // api 데이터 업데이트 코드 추가 예정
    setImage("");
    setShowModal(false);
  };

  const handleCloseModal = (): void => {
    setShowModal(false);
  };

  return (
    <>
      <div className="size-[180px] cursor-pointer" onClick={handleMainImageClick}>
        {image ? (
          <img src={image} className="rounded-[5px] size-full" />
        ) : (
          <div className="flex flex-col gap-1 justify-center items-center size-full bg-softBlue rounded-[5px] ">
            <FaRegImages className="size-[40px]" />
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

export default ImageUpload;
