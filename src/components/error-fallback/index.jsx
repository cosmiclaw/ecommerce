import "./error-fallback.css";

import * as React from "react";

import { Link } from "react-router-dom";

import { Button } from "@components";

export function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="fallback-container">
      <h1 className="fallback">Oops!</h1>
      <h3 className="fallback-text">500 - Something Went Wrong</h3>
      <p>{error.message}</p>
      <Link className="fallback-back-btn" to="/">
        <Button onClick={resetErrorBoundary} gradient>
          Retry Again
        </Button>
      </Link>
    </div>
  );
}
