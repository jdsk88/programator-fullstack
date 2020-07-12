import express from "express";
import users from "./users.js"

const routes = express.Router({});

routes.get("/", (req, res) => {
  res.send("Hello API!");
});

routes.get("/products", (req, res) => {
  res.send(["produkt 1"]);
});

routes.use("/users",users);

export default routes;
