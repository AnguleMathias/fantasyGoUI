import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import LoginPage from "./components/pages/LoginPage";
import NotFound from "./components/pages/NotFound";
import PlayersPage from "./components/pages/PlayersPage";

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = sessionStorage.getItem("token");

  // Check if the token is present in the session storage
  if (!token) {
    // Redirect to the login page if the token is not present
    return <Navigate to="/" replace />;
  }

  // If token exists, render the children components (protected page)
  return children;
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/players"
          element={
            <ProtectedRoute>
              <PlayersPage />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
