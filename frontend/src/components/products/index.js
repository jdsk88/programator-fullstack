import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
// import api_url from "../../config";
import axios from "axios";
import Header from "../header";
// import { NavLink } from 'react-router-dom';

console.log("Products componentd loaded");

const Products = () => {
  const [productsArray, setProductsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [count, setCount] = useState(0);
  const [uncount, setUnCount] = useState(count);

  useEffect(() => {
    axios
      .get("http://192.168.0.146:8880/api/products/")
      .then((res) => {
        const products = res.data;
        console.log(products);
        setProductsList(products);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [count,uncount]);

  // console.log("fetch products", fetchProducts(), )

  return (
    <>
      {isLoading && <p>Products loading, please wait.</p>}

      {productsArray.map((product) => (
        <div key={product._id} className="card">
          <div className="card-body">{product.description}
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">Size: {product.size}</p>
           
            <p className="card-text">
          <img src="https://skateaffair.pl/wp-content/uploads/2012/02/egzule.png" className="card-img-top" alt="" />
              <small className="text-muted">Quanity: {product.quanity}</small>
            </p>
            <div>
              <button
                className="btn-primary"
                onClick={() => setCount(count + 1)}
              >
                Like {count} razy
              </button>
              <button
                className="btn-danger"
                onClick={() => setUnCount(uncount - 1)}
              >
                Hate {uncount} razy
              </button>
              <button className="btn-primary">Add to Cart</button>
              <div className="btn-success">Price: {product.price}</div>
              
            </div>
          </div>
        </div>
      ))}
    </>
  );

  return <></>;
};
export default Products;
