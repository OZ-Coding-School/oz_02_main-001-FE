import React, { useState } from "react";
import noProfile from "@assets/images/noProfile.png";
import { MdOutlineDone } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import ProceedModal from "@components/modal/ProceedModal";

interface ProfileSectionProps {
  name: string;
  postsCount: number;
  userId: string | undefined;
  setUserNickname: React.Dispatch<React.SetStateAction<string>>;
  profileImage: string;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  name,
  setUserNickname,
  userId,
  postsCount,
  profileImage,
}) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [image, setImage] = useState<string>(profileImage);

  const handleEditNicknameClick = () => {
    setIsEdit(!isEdit);
  };

  const handleSave = (): void => {
    if (name.length < 2) {
      alert("닉네임은 2글자 이상이어야 합니다.");
      return;
    }
    // api 연동 - 이름 중복 검사도 백엔드에서 진행할 예정
    setUserNickname(name);
    setIsEdit(!isEdit);
  };

  const handleProfileClick = () => {
    if (image === noProfile) {
      document.getElementById("fileInput")?.click();
    } else {
      setShowModal(true);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // api 데이터 업데이트 코드 추가 예정
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result as string);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const value = event.target.value;
    // 숫자, 영문, 한글 외의 문자는 제거
    const validValue = value.replace(/[^a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ]/g, "");
    setUserNickname(validValue);
  };

  const handleDeleteImage = (): void => {
    // api 데이터 업데이트 코드 추가 예정
    setImage(noProfile);
    setShowModal(false);
  };

  const handleCloseModal = (): void => {
    setShowModal(false);
  };

  return (
    <>
      <div className="flex ml-[6%] mr-[2%] items-center pt-10 mb-16">
        <div className="flex gap-[20px] ">
          <div>
            {userId === "0" ? (
              <>
                <img
                  src={image}
                  alt="프로필 이미지"
                  className="w-[90px] h-[90px] mx-auto rounded-full cursor-pointer border border-gray-200"
                  onClick={handleProfileClick}
                />
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
              </>
            ) : (
              <>
                <img
                  src={image}
                  alt="프로필 이미지"
                  className="w-[90px] h-[90px] mx-auto rounded-full border border-gray-200"
                />
              </>
            )}
          </div>
          {showModal && (
            <ProceedModal
              proceedQuestionText="이미지를 삭제 하시겠습니까?"
              handleLeftClick={handleDeleteImage}
              handleRightClick={handleCloseModal}
            />
          )}
          <div className="flex flex-col justify-center gap-y-1">
            <h2 className="text-[19px] font-semibold flex flex-row gap-[10px]">
              {isEdit ? (
                <>
                  <input
                    type="text"
                    className="border border-gray-400 rounded-[6px] px-[10px] py-[1px] w-[180px]"
                    value={name}
                    placeholder="닉네임을 입력하세요."
                    onChange={handleInputChange}
                    maxLength={10}
                  />
                  <MdOutlineDone
                    color="#F78181"
                    size={28}
                    onClick={handleSave}
                    className="cursor-pointer"
                  />
                </>
              ) : (
                <>
                  {name}{" "}
                  {userId === "0" && (
                    <AiOutlineEdit
                      color="#F78181"
                      className="cursor-pointer"
                      size={24}
                      onClick={handleEditNicknameClick}
                    />
                  )}
                </>
              )}
            </h2>
            <p className="text-[15px] text-gray-400">
              게시물 <span className="text-redPink">{postsCount}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSection;
