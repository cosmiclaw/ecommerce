import "./fixed-cart-button.css";

import * as React from "react";

export function FixedCartButton({ onOpenCart }) {
  return (
    <div onClick={onOpenCart} className="fixed_cart_Icon">
      <i className="fa-solid fa-cart-shopping"></i>
    </div>
  );
}
