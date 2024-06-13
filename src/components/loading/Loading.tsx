import React from "react";
import { BeatLoader } from "react-spinners";

const Loading: React.FC = () => {
  return (
    <div>
      <BeatLoader size={10} />
    </div>
  );
};

export default Loading;
