import React, { useState } from "react";
import noProfile from "@assets/images/noProfile.png";
import { MdOutlineDone } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import ProceedModal from "@components/modal/ProceedModal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchData } from "../../../api/axios";
import { apiRoutes } from "../../../api/apiRoutes";

interface ProfileSectionProps {
  name: string;
  postsCount: number;
  userId: string | undefined;
  profileImage: string;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  name,
  userId,
  postsCount,
  profileImage,
}) => {
  const [userName, setUserName] = useState<string>(name);
  const prevName = name;
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [image, setImage] = useState<string>(profileImage);
  const queryClient = useQueryClient();

  const handleEditNicknameClick = () => {
    setIsEdit(!isEdit);
  };

  const mutationUpdateProfileImage = useMutation({
    mutationFn: (newImage: string) => {
      return fetchData("POST", apiRoutes.updateUserImg, { image: newImage });
    },
    onError: () => {
      alert("프로필 사진 저장 중 오류가 발생했습니다.");
    },
    onSuccess: () => {
      alert("프로필 이미지가 성공적으로 업데이트되었습니다.");
      queryClient.invalidateQueries();
      setShowModal(false);
    },
  });

  const handleProfileClick = () => {
    if (image === noProfile) {
      document.getElementById("fileInput")?.click();
    } else {
      setShowModal(true);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newImage = e.target?.result as string;
        setImage(newImage);
        mutationUpdateProfileImage.mutate(newImage);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
    event.target.value = "";
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const value = event.target.value;
    const regexValue = value.replace(/[^a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ\s]/g, "");
    const spaceLimitedValue = regexValue.replace(/\s{2,}/g, " ");
    const validValue = spaceLimitedValue.split(/\s+/).slice(0, 3).join(" ");
    setUserName(validValue);
  };

  const handleSave = (): void => {
    if (userName.length < 3) {
      alert("닉네임은 3글자 이상이어야 합니다.");
      return;
    }
    if (prevName !== userName) {
      mutationUpdateName.mutate(userName);
    }
    setIsEdit(false);
  };

  const mutationUpdateName = useMutation({
    mutationFn: (newName: string) => {
      return fetchData("PUT", apiRoutes.updateUserName, { nickname: newName });
    },
    onError: () => {
      alert("중복된 닉네임 입니다.");
    },
    onSuccess: () => {
      alert("닉네임이 성공적으로 업데이트되었습니다.");
      queryClient.invalidateQueries();
      setIsEdit(false);
    },
  });

  const handleDeleteImage = (): void => {
    mutationUpdateProfileImage.mutate("");
    setImage(noProfile);
    setShowModal(false);
  };

  const handleCloseModal = (): void => {
    setShowModal(false);
  };

  console.log(image);

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
                    value={userName}
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
