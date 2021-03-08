import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {MdDelete} from 'react-icons/md'

import { removeProduct } from "../store/actions";
import './cart.scss'

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <main className="cart">
        {cartItems.length <= 0 && <p className='message'>Sorry! No Item in the Cart!</p>}
        <div className='cartBox'>
          {cartItems.map((cartItem) => (
            <div className='cartItem' key={cartItem.id}>
              <h3 className='itemTitle'>{cartItem.title}</h3>
              <p className='itemPrice'>{`${cartItem.price}€`}</p>
              <MdDelete className='deleteBtn' color='red' size='30' onClick={() => dispatch(removeProduct(cartItem.id))} />
            </div>
          ))}
        </div>
        <button className="checkoutBtn" >Checkout</button>
      </main>
    </>
  );
};

export default Cart;
