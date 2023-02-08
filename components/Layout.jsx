import React from "react";
import Head from "next/head";

import Navbar1 from "./Navbar1";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Cup and Nuzzle Store</title>
      </Head>
      <header>
        <Navbar1 />
      </header>
      <main className="main-contanier">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
