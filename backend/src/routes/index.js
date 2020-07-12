import express from "express";

const routes = express.Router({});

routes.get("/", (req, res) => {
  res.send("Hello API!");
});

// routes.use('/products')
routes.get("/products", (req, res) => {
  res.send(["produkt 1"]);
});

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
