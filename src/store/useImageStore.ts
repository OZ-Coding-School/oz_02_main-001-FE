import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Storage } from "./../utils/Storage";

interface ImageUploadType {
  image: string;
  action?: string;
  recipe?: number;
  type: string;
  order: number;
}

interface ImageStore {
  mainImage: ImageUploadType;
  setMainImage: (newData: ImageUploadType) => void;
  stepImage: ImageUploadType[];
  setStepImage: (newData: ImageUploadType[]) => void;
}

const useImageStore = create<ImageStore>()(
  persist(
    (set) => ({
      mainImage: {
        action: "write",
        type: "main",
        order: 1,
        image: "",
      },
      setMainImage: (newData) => set({ mainImage: newData }),
      stepImage: [
        {
          action: "write",
          type: "step",
          order: 1,
          image: "",
        },
      ],
      setStepImage: (newData) => set({ stepImage: newData }),
    }),
    {
      name: "image-storage",
    },
  ),
);

const getStoredImageState = (): { mainImage: ImageUploadType; stepImage: ImageUploadType[] } => {
  const storedDataString = Storage.get("image-storage");
  const storedData = storedDataString ? JSON.parse(storedDataString) : null;

  if (storedData && storedData.state) {
    const { mainImage, stepImage } = storedData.state;
    return { mainImage, stepImage };
  }

  return {
    mainImage: {
      action: "write",
      type: "main",
      order: 1,
      image: "",
    },
    stepImage: [
      {
        action: "write",
        type: "step",
        order: 1,
        image: "",
      },
    ],
  };
};

export { useImageStore, getStoredImageState };
