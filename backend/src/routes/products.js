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
    res.header("Access-Control-Allow-Origin", "*")
    res.send(products);
  });
});

routes.get("/init", (req, res) => {
  InitProducts().then(() => {
    res.send("done");
  });
});

routes.get("/delete", (req, res) => {
  Product.deleteMany().then(() => {
    res.send("product list deleted");
  })
} )

routes.get(`/update`, (req, res, next) => {
const item = {
  name: "zero skateboards",
  description: "skateboarding",
  price: 454,
  size: 55,
  images: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
  // producer_link: String,
  quanity: 11111,
  on_stock: 1,
}
const id = req.body.id;
Product.updateOne({ _id: `${id}`} , { $set: item } );
res.send("updated")
})

export default routes;
