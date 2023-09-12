import * as React from "react";

export function useLocalStorage(key) {
  const getItem = React.useCallback(() => {
    const item = JSON.parse(localStorage.getItem(key));

    return item;
  }, [key]);

  const setItem = React.useCallback(
    (value) => {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [key]
  );

  const removeItem = React.useCallback(() => {
    localStorage.removeItem(key);
  }, [key]);

  const clear = React.useCallback(() => {
    localStorage.clear();
  }, []);

  return {
    getItem,
    setItem,
    removeItem,
    clear,
  };
}
