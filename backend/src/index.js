// const express = require('express')
import  express from "express";
import routes from "./routes/index.js";

const app = express();

app.get('/',(req,res)=>{
  res.send('Hello world!')
})

app.use('/api/',routes)


const PORT = 8080;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`Listening on http://${HOST}:${PORT}/`);
});
