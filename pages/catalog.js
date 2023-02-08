import React, { useState, useEffect } from "react";

import { client } from "../lib/client";
import { Product } from "../components";

let catalog = true;

const Catalog = ({ products }) => {
  const [input, setInput] = useState("");
  const [handledProducts, setHandledProducts] = useState(products);
  useEffect(() => {
    const filteredProducts = products?.filter((product) => {
      return product.name.toLowerCase().includes(input.toLowerCase());
    });
    setHandledProducts(filteredProducts);
  }, [input]);

  return (
    <div>
      <input
        type="text"
        onInput={(e) => setInput(e.target.value)}
        className="catalog-search"
        placeholder="Search"
      ></input>
      <div className="products-container catalog">
        {handledProducts.length >= 1 ? (
          handledProducts?.map((product) => (
            <Product key={product.id} product={product} />
          ))
        ) : (
          <p className="nothing-to-see">Nothing to see here...</p>
        )}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { products },
  };
};

export default Catalog;
