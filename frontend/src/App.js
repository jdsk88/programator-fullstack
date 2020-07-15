import React from "react";
import "../src/css/App.css";
import "../src/css/product_cart.css";
import "../src/css/footer.css";
import "../src/css/header.css";
import "../src/css/search_bar.css";
import "../src/css/categories.css";
import "@fortawesome/fontawesome-free/css/all.css"
import Header from "./components/header/index";
import Search from "./components/search/index";
import Categories from "./components/categories/index";
import Products from "./components/products/index";
import Cart from "./components/cart/index";
import WishList from './components/wishlist/index';
import Cms from "./components/cms/index";
import Footer from "./components/footer/index";
// import Users from './users/index';
// import Blog from './blog/index';
// import Vlog from './vlog/index';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Search />
        <Categories />
        <Switch className="page-layout">
          {/* <Route exactly path="/users" component={Users} /> */}
          <Route exactly path="/products" component={Products} />
          <Route exactly path="/cart" component={Cart} />
          <Route exactly path="/wishlist" component={WishList} />
          {/* <Route exactly path="/blog" component={Blog} /> */}
          {/* <Route exactly path="/vlog" component={Vlog} /> */}
          <Route exactly path="/cms" component={Cms} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
