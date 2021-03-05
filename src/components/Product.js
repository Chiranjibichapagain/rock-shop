import React from 'react'
import { useDispatch } from "react-redux";
import {HiShoppingCart} from 'react-icons/hi'

import { addProduct} from "../store/actions";
import './product.scss'

const Product = ({ product }) => {
    const dispatch = useDispatch()
    
    return (
        <div className="card">
          <img className="img" src={product.image} alt={product.title} />  
          <hr />
          <h1 className="ttile">{ product.title}</h1>
          <p className="desc">{product.desc}</p>
          <div className="actions">
            <h3 className="price">{ `${product.price} €`}</h3>
            <button className="cartBtn" onClick={() => dispatch(addProduct(product))}>+ <HiShoppingCart color="red"/> </button>
          </div>
        </div>
    )
}

export default Product
