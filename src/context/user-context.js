import * as React from "react";

const UserContext = React.createContext({ displayName: "", photoURL: "" });

export const UserProvider = ({ children, data }) => {
  const [value, setValue] = React.useState(null);

  const memoizedValues = React.useMemo(
    () => ({ user: value, setUser: setValue }),
    [value]
  );

  return (
    <UserContext.Provider value={memoizedValues}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within UserProvider!");
  }

  return context;
};
