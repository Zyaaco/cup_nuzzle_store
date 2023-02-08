import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

import { Cart } from ".";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const {
    showCart,
    setShowCart,
    totalQuantities,
    setCartItems,
    setTotalPrice,
    setTotalQuantities,
  } = useStateContext();

  return (
    <div className="nav-container">
      <p className="logo">
        <Link href="/">Cup & Nuzzle</Link>
      </p>

      <nav>
        <ul className="nav__links">
          <li>
            <Link href="/catalog">Catalog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <button
        type="button"
        className="clear-btn"
        onClick={() => {
          setCartItems([]), setTotalPrice(0), setTotalQuantities(0);
        }}
      >
        Clear
      </button>
      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
