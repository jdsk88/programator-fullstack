import React from "react";
import "../src/css/App.css";
import "../src/css/header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.css"
import Header from "./components/header/index";
// import Users from './users/index';
import Products from "./components/products/index";
import Cart from "./components/cart";
// import WishList from './wishlist/index';
// import Blog from './blog/index';
// import Vlog from './vlog/index';
import Cms from "./components/cms/index";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        {/* <TopNav /> */}
        <Switch className="page-layout">
          {/* <Route exactly path="/users" component={Users} /> */}
          <Route exactly path="/products" component={Products} />
          <Route exactly path="/cart" component={Cart} />
          {/* <Route exactly path="/wishlist" component={WishList} /> */}
          {/* <Route exactly path="/blog" component={Blog} /> */}
          {/* <Route exactly path="/vlog" component={Vlog} /> */}
          <Route exactly path="/cms" component={Cms} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
  );
};

export default App;
