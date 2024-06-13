import React from "react";
import { PiBellBold, PiBellFill } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../api/axios";
import { apiRoutes } from "../../api/apiRoutes";

interface BellPropsType {
  onClick?: () => void;
}

const Bell: React.FC<BellPropsType> = ({ onClick }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/notice");
  };

  const fetchAlertsStatus = async (): Promise<FetchAlertsStatusType> => {
    return await fetchData<FetchAlertsStatusType>("GET", apiRoutes.alertsStatus);
  };

  const { data, error } = useQuery({
    queryKey: ["alertStatus"],
    queryFn: fetchAlertsStatus,
  });
  if (error) {
    console.log(error);
  }

  const isNoticePage = pathname === "/notice";

  return (
    <div
      className="flex justify-center items-center w-[50px] h-[50px] relative cursor-pointer"
      onClick={isNoticePage ? onClick : handleClick}
    >
      {isNoticePage ? (
        data ? (
          <PiBellFill className="w-[24px] h-[24px] text-redPink" />
        ) : (
          <PiBellBold className="w-[24px] h-[24px]" />
        )
      ) : (
        <>
          <PiBellBold className="w-[24px] h-[24px]" />
          {data && <GoDotFill className="absolute top-1 right-2 text-redPink w-6 h-6" />}
        </>
      )}
    </div>
  );
};

export default Bell;
