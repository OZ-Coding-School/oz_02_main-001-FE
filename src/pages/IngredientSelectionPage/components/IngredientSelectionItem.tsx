import { PiHamburger } from "react-icons/pi";
import { useNavigate } from "react-router";
import { RefrigeratorType } from "src/types/refrigeratorType";

interface IngredientSelectionItemProps {
  refrigerator: RefrigeratorType;
}

const IngredientSelectionItem: React.FC<IngredientSelectionItemProps> = ({ refrigerator }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex items-center space-x-2 mt-4">
        <div className="bg-[#EBF6C1] rounded-lg w-8 h-8 flex justify-center items-center ml-6">
          <PiHamburger className="w-6 h-6" style={{ color: "#A2A38B" }} />
        </div>
        <span className="text-gray-400">{refrigerator.nickname}님의 냉장고</span>
      </div>
    </div>
  );
};

export default IngredientSelectionItem;
