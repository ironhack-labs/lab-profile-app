import React from "react";
import { Link } from "react-router-dom";
import { useUser, useUserLogout } from "../lib/authService";

const Header = () => {
  const user = useUser();
  const handleLogout = useUserLogout();

  return (
    <div>
      {user && (
        <div>
          <h1>Welcome {user.username}</h1>
          <Link to="/" onClick={handleLogout}>
            Logout
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
