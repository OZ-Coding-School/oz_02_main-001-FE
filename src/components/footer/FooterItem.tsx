import React from "react";
import { useNavigate } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { PiPlusSquareBold } from "react-icons/pi";
import { MdBookmarkBorder } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";

interface FooterItemProps {
  page: string;
  title: string;
  moveTo: string;
}

const FooterItem: React.FC<FooterItemProps> = ({ page, title, moveTo }) => {
  const navigate = useNavigate();
  const handleClick = (): void => {
    navigate(moveTo);
  };

  const isActive = page === title;
  let IconComponent;

  if (title === "main") {
    IconComponent = FiHome;
  } else if (title === "refrigerator") {
    IconComponent = CgSmartHomeRefrigerator;
  } else if (title === "recipeRegistration") {
    IconComponent = PiPlusSquareBold;
  } else if (title === "bookmark") {
    IconComponent = MdBookmarkBorder;
  } else if (title === "account") {
    IconComponent = AiOutlineUser;
  } else {
    IconComponent = null;
  }

  return (
    <div onClick={handleClick} className="flex justify-evenly items-center w-[50px] h-[50px]">
      {IconComponent && (
        <IconComponent
          className={`w-[24px] h-[24px] ${isActive ? "text-redPink" : "text-black"}`}
        />
      )}
    </div>
  );
};

export default FooterItem;
