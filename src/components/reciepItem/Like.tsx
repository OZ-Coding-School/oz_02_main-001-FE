import React, { useEffect, useState } from "react";

interface LikeProps {
  recipeId?: number;
}

const Like: React.FC<LikeProps> = ({ recipeId }) => {
  const [likeState, setLikeState] = useState<{ likes: number; isLiked: boolean }>({
    likes: 0,
    isLiked: false,
  });

  useEffect(() => {
    async function fetchLikes() {
      try {
        const response = await fetch(`/api/v1/recipes/${recipeId}/likes`);
        const data = await response.json();
        setLikeState(data);
      } catch (error) {
        console.error("좋아요 수 불러오기", error);
      }
    }
    {
      /* api 호출 중 발생할 수 있는 에러 처리 */
    }
    fetchLikes();
  }, [recipeId]);

  const handleLike = async () => {
    try {
      const response = await fetch(
        `/api/v1/recipes/${recipeId}/${likeState.isLiked ? "unlike" : "like"}`,
        {
          method: "POST",
        },
      );
      const data = await response.json();
      setLikeState(data);
    } catch (error) {
      console.error("좋아요 처리 실패", error);
    }
  };

  return (
    <div className="flex items-center">
      <button
        className={`focus:outline-none transition-colors ${
          likeState.isLiked ? "bg-white text-redPink" : "bg-white text-redPink"
        }`}
        onClick={handleLike}
      >
        <svg
          className="w-6 h-6"
          fill={likeState.isLiked ? "currentColor" : "none"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </button>
      <span className="ml-1 text-[#000000]/50">{likeState.likes}</span>
    </div>
  );
};

export default Like;
