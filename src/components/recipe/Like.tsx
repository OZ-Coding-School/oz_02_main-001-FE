import React from "react";
import { apiRoutes } from "../../api/apiRoutes";
import { fetchData } from "../../api/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface LikeProps {
  queryKey: string;
  recipe: number;
  status: number;
  like: number;
}

const Like: React.FC<LikeProps> = ({ queryKey, recipe, status, like }) => {
  const queryClient = useQueryClient();

  const handleLike = (event: React.MouseEvent) => {
    event.stopPropagation();
    mutationLike.mutate();
  };

  const mutationLike = useMutation<FetchLikeType, Error>({
    mutationFn: () =>
      fetchData<FetchLikeType, LikeType>("POST", apiRoutes.likes, {
        recipe: recipe,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey] });
    },
  });

  return (
    <div className="flex items-center">
      <button className={`focus:outline-none transition-colors text-redPink`} onClick={handleLike}>
        <svg
          className="w-6 h-6"
          fill={status > 0 ? "currentColor" : "none"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </button>
      <span className="ml-1 text-[#000000]/50">{like}</span>
    </div>
  );
};

export default Like;
