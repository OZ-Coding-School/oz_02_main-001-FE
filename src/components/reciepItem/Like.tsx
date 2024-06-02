import React, { useState } from "react";

interface LikeProps {
  initialLikes?: number;
}

const Like: React.FC<LikeProps> = ({ initialLikes = 0 }) => {
  const [likes, setLikes] = useState<number>(initialLikes);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="flex items-center">
      <button
        className={`focus:outline-none transition-colors ${
          isLiked ? "bg-white text-redPink" : "bg-white text-redPink"
        }`}
        onClick={handleLike}
      >
        <svg
          className="w-6 h-6"
          fill={isLiked ? "currentColor" : "none"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </button>
      <span className="ml-1 text-[#000000]/50 ">{likes}</span>
    </div>
  );
};

export default Like;
