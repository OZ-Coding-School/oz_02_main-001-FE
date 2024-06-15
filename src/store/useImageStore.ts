import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ImageStore {
  mainImage: imageUpload;
  setMainImage: (newData: imageUpload) => void;
  stepImage: imageUpload[];
  setStepImage: (newData: imageUpload[]) => void;
}

const useImageStore = create<ImageStore>(
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
  ) as (set: (fn: (state: ImageStore) => ImageStore) => void) => ImageStore,
);

const getStoredImageState = () => {
  // 로컬 스토리지의 문자열 형태의 데이터를 저장
  const storedDataString = localStorage.getItem("image-storage");
  // 문자열 형태의 데이터를 객체 형태로 변환
  const storedData = storedDataString && JSON.parse(storedDataString);

  if (storedData) {
    const storedMainImage = storedData.state.mainImage;
    const storedStepImage = storedData.state.stepImage;

    const mainImage = storedMainImage;
    const stepImage = storedStepImage;

    return { mainImage, stepImage };
  } else {
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
  }
};

export { useImageStore, getStoredImageState };
