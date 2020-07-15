import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../logo/logotype";

console.log("Header componentd loaded");

const Header = () => {
  return (
    <>
    <nav>
        <Logo />
        <NavLink to="/products" className="navbar-item">
          <i className="fas fa-th"></i>
          <label className="navbar-item-label">Products</label>
        </NavLink>
        <NavLink to="/wishlist" className="navbar-item">
          <i className="fas fa-list"></i>
          <label className="navbar-item-label">WishList</label>
        </NavLink>
        <div className="navbar-item ">
          <NavLink to="/blog" className="navbar-item">
            <i className="fab fa-microblog"></i>
            <label className="navbar-item-label"></label>
          </NavLink>
          <NavLink to="/cms" className="navbar-item">
            <i className="fas fa-cog"></i>
            <label className="navbar-item-label"></label>
          </NavLink>
        </div>
        <div className="navbar-item ">
          <NavLink to="/cart" className="navbar-item">
            <i className="fas fa-shopping-cart"></i>
            <label className="navbar-item-label"></label>
          </NavLink>
          <NavLink to="/users" className="navbar-item">
            <i className="fas fa-user"></i>
            <label className="navbar-item-label"></label>
          </NavLink>
        </div>
    </nav>

    </>
  );
};
export default Header;
