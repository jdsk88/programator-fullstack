import express from "express";
import orders from './orders.js'

const routes = express.Router({});

routes.get("/", (req, res) => {
  res.send("Hello API!");
});

routes.use('/orders', orders)



// routes.use('/products')
// routes.get("/products", (req, res) => {
//   res.send(["produkt 1"]);
// });

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
