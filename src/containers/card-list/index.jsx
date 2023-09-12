import "./card-list.css";

import * as React from "react";

import { Card } from "@components";
import { useLocalStorage } from "@hooks";

export function CardList({ products, openModel }) {
  const { getItem, setItem } = useLocalStorage("CART_ITEMS");

  const handleAddToCart = (item) => {
    let items = getItem();
    if (!items) items = [];

    const isAlreadyPresent = items.find((x) => x.id === item.id);
    if (!isAlreadyPresent) {
      items.push(item);
    }

    setItem(items);
    openModel(true);
  };

  return (
    <div className="card-list">
      {products.map((prod) => (
        <Card
          onAddToCart={() => handleAddToCart(prod)}
          key={prod.id}
          {...prod}
        />
      ))}
    </div>
  );
}
