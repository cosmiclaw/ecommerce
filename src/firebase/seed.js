import { products } from "../data/index";

import { addDoc, collection } from "firebase/firestore";
import { firestore } from "./config";

const saveData = async () => {
  const promises = [];

  products.forEach((prod) => {
    promises.push(addDoc(collection(firestore, "products"), prod));
  });

  return Promise.all(promises);
};

saveData();
