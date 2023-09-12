import "./select.css";

import * as React from "react";

export function Select({ children, ...rest }) {
  return (
    <div className="select">
      <select {...rest}>{children}</select>
    </div>
  );
}
