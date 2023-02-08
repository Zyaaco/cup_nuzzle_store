import React from "react";

import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner1 } from "../components";

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner1 heroBanner={bannerData.length && bannerData[0]} />

      <div className="products-heading">
        <h2>Best Selling products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className="products-container">
        {products?.map(
          (product, index) =>
            index >= 5 || <Product key={product.id} product={product} />
        )}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
