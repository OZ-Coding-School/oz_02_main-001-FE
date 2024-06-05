import React from "react";
import FooterItem from "./FooterItem";

interface FooterProps {
  page: string;
}

const Footer: React.FC<FooterProps> = ({ page }) => {
  return (
    <div className="max-w-[500px] w-full fixed bottom-0 z-[10] shadow-[0px_-1px_8px_rgba(38,38,38,0.116)] ">
      <div className="flex justify-evenly items-center bg-white h-[55px]">
        <FooterItem page={page} title="main" moveTo="/" />
        <FooterItem page={page} title="refrigerator" moveTo="/refrigerator" />
        <FooterItem page={page} title="recipeRegistration" moveTo="/recipeRegistration" />
        <FooterItem page={page} title="bookmark" moveTo="/bookmark" />
        <FooterItem page={page} title="account" moveTo="/account" />
      </div>
    </div>
  );
};

export default Footer;
