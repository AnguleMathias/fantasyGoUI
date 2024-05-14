import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { useGetTokenQuery } from "../../generated/graphql";

const LoginForm: React.FC = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { data } = useGetTokenQuery({
    variables: {
      mobileNumber,
      password,
    },
  });

  const handleLogin = async () => {
    if (!data) {
      return;
    }

    try {
      await data;

      if (!data?.getToken) {
        return;
      }

      sessionStorage.setItem("token", data.getToken);

      navigate("/players");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen lg:bg-gray-100 md:bg-gray-100">
      <div className="flex flex-col space-y-4 p-8 bg-white lg:rounded-lg md:rounded-lg lg:shadow-md md:shadow-md w-full max-w-sm">
        <img
          className="absolute top-0 left-0 ml-4 mt-4"
          src="/logo-dark.svg"
          alt="FantasyGo"
        />
        <h1 className="text-center text-2xl font-bold">Login</h1>
        <Input
          label="Mobile number"
          type="number"
          placeholder="Enter your mobile number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          onClick={handleLogin}
          label="Login"
          disabled={mobileNumber === "" || password === ""}
        />
      </div>
    </div>
  );
};

export default LoginForm;
