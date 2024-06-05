import React from "react";
import Badge, { BadgeType } from "@components/badge/Badge";

interface BadgeTitleProps {
  type: BadgeType;
  title: string;
}

const BadgeTitle: React.FC<BadgeTitleProps> = ({ type, title }) => {
  return (
    <div className="flex items-center gap-3">
      <Badge type={type} />
      <span className="text-[1.2rem]">{title}</span>
    </div>
  );
};

export default BadgeTitle;
