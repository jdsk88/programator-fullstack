import express from "express";

const routes = express.Router({});

routes.get("/", (req,res) => {
    res.send(["cart data"]);
})



export default routes 