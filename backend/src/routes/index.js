import express from "express";
import cart from "./cart.js"
import products from './products.js'
import wishlist from "./wishlist.js";


const routes = express.Router({});

routes.get("/", (req, res) => {

res.send("Hello API!");
});

routes.use("/cart", cart);
routes.use('/products',products)
routes.use("/wishlist", wishlist);

export default routes;

