import React, { useState } from "react";
import axios from "axios";
import api_url from "../../config";
const Cms = () => {
  const [product_name, setProductName] = useState("");
  const [product_category, setProductCategory] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_price, setProductPrice] = useState("");
  const [product_size, setProductSize] = useState("");
  const [product_images, setProductImages] = useState("");
  const [product_producer_link, setProductProducer] = useState("");
  const [product_quanity, setProductQuanity] = useState("");
  const [product_on_stock, setProductOnStock] = useState("");
  console.log(product_category)
  const postProduct = (event) => {
    event.preventDefault();
    axios.post("http://85.222.120.170:15118/api/products", {
      name: product_name,
      category: product_category,
      description: product_description,
      // properties:{
      price: product_price,
      size: product_size,
      images: product_images,
      producer_link: product_producer_link,
      quanity: product_quanity,
      on_stock: product_on_stock,
      // }
    });
    console.log(product_name);
    console.log(product_category);
    console.log(product_description);
    console.log(product_price);
    console.log(product_size);
    console.log(product_images);
    console.log(product_producer_link);
    console.log(product_quanity);
    console.log(product_on_stock);
    console.log("cms working");
  };

  return (
    <div className="page-layout">
      <h3 className="product">Add product</h3>
      <form>
        <label>Name</label>
        <input
          type="text"
          placeholder="enter product name"
          value={product_name}
          onChange={(e) => setProductName(e.target.value)}
        />
        <label>Category</label>
        <select
          type="text"
          value={product_category}
          onChange={(e) => setProductCategory(e.target.value)}
        >
          <option value="">--- Choose Product Category ---</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothes">Clothes</option>
          <option value="Home">Home</option>
          <option value="Garden">Garden</option>
          <option value="Store">Store</option>
          <option value="Child">Child</option>
          <option value="Beauty">Beauty</option>
          <option value="Healthy">Healthy</option>
          <option value="Books">Books</option>
          <option value="Sport">Sport</option>
          <option value="Automotive">Automotive</option>
          <option value="Adds">Adds</option>
        </select>

        <label>Descriptions</label>
        <input
          type="text"
          placeholder="enter product description"
          value={product_description}
          onChange={(e) => setProductDescription(e.target.value)}
        />
        <label>Price</label>
        <input
          type="number"
          placeholder="enter product price"
          value={product_price}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <label>Size</label>
        <input
          type="number"
          placeholder="enter product size"
          value={product_size}
          onChange={(e) => setProductSize(e.target.value)}
        />
        <label>Paste image URL</label>
        <input
          type="text"
          placeholder="enter product images"
          value={product_images}
          onChange={(e) => setProductImages(e.target.value)}
        />
        <label>Link to producer</label>
        <input
          type="text"
          placeholder="enter producer link"
          value={product_producer_link}
          onChange={(e) => setProductProducer(e.target.value)}
        />
        <label>Stock quanity</label>
        <input
          type="number"
          placeholder="enter product quanity"
          value={product_quanity}
          onChange={(e) => setProductQuanity(e.target.value)}
        />
        <label>Avalible status</label>
        <input
          type="boolean"
          placeholder="enter product status"
          value={product_on_stock}
          onChange={(e) => setProductOnStock(e.target.value)}
        />
        <label>Enter something!</label>
        <input type="submit" value="submit" onClick={postProduct} />
      </form>

      {/* <h3 className="product">Update product</h3>
      <form>
        <label>Name</label>
        <input
          type="text"
          placeholder="enter product name"
          value={product_name}
          onChange={(e) => setProductName(e.target.value)}
        />
        <label>Descriptions</label>
        <input
          type="text"
          placeholder="enter product description"
          value={product_description}
          onChange={(e) => setProductDescription(e.target.value)}
        />
        <label>Price</label>
        <input
          type="number"
          placeholder="enter product price"
          value={product_price}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <label>Size</label>
        <input
          type="number"
          placeholder="enter product size"
          value={product_size}
          onChange={(e) => setProductSize(e.target.value)}
        />
        <label>Enter something!</label>
        <input
          type="text"
          placeholder="enter product images"
          value={product_images}
          onChange={(e) => setProductImages(e.target.value)}
        />
        <label>Enter something!</label>
        <input
          type="text"
          placeholder="enter producer link"
          value={product_producer_link}
          onChange={(e) => setProductProducer(e.target.value)}
        />
        <label>Enter something!</label>
        <input
          type="number"
          placeholder="enter product quanity"
          value={product_quanity}
          onChange={(e) => setProductQuanity(e.target.value)}
        />
        <label>Enter something!</label>
        <input
          type="boolean"
          placeholder="enter product status"
          value={product_on_stock}
          onChange={(e) => setProductOnStock(e.target.value)}
        />
        <label>Enter something!</label>
        <input type="submit" value="submit" onClick={postProduct} />
      </form> */}


<div className="product-cart">
            <img src={product_images} alt="no_image" />
            <div className="description">
            <h5>Category: {product_category}</h5>
              <p>{product_description}</p>
              <h5>{product_name}</h5>
              <p>Size: {product_size}</p>
              <small>Quanity: {product_quanity}</small>
              <small>On stock: {product_on_stock}</small>
              <div>Price: {product_price}</div>
            </div>
            <div className="product cart-btns">
             <button></button>
             <button></button>
              <button
                //  onClick={addToCart}
                className="btn-primary"
              >
                <p>Add to Cart</p> <i className="fas fa-shopping-bag"></i>
              </button>
            </div>
          </div>

      {/* <p>{product_category}</p>
      <p>{product_description}</p>
      <p>{product_images}</p>
      <p>{product_name}</p>
      <p>{product_on_stock}</p>
      <p>{product_price}</p>
      <p>{product_producer_link}</p>
      <p>{product_quanity}</p>
      <p>{product_size}</p> */}

    </div>
  );
};

export default Cms;