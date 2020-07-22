import React, { useState } from "react";
import axios from "axios";
import api_url from "../../config";
const Cms = () => {
  const [product_name, setProductName] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_price, setProductPrice] = useState("");
  const [product_size, setProductSize] = useState("");
  const [product_images, setProductImages] = useState("");
  const [product_producer_link, setProductProducer] = useState("");
  const [product_quanity, setProductQuanity] = useState("");
  const [product_on_stock, setProductOnStock] = useState("");

    const postProduct = (event) => {
    event.preventDefault();
    axios.post("http://85.222.120.170:15118/api/products", {
      name: product_name,
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
    console.log(product_description);
    console.log(product_price);
    console.log(product_size);
    console.log(product_images);
    console.log(product_producer_link);
    console.log(product_quanity);
    console.log(product_on_stock);
    console.log("cms working")
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
    </div>
  );
};

export default Cms;
