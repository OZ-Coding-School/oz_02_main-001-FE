import React, { useState } from "react";
import ProceedModal from "@components/modal/ProceedModal";
import { FaRegImages } from "react-icons/fa6";

interface ImageUploadProps {
  value: string;
  handleChange: (field: string, value: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ value, handleChange }) => {
  // handleChange를 props로 전달받음
  const [showModal, setShowModal] = useState<boolean>(false);
  const [image, setImage] = useState<string>(value);

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
        setImage(newImageUrl);
        handleChange("mainImage", newImageUrl);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleDeleteImage = (): void => {
    // api 데이터 업데이트 코드 추가 예정
    setImage("");
    handleChange("mainImage", "");
    setShowModal(false);
  };

  const handleCloseModal = (): void => {
    setShowModal(false);
  };

  return (
    <>
      <div className="size-full cursor-pointer" onClick={handleMainImageClick}>
        {image ? (
          <img src={image} className="rounded-[5px] size-full object-cover" />
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

export default ImageUpload;
