import React, { useState, useEffect } from "react";
import Axios from "axios";
// import { NavLink } from "react-router-dom";

console.log("Search componentd loaded");

const Search = () => {
  const [search_input, setProductsList] = useState([]);
  const [search_result, setResultList] = useState([]);
  console.log(search_input);
  console.log(search_result);
  const [count, setCount] = useState(0);
  const [uncount, setUnCount] = useState(count);
  const productsLandingFix = () => {
    document.querySelector("#root > div.subpage-lauout").style = "top:95px";
  };

  const query = () => {
    Axios.get(
      `http://85.222.120.170:15118/api/products/search?name=${search_input}`
      // || `http://85.222.120.170:15118/api/products/categories?category=${search_input}`
      // || `http://85.222.120.170:15118/api/products/categories?category=${search_input}`
      // || `http://85.222.120.170:15118/api/products?description=${search_input}`
      // || `http://85.222.120.170:15118/api/products?description=${search_input}`
    ).then((res) => {
      const result = res.data;
      setResultList(result);
      productsLandingFix();
      console.log(result);
      // const saved = JSON.stringify(result)
      // console.log("json stringify",JSON.stringify(saved))
      // console.log("json parse",JSON.parse(saved))

      //file save from axios

      // const fileData = JSON.stringify(result);
      // const blob = new Blob([fileData], {type: "text/plain"});
      // const url = URL.createObjectURL(blob);
      // const link = document.createElement('a');
      // link.download = 'filename.json';
      // link.href = url;
      // link.click();
    });
    // Axios.get(
    //  `http://85.222.120.170:15118/api/products?category=${search_input}`
    // ).then((res) => {
    //   const result = res.data;
    //   setResultList(result);
    //   productsLandingFix();
    //   console.log(result);
    // });
    // Axios.get(
    //   `http://85.222.120.170:15118/api/products?description=${search_input}`
    // ).then((res) => {
    //   const result = res.data;
    //   setResultList(result);
    //   productsLandingFix();
    //   console.log(result);
    // });
  };

  return (
    <>
      <div className="search-bar">
        <div className="search-bar-items">
          <input
            className="search"
            type="text"
            placeholder="What do you search?"
            value={search_input}
            onChange={(e) => setProductsList(e.target.value)}
            onKeyDown={query}
          ></input>
          <button type="submit" className="icon-background" onClick={query}>
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>

      <div className="subpage-lauout">
        {search_result.map((product) => (
          <div className="product-cart" key={product._id}>
            <img src={product.images} alt="no_image" />
            <div className="description">
              <h5>Category: {product.category} </h5>
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
