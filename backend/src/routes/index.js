import express from "express";
import products from './products.js'
import wishlist from "./wishlist.js";


const routes = express.Router({});

routes.get("/", (req, res) => {
  res.send("Hello API!");
});

routes.use('/products',products)
routes.use("/wishlist", wishlist);

// Aneta
// routes.use('/users')

// Jakub
// routes.use('/comments')

// Damian
// routes.use('/categories')

// Kasia
// routes.use('/orders')

// Maciej
// routes.use('/cart')

// Liumila
// routes.use('/wishlist')


export default routes;
