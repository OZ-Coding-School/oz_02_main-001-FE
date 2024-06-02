import { useEffect, useState } from "react";

interface CardProps {
  image?: File;
  width?: number;
  height?: number;
  rounded?: number;
}

const Card: React.FC = ({ image, width = 110, height = 110, rounded = 5 }: CardProps) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (image) {
      const url = URL.createObjectURL(image);
      setImageUrl(url);
    }
  }, [image]);

  const roundedStyle = {
    borderRadius: `${rounded}px`,
  };

  return (
    <div
      className="overflow-hidden bg-gray-100"
      style={{ width: `${width}px`, height: `${height}px`, ...roundedStyle }}
    >
      {imageUrl ? (
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <span>이미지 없음</span>
        </div>
      )}
    </div>
  );
};

export default Card;
