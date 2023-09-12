// import "@fbase/seed";
import "@stripe/stripe-js";

import * as React from "react";

import { collection, query } from "firebase/firestore";

import { firestore } from "@fbase";
import { FixedCartButton, Header, Spinner } from "@components";
import { Cart, CardList, AuthView } from "@containers";
import { useFilterItems, useFirebaseQuery } from "@hooks";

export function Home() {
  const [loading, setLoading] = React.useState(true);
  const [isCartOpen, setICartOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedType, setSelectedType] = React.useState("html");
  const [initialProducts, setInitialProducts] = React.useState([]);
  const [products, setProducts] = React.useState(initialProducts);

  const { trigger } = useFirebaseQuery(setInitialProducts, () =>
    setLoading(false)
  );

  const { filtered: searchFiltered } = useFilterItems(
    initialProducts,
    "title",
    searchQuery
  );
  const { filtered: typeFiltered } = useFilterItems(
    initialProducts,
    "supportedFrameworks",
    selectedType
  );

  // Filtering Products based on search Query
  const handleSearchSubmit = (e) => {
    e.preventDefault();

    setSearchQuery(searchQuery);
    setProducts(searchFiltered);
  };

  // Fetching all Products From Firestore
  React.useEffect(() => {
    const q = query(collection(firestore, "products"));

    trigger(q);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Filtering Products based to "supportedFrameworks" type
  React.useEffect(() => {
    if (typeFiltered?.length) {
      setProducts(typeFiltered);
    }
  }, [typeFiltered]);

  if (loading) return <Spinner />;

  return (
    <div className="container">
      <AuthView setLoading={setLoading} />
      <Header
        query={searchQuery}
        setQuery={setSearchQuery}
        type={selectedType}
        setType={setSelectedType}
        handleSearchSubmit={handleSearchSubmit}
      />
      <CardList products={products} openModel={setICartOpen} />
      <FixedCartButton onOpenCart={() => setICartOpen(true)} />
      <Cart isOpen={isCartOpen} onClose={() => setICartOpen(false)} />
    </div>
  );
}
