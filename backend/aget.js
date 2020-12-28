import axios from "axios";

const getProducts = () => {
  axios
    .get("http://localhost:8888/api/settings/5fe1be5ca18b082c28bee676")
    .then((res) => {
      const products = res.data;
      console.log(products);
       })
    .catch((error) => console.log(error));
};

getProducts();
