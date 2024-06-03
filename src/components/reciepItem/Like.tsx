import React, { useState } from "react";

interface LikeProps {
  id?: number;
  likes: number;
  likeStatus: number;
}

const dummyData: LikeProps = {
  id: 1,
  likes: 10,
  likeStatus: -1,
};

const Like: React.FC<LikeProps> = ({ id, likes, likeStatus }) => {
  const [likeState, setLikeState] = useState<{ likes: number; isLiked: boolean }>({
    likes: dummyData.likes,
    isLiked: dummyData.likeStatus === 1,
  });

  const handleLike = () => {
    setLikeState((prevState) => ({
      likes: prevState.isLiked ? prevState.likes - 1 : prevState.likes + 1,
      isLiked: !prevState.isLiked,
    }));
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
