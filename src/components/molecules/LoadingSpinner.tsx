import React, { FC } from "react";

const LoadingSpinner: FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-10 h-10 border-4 border-gray-200 rounded-full border-t-red-500 animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
