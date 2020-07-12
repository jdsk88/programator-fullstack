import express from "express";

const routes = express.Router({});

routes.get("/", (req, res) => {
  res.send("Hello API!");
});

routes.get("/products", (req, res) => {
  res.send(["produkt 1"]);
});

export default routes;
