import express from "express";

const routes = express.Router({});

routes.get("/", (req,res) => {
    res.send(["cart data"]);
})

routes.get("/saved", (req,res) => {
    res.send(["save data"]);
})

routes.get("/saved", (req,res) => {
    res.send(["saved data"]);
})



export default routes 