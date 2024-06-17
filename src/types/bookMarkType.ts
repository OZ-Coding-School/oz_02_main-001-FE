type BookmarkType = {
  recipe: number;
};

type FetchBookmarkType = {
  status: number;
  message: string;
  data: BookmarkType;
};
