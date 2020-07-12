import express from "express";

const routes = express.Router({});


routes.get("/", (req, res) => {
  res.send(["produkt 1"]);
});

export default routes