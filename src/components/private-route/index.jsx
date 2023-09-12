import * as React from "react";

import { Navigate, Outlet } from "react-router-dom";
import { onAuthStateChanged } from "@firebase/auth";

import { auth } from "@fbase";
import { useUser } from "@context";
import { Spinner } from "@components";

export function PrivateRoute() {
  const [loading, setLoading] = React.useState(true);
  const { user, setUser } = useUser();

  React.useEffect(() => {
    setLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }

      setLoading(false);
    });
  }, [setUser]);

  if (loading) return <Spinner />;

  return user ? <Outlet /> : <Navigate to="/login" />;
}
