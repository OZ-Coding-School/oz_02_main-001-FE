import React from "react";

interface ModalProps {
  proceedQuestionText: string;
  handleRightClick: () => void;
  handleLeftClick: () => void;
}

const ProceedModal: React.FC<ModalProps> = ({
  proceedQuestionText,
  handleLeftClick,
  handleRightClick,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[100]">
      <div
        className="bg-white p-8 shadow-lg rounded-[4px] w-72 border border-[#C2C2C2]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 text-md text-center">
          <span>{proceedQuestionText}</span>
        </div>

        <div className="flex justify-center gap-7">
          <button
            className="px-4 py-2 bg-gray-200 rounded-[6px] hover:bg-gray-300 w-20 text-md"
            onClick={handleLeftClick}
          >
            예
          </button>
          <button
            className="px-4 py-2 bg-gray-200 rounded-[6px] hover:bg-gray-300 w-20 text-md"
            onClick={handleRightClick}
          >
            아니요
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProceedModal;
