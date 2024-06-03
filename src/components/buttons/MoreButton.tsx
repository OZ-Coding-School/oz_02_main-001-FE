import React from "react";
import { MdOutlineMoreHoriz } from "react-icons/md";

/**
 * 메세지 수정 or 삭제 관련하여 선택할 수 있는 더보기 버튼입니다.
 * 레시피 페이지와 댓글에서 사용되기 때문에 buttons로 분류하였습니다.
 * @returns
 */
const MoreButton: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-[40px] h-[50px]">
      <MdOutlineMoreHoriz className="w-[24px] h-[24px]" />
    </div>
  );
};

export default MoreButton;
