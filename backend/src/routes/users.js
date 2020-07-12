import express from "express";

const users = express.Router({});


users.get("/", (req, res) => {
  res.send(["user 1"]);
});

export default users
