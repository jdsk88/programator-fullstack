import express from "express";
import cart from "./cart.js"

const routes = express.Router({});

routes.get("/", (req, res) => {
    res.send("Hello API!");
});

routes.use("/cart", cart);

export default routes;

 