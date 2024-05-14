import React, { FC } from "react";

const NotFound: FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">404 Not Found</h1>
        <p className="text-lg text-gray-700">
          The page you are looking for could not be found.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
