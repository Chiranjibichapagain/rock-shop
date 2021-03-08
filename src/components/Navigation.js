import React from "react";
import { NavLink } from "react-router-dom";

import {MdDelete} from 'react-icons/md'
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
            <NavLink id="link" to="/cart"> {props.cartItemCount}</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
