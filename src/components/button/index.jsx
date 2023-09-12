import "./button.css";

import * as React from "react";

import { ColorRing } from "react-loader-spinner";

export function Button({
  children,
  large,
  gradient,
  loading = false,
  type = "normal",
  loadingText,
  ...rest
}) {
  return (
    <button
      className={`btn ${gradient && "btn-gradient"} ${large && "btn-large"}`}
      {...rest}
    >
      {loading && (
        <ColorRing
          visible={true}
          height="25"
          width="25"
          ariaLabel="blocks-loading"
          wrapperClass="btn-loading"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      )}
      {type === "cart" && <i className="fa-solid fa-cart-shopping"></i>}
      {loading && loadingText ? loadingText : children}
    </button>
  );
}
