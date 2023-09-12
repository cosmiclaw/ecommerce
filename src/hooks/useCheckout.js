import { addDoc, collection } from "firebase/firestore";

import { firestore } from "@fbase";
import { useLocalStorage } from "@hooks";
import { useUser } from "@context";
import { getStripe } from "@utils";

export function useCheckout(setLoading) {
  const { user } = useUser();
  const { getItem, clear } = useLocalStorage("CART_ITEMS");

  const checkout = async () => {
    const items = getItem();
    if (!items || !items.length) return;

    const lineItems = items.map((item) => ({
      price: item.stripe.priceId,
      quantity: 1,
    }));

    const checkoutOptions = {
      lineItems: lineItems,
      mode: "payment",
      successUrl: `${window.location.origin}/orders`,
      cancelUrl: `${window.location.origin}/`,
    };

    setLoading(true);
    try {
      const toBeSavedInDb = [];

      items.forEach((item) => {
        toBeSavedInDb.push(
          addDoc(collection(firestore, "orders"), {
            id: item.id,
            name: item.title,
            price: item.priceInUSD,
            thumbnail: item.thumbnailUrl,
            user: user.uid,
            stripe_product: item.stripe.productId,
            date: Date.now(),
          })
        );
      });

      await Promise.all(toBeSavedInDb);
      clear();

      const stripe = await getStripe();

      await stripe.redirectToCheckout(checkoutOptions);
    } catch (error) {
      alert("Failed To Checkout with Stripe: " + error.message);
    }

    setLoading(false);
  };

  return { checkout };
}
