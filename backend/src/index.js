// const express = require('express')
import  express from "express";
import routes from "./routes/index.js";

const app = express();
// const wifiCard = os.networkInterfaces();  //check yout network card name
// const { wlx243c2006ce36 } = wifiCard;  //enter your network card name 
// const IPaddress = wlx243c2006ce36[0].address;  //take out your IP from network card

app.get('/',(req,res)=>{
  res.send('Hello world!')
})

app.use('/api/',routes)


const PORT = 8080;
const HOST = "localhost";
// const HOST = IPaddress; 

app.listen(PORT, HOST, () => {
  console.log(`Listening on http://${HOST}:${PORT}/`);
});


export default routes