import Footer from "@components/footer/Footer";
import AccountHeader from "@components/header/AccountHeader";
import React, { useEffect, useState } from "react";
import noProfile from "@assets/images/noProfile.png";
import { AiOutlineEdit } from "react-icons/ai";
import recipeImg from "@assets/images/recipe.png";
import { MdOutlineDone } from "react-icons/md";
import ProceedModal from "@components/modal/ProceedModal";
import { AccountDataType } from "src/types/accountRecipeType";
import PostsList from "../components/PostsList";

const accountData: AccountDataType = {
  image: noProfile,
  nickname: "1012번째 냉장고",
  cnt: 17,
  recipes: [
    { id: 1, recipeImage: recipeImg },
    { id: 2, recipeImage: recipeImg },
    { id: 3, recipeImage: recipeImg },
    { id: 4, recipeImage: recipeImg },
    { id: 5, recipeImage: recipeImg },
    { id: 6, recipeImage: recipeImg },
    { id: 7, recipeImage: recipeImg },
    { id: 8, recipeImage: recipeImg },
    { id: 9, recipeImage: recipeImg },
    { id: 10, recipeImage: recipeImg },
    { id: 11, recipeImage: recipeImg },
    { id: 12, recipeImage: recipeImg },
    { id: 13, recipeImage: recipeImg },
    { id: 14, recipeImage: recipeImg },
    { id: 15, recipeImage: recipeImg },
    { id: 16, recipeImage: recipeImg },
    { id: 17, recipeImage: recipeImg },
  ],
};

const MyPage: React.FC = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [userNickname, setUserNickname] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [image, setImage] = useState<string>(accountData.image);

  useEffect(() => {
    // api get으로 데이터 받아올 예정
    setUserNickname(accountData.nickname);
  }, []);

  const handleEditNicknameClick = () => {
    setIsEdit(!isEdit);
  };

  const handleSave = (): void => {
    if (userNickname.length < 2) {
      alert("닉네임은 2글자 이상이어야 합니다.");
      return;
    }
    // api 연동 - 이름 중복 검사도 백엔드에서 진행할 예정
    console.log(userNickname.length);
    setUserNickname(userNickname);
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
    <div>
      <AccountHeader />
      <div className="flex ml-[6%] mr-[2%] items-center my-10">
        <div className="flex gap-[20px] ">
          <div>
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
          </div>
          <div className="flex flex-col justify-center gap-y-1">
            <h2 className="text-[19px] font-semibold flex flex-row gap-[10px]">
              {isEdit ? (
                <>
                  <input
                    type="text"
                    className="border border-gray-400 rounded-[6px] px-[10px] py-[1px] w-[180px]"
                    value={userNickname}
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
                  {userNickname}{" "}
                  <AiOutlineEdit
                    color="#F78181"
                    className="cursor-pointer"
                    size={24}
                    onClick={handleEditNicknameClick}
                  />
                </>
              )}
            </h2>
            <p className="text-[15px] text-gray-400">
              게시물 <span className="text-redPink">{accountData.cnt}</span>
            </p>
          </div>
        </div>
      </div>
      {showModal && (
        <ProceedModal
          proceedQuestionText="이미지를 삭제 하시겠습니까?"
          handleLeftClick={handleDeleteImage}
          handleRightClick={handleCloseModal}
        />
      )}
      <PostsList
        whoProfile="user"
        postsCount={accountData.cnt}
        linkTo="/recipeRegistration"
        buttonText="첫 레시피 등록하기"
        postsRecipeList={accountData.recipes}
      />

      <Footer page="account" />
    </div>
  );
};

export default MyPage;
