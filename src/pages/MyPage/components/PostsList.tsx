import BigButton from "@components/buttons/BigButton";
import React from "react";
import { Link } from "react-router-dom";
import { RecipesType } from "src/types/accountRecipeType";

interface PostsListProps {
  postsCount: number;
  linkTo?: string;
  buttonText: string;
  postsRecipeList: RecipesType[];
}

const PostsList: React.FC<PostsListProps> = ({
  postsCount,
  linkTo,
  buttonText,
  postsRecipeList,
}) => {
  return (
    <>
      {postsCount === 0 ? (
        <>
          <div
            className="flex justify-center items-center"
            style={{ height: "calc(100vh - 300px)" }}
          >
            <Link to={`${linkTo}`} className="w-full flex justify-center">
              <BigButton buttonText={buttonText} />
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-[1px] p-3 mb-[50px]">
            {postsRecipeList.map((recipeItem, index) => (
              <Link
                to={`/recipe/:${recipeItem.id}`}
                key={index}
                className="w-full h-[150.66px] rounded-[6px] border border-gray-200 cursor-pointer"
              >
                <img
                  src={recipeItem.recipeImage}
                  alt="레시피 완성 이미지"
                  className=" rounded-[6px] w-full h-full"
                />
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default PostsList;
