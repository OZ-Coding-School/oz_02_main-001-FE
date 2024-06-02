import React, { useState } from "react";
import axios from "axios";

interface ImgUploadProps {
  onUploadSuccess: (imgageUrl: string) => void;
}

const ImgUpload: React.FC<ImgUploadProps> = ({ onUploadSuccess }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("image", selectedFile);

        const response = await axios.post("/api/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        onUploadSuccess(response.data.imageUrl);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}></button>
    </div>
  );
};

export default ImgUpload;
