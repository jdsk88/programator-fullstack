import React, { useState, useEffect } from "react";
import Axios from "axios";
// import { NavLink } from "react-router-dom";

console.log("Search componentd loaded");

const Search = () => {
  const [search_productsArray, setProductsList] = useState([]);
  console.log(search_productsArray);

  const queryResult = () => {
    Axios.get(
      `http://85.222.120.170:15118/api/products?name=${search_productsArray}`
    ).then((res) => {
      const products = res.data;
      console.log(products);
    });}
  

  return (
    <>
      <div className="search-bar">
        <div className="search-bar-items">
          <input
            className="search"
            type="text"
            placeholder="What do you search?"
            value={search_productsArray}
            onChange={(e) => setProductsList(e.target.value)}
          ></input>
          <button
            type="submit"
            className="icon-background"
            onClick={queryResult}
          >
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
      {/* <div className="subpage-lauout"> */}
      {/* {search_productsArray.map((product) => ( */}
      {/* <div className="product-cart" key={product._id}> */}
      {/* <img src={product.images} alt="no_image" /> */}
      {/* <div className="description"> */}
      {/* <h5>Descriptions:</h5> */}
      {/* <p>{product.description}</p> */}
      {/* <h5>{product.name}</h5> */}
      {/* <p>Size: {product.size}</p> */}
      {/* <small>Quanity: {product.quanity}</small>
              <div>Price: {product.price}</div> */}
      {/* </div> */}
      {/* </div> */}
      {/* ))} */}
      {/* </div> */}
      //{" "}
    </>
  );
};
export default Search;
