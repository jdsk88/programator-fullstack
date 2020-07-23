import express from "express";
import { Product, InitProducts } from "../models/products.js";

const HOST = process.env.HOST;
const PORT = process.env.PORT;

const routes = express.Router({});

routes.get("/", (req, res) => {
  Product.find({
    name: {
      $regex: req.query.name || "",
    },
    category: {
      $regex: req.query.category || "",
    },
    description: {
      $regex: req.query.description || "",
    },
  })
    // .limit(10)
    .then((products) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.send(products);
      // console.log(
      //   req.method + " on: " + req.protocol + "://" + HOST + req.originalUrl + " from: " + req.connection.remoteAddress +":"+ req.connection.remotePort )
      // console.table(products.length + " products in data base");
      console.log(req.rawHeaders);

      let status = 0;
      if (req.complete === true) {
        status = 200;
      } else {
        status = 404;
      }
      const req_info = [
        {
          status: status,
          complete: req.complete,
          secure: req.secure,
          handler: req.protocol,
          endpoint: HOST + ":" + PORT + req.originalUrl,
          method: req.method,
          from: req.connection.remoteAddress + ":" + req.connection.remotePort,
          address_family: req.connection.remoteFamily,
          products_founded: products.length,
        },
      ];
      // console.clear();
      console.table(req_info);
    });
});

routes.get("/search", (req, res) => {
  Product.find({
    name: {
      $regex: req.query.name || "",
    },
    category: {
      $regex: req.query.category || "",
    },
    description: {
      $regex: req.query.description || "",
    },
  })
    // .limit(10)
    .then((products) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.send(products);
      // console.log(
      //   req.method + " on: " + req.protocol + "://" + HOST + req.originalUrl + " from: " + req.connection.remoteAddress +":"+ req.connection.remotePort )
      // console.table(products.length + " products in data base");

      let status = 0;
      if (req.complete === true) {
        status = 200;
      } else {
        status = 404;
      }
      const req_info = [
        {
          status: status,
          complete: req.complete,
          secure: req.secure,
          handler: req.protocol,
          endpoint: HOST + ":" + PORT + req.originalUrl,
          method: req.method,
          from: req.connection.remoteAddress + ":" + req.connection.remotePort,
          address_family: req.connection.remoteFamily,
          products_founded: products.length,
        },
      ];
      console.clear();
      console.table(req_info);
    });
});

routes.get("/description", (req, res) => {
  Product.find({
    description: {
      $regex: req.query.description || "",
    },
  })
    // .limit(10)
    .then((products) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.send(products);

      let status = 0;
      if (req.complete === true) {
        status = 200;
      } else {
        status = 404;
      }
      const req_info = [
        {
          status: status,
          complete: req.complete,
          secure: req.secure,
          handler: req.protocol,
          endpoint: HOST + ":" + PORT + req.originalUrl,
          method: req.method,
          from: req.connection.remoteAddress + ":" + req.connection.remotePort,
          address_family: req.connection.remoteFamily,
          products_founded: products.length,
        },
      ];
      // console.clear();
      console.table(req_info);
    });
});

routes.get("/categories", (req, res) => {
  Product.find({
    category: {
      $regex: req.query.category || "",
    },
  })
    // .limit(10)
    .then((products) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.send(products);
      
      let status = 0;
      if (req.complete === true) {
        status = 200;
      } else {
        status = 404;
      }
      const req_info = [
        {
          status: status,
          complete: req.complete,
          secure: req.secure,
          handler: req.protocol,
          endpoint: HOST + ":" + PORT + req.originalUrl,
          method: req.method,
          from: req.connection.remoteAddress + ":" + req.connection.remotePort,
          address_family: req.connection.remoteFamily,
          products_founded: products.length,
        },
      ];
      // console.clear();
      console.table(req_info);
    });
});

routes.get("/price", (req, res) => {
  Product.find({
    price: {
      $regex: req.query.price,
    },
  })
    .limit(10)
    .then((products) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.send(products);
    });
});

routes.get("/", (req, res) => {
  Product.findOneAndDelete({
    name: {
      $regex: req.query.name || "",
    },
  });
  res.header("Access-Control-Allow-Origin", "*");
  res.send("placki");
});

routes.post("/", (req, res) => {
  Product.insertMany({
    name: req.body.name,
    category: req.body.category,
    description: req.body.description,
    // properties:{
    price: req.body.price,
    size: req.body.size,
    images: [req.body.images],
    producer_link: req.body.producer_link,
    quanity: req.body.quanity,
    on_stock: req.body.on_stock,
    // }
  });
  res.header("Access-Control-Allow-Origin", "*");
  res.send("product added to database");
  
  let status = 0;
  if (req.complete === true) {
    status = 200;
  } else {
    status = 404;
  }
  const req_info = [
    {
      status: status,
      complete: req.complete,
      secure: req.secure,
      handler: req.protocol,
      endpoint: HOST + ":" + PORT + req.originalUrl,
      method: req.method,
      from: req.connection.remoteAddress + ":" + req.connection.remotePort,
      address_family: req.connection.remoteFamily,
      products_founded: products.length,
    },
  ];
  // console.clear();
  console.table(req_info);
  // console.log(product);
});

routes.get("/init", (req, res) => {
  InitProducts().then(() => {
    
    let status = 0;
    if (req.complete === true) {
      status = 200;
    } else {
      status = 404;
    }
    const req_info = [
      {
        status: status,
        complete: req.complete,
        secure: req.secure,
        handler: req.protocol,
        endpoint: HOST + ":" + PORT + req.originalUrl,
        method: req.method,
        from: req.connection.remoteAddress + ":" + req.connection.remotePort,
        address_family: req.connection.remoteFamily,
        products_founded: products.length,
      },
    ];
    // console.clear();
    console.table(req_info);
    res.send("done");
  });
});

routes.get("/delete", (req, res) => {
  Product.deleteMany().then(() => {
   
    let status = 0;
    if (req.complete === true) {
      status = 200;
    } else {
      status = 404;
    }
    const req_info = [
      {
        status: status,
        complete: req.complete,
        secure: req.secure,
        handler: req.protocol,
        endpoint: HOST + ":" + PORT + req.originalUrl,
        method: req.method,
        from: req.connection.remoteAddress + ":" + req.connection.remotePort,
        address_family: req.connection.remoteFamily,
        products_founded: products.length,
      },
    ];
    // console.clear();
    console.table(req_info);
    res.send("product list deleted");
  });
});

routes.get(`/update`, (req, res, next) => {
  const item = {
    name: "zero skateboards",
    description: "skateboarding",
    price: 454,
    size: 55,
    images:
      "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    // producer_link: String,
    quanity: 11111,
    on_stock: 1,
  };

  const id = req.body.id;
  Product.updateOne({ _id: `${id}` }, { $set: item });
  res.send("updated");
});

export default routes;
