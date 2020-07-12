// import dotenv from 'dotenv';
// dotenv.config({path: __dirname + '../.env'}); /// load from './.env' file

import  express from "express";
import './config/mongo.js'
import routes from "./routes/index.js";
import bodyParser from 'body-parser'

const app = express();

app.use(bodyParser())

app.get('/',(req,res)=>{
  res.send('Hello world!')
})

app.use('/api/',routes)


const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.listen(PORT, HOST, () => {
  console.log(`Listening on http://${HOST}:${PORT}/`);
});


export default routes