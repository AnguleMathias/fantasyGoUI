import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token"); // Remove the token from storage
    navigate("/"); // Redirect to the login page
  };

  return (
    <header className="bg-red-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">FantasyGo</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/players" className="hover:text-red-950">
                Players
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="text-white hover:text-red-950"
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
