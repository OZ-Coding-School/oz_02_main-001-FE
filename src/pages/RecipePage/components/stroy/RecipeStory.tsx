import React from "react";
import BadgeTitle from "../title/BadgeTitle";

interface RecipeStoryProps {
  story: string;
}

const RecipeStory: React.FC<RecipeStoryProps> = ({ story }) => {
  return (
    <div className="grid gap-5 pt-5 border-t">
      <BadgeTitle type="story" title="뚝딱 이야기" />
      {story}
    </div>
  );
};

export default RecipeStory;
