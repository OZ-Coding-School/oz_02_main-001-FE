import React from "react";
import BackButton from "./BackButton";
import { useNavigate } from "react-router-dom";
import { RiShare2Line } from "react-icons/ri";
import MoreButton from "@components/buttons/MoreButton";

const RecipeHeader: React.FC = () => {
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
        <MoreButton />
      </div>
    </div>
  );
};

export default RecipeHeader;
