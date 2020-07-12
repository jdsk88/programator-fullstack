import express from "express";

const routes = express.Router({});


routes.get("/", (req, res) => {
  res.send(["produkt 1","produkt 2"]);
});

export default routes