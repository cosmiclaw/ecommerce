import "./order-item.css";

import * as React from "react";

export function OrderItem({ id, thumbnail, name, price, date }) {
  return (
    <div className="order-item">
      <div>
        <img src={thumbnail} alt={name} />
      </div>
      <div className="order-details">
        <div>
          <h4 className="order-id">
            Order ID: <span>{id}</span>
          </h4>
          <h4 className="order-name">
            Product Name: <span>{name}</span>
          </h4>
          <h5 className="order-desc">
            Price: <span>${price}</span>
          </h5>
        </div>
        <div>
          <h4 className="order-id">
            Order Date: <span>{new Date(date).toDateString()}</span>
          </h4>
        </div>
      </div>
    </div>
  );
}
