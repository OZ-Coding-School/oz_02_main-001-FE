import React from "react";
import BackButton from "./BackButton";
import { useNavigate } from "react-router-dom";
import { RiShare2Line } from "react-icons/ri";
import MoreButton from "@components/buttons/MoreButton";

interface RecipeHeaderProps {
  canUpdate: number;
}

/**
 * RecipePage에서 사용되는 Header입니다.
 * @returns
 */
const RecipeHeader: React.FC<RecipeHeaderProps> = ({ canUpdate }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <div className="flex justify-between items-center h-[50px] relative border-b-[1px]">
      <BackButton handleClick={handleClick} />
      <div className="flex">
        <div className="flex justify-center items-center w-[40px] h-[50px]">
          <RiShare2Line className="w-[24px] h-[24px]" />
        </div>
        {canUpdate && <MoreButton />}
      </div>
    </div>
  );
};

export default RecipeHeader;
