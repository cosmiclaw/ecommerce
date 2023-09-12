import "./orders.css";

import * as React from "react";

import { where, collection, query, orderBy } from "@firebase/firestore";

import { FixedCartButton, OrderItem, Spinner } from "@components";
import { AuthView, Cart } from "@containers";
import { firestore } from "@fbase";
import { useUser } from "@context";
import { useFirebaseQuery } from "@hooks";

export function Orders() {
  const [isCartOpen, setICartOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [orders, setOrders] = React.useState([]);

  const { user } = useUser();
  const { trigger } = useFirebaseQuery(setOrders, () => setLoading(false));

  // Fetching Orders from firestore based on "userID"
  React.useEffect(() => {
    const q = query(
      collection(firestore, "orders"),
      where("user", "==", user.uid),
      orderBy("date", "desc")
    );

    trigger(q);
  }, [user, trigger]);

  if (loading) return <Spinner />;

  return (
    <div className="container">
      <AuthView setLoading={setLoading} />
      <h1 className="orders-heading">
        My Orders <span className="hash">###</span>
      </h1>

      <div className="orders-list">
        {orders.map((order) => (
          <OrderItem key={order.id + order.date} {...order} />
        ))}
      </div>
      <FixedCartButton onOpenCart={() => setICartOpen(true)} />
      <Cart isOpen={isCartOpen} onClose={() => setICartOpen(false)} />
    </div>
  );
}
