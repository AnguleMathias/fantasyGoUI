import React from "react";
import Header from "../organisms/Headers";

const MainTemplate = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const isLoggedIn = !!sessionStorage.getItem("token"); // Check if there is a token in the sessionStorage

  //TODO: check if token has expored then logout

  return (
    <div>
      {isLoggedIn && <Header />}
      <main className="px-2">{children}</main>
    </div>
  );
};

export default MainTemplate;
