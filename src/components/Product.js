import React, {useState, useEffect} from 'react'

import { useSelector, useDispatch } from "react-redux";
import {HiShoppingCart} from 'react-icons/hi'

import { addProduct} from "../store/actions";
import './product.scss'

const Product = ({ product }) => {
  const dispatch = useDispatch()
  const [btnIsDisabled, setBtnIsDisabled] = useState(false)

    const productsInCart = useSelector((state) => state.cart);
    
    useEffect(() => {
      const foundProduct = productsInCart.find(p => p.title === product.title)
      foundProduct? setBtnIsDisabled(true):setBtnIsDisabled(false)
    }, [productsInCart])

    
    return (
        <div className="card">
          <img className="img" src={product.image} alt={product.title} />  
          <hr />
          <h1 className="ttile">{ product.title}</h1>
          <p className="desc">{product.desc}</p>
          <div className="actions">
            <h3 className="price">{ `${product.price} €`}</h3>
          <button disabled={btnIsDisabled} className={!btnIsDisabled ? 'cartBtn' : 'cartBtnDisabled'} onClick={() => dispatch(addProduct(product))}>+ <HiShoppingCart color={!btnIsDisabled?'red':'grey' }/> </button>
          </div>
        </div>
    )
}

export default Product
