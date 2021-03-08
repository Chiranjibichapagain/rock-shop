import React from "react";
import { NavLink } from "react-router-dom";

import {HiShoppingCart} from 'react-icons/hi'
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
            <NavLink id="link" to="/cart"> <HiShoppingCart size="40" color="white" /> <p className='count'>{props.cartItemCount}</p></NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
