import "./cart.css";

import * as React from "react";

import { Button, CartItem } from "@components";
import { useCheckout, useLocalStorage } from "@hooks";

export function Cart({ isOpen, onClose }) {
  const { getItem, setItem } = useLocalStorage("CART_ITEMS");

  const [priceTotal, setPriceTotal] = React.useState(0.0);
  const [loading, setLoading] = React.useState(false);
  const [products, setProducts] = React.useState([]);

  const { checkout } = useCheckout(setLoading);

  const handleRemoveItem = (id) => {
    const newItems = products.filter((x) => x.id !== id);

    setItem(newItems);
    setProducts(newItems);
  };

  // Calculating and Setting Total Price from all Products in the Cart.
  React.useEffect(() => {
    const items = getItem();

    if (items?.length) {
      const totalPrice = items.reduce((prev, cur) => {
        return prev + cur.priceInUSD;
      }, 0);

      setPriceTotal(totalPrice);
    }
  }, [getItem, products]);

  // Fetching Products from localStorage and updating the state.
  React.useEffect(() => {
    const items = getItem();
    if (items) {
      setProducts(items);
    }
  }, [isOpen, getItem]);

  return (
    <div style={{ display: isOpen ? "flex" : "none" }} className="cart">
      <div onClick={onClose} className="cart-overlay" />
      <div className="cart-details">
        <div className="cart-back" onClick={onClose}>
          <i className="fa-solid fa-angle-left"></i>
          <p>Back</p>
        </div>
        <h1 className="cart-title">Your cart</h1>

        <div className="cart-items">
          {!products.length && <p className="empty-msg">Your cart is empty</p>}
          {products.map((prod) => (
            <CartItem
              onRemove={(id) => handleRemoveItem(prod.id)}
              key={prod.id}
              {...prod}
            />
          ))}
        </div>

        <div className="cart-total">
          <div>
            <h2>Order total</h2>
            <h1>${priceTotal}</h1>
          </div>
          <Button
            loading={loading}
            loadingText="Checking Out..."
            disabled={loading}
            onClick={checkout}
            large
            gradient
          >
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}
