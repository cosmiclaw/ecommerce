import * as React from "react";

import { getDocs } from "@firebase/firestore";
import { useErrorBoundary } from "react-error-boundary";

export const useFirebaseQuery = (setData, onFinish = () => {}) => {
  const { showBoundary } = useErrorBoundary();

  const trigger = React.useCallback(
    (query) => {
      getDocs(query)
        .then((snaps) => {
          const items = [];

          snaps.forEach((snap) => {
            items.push({ id: snap.id, ...snap.data() });
          });

          setData(items);
        })
        .catch((error) => {
          showBoundary(error);
        })
        .finally(() => onFinish());
    },
    [onFinish, setData, showBoundary]
  );

  return { trigger };
};
