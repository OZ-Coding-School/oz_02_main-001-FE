import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { apiRoutes } from "../../api/apiRoutes";
import { fetchData } from "../../api/axios";

interface ScrapProps {
  queryKey: string;
  recipe: number;
  book: number;
  status: number;
}

const Scrap: React.FC<ScrapProps> = ({ queryKey, recipe, book, status }) => {
  const queryClient = useQueryClient();
  const handleScrap = (event: React.MouseEvent) => {
    event.stopPropagation();
    mutationBook.mutate();
  };

  const fetchBook = async (): Promise<BookmarkType> => {
    //bookmarks
    return await fetchData<BookmarkType>("POST", apiRoutes.bookmarks, {
      recipe: recipe,
    });
  };

  const mutationBook = useMutation<LikeType>({
    mutationFn: fetchBook,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKey],
      });
    },
  });

  return (
    <div className="flex items-center">
      <button
        className={`rounded-full focus:outline-none transition-colors text-leafGreen`}
        onClick={handleScrap}
      >
        <svg
          className="w-6 h-6"
          fill={status > 0 ? "currentColor" : "none"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v18l-7-3.5L5 23V5z" />
        </svg>
      </button>
      <span className="ml-1 text-[#000000]/50">{book}</span>
    </div>
  );
};

export default Scrap;
