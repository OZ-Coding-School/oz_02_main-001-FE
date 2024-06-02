import sample from "@assets/sample.png";

interface CardProps {
  imageUrl?: string;
  width?: number;
  height?: number;
  rounded?: number;
}

const Card = ({ imageUrl = sample, width = 110, height = 110, rounded = 0 }: CardProps) => {
  const roundedStyle = {
    borderRadius: `${rounded}px`,
  };

  return (
    <div
      className="overflow-hidden bg-gray-100"
      style={{ width: `${width}px`, height: `${height}px`, ...roundedStyle }}
    >
      {imageUrl && (
        <div
          className="w-full h-[300px] bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      )}
    </div>
  );
};

export default Card;
