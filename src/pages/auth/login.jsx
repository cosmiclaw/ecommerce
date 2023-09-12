import "./auth.css";

import * as React from "react";

import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "@firebase/auth";

import { Button, Input } from "@components";
import { auth } from "@fbase";

export function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");

  const handleRegisterUser = (e) => {
    e.preventDefault();

    setLoading(true);
    signInWithEmailAndPassword(auth, email, pass)
      .then((_userCredential) => {
        navigate("/");
      })
      .catch((error) => {
        alert("Failed to Login: " + error.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <form onSubmit={handleRegisterUser} className="auth-container">
      <h2>Login</h2>
      <p>Please provide your account credentials to login!</p>

      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        type="email"
        required
      />
      <Input
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="Password"
        type="password"
        required
      />

      <Button loading={loading} disabled={loading} type="submit" gradient>
        LOG IN
      </Button>

      <p className="auth-link-text">
        Don't have an Account? <Link to="/signup">Register</Link>
      </p>
    </form>
  );
}
