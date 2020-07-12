import express from "express";

const wishlist = express.Router({});

// routes.use('/products')
wishlist.get("/", (req, res) => {
  res.send(["wishlist"]);
});

export default wishlist