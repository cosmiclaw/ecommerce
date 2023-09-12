import * as React from "react";

import { Navigate, Outlet } from "react-router-dom";
import { onAuthStateChanged } from "@firebase/auth";

import { auth } from "@fbase";
import { useUser } from "@context";
import { Spinner } from "@components";

export function UnAuthRoute() {
  const { user, setUser } = useUser();

  const [loading, setLoading] = React.useState(true);

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

  return user ? <Navigate to="/" /> : <Outlet />;
}
