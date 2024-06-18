import React, { useState } from "react";
import BackButton from "./BackButton";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { RiShare2Line } from "react-icons/ri";
import MoreButton from "@components/buttons/MoreButton";
import { useMutation } from "@tanstack/react-query";
import { fetchData } from "./../../api/axios";
import { apiRoutes } from "./../../api/apiRoutes";

interface RecipeHeaderProps {
  canUpdate: number | undefined;
}

/**
 * RecipePage에서 사용되는 Header입니다.
 * @returns
 */
const RecipeHeader: React.FC<RecipeHeaderProps> = ({ canUpdate }) => {
  const { pathname } = useLocation();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  const { mutate } = useMutation({
    mutationFn: () => fetchData("DELETE", `${apiRoutes.recipes}/${recipeId}`),
    onSuccess: () => navigate(`/profile/0`),
    onError: (error) => console.log(error),
  });

  const handleDeleteModal = () => {
    mutate();
  };

  const handleEditModal = () => {
    setIsModalOpen(false);
  };

  const handleShareClick = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("클립보드에 링크가 복사되었습니다!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-between items-center h-[50px] sticky top-0 bg-white z-[10] border-b-[1px]">
      <BackButton handleClick={handleClick} />
      <div className="flex ">
        <div
          className="flex justify-center items-center w-[40px] h-[50px] cursor-pointer"
          onClick={() => handleShareClick(`http://localhost:5173${pathname}`)}
        >
          <RiShare2Line className="w-[24px] h-[24px]" />
        </div>
        {canUpdate !== 0 && (
          <div className="flex items-center">
            <MoreButton
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              handleDeleteModal={handleDeleteModal}
              handleEditModal={handleEditModal}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeHeader;
