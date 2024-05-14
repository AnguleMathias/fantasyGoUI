import React from "react";
import Button from "../atoms/Button";

interface ErrorPageProps {
  message?: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ message }) => {
  const defaultErrorMessage =
    "An error has occurred. Please reload the page. If the problem persists, contact the site administrator.";

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-lg text-red-600 mb-4">
        {message || defaultErrorMessage}
      </p>
      <Button label="Reload Page" onClick={() => window.location.reload()} />
    </div>
  );
};

export default ErrorPage;
