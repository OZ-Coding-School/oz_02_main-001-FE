type ImageUploadType = {
  action?: string;
  recipe?: number;
  type: string;
  order: number;
  image: string;
};

type FetchImage = {
  message: string;
  status: number;
  data: {
    id: number;
    image: string;
  };
};
