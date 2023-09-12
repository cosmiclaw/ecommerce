import "./auth.css";

import * as React from "react";

import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "@firebase/auth";

import { Button, Input } from "@components";
import { auth } from "@fbase";

export function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] = React.useState(false);
  const [name, setName] = React.useState("");
  const [URL, setURL] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");

  const handleRegisterUser = (e) => {
    e.preventDefault();

    setLoading(true);
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        updateProfile(userCredential.user, {
          displayName: name,
          photoURL: URL.length ? URL : "/assets/profile.jpg",
        })
          .then(() => {
            setLoading(false);
            navigate("/");
          })
          .catch((error) => {
            setLoading(false);
            alert("Failed To Create New User: " + error.message);
          });
      })
      .catch((error) => {
        setLoading(false);
        alert("Failed To Create New User: " + error.message);
      });
  };

  return (
    <form onSubmit={handleRegisterUser} className="auth-container">
      <h2>Register</h2>
      <p>Please fill the details to signup!</p>

      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Display Name"
        required
      />
      <Input
        value={URL}
        onChange={(e) => setURL(e.target.value)}
        placeholder="Photo URL (optional)"
      />
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
        Register
      </Button>

      <p className="auth-link-text">
        Already have an Account? <Link to="/login">Login</Link>
      </p>
    </form>
  );
}
