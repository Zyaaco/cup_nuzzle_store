import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <section className="hero row container">
      <div>
        <h1>{heroBanner.largeText1}</h1>
        <p>{heroBanner.largeText2}</p>
        <div className="catalog-link">
          <Link href="/catalog">{heroBanner.buttonText}</Link>
        </div>
      </div>
      <div className="row">
        <Link href={`/product/${heroBanner.product}`}>
          <img src={urlFor(heroBanner.image)} alt="headphones" />
        </Link>
      </div>
    </section>
  );
};

export default HeroBanner;
