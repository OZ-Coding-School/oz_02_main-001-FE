import Footer from "@components/footer/Footer";
import AccountHeader from "@components/header/AccountHeader";
import React, { useEffect, useState } from "react";
import noProfile from "@assets/images/noProfile.png";
import BigButton from "@components/buttons/BigButton";
import { AiOutlineEdit } from "react-icons/ai";
import recipeImg from "@assets/images/recipe.png";
import { Link } from "react-router-dom";
import { MdOutlineDone } from "react-icons/md";
import ProceedModal from "@components/modal/ProceedModal";

type RecipesType = {
  id: number;
  recipeImage: string;
};

type AccountDataType = {
  image: string;
  nickname: string;
  cnt: number;
  recipes: RecipesType[];
};

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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setUserNickname(event.target.value);
  };

  const handleSave = (): void => {
    // api put으로 수정할 예정
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
      <div className="flex ml-[40px] items-center my-10">
        <div className="flex gap-[30px]">
          <img
            src={image}
            alt="프로필 이미지"
            className="w-[100px] h-[100px] mx-auto rounded-full cursor-pointer"
            onClick={handleProfileClick}
          />
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <div className="flex flex-col justify-center gap-y-1">
            <h2 className="text-[23px] font-semibold flex flex-row gap-[10px]">
              {isEdit ? (
                <>
                  <input
                    type="text"
                    className="border border-gray-400 rounded-[6px] pl-[10px] py-[3px] "
                    value={userNickname}
                    placeholder="닉네임을 입력해주세요."
                    onChange={handleInputChange}
                    maxLength={16}
                  />
                  <MdOutlineDone
                    color="#F78181"
                    size={32}
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
                    size={32}
                    onClick={handleEditNicknameClick}
                  />
                </>
              )}
            </h2>
            <p className="text-[15px] text-gray-400">게시물 {accountData.cnt}</p>
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
      {accountData.cnt === 0 ? (
        <>
          <div
            className="flex justify-center items-center"
            style={{ height: "calc(100vh - 300px)" }}
          >
            <Link to="/recipeRegistration" className="w-full flex justify-center">
              <BigButton buttonText="첫 레시피 등록하기" />
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-[1px] p-5 mb-[50px]">
            {accountData.recipes.map((recipeItem, index) => (
              <Link
                to={`/recipe/:${recipeItem.id}`}
                key={index}
                className="w-full h-[150.66px] rounded-[6px] border border-gray-200 cursor-pointer"
              >
                <img
                  src={recipeItem.recipeImage}
                  alt="레시피 완성 이미지"
                  className=" rounded-[6px] w-full h-full object-cover"
                />
              </Link>
            ))}
          </div>
        </>
      )}
      <Footer page="account" />
    </div>
  );
};

export default MyPage;
