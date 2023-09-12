import "./input.css";

import * as React from "react";

export function Input({ LeftIcon, ...rest }) {
  return (
    <div className="input">
      {LeftIcon && LeftIcon}
      <input {...rest} />
    </div>
  );
}
