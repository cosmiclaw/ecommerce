import "./global.css";

import * as React from "react";

import { ErrorBoundary } from "react-error-boundary";
import { Routes, Route } from "react-router-dom";

import { PrivateRoute, UnAuthRoute, ErrorFallback } from "@components";
import { Home, NotFound, Login, Register, Orders } from "@pages";

export function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Routes>
        {/* Only Authenticated Users Can Access */}
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
        </Route>
        {/* Only Non-Authenticated Users Can Access */}
        <Route path="/" element={<UnAuthRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Route>
        {/* Every User Can Access */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  );
}
