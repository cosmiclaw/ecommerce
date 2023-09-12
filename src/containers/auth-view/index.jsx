import "./auth-view.css";

import * as React from "react";

import { signOut } from "@firebase/auth";
import { Link, useNavigate } from "react-router-dom";

import { useUser } from "@context";
import { auth } from "@fbase";

export function AuthView({ setLoading }) {
  const navigate = useNavigate();

  const { user, setUser } = useUser();

  const handleLogOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser(null);
        navigate("/login");
      })
      .catch((error) => alert("Failed to Logout: " + error.message))
      .finally(() => setLoading(false));
  };

  return (
    <div className="user">
      <div className="user-row">
        <Link to="/">
          <img className="logo" width={150} src="/logo.svg" alt="Logo" />
        </Link>
        <div className="user-avatar">
          <h3>Welcome Back: "{user.displayName}"!</h3>
          <img src={user.photoURL} alt={user.displayName} />
          <Link to="/orders" className="orders-link">
            My Orders
          </Link>
          <span onClick={handleLogOut} className="logout">
            Sign Out
          </span>
        </div>
      </div>
    </div>
  );
}
