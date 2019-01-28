import React from 'react';
import { Switch, Route } from "react-router-dom";

// import components
import ProductList from "./ProductList";
import Details from "./Details";
import Cart from "./Cart";
import Default from "./Default";

const routes = () => {
    return ( 
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
     );
}


export default routes;
