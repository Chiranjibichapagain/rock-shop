import React from "react";
import { NavLink } from "react-router-dom";

import "./navigation.scss"

const Navigation = (props) => {
  return (
    <header >
      <nav>
        <ul>
          <li>
            <NavLink id="link" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink id="link" to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink id="link" to="/cart">Cart ({props.cartItemCount})</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
