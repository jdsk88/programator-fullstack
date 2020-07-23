import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
// import api_url from "../../config";
import axios from "axios";
import Header from "../header";
// import { NavLink } from 'react-router-dom';

console.log("Products componentd loaded");

const Products = () => {
  const [productsArray, setProductsList] = useState([]);
  
  // const [cartArray, setCartList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [isEmpty, setIsEmpty] = useState(true);

  const [count, setCount] = useState(0);
  const [uncount, setUnCount] = useState(count);
  // const [addToCart, setAddToCart] = useState([]);

  useEffect(() => {
    axios
      .get("http://85.222.120.170:15118/api/products/")
      .then((res) => {
        const products = res.data;
        console.log(products);
        setProductsList(products);
        setIsLoading(false);
        // if (productsArray.length < 1) {
        //   setIsEmpty(false);
        // }
      })
      .catch((error) => console.log(error));
  },[]);

  // const addToCart = () => {
  //   axios.post();
  // };

  // console.log(products)

  // }, [count, uncount]);

  // console.log("fetch products", fetchProducts(), )

  // setCartList(() => {
  //   axios
  //   .post("http://85.222.120.170:15118/api/cart/")
  //   .then((res) => {
  //     const products = res.data;
  //     console.log(products);
  //     setProductsList(products);
  //     // setIsLoading(false);
  //   })
  //   .catch((error) => console.log(error));
  // }, []);

  return (
    <>
      {isLoading && <p>Products loading, please wait.</p>}
      {/* {isEmpty && <><p>No products in data base.</p><h2>Please add a products!</h2></>} */}

      <div className="subpage-lauout">
        {productsArray.map((product) => (
          <div class="product-cart" key={product._id}>
            <img src={product.images} alt="no_image" />
            <div class="description">
              <h5>Category: {product.category}</h5>
              <p>{product.description}</p>
              <h5>{product.name}</h5>
              <p>Size: {product.size}</p>
              {/* <small>Quanity: {product.quanity}</small>
              <div>Price: {product.price}</div> */}
            </div>
            <div class="product cart-btns">
              <button
                className="btn-primary"
                onClick={() => setCount(count + 1)}
              >
                {count} Like
              </button>
              <button
                className="btn-danger"
                onClick={() => setUnCount(uncount - 1)}
              >
                {uncount} Hate
              </button>
              <button
                //  onClick={addToCart}
                className="btn-primary"
              >
                <p>Add to Cart</p> <i className="fas fa-shopping-bag"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  return <></>;
};
export default Products;
