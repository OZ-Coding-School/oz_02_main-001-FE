import React from "react";
import { SyncLoader } from "react-spinners";

const Loading: React.FC = () => {
  return <SyncLoader size={12} color="red" />;
};

export default Loading;
