import React from "react";
import MainTemplate from "../templates/MainTemplate";
import LoginForm from "../molecules/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <MainTemplate>
      <LoginForm />
    </MainTemplate>
  );
};

export default LoginPage;
