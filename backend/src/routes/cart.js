import express from "express";
import { Cart, InitCart } from "../models/cart.js";

const routes = express.Router({});

routes.get("/", (req, res) => {
  Cart.find({
    name: { 
      $regex: req.query.name || ""
    },
  })
  .limit(10)
  .then((products) => {
    res.send(products);
  });
});

routes.get("/init", (req, res) => {
    InitCart().then(() => {
    res.send("cart initialization done");
  });
});

export default routes;
