import React from "react";

interface ButtonProps {
  onClick: () => void;
  label: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, label, disabled }) => {
  return (
    <button
      className={`${
        disabled
          ? "bg-pink-300 cursor-not-allowed "
          : "bg-red-500 hover:bg-red-400"
      } text-white font-bold py-2 px-4 rounded`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
