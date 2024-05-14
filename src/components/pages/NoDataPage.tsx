import React, { FC } from "react";

const NoData: FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-xl font-semibold text-red-600 mb-4">
          No data available
        </h1>
        <p className="text-gray-600">
          Please check back later or contact support.
        </p>
      </div>
    </div>
  );
};

export default NoData;
