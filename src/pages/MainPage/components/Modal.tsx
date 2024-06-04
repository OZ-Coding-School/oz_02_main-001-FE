import React from "react";
import { useNavigate } from "react-router";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (name: string, gender: string, age: string) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [age, setAge] = React.useState("");
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(name, gender, age);
    navigate("/");
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
        <h2 className="text-xl mb-4">정보 입력</h2>
        <div className="mb-4">
          <label className="block mb-1">이름:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">성별:</label>
          <input
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">나이:</label>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div className="flex justify-end">
          <button onClick={onClose} className="mr-4 p-2 bg-gray-200 rounded">
            취소
          </button>
          <button onClick={handleSubmit} className="p-2 bg-redPink text-white rounded">
            제출
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
