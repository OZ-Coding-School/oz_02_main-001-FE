import React from "react";
import Label from "../Label";
import { useRecipeStore } from "@store/useRecipeStore";

const FourthStep: React.FC = () => {
  const { recipeData, setRecipeData } = useRecipeStore();

  const handleChange = (story: string) => {
    setRecipeData({ ...recipeData, story });
  };

  return (
    <div className="flex flex-col gap-3">
      <Label name="뚝딱 이야기" hasStart={false} />
      <textarea
        value={recipeData.story}
        className="resize-none p-2 border border-[#000000]/20 rounded-[5px] flex-grow h-[300px] focus:outline-none"
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default FourthStep;
