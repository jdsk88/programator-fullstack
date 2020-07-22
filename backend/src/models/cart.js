import mongoose from "mongoose";

export const cartSchema = mongoose.Schema({
  user_id: String,
  user_name: String,
  product_id: String,
});

export const Cart = mongoose.model("Cart", cartSchema);



export const insertToDB = async (params) => {

  const newCart = await cart.save();
  console.log("product added to shopping cart", newCart);
};
