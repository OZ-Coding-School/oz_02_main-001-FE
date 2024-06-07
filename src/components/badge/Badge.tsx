import React from "react";
import { PiForkKnifeLight, PiBookOpenLight, PiBirdLight, PiHamburgerLight } from "react-icons/pi";

export type BadgeType = "forkKnife" | "step" | "story" | "hamburger";

interface BadgeProps {
  type: BadgeType;
}

const Badge: React.FC<BadgeProps> = ({ type }) => {
  let IconComponent;

  if (type === "forkKnife") {
    IconComponent = PiForkKnifeLight;
  } else if (type === "step") {
    IconComponent = PiBookOpenLight;
  } else if (type === "story") {
    IconComponent = PiBirdLight;
  } else if (type === "hamburger") {
    IconComponent = PiHamburgerLight;
  }

  return (
    <div className="flex justify-center items-center rounded-[10px] w-[40px] h-[40px] bg-lightBeige">
      {IconComponent && <IconComponent className="w-[32px] h-[32px] text-oliveGray" />}
    </div>
  );
};

export default Badge;
