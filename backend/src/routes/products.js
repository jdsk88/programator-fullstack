import express from "express";
import { Product, InitProducts } from "../models/products.js";

const routes = express.Router({});

routes.get("/", (req, res) => {
  Product.find({
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
  InitProducts().then(() => {
    res.send("done");
  });
});

export default routes;
