import mongoose from "mongoose";
import axios from "axios";

export const cartSchema = mongoose.Schema({
  user_id: String,
  user_name: String,
});

export const Cart = mongoose.model("Cart", cartSchema);

export const InitCart = () => {
  // const getProducts = async () => {
  //   try {
  //     return await axios
  //       .get("http://localhost:8880/api/products?name=Egzul")
  //       .then((resp) => {
  //         console.log(resp.data);
  //         const pData = JSON.stringify(resp.data);
  //         console.log(pData);
  //         // insertToDB(JSON.parse(pData));
  //       });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // console.log(getProducts());
};

// const ppData = getProducts();
// const { resp } = ppData;
// console.log(JSON.stringify(resp.data));

// console.log(pData)

export const insertToDB = async (params) => {
  const {
    name,
    description,
    price,
    size,
    images,
    producer_link,
    quanity,
    on_stock,
  } = params;
  console.log("products data:", params);
  const cart = new Cart({
    name,
    description,
    price,
    size,
    images,
    producer_link,
    quanity,
    on_stock,
  });
  const newCart = await cart.save();
  console.log("product added to shopping cart", newCart);
};

// const cart = new Cart({
//       user_id: "007",
//       user_name: "guest"
//   });

//   return Promise.all([
//     cart.save().then(() => console.log("cart initialization done")),
//     console.log(cart)
//   ]);
