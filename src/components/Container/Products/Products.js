import { useState } from "react";
import productsData from "../../../data/products";
import { Product } from "./Product/Product";

export const Products = () => {
  const [products] = useState(productsData);

  return (
    <section>
      {products.map((product, index) => (
        <Product {...product} key={index} />
      ))}
    </section>
  );
};
