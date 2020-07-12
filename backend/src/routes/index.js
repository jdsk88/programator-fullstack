import express from "express";
<<<<<<< HEAD
import users from "./users.js"
=======
import products from './products.js'
import wishlist from "./wishlist.js";

>>>>>>> a219b0ca888d22e919e8cafc92fdc95bddf08e76

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


routes.use("/users",users);

export default routes;
