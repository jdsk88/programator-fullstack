import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Categories = () => {
  return (
    <>
      <div className="categories">
        <NavLink to="/wishlist" className="navbar-item">
          <i className="fas fa-laptop"></i>
          <label className="navbar-item-label">Electronics</label>
        </NavLink>
        <NavLink to="/products" className="navbar-item">
          <i className="fas fa-tshirt"></i>
          <label className="navbar-item-label">Clothes</label>
        </NavLink>
        <NavLink to="/cart" className="navbar-item">
          <i className="fas fa-house-user"></i>
          <label className="navbar-item-label">Home</label>
        </NavLink>
        <NavLink to="/cms" className="navbar-item">
          <i className="fas fa-tree"></i>
          <label className="navbar-item-label">Garden</label>
        </NavLink>
        <NavLink to="/users" className="navbar-item">
          <i className="fas fa-store"></i>
          <label className="navbar-item-label">Store</label>
        </NavLink>
        <NavLink to="/wishlist" className="navbar-item">
          <i className="fas fa-child"></i>
          <label className="navbar-item-label">Child</label>
        </NavLink>
        <NavLink to="/products" className="navbar-item">
          <i className="fas fa-grin-stars"></i>
          <label className="navbar-item-label">Beauty</label>
        </NavLink>
        <NavLink to="/cart" className="navbar-item">
          <i className="fas fa-first-aid"></i>
          <label className="navbar-item-label">Healthy</label>
        </NavLink>
        <NavLink to="/cms" className="navbar-item">
          <i className="fas fa-book-open"></i>
          <label className="navbar-item-label">Books</label>
        </NavLink>
        <NavLink to="/users" className="navbar-item">
          <i className="fas fa-volleyball-ball"></i>
          <label className="navbar-item-label">Sport</label>
        </NavLink>
        <NavLink to="/wishlist" className="navbar-item">
          <i className="fas fa-truck-monster"></i>
          <label className="navbar-item-label">Automotive</label>
          <div className="navbar-item-color"></div>
        </NavLink>
        <NavLink to="/products" className="navbar-item">
          <i className="fas fa-ad"></i>
          <label className="navbar-item-label">Adds</label>
        </NavLink>
            </div>
    </>
  );
};
export default Categories;
