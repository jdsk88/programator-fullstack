import React, { useState, useEffect } from "react";
import Axios from "axios";
// import { NavLink } from "react-router-dom";

console.log("Search componentd loaded");

const Search = () => {
  const [search_productsArray, setProductsList] = useState([]);
  const [search_resultArray, setResultList] = useState([]);
  console.log(search_productsArray);
  console.log(search_resultArray);

  const [count, setCount] = useState(0);
  const [uncount, setUnCount] = useState(count);


  const query = () => {
    Axios.get(
      `http://85.222.120.170:15118/api/products/categories?description=${search_productsArray}` ||
        `http://85.222.120.170:15118/api/products/categories?name=${search_productsArray}`
    ).then((res) => {
      const products = res.data;
      // setProductsList(products)
      setResultList(products)
      console.log(products);
      // console.log(Axios)
    });
  };



// const queryResult = query;
// const { products } = queryResult;
// const SearchResult = products;
// console.log(SearchResult);

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
            onKeyDown={query}
          ></input>
          <button
            type="submit"
            className="icon-background"
            onClick={query}
          >
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
     
      <div className="subpage-lauout">

{search_resultArray.map((product) => (
  <div className="product-cart" key={product._id}>
    <img src={product.images} alt="no_image" />
    <div className="description">
      <h5>Descriptions:</h5>
      <p>{product.description}</p>
      <h5>{product.name}</h5>
      <p>Size: {product.size}</p>
      <small>Quanity: {product.quanity}</small>
      <div>Price: {product.price}</div>
    </div>
    <div className="product cart-btns">
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
};
export default Search;
