import express from "express";
import { Cart, insertToDB } from "../models/cart.js";

const routes = express.Router({});

routes.get("/", (req, res) => {
  Cart.find({
    user_name: {
      $regex: req.query.user_name || "",
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

routes.get("/insert", (req, res) => {
  insertToDB().then(() => {
    res.send("cart initialization done");
  });
});

routes.get("/delete", (req, res) => {
  Cart.deleteMany().then(() => {
    res.send("cart list deleted");
  });
});







export default routes;
