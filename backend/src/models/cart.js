import mongoose from "mongoose";
import nodejsWeatherApp from "nodejs-weather-app";

export const cartSchema = mongoose.Schema({
  user_id: String,
  user_name: String,
});

export const Cart = mongoose.model("Cart", cartSchema);

export const InitCart = () => {
    
    const cart = new Cart({
   
    });

    return Promise.all([
      cart.save().then(() => console.log("saved cart data")),
      console.log(cart)
    ]);
  };

