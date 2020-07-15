import React, { useState } from "react";
import axios from "axios";
import api_url from "../../config";
const Cms = () => {
  const [product_name, setProductName] = useState("");
  const [product_description, setProductDescription] = useState("");
  // const []

  const postProduct = () => {
    axios.post(api_url + "/api/products", {
      name: product_name,
      description: product_description,
    });
  };

  return (
    <form>
      <input
        type="text"
        placeholder="enter product name"
        value={product_name}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="password"
        placeholder="enter product description"
        value={product_description}
        onChange={(e) => setProductDescription(e.target.value)}
      />
      <input type="button" value="Dodaj" />
    </form>
  );
};

export default Cms;
