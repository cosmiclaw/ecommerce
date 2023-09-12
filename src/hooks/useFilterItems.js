import * as React from "react";

export const useFilterItems = (arr, selectedProp, query) => {
  const [filtered, setFiltered] = React.useState(null);

  React.useEffect(() => {
    const results = arr.filter((item) => {
      let value = item[selectedProp];

      if (typeof value === "string") value = value.toLocaleLowerCase();

      return value.includes(query.toLowerCase());
    });

    setFiltered(results);
  }, [arr, selectedProp, query]);

  return {
    filtered,
  };
};
