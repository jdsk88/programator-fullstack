import express from "express";

const app = express();

app.get('/',(req,res)=>{
  res.send('Hello world!')
})

const PORT = 8080;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`Listening on ${HOST}:${PORT}`);
});
