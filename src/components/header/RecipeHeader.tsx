import React from "react";
import BackButton from "./BackButton";
import { useNavigate, useParams } from "react-router-dom";
import { RiShare2Line } from "react-icons/ri";
import MoreButton from "@components/buttons/MoreButton";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchData } from "./../../api/axios";
import { apiRoutes } from "./../../api/apiRoutes";

interface RecipeHeaderProps {
  userId: number;
  canUpdate: number | undefined;
}

/**
 * RecipePage에서 사용되는 Header입니다.
 * @returns
 */
const RecipeHeader: React.FC<RecipeHeaderProps> = ({ userId, canUpdate }) => {
  const queryClient = useQueryClient();
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  const { mutate } = useMutation({
    mutationFn: () => fetchData("DELETE", `${apiRoutes.recipes}/${recipeId}`),
    onSuccess: (data) => console.log(data),
    onError: (error) => console.log(error),
  });

  const handleDeleteModal = () => {
    mutate();
    navigate(`/profile/0`);
  };

  const handleEditModal = () => {};
  return (
    <div className="flex justify-between items-center h-[50px] sticky top-0 bg-white z-[10] border-b-[1px]">
      <BackButton handleClick={handleClick} />
      <div className="flex ">
        <div className="flex justify-center items-center w-[40px] h-[50px] cursor-pointer">
          <RiShare2Line className="w-[24px] h-[24px]" />
        </div>
        {canUpdate !== 0 && (
          <div className="flex items-center">
            <MoreButton handleDeleteModal={handleDeleteModal} handleEditModal={handleEditModal} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeHeader;
