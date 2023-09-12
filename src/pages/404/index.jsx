import "./404.css";

import * as React from "react";

import { Button } from "@components";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="nf-container">
      <h1 className="oops">Oops!</h1>
      <h3 className="nf-text">404 - Sorry Page Not Found</h3>
      <p>The Page you are looking for might have been removed</p>
      <p>had its name changed or is temporarly unavailable.</p>
      <Link className="nf-back-btn" to="/">
        <Button gradient>Back To Home</Button>
      </Link>
    </div>
  );
}
