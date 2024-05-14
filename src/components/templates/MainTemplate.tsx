import React from "react";
import Header from "../organisms/Headers";

const MainTemplate = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const isLoggedIn = !!sessionStorage.getItem("token"); // Check if there is a token in the sessionStorage

  return (
    <div>
      {isLoggedIn && <Header />}
      <main>{children}</main>
    </div>
  );
};

export default MainTemplate;
