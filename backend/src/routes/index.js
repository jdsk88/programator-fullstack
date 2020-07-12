import express from "express";
import orders from './orders.js'
import cart from "./cart.js"
import products from './products.js'
import wishlist from "./wishlist.js";
import users from "./users.js"

const routes = express.Router({});

routes.get("/", (req, res) => {
  res.send("Hello API!");
});

routes.use('/orders', orders)
routes.use("/cart", cart);
routes.use('/products', products)
routes.use("/wishlist", wishlist);
routes.use("/users", users);

export default routes;

