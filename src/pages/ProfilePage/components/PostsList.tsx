import BigButton from "@components/buttons/BigButton";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

interface PostsListProps {
  whoProfile: string;
  postsCount: number;
  linkTo?: string;
  buttonText: string;
  postsRecipeList: RecipesType[];
}

const PostsList: React.FC<PostsListProps> = ({
  whoProfile,
  postsCount,
  linkTo,
  buttonText,
  postsRecipeList,
}) => {
  const navigate = useNavigate();

  const handleRecipeItemClick = (recipeItemId: number): void => {
    navigate(`/recipe/${recipeItemId}`);
  };
  return (
    <>
      {postsCount === 0 ? (
        <>
          <div
            className="flex justify-center items-center"
            style={{ height: "calc(100vh - 300px)" }}
          >
            {whoProfile === "user" ? (
              <>
                <Link to={`${linkTo}`} className="w-full flex justify-center">
                  <BigButton buttonText={buttonText} />
                </Link>
              </>
            ) : (
              <>
                <div className="w-full flex justify-center">
                  <BigButton buttonText={buttonText} disabled={true} />
                </div>
              </>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-[1px] p-3">
            {postsRecipeList.map((recipeItem, index) => (
              <div
                onClick={() => handleRecipeItemClick(recipeItem.id)}
                key={index}
                className="w-full cursor-pointer relative border rounded-[6px] border-gray-200 aspect-square"
              >
                <img
                  loading="lazy"
                  src={recipeItem.mainImage}
                  alt="레시피 완성 이미지"
                  className="rounded-[6px] size-full object-cover"
                />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default PostsList;
