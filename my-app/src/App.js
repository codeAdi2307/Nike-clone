import React from "react";
import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";
import Home from "./Main files/Home"
import Products from "./Main files/Products.jsx"
import Product from "./Main files/Product.js"
import Navbar from "./Main files/Navbar";
import Footer from "./Main files/Footer"
import List from "./Main files/List"
import Filters from "./Main files/Filters";

const lists= List.map((items) => {
  return <Products
  img={items.img}
  name= {items.name}
  price={items.price}/>
 
})


export default function App() {
  return (
    <Router>
        <Switch>  
          <Route exact path="/">
          <Navbar/>
            <Home />
          <Footer/>
          </Route>

          <Route path="/products">
          <Navbar/>(
            <Filters/>
          {lists }
          )
          
          <Footer/>
          </Route>
          
          <Route path="/product">
          <Navbar/>
            <Product />
          <Footer/>
          </Route>
        </Switch>
     
    </Router>
  );
}
