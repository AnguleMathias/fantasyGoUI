import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";

interface InputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type: "text" | "number" | "password";
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  value,
  onChange,
  placeholder,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateInput = (value: string) => {
    if (type === "number" && !(value.startsWith("0") && value.length === 10)) {
      setError("Please enter a valid mobile number");
    } else {
      setError("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    validateInput(e.target.value);
    onChange(e);
  };

  const getInputType = () => {
    if (type === "password") {
      return showPassword ? "text" : "password";
    }
    return type;
  };

  return (
    <div className="relative mb-4">
      <style>
        {`
          input[type='number']::-webkit-outer-spin-button,
          input[type='number']::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          input[type='number'] {
            -moz-appearance: textfield;
          }
        `}
      </style>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={label}
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={label}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            error ? "border-red-500" : ""
          }`}
          type={getInputType()}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          pattern={type === "number" ? "\\d*" : undefined}
          inputMode={type === "number" ? "numeric" : "text"}
        />
        {type === "password" && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
            onClick={handleTogglePasswordVisibility}
          >
            <FeatherIcon icon={showPassword ? "eye-off" : "eye"} size="20" />
          </button>
        )}
      </div>
      {error && <p className="text-red-500 text-xs italic mt-1">{error}</p>}
    </div>
  );
};

export default Input;
