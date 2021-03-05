import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, searchProduct } from "../store/actions";

import Product from '../components/Product'
import './products.scss'
  
const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const keyword = useSelector((state) => state.keyword);

  const handleChange = (e) => {
    let keyword = e.target.value;
    dispatch(searchProduct(keyword));
  };

  return (
    <>
      <main className="products">
        <input className="input" type="text" placeholder="Search your favorite stone" onChange={handleChange} />
        <div className="cards">
          {products
            .filter((item) =>
              item.title.toLowerCase().includes(keyword.toLowerCase())
            )
            .map((product) => (
              <Product key={ product.id} product={product} />
            ))}
        </div>
      </main>
    </>
  );
};

export default Products;
